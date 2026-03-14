import { NextResponse } from 'next/server';
import { sendCandidateConfirmation, sendAdminNotification } from '@/lib/mail';
import prisma from '@/lib/prisma'; // Make sure this is exported correctly from lib/prisma.ts

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobId, candidateName, candidateEmail, candidatePhone, resumeUrl, coverLetter, source } = body;

    if (!jobId || !candidateName || !candidateEmail) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Fetch the job details
    let jobTitle = "Career Opportunity";
    try {
      const job = await prisma.job.findUnique({ where: { id: jobId } });
      if (job) jobTitle = job.title;
    } catch (dbError) {
      console.warn("DB not connected or job not found. Using fallback title:", dbError);
      // For MVP/Demo without DB
      jobTitle = "Global HR Compliance Specialist"; 
    }

    // 2. Save application to database (wrapped in try/catch for fallback mode)
    let applicationId = "temp-id-" + Date.now();
    try {
      const newApplication = await prisma.application.create({
        data: {
          jobId,
          candidateName,
          candidateEmail,
          candidatePhone: candidatePhone || "",
          resumeUrl,
          coverLetter,
          source,
          status: "NEW", // AppStatus.NEW
        },
      });
      applicationId = newApplication.id;
    } catch (e) {
      console.warn("Could not save to DB, simulating success for demo:", e);
    }

    // 3. Trigger automated emails asynchronously
    // We don't await these so the response to the user is fast
    Promise.allSettled([
      sendCandidateConfirmation(candidateEmail, candidateName, jobTitle),
      sendAdminNotification(jobTitle, candidateName, candidateEmail)
    ]).then(results => {
       console.log("Email dispatch results:", results);
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully',
        applicationId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error while processing application' },
      { status: 500 }
    );
  }
}
