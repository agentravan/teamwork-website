// Team Work company website. Plain static pages, generated here so every page shares one header, footer and style.
// Run: node build.mjs  ->  dist/
import fs from "node:fs";

const WA = "919518842774"; // public WhatsApp number
const LOGIN = "https://leadnex-crm.vercel.app/login";
const DEMO_SALON = "https://leadnex-crm.vercel.app/demo/f9e605ee-7105-4a4b-928c-aa38bed0808c";
const DEMO_FOOD = "https://leadnex-crm.vercel.app/demo/e61a433d-e322-4515-a49f-d7b4baed1144";
const DEMO_API = "https://leadnex-crm.vercel.app/api/public/demo";
const TRADES = ["Salon", "Spa", "Barber shop", "Clinic", "Dentist", "Physiotherapist", "Restaurant", "Cafe", "Bakery", "Hotel", "Guest house", "Gym", "Yoga studio", "Coaching institute", "School", "Real estate agent", "Car wash", "Garage", "Boutique", "Grocery store", "Pharmacy", "Interior designer", "Photographer", "Travel agency", "Event planner", "Pet shop", "Laundry", "Jewellery shop"];
const LOGO_SVG = `<svg class="lg" viewBox="0 0 120 120" aria-hidden="true"><path d="M60.0 26.0Q65.2 57.0 89.4 77.0" pathLength="100" stroke="#8a94a3" style="--k:0"/><path d="M89.4 43.0Q65.2 63.0 60.0 94.0" pathLength="100" stroke="#ff5a61" style="--k:1"/><path d="M89.4 77.0Q60.0 66.0 30.6 77.0" pathLength="100" stroke="#ffc02e" style="--k:2"/><path d="M60.0 94.0Q54.8 63.0 30.6 43.0" pathLength="100" stroke="#8fd14f" style="--k:3"/><path d="M30.6 77.0Q54.8 57.0 60.0 26.0" pathLength="100" stroke="#39c0f0" style="--k:4"/><path d="M30.6 43.0Q60.0 54.0 89.4 43.0" pathLength="100" stroke="#2f7de1" style="--k:5"/><circle cx="60.0" cy="14.0" r="7.5" fill="#8a94a3" style="--k:0"/><circle cx="99.8" cy="37.0" r="7.5" fill="#ff5a61" style="--k:1"/><circle cx="99.8" cy="83.0" r="7.5" fill="#ffc02e" style="--k:2"/><circle cx="60.0" cy="106.0" r="7.5" fill="#8fd14f" style="--k:3"/><circle cx="20.2" cy="83.0" r="7.5" fill="#39c0f0" style="--k:4"/><circle cx="20.2" cy="37.0" r="7.5" fill="#2f7de1" style="--k:5"/></svg>`;
const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const SERVICES = [
  { slug: "hr-payroll", name: "HR and payroll", c: "#4da3ff", line: "Payroll run on time, with PF, ESI, TDS and WPS filed correctly." },
  { slug: "websites", name: "Websites", c: "#ff6b74", line: "A site that brings calls, bookings and WhatsApp enquiries." },
  { slug: "whatsapp-ai-assistant", name: "WhatsApp AI assistant", c: "#2fd6c3", line: "Every customer message answered in seconds, day and night." },
  { slug: "management-systems", name: "Management systems", c: "#ffa24d", line: "Bookings, orders, staff and billing on one screen." },
  { slug: "it-rental", name: "IT equipment rental", c: "#9bd957", line: "Laptops and desktops on rent, set up and supported." },
  { slug: "office-stationery", name: "Office stationery supply", c: "#b7c2cf", line: "One vendor for the stationery your office uses every month." },
];
const svc = (slug) => SERVICES.find((s) => s.slug === slug);

const NAV = [
  ["services", "Services"],
  ["industries", "Industries"],
  ["how-we-work", "How we work"],
  ["pricing", "Pricing"],
  ["demos", "Demos"],
  ["about", "About"],
  ["contact", "Contact"],
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


// ---------- home page ----------
const ICONS = {
  "hr-payroll": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  websites: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/>',
  "whatsapp-ai-assistant": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/>',
  "management-systems": '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  "it-rental": '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
  "office-stationery": '<path d="M17 3l4 4L8 20l-5 1 1-5L17 3Z"/><path d="M14 6l4 4"/>',
};
const icon = (slug) => `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[slug]}</svg>`;
const EXTRA = {
  "whatsapp-ai-assistant": `<div class="mini chatMini" aria-hidden="true"><p class="me">Are you open on Sunday?</p><p class="bot">Yes, 10 am to 9 pm. Shall I book a slot for you?</p></div>`,
  websites: `<div class="mini webMini" aria-hidden="true"><div class="bar"><i></i><i></i><i></i></div><div class="wm"><b></b><span></span><span class="s"></span><em></em></div></div>`,
};
function home() {
  const order = ["whatsapp-ai-assistant", "websites", "management-systems", "hr-payroll", "it-rental", "office-stationery"].map(svc);
  const tick = [...order, ...order, ...order, ...order].map((s) => `<span style="--c:${s.c}">${s.name}</span>`).join("");
  const say = "We build the website customers find you on, the assistant that answers them on WhatsApp, and the system your staff run the day on.";
  const phone = (i, cls, inner) => `<div class="ph" style="--i:${i}"><div class="${cls}">${inner}</div></div>`;
  return (
    `<div class="ticker" aria-hidden="true"><div>${tick}</div></div>` +
    `<section class="h0"><div class="orb" aria-hidden="true"></div><div class="grid" aria-hidden="true"></div><div class="wrap"><div class="in">
<h1><span><b>Every customer</b></span><span><b>answered.</b></span><span><b>Every booking kept.</b></span></h1>
<p class="lead">Team Work builds websites, WhatsApp assistants and management systems for small businesses, and runs their payroll and office supply too. Based in Gurugram, working with businesses in India and abroad.</p>
<div class="ctas">${btn("/make-demo", "Make a free demo for your business")}${btn(wa("Hi Team Work, I would like to know more about your services."), "Talk to us on WhatsApp", "ghost")}</div>
<ul class="trust"><li><strong>120+</strong> clients served since 2023</li><li>Free sample before you pay</li><li>Fixed price in writing</li></ul>
</div></div><p class="hint" aria-hidden="true">Scroll</p></section>` +
    `<section class="sayWrap"><div class="wrap"><p class="say" aria-label="${say}">${say.split(" ").map((w) => `<span aria-hidden="true">${w} </span>`).join("")}</p></div></section>` +
    `<div class="bigline" data-p aria-hidden="true"><p>Websites <b>WhatsApp AI</b> Systems <b>Payroll</b> IT rental <b>Stationery</b></p></div>` +
    `<section class="sec"><div class="wrap"><h2>Three steps, and the first one is free</h2><ol class="tri">
<li style="--c:#4da3ff"><span class="no">01</span><h3>You tell us your business</h3><p>Two lines on WhatsApp are enough, or build a demo yourself in a minute.</p></li>
<li style="--c:#2fd6c3"><span class="no">02</span><h3>We build a working sample</h3><p>A website, an assistant or a system with your name on it, before you pay anything.</p></li>
<li style="--c:#ffa24d"><span class="no">03</span><h3>It goes live</h3><p>A fixed price in writing, then live in 3 to 7 days for most websites and assistants.</p></li>
</ol></div></section>` +
    `<section class="sec alt"><div class="wrap"><h2>Six services, one team</h2>${serviceList(order)}</div></section>` +
    `<section class="sec"><div class="wrap"><ul class="stats">
<li><b data-count="120" data-suffix="+">120+</b><span>clients served since 2023</span></li>
<li><b data-count="6">6</b><span>services from one team</span></li>
<li><b data-count="7">7</b><span>days or less to put most websites live</span></li>
<li><b data-count="1">1</b><span>minute to build a demo of your own business</span></li>
</ul></div></section>` +
    `<section class="demoBand"><div class="wrap"><div><h2>See your own business as a demo</h2><ol class="pills"><li>Pick your trade</li><li>Type your business name</li><li>Play a game while it builds</li></ol>${btn("/make-demo", "Make my demo", "light")}<a class="alt" href="/demos">or try a sample demo</a></div>
<div class="tttArt" aria-hidden="true"><i class="x a1"></i><i></i><i class="o a2"></i><i></i><i class="x a3"></i><i></i><i class="o a4"></i><i></i><i class="x a5"></i></div></div></section>` +
    `<section class="sec"><div class="wrap"><h2>Where we work</h2><p class="cities"><span>Dubai</span><span>London</span><span>Sydney</span><span>Toronto</span><span>Delhi</span></p>${two(`<p>Websites, automation and HR services are delivered remotely, so your business can be in any of these cities or anywhere else.</p>`, `<p>IT equipment rental and stationery supply involve delivery, so those run in Delhi NCR, with other Indian cities on request. <a href="/contact">Ask us about your city.</a></p>`)}</div></section>` +
    section(
      "Questions people ask first",
      faq([
        ["Is the sample really free?", "Yes. We build a working demo first. If you do not go ahead, you pay nothing."],
        ["How fast can you deliver?", "A website in 5 to 7 days, a WhatsApp assistant in about 3 days, a management system in 1 to 3 weeks."],
        ["How do I pay from outside India?", "By Wise, PayPal or international bank transfer. You get an invoice for every payment."],
        ["Can I take only one service?", "Yes. Most clients start with one and add others later."],
      ]) + `<p class="note"><a href="/faq">All questions and answers</a></p>`,
      "alt"
    ) +
    `<section class="show" data-p><div class="wrap"><h2>Your business, in your customer's hand</h2><div class="ctas">${btn("/make-demo", "Make my demo")}${btn("/demos", "Try a sample", "ghost")}</div><p class="ill">Screens are illustrative.</p>
<div class="phones" aria-hidden="true">
${phone(-2, "s-menu", `<h4>Menu</h4><p><b>Paneer tikka</b><span>12</span></p><p><b>Dal makhani</b><span>9</span></p><p><b>Butter naan</b><span>2</span></p><p><b>Masala chai</b><span>3</span></p>`)}
${phone(-1, "s-web", `<div class="im"></div><div class="tx"><b></b><u></u><u class="s"></u><em>Book on WhatsApp</em></div>`)}
${phone(0, "s-chat", `<h4>Your business</h4><p class="me">Do you have a slot tomorrow?</p><p class="bot">Yes. 11:00 am, 1:00 pm or 4:30 pm are free.</p><p class="me">1 pm please</p><p class="bot">Done. You are booked for tomorrow at 1:00 pm.</p>`)}
${phone(1, "s-list", `<h4>New bookings</h4><p><b>Ayesha</b><span>Haircut, tomorrow 1:00 pm</span></p><p><b>Daniel</b><span>Table for 4, today 8:30 pm</span></p><p><b>Priya</b><span>Check-up, Friday 5:00 pm</span></p>`)}
${phone(2, "s-dash", `<h4>Today</h4><div class="k"><div><b>14</b><span>bookings</span></div><div><b>9</b><span>orders</span></div></div><div class="bars"><i style="height:40%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:85%"></i><i style="height:70%"></i><i style="height:95%"></i></div>`)}
</div></div></section>`
  );
}

// ---------- pages ----------
const pages = [
  {
    slug: "index",
    title: "Team Work | HR, websites, WhatsApp automation, IT rental and office supplies",
    desc: "Team Work is a business services company in Gurugram, India. HR and payroll, websites, WhatsApp AI assistants, management systems, IT equipment rental and office stationery.",
    body: home(),
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
      hero("Try our work as a customer would", "These are sample businesses, not real clients. Each demo has four tabs: Website, Posts, App and AI Bot.", btn("/make-demo", "Make a demo for your own business")) +
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
          `<p class="big">Team Work began in 2023 in Gurugram as an HR and payroll consultancy, and has served more than 120 clients since.</p>`,
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
    slug: "make-demo",
    title: "Make a demo for your business | Team Work",
    desc: "Pick your type of business, type its name and get a working demo: website, WhatsApp assistant and management system.",
    games: true,
    body:
      `<section class="hero"><div class="wrap"><h1>See your own business as a demo</h1><p class="lead">Choose your trade and type your business name. In about a minute you get a website, a WhatsApp assistant and a management system with your name on them. Free, no sign-up.</p></div></section>` +
      `<section class="sec" id="md"><div class="wrap">
<form id="md-form" class="form wide" novalidate>
<fieldset class="chips"><legend>1. What kind of business is it?</legend>${TRADES.map((t, i) => `<label><input type="radio" name="niche" value="${t}"${i === 0 ? " checked" : ""}><span>${t}</span></label>`).join("")}<label><input type="radio" name="niche" value="other"><span>Something else</span></label></fieldset>
<div id="md-otherWrap" hidden><label for="md-other">Type your kind of business</label><input id="md-other" maxlength="40" autocomplete="off"></div>
<label for="md-name">2. Business name</label><input id="md-name" maxlength="60" autocomplete="organization" required>
<label for="md-city">3. City or area (optional)</label><input id="md-city" maxlength="60" autocomplete="address-level2">
<label for="md-phone">4. WhatsApp number with country code (optional)</label><input id="md-phone" maxlength="20" inputmode="tel" autocomplete="tel" placeholder="+971 50 123 4567">
<p class="note">Add your number only if you want us to message you about the demo. We do not send bulk messages.</p>
<p class="err" id="md-err" role="alert" hidden></p>
<button class="btn solid" type="submit">Build my demo</button>
</form>
<div id="md-wait" hidden>
<div class="status" id="md-status" role="status" aria-live="polite"><span class="lgBox sm" aria-hidden="true">${LOGO_SVG.replace('class="lg"', 'class="lg loop"')}</span><div><h2 id="md-h">Please wait, your demo is being built</h2><p id="md-p">This takes up to a minute. Play a game while you wait.</p></div><a id="md-open" class="btn solid" href="#" target="_blank" rel="noopener" hidden>Open my demo</a></div>
<div class="games">
<div class="tabs" role="tablist" aria-label="Games"><button type="button" role="tab" id="tab-ttt" aria-selected="true">Tic-tac-toe</button><button type="button" role="tab" id="tab-snake" aria-selected="false">Snake</button><button type="button" role="tab" id="tab-race" aria-selected="false">Racing</button></div>
<div id="g-ttt" class="game"><div class="gbar"><span>You <b id="ttt-you">0</b></span><span>Draws <b id="ttt-draw">0</b></span><span>Computer <b id="ttt-cpu">0</b></span></div><div id="ttt-grid" class="ttt"></div><p class="gmsg" id="ttt-msg" aria-live="polite"></p><button type="button" class="btn ghost sm" id="ttt-new">New game</button></div>
<div id="g-snake" class="game" hidden><div class="gbar"><span>Score <b id="snake-score">0</b></span><span>Best <b id="snake-best">0</b></span></div><div class="stage"><canvas id="snake-c" width="300" height="300" aria-label="Snake game"></canvas><div class="ov" id="snake-ov"><strong id="snake-ovt">Snake</strong><span id="snake-ovs"></span><button type="button" class="btn solid sm" id="snake-start">Start</button></div></div><div class="pad"><button type="button" id="s-up" aria-label="Up">&uarr;</button><div><button type="button" id="s-left" aria-label="Left">&larr;</button><button type="button" id="s-down" aria-label="Down">&darr;</button><button type="button" id="s-right" aria-label="Right">&rarr;</button></div></div></div>
<div id="g-race" class="game" hidden><div class="gbar"><span>Score <b id="race-score">0</b></span><span>Best <b id="race-best">0</b></span></div><div class="stage"><canvas id="race-c" width="300" height="400" aria-label="Racing game"></canvas><div class="ov" id="race-ov"><strong id="race-ovt">Racing</strong><span id="race-ovs"></span><button type="button" class="btn solid sm" id="race-start">Start</button></div></div><div class="pad row"><button type="button" id="r-left" aria-label="Move left">&larr;</button><button type="button" id="r-right" aria-label="Move right">&rarr;</button></div></div>
</div>
</div>
</div></section>`,
    script: `(function(){var f=document.getElementById("md-form"),err=document.getElementById("md-err"),ow=document.getElementById("md-otherWrap");
f.addEventListener("change",function(e){if(e.target.name==="niche"){ow.hidden=e.target.value!=="other";if(!ow.hidden)document.getElementById("md-other").focus()}});
function show(m){err.textContent=m;err.hidden=false}
f.addEventListener("submit",function(e){e.preventDefault();err.hidden=true;
var n=f.querySelector("input[name=niche]:checked").value;if(n==="other")n=document.getElementById("md-other").value.trim();
var name=document.getElementById("md-name").value.trim();
if(n.length<2){show("Please tell us your kind of business.");return}
if(name.length<2){show("Please enter your business name.");document.getElementById("md-name").focus();return}
f.hidden=true;var w=document.getElementById("md-wait");w.hidden=false;window.twShowGame("ttt");w.scrollIntoView({behavior:"smooth",block:"start"});
var st=document.getElementById("md-status"),h=document.getElementById("md-h"),p=document.getElementById("md-p"),o=document.getElementById("md-open");
fetch("${DEMO_API}",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({niche:n,name:name,city:document.getElementById("md-city").value,phone:document.getElementById("md-phone").value})})
.then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j}})})
.then(function(x){if(!x.ok||!x.j.url)throw new Error(x.j.error||"Something went wrong. Please try again.");
st.classList.add("ready");h.textContent="Your demo is ready";p.textContent="Click the button to open it. You can keep playing, the demo will wait.";o.href=x.j.url;o.hidden=false;o.focus();st.scrollIntoView({behavior:"smooth",block:"center"})})
.catch(function(er){st.classList.add("failed");h.textContent="We could not build the demo";p.textContent=er.message;o.textContent="Ask us on WhatsApp";o.href="https://wa.me/${WA}?text="+encodeURIComponent("Hi Team Work, please make a demo for my business: "+name+" ("+n+")");o.hidden=false})
})})();`,
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
<meta name="theme-color" content="#06080c">
<script>(function(){var d=document.documentElement;try{if(localStorage.getItem("tw-theme")==="light")d.setAttribute("data-theme","light")}catch(e){}try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)d.className="loading"}catch(e){}})();</script>
<link rel="icon" href="/logo-mark.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<div class="loader" aria-hidden="true"><div><span class="lgBox">${LOGO_SVG}<img src="/logo-mark.png" width="120" height="120" alt=""></span><p class="lgName"><span style="--k:0">T</span><span style="--k:1">e</span><span style="--k:2">a</span><span style="--k:3">m</span><span style="--k:4">W</span><span style="--k:5">o</span><span style="--k:6">r</span><span style="--k:7">k</span></p><p class="lgTag">together we can do so much</p><b id="ld-n">0%</b><i><u id="ld-b"></u></i></div></div>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap">
<a class="brand" href="/" aria-label="Team Work home"><img src="/logo-mark.png" width="40" height="40" alt=""><span>TeamWork</span></a>
<nav class="nav" aria-label="Main">${nav}</nav>
<button class="theme" id="theme" type="button" aria-label="Switch between dark and light"><svg class="sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg></button>
<a class="btn solid sm" href="/make-demo">Make your demo</a>
<details class="menu"><summary aria-label="Menu"><span></span></summary><nav aria-label="Mobile">${nav}<a href="/make-demo">Make your demo</a></nav></details>
</div></header>
<main id="main">${p.body}</main>
<footer class="foot"><div class="wrap">
<div class="fcol"><a class="brand" href="/"><img src="/logo-mark.png" width="44" height="44" alt=""><span>TeamWork</span></a><p>together we can do so much</p><p>Gurugram, Haryana, India</p></div>
<div class="fcol"><h2>Services</h2>${SERVICES.map((s) => `<a href="/${s.slug}">${s.name}</a>`).join("")}</div>
<div class="fcol"><h2>Company</h2><a href="/about">About</a><a href="/industries">Industries</a><a href="/how-we-work">How we work</a><a href="/pricing">Pricing</a><a href="/demos">Demos</a><a href="/make-demo">Make your demo</a><a href="/faq">Questions</a><a href="/contact">Contact</a></div>
<div class="fcol"><h2>Talk to us</h2><a href="${wa("Hi Team Work")}" target="_blank" rel="noopener">WhatsApp +91 95188 42774</a><a href="/privacy">Privacy policy</a><a href="/terms">Terms of service</a><a class="staff" href="${LOGIN}" rel="nofollow noopener">Team login</a></div>
</div><div class="wrap legal"><span>&copy; 2026 Team Work. All rights reserved.</span></div></footer>
${p.games ? '<script src="/games.js" defer></script>' : ""}
${p.script ? `<script>${p.script}</script>` : ""}
<script>(function(){var tb=document.getElementById("theme");if(tb)tb.addEventListener("click",function(){var d=document.documentElement,l=d.getAttribute("data-theme")==="light";if(l)d.removeAttribute("data-theme");else d.setAttribute("data-theme","light");try{localStorage.setItem("tw-theme",l?"dark":"light")}catch(e){}})})();</script>
<script>(function(){var de=document.documentElement,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(de.className.indexOf("loading")>-1){var n=document.getElementById("ld-n"),b=document.getElementById("ld-b"),t0=performance.now(),ready=document.readyState==="complete",done=false;addEventListener("load",function(){ready=true});
var fin=function(){if(done)return;done=true;de.classList.add("loaded");de.classList.remove("loading");setTimeout(function(){de.classList.remove("loaded")},700)};
var step=function(t){var k=Math.min(1,(t-t0)/5000),v=Math.round(k*(ready||t-t0>7000?100:92));n.textContent=v+"%";b.style.width=v+"%";if(v>=100)return setTimeout(fin,350);requestAnimationFrame(step)};requestAnimationFrame(step);setTimeout(fin,9000)}
if(rm||!("IntersectionObserver" in window))return;
var q=".sec h2,.sub,.rows li,.steps li,.svc li,.links li,.two>div,.ticks li,.faq details,.tableWrap,.band .wrap>*,.tri li,.stats li,.cities,.demoBand .wrap>*,.show h2,.form,.prose";
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);var c=e.target.querySelector("[data-count]");if(c)count(c)}})},{rootMargin:"0px 0px -8% 0px"});
[].slice.call(document.querySelectorAll(q)).forEach(function(el){var sib=el.parentNode?[].indexOf.call(el.parentNode.children,el):0;el.style.setProperty("--d",Math.min(sib,6)*80+"ms");el.classList.add("rv");io.observe(el)});
function count(el){var to=+el.getAttribute("data-count"),suf=el.getAttribute("data-suffix")||"",t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400);el.textContent=Math.round((1-Math.pow(1-k,3))*to)+suf;if(k<1)requestAnimationFrame(f)})(t0)}
var ps=[].slice.call(document.querySelectorAll("[data-p]")),say=document.querySelector(".say"),sp=say?say.querySelectorAll("span"):[],tick=false;
function f(){var vh=innerHeight;de.style.setProperty("--s",Math.min(1,scrollY/vh).toFixed(3));
ps.forEach(function(el){var r=el.getBoundingClientRect();el.style.setProperty("--p",Math.max(0,Math.min(1,(vh-r.top)/(vh+r.height))).toFixed(3))});
if(say){var r=say.getBoundingClientRect(),p=Math.max(0,Math.min(1,(vh*.82-r.top)/(r.height+vh*.3))),k=Math.round(p*sp.length);for(var i=0;i<sp.length;i++)sp[i].classList.toggle("on",i<k)}tick=false}
addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(f)}},{passive:true});addEventListener("resize",f);f()})();</script>
</body>
</html>`;
}

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
for (const p of pages) fs.writeFileSync(`dist/${p.slug}.html`, layout(p));
fs.copyFileSync("styles.css", "dist/styles.css");
fs.copyFileSync("games.js", "dist/games.js");
fs.copyFileSync("assets/logo-mark.png", "dist/logo-mark.png");
fs.writeFileSync("dist/robots.txt", "User-agent: *\nAllow: /\n");
console.log(`built ${pages.length} pages`);
