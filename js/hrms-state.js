/**
 * GlobalHRX Enterprise SaaS - State Management System
 * Simulates Backend Database, Auth, and Business Logic
 * 
 * STRICT ENTERPRISE MODE: NO FAKE DATA
 */

const HRMS_STATE = {
    // --- DATABASE SCHEMA ---
    db: {
        superAdmin: {
            id: 'SA_001',
            name: 'Harshit Bhardwaj',
            email: 'admin@globalhrx.com',
            password: 'GlobalHRX@2026', // Stored for demo only
            role: 'SUPER_ADMIN',
            avatar: 'HB'
        },
        tenants: [], // NO DEMO TENANTS
        accessRequests: [], // NO FAKE REQUESTS
        auditLogs: []
    },

    // --- AUTH SERVICE ---
    auth: {
        login: function (email, password) {
            // 1. Check Super Admin
            if (email === HRMS_STATE.db.superAdmin.email && password === HRMS_STATE.db.superAdmin.password) {
                const user = { ...HRMS_STATE.db.superAdmin };
                delete user.password;
                this.createSession(user);
                return user;
            }

            // 2. Check Client Tenants
            const tenants = HRMS_STATE.db.tenants;
            for (const tenant of tenants) {
                if (tenant.adminEmail === email && tenant.password === password && tenant.status === 'ACTIVE') {
                    const user = {
                        id: tenant.id,
                        name: tenant.adminName || tenant.name,
                        email: tenant.adminEmail,
                        role: 'CLIENT_ADMIN',
                        tenantId: tenant.id,
                        avatar: tenant.name.substring(0, 2).toUpperCase()
                    };
                    this.createSession(user);
                    return user;
                }
            }

            return null;
        },
        createSession: function (user) {
            localStorage.setItem('hrms_user', JSON.stringify(user));
            // Log Audit
            HRMS_STATE.audit.log(user.id, 'LOGIN', 'User logged into the system');
        },
        logout: function () {
            const user = this.getCurrentUser();
            if (user) HRMS_STATE.audit.log(user.id, 'LOGOUT', 'User logged out');
            localStorage.removeItem('hrms_user');
            window.location.href = 'login-hrms.html';
        },
        getCurrentUser: function () {
            return JSON.parse(localStorage.getItem('hrms_user'));
        },
        checkSession: function () {
            const user = this.getCurrentUser();
            if (!user) {
                window.location.href = 'login-hrms.html';
                return null;
            }
            return user;
        }
    },

    // --- AUDIT SYSTEM ---
    audit: {
        log: function (userId, action, details) {
            const logs = this.getLogs();
            const newLog = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                userId: userId,
                action: action,
                details: details
            };
            logs.unshift(newLog);
            // Keep last 1000 logs
            if (logs.length > 1000) logs.pop();
            localStorage.setItem('hrms_audit', JSON.stringify(logs));
        },
        getLogs: function () {
            return HRMS_STATE.db.auditLogs;
        }
    },

    // --- TENANT MANAGEMENT SERVICE ---
    tenants: {
        getAll: function () {
            return JSON.parse(localStorage.getItem('tenants')) || [];
        },
        create: function (tenantData) {
            const tenants = this.getAll();
            const newTenant = {
                id: 'org_' + Date.now(),
                joinedDate: new Date().toISOString(),
                status: 'ACTIVE',
                ...tenantData
            };
            tenants.unshift(newTenant);
            localStorage.setItem('tenants', JSON.stringify(tenants));

            // --- AUTOMAGIC: Create Auth User for this Tenant ---
            // "When YOU create a client... System auto-generates Login"
            const authUsers = JSON.parse(localStorage.getItem('hrms_users')) || [];

            // Check if user already exists
            if (!authUsers.find(u => u.email === tenantData.adminEmail)) {
                const newUser = {
                    id: newTenant.id, // Link User ID to Tenant ID for simple ownership
                    name: 'Admin', // Default name, they can change later
                    email: tenantData.adminEmail,
                    password: tenantData.password, // Plain for demo, hash in real world
                    role: 'RECRUITER', // Client Admin
                    tenantId: newTenant.id, // Explicit link
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(tenantData.name)}&background=random`
                };
                authUsers.push(newUser);
                localStorage.setItem('hrms_users', JSON.stringify(authUsers));
                HRMS_STATE.audit.log('SUPER_ADMIN', 'CREATE_USER', `Auto-generated admin for ${newTenant.name}`);
            }

            HRMS_STATE.audit.log('SUPER_ADMIN', 'CREATE_TENANT', `Onboarded ${newTenant.name}`);
            return newTenant;
        },
        getStats: function () {
            const tenants = this.getAll();
            const totalRevenue = tenants.reduce((acc, t) => acc + (t.status === 'ACTIVE' ? t.revenue : 0), 0);
            return {
                totalTenants: tenants.length,
                activeTenants: tenants.filter(t => t.status === 'ACTIVE').length,
                totalEmployees: tenants.reduce((acc, t) => acc + t.employees, 0),
                mrr: totalRevenue
            };
        }
    },

    // --- RECRUITMENT SERVICE (CAREER ADMIN - JOBI STYLE) ---
    recruitment: {
        getJobs: function (recruiterId = null) {
            // Sync with existing public localStorage key 'jobs'
            const allJobs = JSON.parse(localStorage.getItem('jobs')) || [];
            if (recruiterId) {
                return allJobs.filter(j => j.recruiterId === recruiterId);
            }
            return allJobs; // Candidates/Public see all active (filtered elsewhere)
        },
        addJob: function (jobData, recruiterId) {
            const allJobs = JSON.parse(localStorage.getItem('jobs')) || [];
            const newJob = {
                id: Date.now(),
                status: 'Open', // Default to Open (Active)
                applications: 0,
                type: 'Full Time',
                exp: '0-2 Years',
                recruiterId: recruiterId || 'admin', // Bind to recruiter
                postedDate: new Date().toISOString(),
                ...jobData
            };
            allJobs.unshift(newJob);
            localStorage.setItem('jobs', JSON.stringify(allJobs));

            // Also log to audit
            HRMS_STATE.audit.log(recruiterId || 'unknown', 'POST_JOB', `Posted job: ${newJob.title}`);
            return newJob;
        },
        submitApplication: function (jobId, candidateData) {
            const allApps = JSON.parse(localStorage.getItem('applications')) || [];
            const allJobs = JSON.parse(localStorage.getItem('jobs')) || [];
            const job = allJobs.find(j => j.id === parseInt(jobId));

            if (!job) return { success: false, message: 'Job not found' };

            // 1. Run AI Parsing
            const aiResult = HRMS_STATE.ai.parseResume(candidateData.resumeText || '', job.desc || '');

            // 2. Create Application Record
            const newApp = {
                id: Date.now(),
                jobId: parseInt(jobId),
                jobTitle: job.title,
                recruiterId: job.recruiterId,
                date: new Date().toISOString(),
                status: aiResult.score < 50 ? 'Rejected' : 'New', // Auto-Reject if low score
                aiScore: aiResult.score,
                aiSkills: aiResult.skills,
                ...candidateData
            };

            allApps.unshift(newApp);
            localStorage.setItem('applications', JSON.stringify(allApps));

            // 3. Update Job Count
            job.applications = (job.applications || 0) + 1;
            localStorage.setItem('jobs', JSON.stringify(allJobs));

            // 4. Trigger Automation
            if (newApp.status === 'Rejected') {
                HRMS_STATE.automation.trigger('AI_REJECT', { recruiterId: job.recruiterId, candidateEmail: newApp.email });
            } else {
                HRMS_STATE.automation.trigger('APPLICATION_RECEIVED', { recruiterId: job.recruiterId, candidateEmail: newApp.email });
            }

            return { success: true };
        },
        updateApplicationStatus: function (appId, status) {
            const allApps = JSON.parse(localStorage.getItem('applications')) || [];
            const app = allApps.find(a => a.id === appId);
            if (app) {
                app.status = status;
                localStorage.setItem('applications', JSON.stringify(allApps));

                // Trigger Automation
                if (status === 'Shortlisted') {
                    HRMS_STATE.automation.trigger('SHORTLISTED', {
                        recruiterId: app.recruiterId,
                        candidateEmail: app.email
                    });
                }
            }
        },
        if(job) {
            job.status = status;
            localStorage.setItem('jobs', JSON.stringify(allJobs));
            // HRMS_STATE.audit.log(..., 'UPDATE_JOB', ...);
        }
    },
    deleteJob: function (jobId) {
        let allJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        allJobs = allJobs.filter(j => j.id !== jobId);
        localStorage.setItem('jobs', JSON.stringify(allJobs));
    },
    // Applicant Tracking
    getApplications: function (recruiterId = null) {
        const allApps = JSON.parse(localStorage.getItem('applications')) || [];
        if (recruiterId) {
            // Get this recruiter's job IDs first
            const myJobs = this.getJobs(recruiterId).map(j => j.id);
            return allApps.filter(a => myJobs.includes(a.jobId));
        }
        return allApps;
    },
    getSavedCandidates: function (recruiterId = null) {
        // Can implement recruiter-specific saves if needed, sharing storage for now or filtering
        return JSON.parse(localStorage.getItem('savedCandidates')) || [];
    },
    toggleSaveCandidate: function (candidateId) {
        // ... existing logic (ideally should be scoped to recruiter too)
        // Keeping simple for now as per previous instruction, but adhering to isolation principle broadly
        let saved = this.getSavedCandidates();
        if (saved.includes(candidateId)) {
            saved = saved.filter(id => id !== candidateId);
        } else {
            saved.push(candidateId);
        }
        localStorage.setItem('savedCandidates', JSON.stringify(saved));
        return saved.includes(candidateId);
    },
    updateApplicationStatus: function (appId, newStatus) {
        const allApps = JSON.parse(localStorage.getItem('applications')) || [];
        const app = allApps.find(a => a.id === appId);
        if (app) {
            app.status = newStatus;
            localStorage.setItem('applications', JSON.stringify(allApps));
        }
    },
    getStats: function (recruiterId) {
        const jobs = this.getJobs(recruiterId);
        const apps = this.getApplications(recruiterId);
        const saved = this.getSavedCandidates(recruiterId);

        return {
            postedJobs: jobs.filter(j => j.status !== 'Closed').length,
            shortlisted: apps.filter(a => a.status === 'Shortlisted').length,
            applications: apps.length,
            savedCandidates: saved.length
        };
    }
},

    // --- ACCESS REQUEST SERVICE ---
    requests: {
        add: function (requestData) {
            const newRequest = {
                id: 'R_' + Date.now(),
                status: 'PENDING',
                date: new Date().toISOString(),
                ...requestData
            };
HRMS_STATE.db.accessRequests.unshift(newRequest);
HRMS_STATE.persist();
        },
getPending: function () {
    return HRMS_STATE.db.accessRequests.filter(r => r.status === 'PENDING');
}
    },

// --- AI & AUTOMATION LAYER (PHASE 3) ---
ai: {
    parseResume: function (resumeText, jobDescription) {
        // SIMULATED AI PARSER
        // In a real app, this would hit OpenAI/Gemini API

        // 1. Extract Skills (Simple Regex Mock)
        const commonSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'Sales', 'Marketing', 'Excel', 'Management', 'Communication', 'Java', 'SQL'];
        const foundSkills = commonSkills.filter(skill =>
            new RegExp(skill, 'i').test(resumeText)
        );

        // 2. Calculate Match Score
        // Count how many "found skills" are also in Job Description
        let matchCount = 0;
        const jobLower = jobDescription.toLowerCase();
        foundSkills.forEach(skill => {
            if (jobLower.includes(skill.toLowerCase())) matchCount++;
        });

        // Base score 60% + 10% per matched skill (max 95%)
        let score = 60 + (matchCount * 10);
        if (score > 95) score = 98; // AI isn't perfect

        return {
            skills: foundSkills,
            score: score,
            summary: `Matched ${matchCount} key skills from JD. Strong candidate.`
        };
    }
},

automation: {
    trigger: function (triggerType, data) {
        // SIMULATED AUTOMATION ENGINE
        if (triggerType === 'APPLICATION_RECEIVED') {
            HRMS_STATE.audit.log(data.recruiterId, 'AUTO_EMAIL', `Sent "Application Received" to ${data.candidateEmail}`);
        } else if (triggerType === 'SHORTLISTED') {
            HRMS_STATE.audit.log(data.recruiterId, 'AUTO_EMAIL', `Sent "Interview Invite" to ${data.candidateEmail}`);
        } else if (triggerType === 'AI_REJECT') {
            HRMS_STATE.audit.log(data.recruiterId, 'AUTO_ACTION', `Auto-rejected ${data.candidateEmail} (Score < 50%)`);
        }
    }
},

// --- PERSISTENCE ---
persist: function () {
    // In a real app, this would be an API call.
    // Here we just ensure memory state is consistent.
    // For strict enterprise demo, we might NOT want to use LocalStorage for DB 
    // to prevent 'magic' data appearing on refresh if we want a clean slate every time.
    // But to keep constraints of "Store request", we will use memory for this session.
    // or we can use LocalStorage if persistent across reloads is needed.
    // Let's use LocalStorage for PERSISTENCE to act like a real DB.
    localStorage.setItem('hrms_db', JSON.stringify(HRMS_STATE.db));
},
load: function () {
    const saved = localStorage.getItem('hrms_db');
    if (saved) {
        HRMS_STATE.db = JSON.parse(saved);
    }
},
reset: function () {
    localStorage.removeItem('hrms_db');
    window.location.reload();
}
};

// Initialize
HRMS_STATE.load();
