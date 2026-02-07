/**
 * SERVICE CATALOG STORE
 * Centralized data store for all TeamWork Solutions services.
 * Handles: Service Listing, Cart Management, Custom Quotes.
 */

const SERVICES_KEY = 'global_hrx_services';
const CART_KEY = 'global_hrx_cart';

// INITIAL SEED DATA (As per User Request)
const INITIAL_SERVICES = [
    {
        id: 'bulk-hiring',
        category: 'Recruitment',
        name: 'Bulk Hiring Service',
        shortDesc: 'High-volume recruitment for scaling teams rapidly.',
        fullDesc: 'End-to-end bulk recruitment solution designed for startups and enterprises needing to scale fast. We handle sourcing, screening, and scheduling for 50+ positions.',
        price: 'On Request',
        priceType: 'Volume Based',
        features: ['Dedicated Recruitment Team', 'Screening & L1 Interview', 'Onboarding Support', 'Replacement Guarantee'],
        icon: 'ph-users-three'
    },
    {
        id: 'recruitment-service',
        category: 'Recruitment',
        name: 'Recruitment Service',
        shortDesc: 'Strategic hiring for key roles and niche skills.',
        fullDesc: 'Focused recruitment for mid-to-senior level positions. We help you find the right talent with specific domain expertise.',
        price: '8.33% of CTC',
        priceType: 'Per Hire',
        features: ['Domain Specialist Recruiters', 'Background Verification Check', '3 Months Replacement', 'Candidate Engagement'],
        icon: 'ph-user-focus'
    },
    {
        id: 'white-collar',
        category: 'Recruitment',
        name: 'Professional & White-Collar Hiring',
        shortDesc: 'Premium talent acquisition for executive roles.',
        fullDesc: 'Executive search and headhunting for C-suite and top management roles. Confidential and precise.',
        price: '10-15% of CTC',
        priceType: 'Per Hire',
        features: ['Executive Search', 'Confidential Hiring', 'Leadership Assessment', 'Global Talent Pool'],
        icon: 'ph-briefcase'
    },
    {
        id: 'monthly-payroll',
        category: 'Payroll',
        name: 'Monthly Payroll Handling',
        shortDesc: 'Complete monthly payroll processing and taxation.',
        fullDesc: 'Outsource your entire payroll burden. We handle salary calculations, TDS, tax slips, and compliance reporting every month.',
        price: '₹150',
        priceType: 'Per Employee / Month',
        features: ['Salary Calculation', 'Tax Deductions (TDS/PT)', 'Payslip Generation', 'Bank Upload Files'],
        icon: 'ph-currency-inr'
    },
    {
        id: 'starter-payroll',
        category: 'Payroll',
        name: 'Starter Payroll Care (≤10 staff)',
        shortDesc: 'Affordable payroll package for small businesses.',
        fullDesc: 'Designed specifically for small teams under 10 employees. Flat rate for complete peace of mind.',
        price: '₹2,500',
        priceType: 'Flat / Month',
        features: ['Up to 10 Employees', 'Digital Payslips', 'Basic Compliance', 'Email Support'],
        icon: 'ph-rocket-launch'
    },
    {
        id: 'payroll-recruitment',
        category: 'Bundle',
        name: 'Payroll + Recruitment Solution',
        shortDesc: 'Integrated hiring and payroll management bundle.',
        fullDesc: 'The perfect starter pack. Hire through us and get 3 months of payroll processing for free for those candidates.',
        price: 'Custom Bundle',
        priceType: 'Custom',
        features: ['Discounted Recruitment Fees', 'Free Payroll Setup', 'Unified Dashboard', 'Priority Support'],
        icon: 'ph-intersect'
    },
    {
        id: 'small-hr-compliance',
        category: 'HR Services',
        name: 'Small Quick HR Services',
        shortDesc: 'Ad-hoc HR operational support for small needs.',
        fullDesc: 'Need an HR letter? Policy review? Grievance handling? Get quick HR support without hiring a full-time HR.',
        price: '₹5,000',
        priceType: 'Block of 10 Hours',
        features: ['HR Letters & Docs', 'Policy Operational Tasks', 'Employee Queries', 'Remote Support'],
        icon: 'ph-handshake'
    },
    {
        id: 'full-compliance',
        category: 'Compliance',
        name: 'Full Compliance Suite (10–50 staff)',
        shortDesc: 'Total statutory compliance coverage for growing/mid-sized orgs.',
        fullDesc: 'We take legal responsibility for your compliance. PF, ESIC, LWF, Shops & Est, and all monthly filings.',
        price: '₹8,000',
        priceType: 'Month',
        features: ['PF/ESIC Monthly Challans', 'Labor Law Registrations', 'Audit Support', 'Legal Updates'],
        icon: 'ph-shield-check'
    },
    {
        id: 'compliance-filing',
        category: 'Compliance',
        name: 'Compliance & PF/ESIC Filing',
        shortDesc: 'Filing-only service for established teams.',
        fullDesc: 'You do the calculation, we do the filing. Professional filing service for PF, ESIC, and PT.',
        price: '₹50',
        priceType: 'Per Employee / Month',
        features: ['Challan Generation', 'Return Filing', 'Error Correction', 'Record Maintenance'],
        icon: 'ph-file-text'
    },
    {
        id: 'hrms-setup',
        category: 'HRMS',
        name: 'HRMS Server Setup & Support',
        shortDesc: 'On-premise or Private Cloud HRMS deployment.',
        fullDesc: 'Deploy GlobalHRX on your own servers. Full white-label setup, security configuration, and annual maintenance.',
        price: 'Request Quote',
        priceType: 'One Time',
        features: ['Private Server Deployment', 'Brand Customization', 'Data Migration', 'Annual Maintenance Contract'],
        icon: 'ph-server'
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
