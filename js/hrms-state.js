/**
 * HRMS STATE MANAGER
 * Handles localStorage persistence, system reset, and data retrieval.
 */

const HRMS_STATE_KEY = 'global_hrx_state';
const HRMS_SESSION_KEY = 'global_hrx_session';

const DEFAULT_SUPER_ADMIN = {
    id: 'ADMIN_001',
    name: 'Super Admin',
    email: 'admin@globalhrx.com',
    role: 'Super Admin',
    permissions: ['*'], // Access to everything
    avatar: 'ph-student'
};

const HRMS = {
    // --- AUTHENTICATION ---
    login: function (email, password) {
        // In a real app, verify password. Here, we allow access.
        // If it's the first time or specific admin email, ensure Super Admin is set up.
        if (email.toLowerCase() === 'admin@globalhrx.com' || !this.getSystemState()) {
            this.provisionSuperAdmin();
        }

        const user = {
            email: email,
            role: email.toLowerCase().includes('admin') ? 'Super Admin' : 'Employee',
            name: email.split('@')[0].toUpperCase(),
            loginTime: new Date().toISOString()
        };

        localStorage.setItem(HRMS_SESSION_KEY, JSON.stringify(user));
        return user;
    },

    logout: function () {
        localStorage.removeItem(HRMS_SESSION_KEY);
        window.location.href = 'login-hrx.html';
    },

    getCurrentUser: function () {
        return JSON.parse(localStorage.getItem(HRMS_SESSION_KEY));
    },

    // --- SYSTEM GOVERNANCE ---
    provisionSuperAdmin: function () {
        // RESET SYSTEM DATA but keep structure
        const emptyState = {
            users: [DEFAULT_SUPER_ADMIN],
            modules: {}, // Will house data for each module ID
            config: {
                companyName: 'TeamWork Solutions',
                setupComplete: true,
                version: '2.0.0'
            },
            logs: []
        };

        // Initialize empty arrays for all known modules (from dashboard.js if accessible, or lazy load)
        // We will do lazy persistence: if a module needs data, it creates the array.

        localStorage.setItem(HRMS_STATE_KEY, JSON.stringify(emptyState));
        console.log("System Provisioned: Super Admin Ready. Zero Data Mode.");
    },

    resetSystem: function () {
        console.warn("WARNING: Performing Full System Reset...");
        localStorage.removeItem(HRMS_STATE_KEY);
        this.provisionSuperAdmin();
        alert("System HRMS has been reset to Factory Settings (Fresh Super Admin).");
        window.location.reload();
    },

    // --- DATA ACCESS ---
    getSystemState: function () {
        return JSON.parse(localStorage.getItem(HRMS_STATE_KEY));
    },

    saveSystemState: function (state) {
        localStorage.setItem(HRMS_STATE_KEY, JSON.stringify(state));
    },

    // Get records for a specific module
    getModuleData: function (moduleId) {
        const state = this.getSystemState();
        if (!state || !state.modules) return [];
        return state.modules[moduleId] || [];
    },

    // Add a record to a module
    addRecord: function (moduleId, record) {
        const state = this.getSystemState() || { modules: {} };
        if (!state.modules[moduleId]) state.modules[moduleId] = [];

        // Add Metadata
        record.id = record.id || `REC-${Date.now()}`;
        record.createdAt = new Date().toISOString();
        record.createdBy = this.getCurrentUser().email;

        state.modules[moduleId].unshift(record);
        this.saveSystemState(state);
        return record;
    },

    // Delete record
    deleteRecord: function (moduleId, recordId) {
        const state = this.getSystemState();
        if (!state.modules[moduleId]) return;
        state.modules[moduleId] = state.modules[moduleId].filter(r => r.id !== recordId);
        this.saveSystemState(state);
    }
};

// Auto-initialize if empty
if (!localStorage.getItem(HRMS_STATE_KEY)) {
    HRMS.provisionSuperAdmin();
}
