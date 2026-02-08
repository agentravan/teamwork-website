/**
 * GlobalHRX Enterprise SaaS - Core State Management
 * VERSION: 2.1 (STRICT RESET)
 * 
 * STRICT RULES:
 * 1. NO Dummy Data.
 * 2. NO Auto-generated content.
 * 3. NO Hardcoded Users (not even Super Admin).
 * 4. Single Source of Truth: 'hrms_core_db' in localStorage.
 */

const HRMS_STATE = {
    // --- DATABASE (In-Memory synced to LocalStorage) ---
    db: {
        users: [],        // Unified User Registry 
        tenants: [],      // Recruiters/Companies
        jobs: [],         // Global Job Registry
        applications: [], // Global Candidate Registry
        auditLogs: [],    // Security Logs
        messages: []      // Internal System Messaging
    },

    // --- INITIALIZATION ---
    init: function () {
        // Load from storage or start clean
        const savedDB = localStorage.getItem('hrms_core_db');
        if (savedDB) {
            this.db = { ...this.db, ...JSON.parse(savedDB) };
        }
        // NO DEFAULT SUPER ADMIN CREATION
    },

    save: function () {
        localStorage.setItem('hrms_core_db', JSON.stringify(this.db));
    },

    wipe: function () {
        localStorage.removeItem('hrms_core_db');
        localStorage.removeItem('hrms_session');
        window.location.href = 'index.html';
    },

    // --- AUTHENTICATION SERVICE ---
    auth: {
        login: function (email, password) {
            // Check Database Users (Unified)
            // Since we have no hardcoded users, we check the 'users' array or 'tenants' array

            // 1. Check Tenants (Recruiters)
            const tenant = HRMS_STATE.db.tenants.find(t => t.email === email && t.password === password && t.status === 'ACTIVE');
            if (tenant) {
                const user = {
                    id: tenant.id,
                    name: tenant.name,
                    email: tenant.email,
                    role: 'RECRUITER',
                    plan: tenant.plan
                };
                this.createSession(user);
                return user;
            }

            // 2. Check Generic Users (e.g. Employee, Future Super Admin if stored in DB)
            const user = HRMS_STATE.db.users.find(u => u.email === email && u.password === password);
            if (user) {
                const sessionUser = { ...user };
                delete sessionUser.password;
                this.createSession(sessionUser);
                return sessionUser;
            }

            return null;
        },

        createSession: function (user) {
            localStorage.setItem('hrms_session', JSON.stringify(user));
            HRMS_STATE.audit.log(user.id, 'LOGIN', `User ${user.email} logged in`);
        },

        logout: function () {
            const user = this.getCurrentUser();
            if (user) HRMS_STATE.audit.log(user.id, 'LOGOUT', 'User logged out');
            localStorage.removeItem('hrms_session');
            window.location.reload();
        },

        getCurrentUser: function () {
            return JSON.parse(localStorage.getItem('hrms_session'));
        },

        requireAuth: function (requiredRole) {
            const user = this.getCurrentUser();
            if (!user) {
                // If no user, maybe redirect to logic page? 
                // But pages are deleted now. Just return null.
                return null;
            }
            if (requiredRole && user.role !== requiredRole) {
                alert('Access Denied');
                return null;
            }
            return user;
        },

        // Helper to register the FIRST super admin if none exist (Bootstrapping)
        registerSuperAdmin: function (name, email, password) {
            if (HRMS_STATE.db.users.some(u => u.role === 'SUPER_ADMIN')) {
                return { success: false, message: 'Super Admin already exists.' };
            }
            const newAdmin = {
                id: 'SA_' + Date.now(),
                name,
                email,
                password, // In real app: Hash this
                role: 'SUPER_ADMIN',
                joinedDate: new Date().toISOString()
            };
            HRMS_STATE.db.users.push(newAdmin);
            HRMS_STATE.save();
            return { success: true, user: newAdmin };
        }
    },

    // --- TENANTS (Recruiters) ---
    tenants: {
        getAll: function () {
            return HRMS_STATE.db.tenants;
        },
        create: function (data) {
            constnewTenant = {
                id: 'T_' + Date.now(),
                joinedDate: new Date().toISOString(),
                status: 'ACTIVE',
                ...data
            };
            HRMS_STATE.db.tenants.unshift(newTenant);
            HRMS_STATE.save();
            HRMS_STATE.audit.log('SUPER_ADMIN', 'CREATE_TENANT', `Created tenant: ${data.name}`);
            return newTenant;
        },
        updateStatus: function (id, status) {
            const t = HRMS_STATE.db.tenants.find(x => x.id === id);
            if (t) {
                t.status = status;
                HRMS_STATE.save();
            }
        },
        deactivate: function (id) {
            const t = HRMS_STATE.db.tenants.find(x => x.id === id);
            if (t) {
                t.status = 'INACTIVE';
                HRMS_STATE.save();
            }
        }
    },

    // --- JOBS ---
    jobs: {
        post: function (jobData, recruiterId) {
            const newJob = {
                id: 'J_' + Date.now(),
                postedDate: new Date().toISOString(),
                status: 'OPEN',
                recruiterId: recruiterId,
                applications: 0,
                ...jobData
            };
            HRMS_STATE.db.jobs.unshift(newJob);
            HRMS_STATE.save();
            HRMS_STATE.audit.log(recruiterId, 'POST_JOB', `Posted job: ${jobData.title}`);
            return newJob;
        },
        getAll: function () {
            return HRMS_STATE.db.jobs;
        },
        getByRecruiter: function (recruiterId) {
            return HRMS_STATE.db.jobs.filter(j => j.recruiterId === recruiterId);
        },
        deleteJob: function (jobId) {
            const j = HRMS_STATE.db.jobs.find(x => x.id === jobId);
            if (j) {
                j.status = 'CLOSED';
                HRMS_STATE.save();
            }
        }
    },

    // --- APPLICATIONS ---
    applications: {
        submit: function (appData) {
            const newApp = {
                id: 'A_' + Date.now(),
                appliedDate: new Date().toISOString(),
                status: 'NEW',
                score: 0,
                ...appData
            };

            HRMS_STATE.db.applications.unshift(newApp);

            // Update Job Counter
            const job = HRMS_STATE.db.jobs.find(j => j.id === appData.jobId);
            if (job) job.applications++;

            HRMS_STATE.save();
            return newApp;
        },
        getByJob: function (jobId) {
            return HRMS_STATE.db.applications.filter(a => a.jobId === jobId);
        }
    },

    // --- AUDIT ---
    audit: {
        log: function (userId, action, details) {
            const entry = {
                id: 'L_' + Date.now(),
                timestamp: new Date().toISOString(),
                userId, action, details
            };
            HRMS_STATE.db.auditLogs.unshift(entry);
            if (HRMS_STATE.db.auditLogs.length > 500) HRMS_STATE.db.auditLogs.pop();
            HRMS_STATE.save();
        },
        get: function () {
            return HRMS_STATE.db.auditLogs;
        }
    }
};

// Initialize on Load
HRMS_STATE.init();
