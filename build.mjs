// Team Work company website. Plain static pages, generated here so every page shares one header, footer and style.
// Run: node build.mjs  ->  dist/
import fs from "node:fs";

const WA = "919518842774"; // public WhatsApp number
const LOGIN = "https://leadnex-crm.vercel.app/login";
const DEMO_SALON = "https://leadnex-crm.vercel.app/demo/f9e605ee-7105-4a4b-928c-aa38bed0808c";
const DEMO_FOOD = "https://leadnex-crm.vercel.app/demo/e61a433d-e322-4515-a49f-d7b4baed1144";
const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const SERVICES = [
  { slug: "hr-payroll", name: "HR and payroll", c: "#0f6fb0", line: "Payroll run on time, with PF, ESI, TDS and WPS filed correctly." },
  { slug: "websites", name: "Websites", c: "#c8323c", line: "A site that brings calls, bookings and WhatsApp enquiries." },
  { slug: "whatsapp-ai-assistant", name: "WhatsApp AI assistant", c: "#0e8a7d", line: "Every customer message answered in seconds, day and night." },
  { slug: "management-systems", name: "Management systems", c: "#c96a10", line: "Bookings, orders, staff and billing on one screen." },
  { slug: "it-rental", name: "IT equipment rental", c: "#4f8a1f", line: "Laptops and desktops on rent, set up and supported." },
  { slug: "office-stationery", name: "Office stationery supply", c: "#55606e", line: "One vendor for the stationery your office uses every month." },
];
const svc = (slug) => SERVICES.find((s) => s.slug === slug);

const NAV = [
  ["services", "Services"],
  ["industries", "Industries"],
  ["how-we-work", "How we work"],
  ["pricing", "Pricing"],
  ["demos", "Demos"],
  ["about", "About"],
];

// ---------- building blocks ----------
const btn = (href, label, kind = "solid") => `<a class="btn ${kind}" href="${href}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
const hero = (h1, lead, ctas = "", side = "") =>
  `<section class="hero"><div class="wrap ${side ? "split" : ""}"><div><h1>${h1}</h1><p class="lead">${lead}</p>${ctas ? `<div class="ctas">${ctas}</div>` : ""}</div>${side}</div></section>`;
const section = (title, body, cls = "") => `<section class="sec ${cls}"><div class="wrap">${title ? `<h2>${title}</h2>` : ""}${body}</div></section>`;
const rows = (items) => `<ul class="rows">${items.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("")}</ul>`;
const ticks = (items) => `<ul class="ticks">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const steps = (items) => `<ol class="steps">${items.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("")}</ol>`;
const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
const serviceList = (list = SERVICES) =>
  `<ul class="svc">${list.map((s) => `<li style="--c:${s.c}"><a href="/${s.slug}"><span class="n">${s.name}</span><span class="d">${s.line}</span><span class="go" aria-hidden="true">&rarr;</span></a></li>`).join("")}</ul>`;
const cta = (h, p, text) =>
  `<section class="band"><div class="wrap"><div><h2>${h}</h2><p>${p}</p></div>${btn(wa(text), "Message us on WhatsApp", "light")}</div></section>`;
const two = (a, b) => `<div class="two"><div>${a}</div><div>${b}</div></div>`;

function servicePage(slug, o) {
  const s = svc(slug);
  return {
    slug,
    title: `${s.name} | Team Work`,
    desc: o.lead,
    body:
      `<section class="hero tint" style="--c:${s.c}"><div class="wrap"><p class="crumb"><a href="/services">Services</a> / ${s.name}</p><h1>${o.h1}</h1><p class="lead">${o.lead}</p><div class="ctas">${btn(wa(o.wa), o.cta || "Ask for a quote")}${o.demo ? btn(o.demo, "Try the live demo", "ghost") : ""}</div></div></section>` +
      section("What you get", rows(o.get)) +
      section(o.forTitle || "Who it is for", two(`<p class="big">${o.forText}</p>`, ticks(o.forList)), "alt") +
      section("How it goes", steps(o.steps)) +
      (o.faq ? section("Questions people ask", faq(o.faq), "alt") : "") +
      cta(o.endH || "Tell us what you need", o.endP || "Send a message and you get a reply from a person, usually the same day.", o.wa),
  };
}

// ---------- pages ----------
const pages = [
  {
    slug: "index",
    title: "Team Work | HR, websites, WhatsApp automation, IT rental and office supplies",
    desc: "Team Work is a business services company in Gurugram, India. HR and payroll, websites, WhatsApp AI assistants, management systems, IT equipment rental and office stationery.",
    body:
      hero(
        "The everyday work that keeps a business running, handled by one team",
        "Team Work looks after payroll, builds your website and WhatsApp assistant, sets up the system your staff use, and supplies the laptops and stationery on their desks. Based in Gurugram, working with businesses in India and abroad.",
        btn(wa("Hi Team Work, I would like to know more about your services."), "Talk to us on WhatsApp") + btn("/services", "See all services", "ghost"),
        `<div class="heroList">${serviceList()}</div>`
      ) +
      section(
        "Why businesses hand this to us",
        rows([
          ["One contact for six jobs", "The person who sets up your payroll knows who built your website and who delivers your laptops. You explain your business once."],
          ["You see it before you pay", "For websites, WhatsApp assistants and management systems we build a working demo with your business name first. If you do not like it, you owe nothing."],
          ["Fixed price, fixed date", "You get the price and the delivery date in writing before work starts. Most websites and assistants go live in 3 to 7 days."],
          ["Built for small teams", "We started in HR and payroll, so we know how a 5 to 50 person business runs day to day. Nothing we set up needs an IT department."],
        ])
      ) +
      section(
        "Try it before you talk to us",
        two(
          `<p class="big">Open a demo, tap the AI Bot tab and type as if you were a customer. You will see the reply, the booking, and what lands on the owner's phone.</p>`,
          `<ul class="links"><li><a href="${DEMO_SALON}" target="_blank" rel="noopener">Salon demo<span>Website, booking assistant and salon system</span></a></li><li><a href="${DEMO_FOOD}" target="_blank" rel="noopener">Restaurant demo<span>Menu, table booking and kitchen screens</span></a></li><li><a href="/demos">All demos</a></li></ul>`
        ),
        "alt"
      ) +
      section("Where we work", two(`<p class="big">Websites, automation and HR services are delivered remotely, so your business can be in Dubai, London, Sydney, Toronto or Delhi.</p>`, `<p>IT equipment rental and stationery supply involve delivery, so those run in Delhi NCR, with other Indian cities on request. <a href="/contact">Ask us about your city.</a></p>`)) +
      cta("Start with a conversation", "Tell us what is taking too much of your time. We will say honestly whether we can help.", "Hi Team Work, I would like to discuss what my business needs."),
  },
  {
    slug: "services",
    title: "Services | Team Work",
    desc: "Six services from one team: HR and payroll, websites, WhatsApp AI assistant, management systems, IT equipment rental and office stationery supply.",
    body:
      hero("Six services, one team", "Take one or take several. Each has its own page with what you get, who it suits and how the work goes.") +
      section("", serviceList()) +
      section(
        "How they fit together",
        rows([
          ["A new business", "Website first, so people can find you. Then the WhatsApp assistant, so every enquiry gets a reply."],
          ["A growing team", "Payroll and compliance handled each month, laptops on rent for new joiners, stationery on a standing order."],
          ["A busy shop, salon, clinic or restaurant", "A management system for bookings, orders and billing, with the WhatsApp assistant feeding it."],
        ]),
        "alt"
      ) +
      cta("Not sure which one you need", "Describe your business in two lines and we will suggest where to start.", "Hi Team Work, I am not sure which service I need. My business is: "),
  },
  servicePage("hr-payroll", {
    h1: "Payroll and HR compliance, done for you every month",
    lead: "We process salaries, file PF, ESI and TDS in India, run WPS payroll in the UAE, and handle joining and exit paperwork, so you are not chasing spreadsheets at month end.",
    wa: "Hi Team Work, I need help with HR and payroll.",
    get: [
      ["Monthly payroll processing", "Attendance and leave taken in, salaries calculated, payslips sent to each employee."],
      ["Statutory compliance in India", "PF, ESI and TDS calculated, deposited and filed on time, with the challans shared with you."],
      ["WPS payroll in the UAE", "Salary files prepared in the format the Wage Protection System needs."],
      ["Onboarding", "Offer letters, joining forms and employee records set up for every new hire."],
      ["Full and final settlement", "Dues, leave encashment and deductions worked out when someone leaves."],
    ],
    forText: "Companies with 5 to 200 employees that do not want a full-time payroll person, or whose accountant is stretched at month end.",
    forList: ["Startups hiring their first team", "Shops, clinics and restaurants with staff on rolls", "Indian companies with a UAE branch", "Businesses that have had a compliance notice and want it fixed"],
    steps: [
      ["Tell us your headcount", "How many employees, which country, and how you track attendance today."],
      ["We send a fixed monthly quote", "Priced per employee, with everything included listed out."],
      ["First month run together", "We set up your salary structure and run the first payroll with you watching."],
      ["After that, it just happens", "You approve the sheet each month. We do the rest and send the proof of filing."],
    ],
    faq: [
      ["Do we have to change our accounting software?", "No. We work with the sheets and software you already use and send you the outputs your accountant needs."],
      ["Is our salary data kept private?", "Yes. Salary data is shared only with the people you name, and we sign a confidentiality agreement before starting."],
      ["Can you take over mid-year?", "Yes. We pick up from your last filed month and reconcile what is pending."],
    ],
  }),
  servicePage("websites", {
    h1: "A website that brings calls, bookings and WhatsApp messages",
    lead: "For businesses that have no website, or have one that nobody finds. Designed for your trade, quick on a phone, with a WhatsApp button and booking built in.",
    wa: "Hi Team Work, I would like a website for my business.",
    cta: "Get a free sample",
    demo: DEMO_SALON,
    get: [
      ["A design made for your kind of business", "A salon does not look like a clinic or a gym. Colours, type and layout are chosen for your trade, not pulled from a template."],
      ["Works on a phone first", "Most of your visitors are on a phone. Pages load fast and the buttons are easy to tap."],
      ["WhatsApp, call and directions", "One tap to message you, call you or open your location on the map."],
      ["Your services and prices", "A clear list of what you offer, so people stop asking the same questions."],
      ["Found on Google", "Set up so you appear for searches like your service plus your area."],
      ["Changes included", "Hosting and small text or photo changes are covered in a low monthly fee."],
    ],
    forText: "Local businesses that rely on Instagram, Facebook or word of mouth and lose customers who search on Google.",
    forList: ["Salons, spas and barbers", "Clinics and dentists", "Restaurants, cafes and bakeries", "Gyms and studios", "Shops and service businesses"],
    steps: [
      ["Send us your business name", "And your Instagram or Facebook page, if you have one."],
      ["We build a sample, free", "A working website with your name on it, usually within a day."],
      ["You ask for changes", "Photos, wording, colours. We adjust until it is right."],
      ["It goes live", "On your own domain, in 5 to 7 days from your go-ahead."],
    ],
    faq: [
      ["Do I need to buy a domain?", "We can buy it in your name or connect one you already own. It stays yours."],
      ["Who writes the text?", "We do, from what you tell us. You check it before it goes live."],
      ["Can I update it myself later?", "Yes for simple changes. Most owners prefer to message us and we do it the same day."],
    ],
    endH: "See your business as a website first",
    endP: "Send your business name and we will build a free sample. You decide after seeing it.",
  }),
  servicePage("whatsapp-ai-assistant", {
    h1: "Every WhatsApp enquiry answered in seconds, even at 2 am",
    lead: "An assistant on your own WhatsApp number that answers common questions, takes bookings and orders, and hands the chat to you when a customer needs a person.",
    wa: "Hi Team Work, I would like to see the WhatsApp AI assistant for my business.",
    cta: "Get a demo for your business",
    demo: DEMO_SALON,
    get: [
      ["Instant replies", "Timings, prices, location and availability answered at once, in the customer's language."],
      ["Bookings and orders taken for you", "It asks what the customer wants, offers free slots, confirms, and sends a reminder before the visit."],
      ["A handover when it matters", "If someone asks for a person, has a complaint or asks something unusual, you get an alert with the full chat."],
      ["Only your facts", "It uses your real timings, prices and services. It does not make things up; if it does not know, it says the team will confirm."],
      ["A daily summary", "How many people wrote, how many booked and which questions came up most."],
    ],
    forText: "Businesses where customers message to ask or book, and replies are late because everyone is busy with the customer in front of them.",
    forList: ["Salons and clinics taking appointments", "Restaurants taking table bookings and orders", "Gyms handling trial and membership enquiries", "Any business that gets messages after closing time"],
    steps: [
      ["Try the demo", "Type as a customer and watch what the owner sees."],
      ["Give us your details", "Timings, services, prices and the questions customers ask most."],
      ["We set it up on your number", "Using the official WhatsApp Business tools, in about 3 days."],
      ["You watch for a week", "We tune the replies from real chats, then it runs on its own."],
    ],
    faq: [
      ["Will customers know it is an assistant?", "It introduces itself as the assistant of your business. People mostly care that they got an answer straight away."],
      ["What if it gives a wrong answer?", "It only answers from the facts you give. Anything else is passed to you rather than guessed."],
      ["Can I still reply myself?", "Yes. You can step into any chat at any time and the assistant stays quiet."],
      ["Does it send bulk promotions?", "No. It replies to people who message you. We do not set up bulk messaging to people who have not asked."],
    ],
    endH: "See it answer as your business",
    endP: "Send your business name and type. We will set up a demo you can try yourself.",
  }),
  servicePage("management-systems", {
    h1: "Bookings, orders, staff and billing on one screen",
    lead: "A system built around how your business already works, to replace the notebook, the Excel sheet and the three different apps.",
    wa: "Hi Team Work, I would like a management system for my business.",
    cta: "Get a demo for your business",
    demo: DEMO_FOOD,
    get: [
      ["Made for your trade", "Restaurants get tables, kitchen tickets and bills. Salons and clinics get an appointment diary and customer history. Gyms get members and renewals."],
      ["Works on the phones you have", "Staff use it on a phone or tablet. No special hardware to buy."],
      ["The owner's view", "Today's sales, bookings and pending payments at a glance, from anywhere."],
      ["Reminders that go out on their own", "Appointment reminders, renewal reminders and payment follow-ups on WhatsApp."],
      ["Your data stays yours", "Export your customers, bookings and bills whenever you want."],
    ],
    forText: "Owners who cannot answer a simple question, such as how many bookings came in this week, without calling someone.",
    forList: ["Restaurants, cafes and hotels", "Salons, spas and clinics", "Gyms and coaching centres", "Service businesses with staff in the field"],
    steps: [
      ["Show us how you work today", "A 20 minute call, or photos of your register and bills."],
      ["Try a demo with your name", "Run a pretend day: take an order, book a customer, close a bill."],
      ["We adjust it to fit", "Your services, prices, staff roles and bill format."],
      ["Staff are trained", "A short session for each role, and we stay on WhatsApp for questions."],
    ],
    faq: [
      ["How long does it take?", "One to three weeks, depending on how much is specific to your business."],
      ["Do we pay monthly?", "There is a one-time setup fee and a small monthly fee for hosting and support."],
      ["Can it connect to the WhatsApp assistant?", "Yes. Bookings taken on WhatsApp appear in the system without anyone typing them in."],
    ],
  }),
  servicePage("it-rental", {
    h1: "Laptops and desktops on rent, ready to work on day one",
    lead: "Equipment for new joiners, short projects, training batches and events, delivered configured and replaced quickly if something fails.",
    wa: "Hi Team Work, I need IT equipment on rent.",
    get: [
      ["Laptops and desktops", "Configured to the specification your work needs, with the software you ask for installed."],
      ["Office IT equipment", "Monitors and other everyday equipment alongside the machines."],
      ["Short or long terms", "By the week for an event or training, by the month for a project, or longer for a growing team."],
      ["Delivery and setup", "Brought to your office and set up, so people can start working straight away."],
      ["Replacement if it fails", "A faulty machine is repaired or swapped, so nobody sits idle."],
    ],
    forTitle: "When renting makes sense",
    forText: "When buying would lock up money you need elsewhere, or when you need machines for a period, not for years.",
    forList: ["A batch of new joiners starting next week", "A project team for three to six months", "Training rooms, exams and events", "A temporary office or a branch being set up"],
    steps: [
      ["Tell us what you need", "How many machines, what specification, and for how long."],
      ["Get a quote", "A per-machine monthly rate with the deposit and terms spelled out."],
      ["Delivery and setup", "Scheduled for the date you need them."],
      ["Return or extend", "We collect at the end of the term, or extend if you still need them."],
    ],
    faq: [
      ["Where do you deliver?", "Delhi NCR as standard. For other cities in India, ask us and we will tell you what is possible."],
      ["Is data wiped when we return machines?", "Yes. Every returned machine is wiped before it goes to anyone else."],
    ],
  }),
  servicePage("office-stationery", {
    h1: "Office stationery from one vendor, on one invoice",
    lead: "Paper, pens, files, printer consumables and the other things an office runs out of, supplied on a schedule so your admin team stops chasing five different shops.",
    wa: "Hi Team Work, I need office stationery supply.",
    get: [
      ["Everyday stationery", "Paper, notebooks, pens, files, folders and desk supplies."],
      ["Printer consumables", "Toner and cartridges matched to the printers you use."],
      ["A standing monthly order", "Your usual list delivered on a fixed date, adjusted when your needs change."],
      ["One consolidated invoice", "A single GST invoice each month instead of a pile of small bills."],
    ],
    forText: "Offices where someone senior ends up approving small stationery purchases every week.",
    forList: ["Corporate offices and co-working spaces", "Schools, coaching centres and clinics", "Startups setting up a new office"],
    steps: [
      ["Share your usual list", "Or last month's bills, and we will build the list from them."],
      ["Get a rate card", "Item-wise rates, fixed for an agreed period."],
      ["Deliveries on schedule", "Monthly as standard, with urgent top-ups when needed."],
    ],
    faq: [["Where do you deliver?", "Delhi NCR as standard. Ask us about other cities."]],
  }),
  {
    slug: "industries",
    title: "Industries we work with | Team Work",
    desc: "How Team Work helps salons, clinics, restaurants, hotels, gyms, shops and offices.",
    body:
      hero("Built around how your kind of business runs", "The same six services look different in a salon, a restaurant and a 40 person office. Here is what each usually takes from us.") +
      section(
        "",
        rows([
          ["Salons, spas and barbers", "A website that shows services and prices, a WhatsApp assistant that books appointments, and a diary that reminds customers before their visit."],
          ["Clinics and dentists", "Appointment booking on WhatsApp, patient reminders, and a simple record of visits and payments."],
          ["Restaurants, cafes and bakeries", "An online menu, table booking and orders on WhatsApp, and kitchen, staff and owner screens that stay in step."],
          ["Hotels and guest houses", "Room enquiries answered at once, bookings in one place, and a front desk view of who is arriving today."],
          ["Gyms and studios", "Trial bookings from WhatsApp, a member list, and renewal reminders that go out on their own."],
          ["Shops and service businesses", "A website that gets you found locally and an assistant that answers price and availability questions."],
          ["Offices and startups", "Payroll and compliance each month, laptops on rent for new joiners, and stationery on a standing order."],
        ])
      ) +
      cta("Your business is not on this list", "Tell us what you do. If we can help we will say how, and if we cannot we will say that too.", "Hi Team Work, my business is: "),
  },
  {
    slug: "how-we-work",
    title: "How we work | Team Work",
    desc: "A free sample first, a fixed price in writing, and one person to talk to from first message to launch.",
    body:
      hero("You see the work before you pay for it", "Most small businesses have been let down by a vendor at least once. So we do the risky part first, at our cost.") +
      section(
        "From first message to launch",
        steps([
          ["You message us", "Two lines about your business are enough. A person replies, usually the same day."],
          ["We build a sample", "For websites, assistants and systems: a working demo with your business name, normally within a day or two."],
          ["You get a written quote", "A fixed price, what is included, and the date it will be ready. For payroll, rental and stationery this is a rate card."],
          ["Half now, half on delivery", "Work starts on a 50 percent advance. The rest is due when it is live and you are happy."],
          ["We stay around", "Changes, questions and support on WhatsApp, covered by a small monthly fee."],
        ])
      ) +
      section(
        "What we promise",
        ticks([
          "One named person as your contact, not a ticket queue",
          "No invented claims on your website: only your real services, prices and reviews",
          "Your domain, your data and your customer list stay in your name",
          "A straight answer if something is not a good fit for us",
        ]),
        "alt"
      ) +
      cta("Ask for a sample", "It costs you nothing to see what we would build.", "Hi Team Work, I would like a free sample for my business."),
  },
  {
    slug: "pricing",
    title: "Pricing | Team Work",
    desc: "Starting prices for websites, WhatsApp AI assistants and management systems. Payroll, IT rental and stationery are quoted per business.",
    body:
      hero("Starting prices, so you know where you stand", "Your exact price depends on what you need and is fixed in writing before work begins. These are where most projects start.") +
      section(
        "Websites and automation",
        `<div class="tableWrap"><table><thead><tr><th>Service</th><th>One-time setup</th><th>Monthly</th><th>Ready in</th></tr></thead><tbody>
<tr><td><a href="/websites">Website</a></td><td>from $400</td><td>from $20</td><td>5 to 7 days</td></tr>
<tr><td><a href="/whatsapp-ai-assistant">WhatsApp AI assistant</a></td><td>from $500</td><td>from $100</td><td>about 3 days</td></tr>
<tr><td><a href="/management-systems">Management system</a></td><td>from $800</td><td>from $50</td><td>1 to 3 weeks</td></tr>
<tr><td>All three together</td><td>from $1,500</td><td>from $150</td><td>2 to 3 weeks</td></tr>
</tbody></table></div><p class="note">Prices in US dollars. We also quote in INR, AED and GBP. The monthly fee covers hosting, small changes and support.</p>`
      ) +
      section(
        "Quoted for your business",
        rows([
          ["HR and payroll", "A fixed monthly fee per employee, based on headcount and country."],
          ["IT equipment rental", "A monthly rate per machine, based on specification and how long you need it."],
          ["Office stationery supply", "An item-wise rate card, fixed for an agreed period."],
        ]),
        "alt"
      ) +
      section("How payment works", ticks(["A free sample before any payment, for websites, assistants and systems", "50 percent to start, 50 percent when it is live", "Bank transfer, UPI, Wise or PayPal", "A proper invoice for every payment"])) +
      cta("Get a quote for your business", "Tell us what you need and you will have a written price the same day.", "Hi Team Work, I would like a quote for: "),
  },
  {
    slug: "demos",
    title: "Live demos | Team Work",
    desc: "Try a website, a WhatsApp AI assistant and a management system as if you were a customer.",
    body:
      hero("Try our work as a customer would", "These are sample businesses, not real clients. Each demo has four tabs: Website, Posts, App and AI Bot.") +
      section(
        "",
        `<ul class="links wide"><li><a href="${DEMO_SALON}" target="_blank" rel="noopener">Salon in Dubai<span>Book an appointment through the AI Bot tab and see it reach the owner</span></a></li><li><a href="${DEMO_FOOD}" target="_blank" rel="noopener">Restaurant in the UK<span>Book a table, then open the App tab to place an order and watch the kitchen screen</span></a></li></ul>`
      ) +
      section("What to try", steps([["Open the AI Bot tab", "Ask for timings or prices, then say you want to book."], ["Look at the right-hand side", "That is what the owner sees on their phone."], ["Open the App tab", "This is the system staff would use every day."]]), "alt") +
      cta("Want one with your business name", "We build it free. You decide after trying it.", "Hi Team Work, please make a demo for my business: "),
  },
  {
    slug: "about",
    title: "About Team Work",
    desc: "Team Work is a business services company founded in 2023 in Gurugram, India.",
    body:
      hero("Together we can do so much", "That line sits under our logo, and it is how we work: a small team that takes the routine jobs off a business owner's desk.") +
      section(
        "Where we come from",
        two(
          `<p class="big">Team Work began in 2023 in Gurugram as an HR and payroll consultancy.</p>`,
          `<p>Running payroll for small companies showed us the rest of their day: enquiries going unanswered on WhatsApp, bookings kept in notebooks, new joiners waiting for a laptop, someone senior approving stationery bills. So we added the services our clients kept asking for.</p><p>Today the same team handles HR and payroll, builds websites, WhatsApp assistants and management systems, and supplies IT equipment and office stationery.</p>`
        )
      ) +
      section(
        "What we care about",
        rows([
          ["Plain dealing", "A fixed price in writing, and a clear no when something is not right for you."],
          ["Proof before payment", "A working sample first, wherever the work allows it."],
          ["Staying reachable", "The person who sold you the work is the person who answers when you have a question."],
        ]),
        "alt"
      ) +
      section("Founder", two(`<p class="big">Harshit founded Team Work and leads every project.</p>`, `<p>If you message us, you are most likely talking to him. <a href="/contact">Get in touch.</a></p>`)) +
      cta("Work with us", "Tell us about your business and what you want off your plate.", "Hi Team Work, I would like to work with you."),
  },
  {
    slug: "faq",
    title: "Questions and answers | Team Work",
    desc: "Common questions about working with Team Work: samples, payment, timelines, countries and support.",
    body:
      hero("Questions people ask before they start", "If yours is not here, message us and a person will answer.") +
      section(
        "",
        faq([
          ["Where are you based, and do you work with businesses abroad?", "We are in Gurugram, India. Websites, automation and HR services are delivered remotely to businesses in the UAE, UK, Australia, Canada and India. IT rental and stationery are delivered in Delhi NCR."],
          ["Is the sample really free?", "Yes. For websites, WhatsApp assistants and management systems we build a working demo first. If you do not go ahead, you pay nothing."],
          ["How do I pay from outside India?", "By Wise, PayPal or international bank transfer. You get an invoice for every payment."],
          ["How fast can you deliver?", "A website in 5 to 7 days, a WhatsApp assistant in about 3 days, a management system in 1 to 3 weeks. Payroll starts from your next salary cycle."],
          ["What happens after launch?", "A small monthly fee covers hosting, changes and support. You message us on WhatsApp and we make the change."],
          ["Who owns the website and the data?", "You do. The domain is registered in your name and you can export your data at any time."],
          ["Do you send bulk WhatsApp messages?", "No. The assistant replies to customers who message you. We do not run bulk campaigns to people who have not asked to hear from you."],
          ["Can I take only one service?", "Yes. Most clients start with one and add others later."],
          ["What time zone do you work in?", "India time, with calls arranged to suit the UAE, UK and Australia. Messages are answered the same day."],
        ])
      ) +
      cta("Still have a question", "Ask it directly.", "Hi Team Work, I have a question: "),
  },
  {
    slug: "contact",
    title: "Contact Team Work",
    desc: "Message Team Work on WhatsApp or send your requirement through the form.",
    body:
      hero("Tell us what you need", "The quickest way is WhatsApp. You can also fill in the form and it will open WhatsApp with your message ready to send.", btn(wa("Hi Team Work, I would like to talk about my business."), "Open WhatsApp")) +
      section(
        "",
        two(
          `<form id="cf" class="form" novalidate>
<label for="f-name">Your name</label><input id="f-name" name="name" autocomplete="name" required>
<label for="f-biz">Business name and city</label><input id="f-biz" name="biz" autocomplete="organization" required>
<label for="f-svc">What do you need</label><select id="f-svc" name="svc">${SERVICES.map((s) => `<option>${s.name}</option>`).join("")}<option>Not sure yet</option></select>
<label for="f-msg">A few details</label><textarea id="f-msg" name="msg" rows="4"></textarea>
<p class="err" id="f-err" role="alert" hidden>Please add your name and business name.</p>
<button class="btn solid" type="submit">Send on WhatsApp</button>
</form>`,
          `<h3>Office</h3><p>Team Work<br>Gurugram, Haryana, India</p><h3>WhatsApp</h3><p><a href="${wa("Hi Team Work")}" target="_blank" rel="noopener">+91 95188 42774</a></p><h3>Reply time</h3><p>Messages are answered by a person, usually the same day.</p>`
        )
      ),
    script: `document.getElementById("cf").addEventListener("submit",function(e){e.preventDefault();var f=e.target,n=f.name.value.trim(),b=f.biz.value.trim(),er=document.getElementById("f-err");if(!n||!b){er.hidden=false;(n?f.biz:f.name).focus();return}er.hidden=true;var t="Hi Team Work, I am "+n+" from "+b+".\\nI need: "+f.svc.value+(f.msg.value.trim()?"\\n"+f.msg.value.trim():"");window.open("https://wa.me/${WA}?text="+encodeURIComponent(t),"_blank","noopener")});`,
  },
  {
    slug: "privacy",
    title: "Privacy policy | Team Work",
    desc: "How Team Work handles the information you share with us.",
    body:
      hero("Privacy policy", "A plain account of what we collect and what we do with it. Last updated November 2026.") +
      section(
        "",
        `<div class="prose"><h3>What we collect</h3><p>When you contact us we receive what you send: your name, business name, phone number and your message. This website does not use advertising trackers and does not ask you to create an account.</p><h3>How we use it</h3><p>To reply to you, prepare a sample or a quote, and deliver the service you ask for. We do not sell your information or pass it to advertisers.</p><h3>Client data</h3><p>If we run your payroll or build a system for you, we handle employee or customer data on your behalf and only on your instructions. It is shared only with the people you name.</p><h3>Other services</h3><p>We use WhatsApp to talk to you and hosting providers to run websites and systems. Their own privacy terms apply to those services.</p><h3>Your choices</h3><p>You can ask us to show, correct or delete the information we hold about you by messaging us on WhatsApp.</p><h3>Contact</h3><p>Team Work, Gurugram, Haryana, India. <a href="/contact">Contact us.</a></p></div>`
      ),
  },
  {
    slug: "terms",
    title: "Terms of service | Team Work",
    desc: "The basic terms on which Team Work provides its services.",
    body:
      hero("Terms of service", "The short version of how we work together. Your written quote carries the details for your project. Last updated November 2026.") +
      section(
        "",
        `<div class="prose"><h3>Quotes and scope</h3><p>Work is done against a written quote that lists what is included, the price and the delivery date. Anything outside it is quoted separately before we do it.</p><h3>Samples</h3><p>Samples and demos are free and carry no obligation. They remain ours until a project is paid for.</p><h3>Payment</h3><p>Projects start on a 50 percent advance, with the balance due on delivery. Monthly fees are billed in advance. Payroll, rental and stationery follow the terms on their rate card.</p><h3>Ownership</h3><p>Once paid for, your website content, domain and business data are yours. We keep the right to reuse general code and design methods.</p><h3>Rented equipment</h3><p>Rented equipment stays our property. Loss or damage beyond normal use is charged as set out in the rental agreement.</p><h3>Cancelling</h3><p>You can stop a monthly service with 30 days' notice. Advances cover work already done and are not refunded once that work has been delivered.</p><h3>Liability</h3><p>We do the work with care, but we are not responsible for losses caused by third-party services such as WhatsApp, hosting providers or government portals being unavailable.</p><h3>Law</h3><p>These terms are governed by the laws of India, with courts in Gurugram, Haryana.</p></div>`
      ),
  },
  {
    slug: "404",
    title: "Page not found | Team Work",
    desc: "This page does not exist.",
    body: hero("That page is not here", "The link may be old. Start again from the home page or tell us what you were looking for.", btn("/", "Go to home") + btn("/contact", "Contact us", "ghost")),
  },
];

// ---------- layout ----------
function layout(p) {
  const path = p.slug === "index" ? "/" : `/${p.slug}`;
  const nav = NAV.map(([s, l]) => `<a href="/${s}"${p.slug === s || (s === "services" && svc(p.slug)) ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${path}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#14202e">
<link rel="icon" href="/logo-mark.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap">
<a class="brand" href="/" aria-label="Team Work home"><img src="/logo-mark.png" width="40" height="40" alt=""><span>TeamWork</span></a>
<nav class="nav" aria-label="Main">${nav}</nav>
<a class="btn solid sm" href="/contact">Contact</a>
<details class="menu"><summary aria-label="Menu"><span></span></summary><nav aria-label="Mobile">${nav}<a href="/contact">Contact</a></nav></details>
</div></header>
<main id="main">${p.body}</main>
<footer class="foot"><div class="wrap">
<div class="fcol"><a class="brand" href="/"><img src="/logo-mark.png" width="44" height="44" alt=""><span>TeamWork</span></a><p>together we can do so much</p><p>Gurugram, Haryana, India</p></div>
<div class="fcol"><h2>Services</h2>${SERVICES.map((s) => `<a href="/${s.slug}">${s.name}</a>`).join("")}</div>
<div class="fcol"><h2>Company</h2><a href="/about">About</a><a href="/industries">Industries</a><a href="/how-we-work">How we work</a><a href="/pricing">Pricing</a><a href="/demos">Demos</a><a href="/faq">Questions</a><a href="/contact">Contact</a></div>
<div class="fcol"><h2>Talk to us</h2><a href="${wa("Hi Team Work")}" target="_blank" rel="noopener">WhatsApp +91 95188 42774</a><a href="/privacy">Privacy policy</a><a href="/terms">Terms of service</a><a class="staff" href="${LOGIN}" rel="nofollow noopener">Team login</a></div>
</div><div class="wrap legal"><span>&copy; 2026 Team Work. All rights reserved.</span></div></footer>
${p.script ? `<script>${p.script}</script>` : ""}
</body>
</html>`;
}

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
for (const p of pages) fs.writeFileSync(`dist/${p.slug}.html`, layout(p));
fs.copyFileSync("styles.css", "dist/styles.css");
fs.copyFileSync("assets/logo-mark.png", "dist/logo-mark.png");
fs.writeFileSync("dist/robots.txt", "User-agent: *\nAllow: /\n");
console.log(`built ${pages.length} pages`);
