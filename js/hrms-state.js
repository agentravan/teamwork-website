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
        log: function (actorId, action, details) {
            const logEntry = {
                id: 'LOG_' + Date.now(),
                timestamp: new Date().toISOString(),
                actorId: actorId,
                action: action,
                details: details
            };
            HRMS_STATE.db.auditLogs.unshift(logEntry);
            HRMS_STATE.persist();
        },
        getLogs: function () {
            return HRMS_STATE.db.auditLogs;
        }
    },

    // --- TENANT MANAGEMENT SERVICE ---
    tenants: {
        getAll: function () {
            return HRMS_STATE.db.tenants;
        },
        create: function (tenantData) {
            const newTenant = {
                id: 'T_' + Date.now(),
                status: 'ACTIVE',
                joinedDate: new Date().toISOString(),
                employees: 0,
                revenue: tenantData.planPrice || 0,
                ...tenantData
            };
            HRMS_STATE.db.tenants.push(newTenant);
            HRMS_STATE.audit.log('SA_001', 'CREATE_TENANT', `Created tenant ${newTenant.name}`);
            HRMS_STATE.persist();
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
        getJobs: function () {
            // Sync with existing public localStorage key 'jobs'
            const existing = JSON.parse(localStorage.getItem('jobs')) || [];
            return existing;
        },
        addJob: function (jobData) {
            const jobs = this.getJobs();
            const newJob = {
                id: Date.now(),
                status: 'Open', // Default to Open (Active)
                applications: 0,
                type: 'Full Time',
                exp: '0-2 Years',
                ...jobData
            };
            jobs.unshift(newJob);
            localStorage.setItem('jobs', JSON.stringify(jobs));

            // Also log to audit
            HRMS_STATE.audit.log(HRMS_STATE.auth.getCurrentUser().id, 'POST_JOB', `Posted job: ${newJob.title}`);
            return newJob;
        },
        updateStatus: function (jobId, status) {
            const jobs = this.getJobs();
            const job = jobs.find(j => j.id === jobId);
            if (job) {
                job.status = status;
                localStorage.setItem('jobs', JSON.stringify(jobs));
                HRMS_STATE.audit.log(HRMS_STATE.auth.getCurrentUser().id, 'UPDATE_JOB', `Updated job ${jobId} status to ${status}`);
            }
        },
        deleteJob: function (jobId) {
            let jobs = this.getJobs();
            jobs = jobs.filter(j => j.id !== jobId);
            localStorage.setItem('jobs', JSON.stringify(jobs));
        },
        // Applicant Tracking
        getApplications: function () {
            return JSON.parse(localStorage.getItem('applications')) || [];
        },
        getSavedCandidates: function () {
            return JSON.parse(localStorage.getItem('savedCandidates')) || [];
        },
        toggleSaveCandidate: function (candidateId) {
            let saved = this.getSavedCandidates();
            if (saved.includes(candidateId)) {
                saved = saved.filter(id => id !== candidateId);
            } else {
                saved.push(candidateId);
            }
            localStorage.setItem('savedCandidates', JSON.stringify(saved));
            return saved.includes(candidateId);
        },
        getStats: function () {
            const jobs = this.getJobs();
            const apps = this.getApplications();
            const saved = this.getSavedCandidates();

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
