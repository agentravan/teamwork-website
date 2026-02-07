/**
 * GlobalHRX Enterprise SaaS - State Management System
 * Simulates Backend Database, Auth, and Business Logic
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
        tenants: [
            {
                id: 'T_001',
                name: 'Acme Corp Pvt Ltd',
                plan: 'ENTERPRISE',
                status: 'ACTIVE',
                employees: 1250,
                nextBilling: '2026-03-01',
                revenue: 125000, // Monthly
                adminEmail: 'hr@acmecorp.com'
            },
            {
                id: 'T_002',
                name: 'TechFlow Systems',
                plan: 'PROFESSIONAL',
                status: 'ACTIVE',
                employees: 85,
                nextBilling: '2026-03-01',
                revenue: 10200,
                adminEmail: 'admin@techflow.io'
            },
            {
                id: 'T_003',
                name: 'Stark Industries India',
                plan: 'ENTERPRISE',
                status: 'SUSPENDED', // Non-payment
                employees: 5000,
                nextBilling: '2026-02-01', // Overdue
                revenue: 500000,
                adminEmail: 'tony@stark.com'
            }
        ],
        accessRequests: [
            { id: 'R_991', company: 'Nexus AI', contact: 'Priya S', email: 'priya@nexus.ai', status: 'PENDING', date: '2026-02-07' },
            { id: 'R_992', company: 'Vortex Logistics', contact: 'Rahul K', email: 'rahul@vortex.com', status: 'APPROVED', date: '2026-02-06' }
        ]
    },

    // --- AUTH SERVICE ---
    auth: {
        login: function (email, password) {
            // Check Super Admin
            if (email === HRMS_STATE.db.superAdmin.email && password === HRMS_STATE.db.superAdmin.password) {
                const user = { ...HRMS_STATE.db.superAdmin };
                delete user.password; // Don't return password
                localStorage.setItem('hrms_user', JSON.stringify(user));
                return user;
            }
            // Future: Check Tenant Admins
            return null;
        },
        logout: function () {
            localStorage.removeItem('hrms_user');
            window.location.href = 'super-admin-login.html';
        },
        getCurrentUser: function () {
            return JSON.parse(localStorage.getItem('hrms_user'));
        },
        checkSession: function () {
            const user = this.getCurrentUser();
            if (!user) {
                window.location.href = 'super-admin-login.html';
                return null;
            }
            return user;
        }
    },

    // --- TENANT MANAGEMENT SERVICE ---
    tenants: {
        getAll: function () {
            return HRMS_STATE.db.tenants;
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

    // --- ACCESS REQUEST SERVICE ---
    requests: {
        getPending: function () {
            return HRMS_STATE.db.accessRequests.filter(r => r.status === 'PENDING');
        },
        approve: function (requestId) {
            // Simulate approval logic
            const req = HRMS_STATE.db.accessRequests.find(r => r.id === requestId);
            if (req) req.status = 'APPROVED';
            return true;
        }
    }
};

// Auto-initialize if needed
if (!localStorage.getItem('global_hrx_init')) {
    console.log('GlobalHRX System Initialized');
    localStorage.setItem('global_hrx_init', 'true');
}
