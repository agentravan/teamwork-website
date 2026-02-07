/**
 * SERVICE CATALOG STORE
 * Centralized data store for all TeamWork Solutions services.
 * Handles: Service Listing, Cart Management, Custom Quotes.
 */

const SERVICES_KEY = 'global_hrx_services';
const CART_KEY = 'global_hrx_cart';

// INITIAL SEED DATA (As per User Request)
// INITIAL SEED DATA (5-Pillar Structure)
const INITIAL_SERVICES = [
    {
        id: 'payroll',
        category: 'Payroll Management',
        name: 'Payroll Management Services',
        icon: 'ph-currency-dollar',
        shortDesc: 'End-to-end payroll processing with 100% accuracy and compliance.',
        // CONTENT PAGES (Information Only)
        subPages: [
            {
                id: 'overview',
                title: 'Payroll Management (Overview)',
                content: `
                    <h3>What We Do</h3>
                    <p>We deliver end-to-end payroll management services ensuring 100% accuracy, statutory compliance, and on-time salary processing.</p>
                    
                    <h4>Key Services</h4>
                    <ul>
                        <li>Salary processing (monthly / weekly)</li>
                        <li>Attendance & leave integration</li>
                        <li>Payslip & salary structure design</li>
                        <li>Reimbursement & arrears handling</li>
                        <li>Final settlement (F&F)</li>
                        <li>Payroll MIS & reports</li>
                    </ul>

                    <h4>Benefits</h4>
                    <ul>
                        <li>Zero payroll errors</li>
                        <li>Fully compliant payroll</li>
                        <li>Confidential & secure processing</li>
                        <li>Scalable for any workforce size</li>
                    </ul>
                `
            },
            {
                id: 'processing',
                title: 'Payroll Processing & Automation',
                content: `
                    <h3>Core Processing Engine</h3>
                    <ul>
                        <li>Gross-to-net calculation</li>
                        <li>Variable pay & incentives management</li>
                        <li>Overtime & shift allowance logic</li>
                        <li>Bonus & ex-gratia processing</li>
                        <li>Automated salary sheets generation</li>
                        <li>Bank transfer files (generic & bank-specific)</li>
                    </ul>
                `
            },
            {
                id: 'compliance',
                title: 'Payroll Compliance Support',
                content: `
                    <h3>Statutory Excellence</h3>
                    <ul>
                        <li>PF, ESIC, PT, LWF calculation</li>
                        <li>Challans & returns generation and filing</li>
                        <li>Monthly & annual filings</li>
                        <li>Audit support & advisory</li>
                        <li>Notices & inspections handling</li>
                    </ul>
                `
            },
            {
                id: 'reporting',
                title: 'Payroll Reporting & Analytics',
                content: `
                    <h3>Data-Driven Insights</h3>
                    <ul>
                        <li>Payroll cost analysis</li>
                        <li>Department-wise payroll segmentation</li>
                        <li>Compliance MIS reports</li>
                        <li>Yearly payroll summaries (Form 16 ready)</li>
                    </ul>
                `
            },
            {
                id: 'faq',
                title: 'Payroll FAQ & Use Cases',
                content: `
                    <h3>Who is this for?</h3>
                    <ul>
                        <li><strong>SMEs & Startups:</strong> Streamline operations without a dedicated payroll team.</li>
                        <li><strong>Enterprises:</strong> Manage multi-location complexity.</li>
                    </ul>
                    <h4>Capabilities</h4>
                    <ul>
                        <li>Manufacturing workforce payroll</li>
                        <li>IT & Services payroll</li>
                        <li>Sales workforce incentive structures</li>
                        <li>Multi-location payroll handling</li>
                    </ul>
                `
            }
        ],
        // PRICING PLANS (Detailed)
        pricingPlans: [
            {
                name: 'Starter Payroll',
                price: '₹3,999 / month',
                features: ['Up to 10 employees', 'Salary sheets', 'Payslips', 'Basic compliance']
            },
            {
                name: 'Growth Payroll',
                price: '₹5,499 / month',
                features: ['Up to 25 employees', 'Attendance integration', 'PF & ESIC filing', 'Monthly MIS']
            },
            {
                name: 'Professional Payroll',
                price: '₹7,999 / month',
                features: ['Up to 50 employees', 'Full compliance', 'F&F settlement', 'Payroll analytics']
            },
            {
                name: 'Enterprise Payroll',
                price: 'Custom Pricing',
                isCustom: true,
                features: ['Unlimited employees', 'Multi-location payroll', 'Audit & inspection support', 'Dedicated payroll manager']
            }
        ]
    },
    {
        id: 'compliance',
        category: 'Compliance',
        name: 'Compliance Outsourcing Services',
        icon: 'ph-shield-check',
        shortDesc: 'Manage complete statutory compliance so you stay legally safe without stress.',
        subPages: [
            {
                id: 'overview',
                title: 'Compliance Overview',
                content: `
                    <h3>We manage complete statutory compliance</h3>
                    <p>Stay legally safe without stress. We handle the complexities of Indian labor laws so you can focus on business.</p>
                    
                    <h4>Compliance Covered</h4>
                    <ul>
                        <li>Provident Fund (PF)</li>
                        <li>Employee State Insurance (ESIC)</li>
                        <li>Professional Tax (PT)</li>
                        <li>Labour Welfare Fund (LWF)</li>
                        <li>Contract Labour (Regulation & Abolition) Act (CLRA)</li>
                        <li>Factory Act Compliance</li>
                        <li>Shops & Establishment Act</li>
                    </ul>
                `
            },
            {
                id: 'monthly',
                title: 'Monthly Statutory Compliance',
                content: `
                    <p>Routine filing and challan generation to ensure zero penalties.</p>
                    <ul>
                        <li>Monthly Challan Generation (PF/ESIC/PT)</li>
                        <li>Employee Mapping & KYP</li>
                        <li>UAN Generation & Linking</li>
                        <li>Monthly Return Filing</li>
                    </ul>
                `
            },
            {
                id: 'registrations',
                title: 'Registrations & Amendments',
                content: `
                    <p>End-to-end support for new registrations and changes.</p>
                    <ul>
                        <li>New Code Allocation (PF/ESIC)</li>
                        <li>Shops & Establishment Registration</li>
                        <li>Factory License</li>
                        <li>PAN/TAN updates</li>
                    </ul>
                `
            },
            {
                id: 'audit',
                title: 'Audit & Inspection Support',
                content: `
                    <p>Be audit-ready at all times.</p>
                    <ul>
                        <li>Pre-audit health checkups</li>
                        <li>Representation during inspections</li>
                        <li>Record reconstruction</li>
                        <li>Notices handling</li>
                    </ul>
                `
            },
            {
                id: 'advisory',
                title: 'Legal Notices & Advisory',
                content: `
                    <p>Expert legal counsel for labor law matters.</p>
                    <ul>
                        <li>Drafting responses to legal notices</li>
                        <li>Advisory on law amendments</li>
                        <li>Risk assessment</li>
                    </ul>
                `
            }
        ],
        pricingPlans: [
            {
                name: 'Basic Compliance',
                price: '₹2,499 / month',
                features: ['PF or ESIC (any one)', 'Challans & returns']
            },
            {
                name: 'Standard Compliance',
                price: '₹4,999 / month',
                features: ['PF + ESIC', 'PT & LWF']
            },
            {
                name: 'Advanced Compliance',
                price: '₹6,999 / month',
                features: ['All compliances', 'Audit support']
            },
            {
                name: 'Enterprise Compliance',
                price: 'Custom Plan',
                isCustom: true,
                features: ['Multi-state', 'Factory + CLRA', 'Legal advisory']
            }
        ]
    },
    {
        id: 'recruitment',
        category: 'Recruitment',
        name: 'Recruitment Services',
        icon: 'ph-users-three',
        shortDesc: 'End-to-end hiring solutions for startups, SMEs, and enterprises.',
        subPages: [
            {
                id: 'overview',
                title: 'Recruitment Overview',
                content: `
                    <h3>End-to-End Hiring Solutions</h3>
                    <p>We provide comprehensive recruitment services tailored for startups, SMEs, and enterprises, ensuring you get the right talent at the right time.</p>
                `
            },
            {
                id: 'bulk',
                title: 'Bulk Hiring',
                content: `
                    <h4>Rapid Scaling Support</h4>
                    <ul>
                        <li>Factory workforce recruitment</li>
                        <li>Sales promoters & feet-on-street</li>
                        <li>BPO & support staff</li>
                        <li>Campus hiring drives</li>
                    </ul>
                `
            },
            {
                id: 'white-collar',
                title: 'White-Collar Hiring',
                content: `
                    <h4>Professional Talent Acquisition</h4>
                    <ul>
                        <li>HR Professionals</li>
                        <li>Accounts & Finance</li>
                        <li>Sales Managers</li>
                        <li>Engineers & Technical Staff</li>
                        <li>IT Professionals</li>
                    </ul>
                `
            },
            {
                id: 'executive',
                title: 'Executive & Leadership Hiring',
                content: `
                    <h4>Leadership Search</h4>
                    <ul>
                        <li>Senior Managers & Directors</li>
                        <li>CXO Support (CEO, CTO, CFO)</li>
                        <li>Confidential Hiring mandates</li>
                    </ul>
                `
            },
            {
                id: 'sla',
                title: 'Recruitment Process & SLA',
                content: `
                    <h4>Our Methodology</h4>
                    <ol>
                        <li><strong>JD Understanding:</strong> Deep dive into role requirements.</li>
                        <li><strong>Screening:</strong> Multi-level candidate filtering.</li>
                        <li><strong>Interview Coordination:</strong> Seamless scheduling.</li>
                        <li><strong>Offer Rollout:</strong> Salary negotiation and structuring.</li>
                        <li><strong>Joining Assurance:</strong> Post-offer engagement.</li>
                    </ol>
                `
            }
        ],
        pricingPlans: [
            {
                name: 'Bulk Hiring',
                price: '₹5,000 – ₹8,000',
                priceUnit: 'per hire',
                features: ['Volume hiring', 'Factory/Sales roles']
            },
            {
                name: 'White-Collar Hiring',
                price: '₹6,000 – ₹12,000',
                priceUnit: 'per hire',
                features: ['Mid-level professionals', 'Domain experts']
            },
            {
                name: 'Executive Hiring',
                price: '8% – 15%',
                priceUnit: 'of CTC',
                features: ['Leadership roles', 'Headhunting']
            },
            {
                name: 'Enterprise Hiring',
                price: 'Custom Pricing',
                isCustom: true,
                features: ['Volume discounts', 'Dedicated recruiter']
            }
        ]
    },
    {
        id: 'policy',
        category: 'HR Services',
        name: 'HR Policy & Audit Services',
        icon: 'ph-book-bookmark',
        shortDesc: 'Robust HR frameworks, labor audits, and risk mitigation strategies.',
        subPages: [
            {
                id: 'policy',
                title: 'HR Policy Design',
                content: `
                    <p>Customized HR handbooks and policy manuals aligning with your company culture and law.</p>
                `
            },
            {
                id: 'audit',
                title: 'Labour Law Audit',
                content: `
                    <p>Comprehensive check of statutory records to identify risks and liabilities.</p>
                `
            },
            {
                id: 'docs',
                title: 'HR Documentation',
                content: `
                    <p>Offer letters, appointment letters, NDAs, PIPs, and exit documentation.</p>
                `
            },
            {
                id: 'gap',
                title: 'Compliance Gap Analysis',
                content: `
                    <p>Identifying the delta between current practices and legal requirements.</p>
                `
            },
            {
                id: 'implementation',
                title: 'Implementation Support',
                content: `
                    <p>Hand-holding your team to implement new policies effectively.</p>
                `
            }
        ],
        pricingPlans: [
            {
                name: 'HR Policy Starter',
                price: '₹9,999',
                priceUnit: 'one-time',
                features: ['Standard Employee Handbook', 'Basic Policies']
            },
            {
                name: 'HR Audit',
                price: '₹14,999',
                priceUnit: 'one-time',
                features: ['Statutory Health Check', 'Risk Report']
            },
            {
                name: 'Full HR Compliance Audit',
                price: '₹24,999',
                features: ['Deep Dive Audit', 'Gap Analysis', 'Correction Plan']
            },
            {
                name: 'Enterprise HR Audit',
                price: 'Custom Pricing',
                isCustom: true,
                features: ['Multi-location', 'Complex Structure']
            }
        ]
    },
    {
        id: 'hrms',
        category: 'HRMS',
        name: 'GlobalHRX HRMS Software',
        icon: 'ph-desktop',
        shortDesc: 'An enterprise-grade HRMS covering HR, payroll, attendance, recruitment, compliance & analytics.',
        subPages: [
            {
                id: 'overview',
                title: 'HRMS Overview',
                content: `
                    <p>GlobalHRX is an enterprise-grade HRMS covering HR, payroll, attendance, recruitment, compliance & analytics in one unified platform.</p>
                `
            },
            {
                id: 'modules',
                title: 'Core Modules',
                content: `
                    <ul>
                        <li>Employee Master Database</li>
                        <li>Attendance & Leave Management</li>
                        <li>Payroll Engine (Automated)</li>
                        <li>Recruitment ATS</li>
                    </ul>
                `
            },
            {
                id: 'engine',
                title: 'Compliance Engine',
                content: `
                    <p>Built-in statutory compliance checks to ensure your payroll is always legal.</p>
                `
            },
            {
                id: 'analytics',
                title: 'Analytics Dashboard',
                content: `
                    <p>Real-time insights into headcount, costs, attrition, and performance.</p>
                `
            },
            {
                id: 'tech',
                title: 'Technology & Security',
                content: `
                    <p>Cloud-based (or On-premise), secure, and scalable architecture.</p>
                `
            }
        ],
        pricingPlans: [
            {
                name: 'HRMS Basic',
                price: '₹49',
                priceUnit: '/ emp / month',
                features: ['Core HR', 'Leave & attendance']
            },
            {
                name: 'HRMS Standard',
                price: '₹79',
                priceUnit: '/ emp / month',
                features: ['Payroll', 'Reports', 'ESS portal']
            },
            {
                name: 'HRMS Professional',
                price: '₹119',
                priceUnit: '/ emp / month',
                features: ['Compliance', 'Recruitment', 'Analytics']
            },
            {
                name: 'HRMS Enterprise',
                price: 'Custom Pricing',
                isCustom: true,
                features: ['Multi-entity', 'API integration', 'Dedicated support']
            }
        ]
    }
];

const ServiceStore = {
    // --- DATA MANAGEMENT ---
    init: function () {
        if (!localStorage.getItem(SERVICES_KEY)) {
            localStorage.setItem(SERVICES_KEY, JSON.stringify(INITIAL_SERVICES));
        }
    },

    getAllServices: function () {
        this.init();
        return JSON.parse(localStorage.getItem(SERVICES_KEY));
    },

    getServiceById: function (id) {
        const services = this.getAllServices();
        return services.find(s => s.id === id);
    },

    // --- CART / QUOTE MANAGEMENT ---
    getCart: function () {
        return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    },

    addToCart: function (serviceId) {
        let cart = this.getCart();
        if (!cart.includes(serviceId)) {
            cart.push(serviceId);
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            this.updateCartCount();
            alert('Service added to Quote Request!');
        } else {
            alert('Service is already in your quote list.');
        }
    },

    removeFromCart: function (serviceId) {
        let cart = this.getCart();
        cart = cart.filter(id => id !== serviceId);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        this.updateCartCount();
        return cart; // return updated for UI rendering
    },

    clearCart: function () {
        localStorage.removeItem(CART_KEY);
        this.updateCartCount();
    },

    updateCartCount: function () {
        const cart = this.getCart();
        const countEl = document.getElementById('quote-count');
        if (countEl) {
            countEl.innerText = cart.length;
            countEl.style.display = cart.length > 0 ? 'inline-block' : 'none';
        }
    },

    // --- EMAIL GENERATION ---
    generateEmailLink: function (formData) {
        const cart = this.getCart();
        const services = this.getAllServices().filter(s => cart.includes(s.id));
        const serviceNames = services.map(s => `- ${s.name} (${s.priceType})`).join('%0D%0A');

        const recipient = 'teamwork.hrsolution@zohomail.in';
        const subject = `New Custom Package Request - ${formData.companyName}`;

        let body = `Dear TeamWork Solutions,%0D%0A%0D%0A`;
        body += `I would like to request a quote for the following services:%0D%0A`;
        body += `${serviceNames}%0D%0A%0D%0A`;
        body += `--- Client Details ---%0D%0A`;
        body += `Company: ${formData.companyName}%0D%0A`;
        body += `Contact Person: ${formData.contactName}%0D%0A`;
        body += `Email: ${formData.email}%0D%0A`;
        body += `Phone: ${formData.phone}%0D%0A`;
        body += `Employee Count: ${formData.empCount}%0D%0A`;
        body += `Requirements: ${formData.requirements}%0D%0A`;

        return `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
};

// Initialize on load
ServiceStore.init();
