/**
 * GlobalHRX Dashboard Controller
 * Handles UI rendering based on User Role (Super Admin vs Client Admin)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verify Session
    const user = HRMS_STATE.auth.checkSession();
    if (!user) return; // Redirect handled by checkSession

    // 2. Initialize UI
    renderSidebar(user);
    renderHeader(user);

    // 3. Load Default View
    if (user.role === 'SUPER_ADMIN') {
        renderSuperAdminDashboard();
    } else {
        renderClientDashboard();
    }
});

// --- RENDERERS ---

function renderHeader(user) {
    // Update Profile Section
    // (Assuming structure exists in HTML, or we could inject it)
}

function renderSidebar(user) {
    const sidebar = document.getElementById('dynamic-sidebar');
    let menuItems = [];

    if (user.role === 'SUPER_ADMIN') {
        menuItems = [
            { icon: 'ph-squares-four', label: 'Platform Overview', active: true, view: 'overview' },
            { icon: 'ph-users-three', label: 'Tenant Management', active: false, view: 'tenants' },
            { icon: 'ph-briefcase', label: 'Global Job Monitor', active: false, view: 'global-jobs' },
            { icon: 'ph-identification-card', label: 'Global Candidate DB', active: false, view: 'global-candidates' },
            { icon: 'ph-file-text', label: 'Audit Logs', active: false, view: 'audit-logs' },
            { icon: 'ph-chart-line-up', label: 'Revenue Analytics', active: false, view: 'revenue' },
            { icon: 'ph-gear', label: 'System Settings', active: false, view: 'settings' }
        ];
    } else {
        // ... (client menu remains same)

        // ...

        function switchView(viewName) {
            // Handling view switching
            if (viewName === 'overview') {
                renderSuperAdminDashboard();
            } else if (viewName === 'tenants') {
                renderTenantManagement();
            } else if (viewName === 'global-jobs') {
                renderGlobalJobs();
            } else if (viewName === 'global-candidates') {
                renderGlobalCandidates();
            } else if (viewName === 'audit-logs') {
                renderAuditLogs();
            } else {
                const content = document.getElementById('dynamic-content');
                content.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-tertiary);">Module '${viewName}' is under construction.</div>`;
            }
        }

        // --- NEW RENDERERS ---

        function renderGlobalJobs() {
            const content = document.getElementById('dynamic-content');
            const jobs = HRMS_STATE.recruitment.getJobs(); // No ID = All Jobs

            content.innerHTML = `
        <div class="dashboard-header" style="margin-bottom: 30px;">
            <h1 style="color: white; font-size: 1.8rem;">Global Job Monitor</h1>
            <p style="color: var(--text-tertiary);">View and control job postings across all client organizations.</p>
        </div>

        <div style="background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(255,255,255,0.02); text-align: left;">
                         <th style="padding: 15px; color: var(--text-secondary);">Job Title</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Client / Posted By</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Applicants</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Status</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Controls</th>
                    </tr>
                </thead>
                <tbody>
                    ${jobs.length > 0 ? jobs.map(j => `
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 15px; color: white;">
                                ${j.title}
                                <div style="font-size: 0.8rem; color: var(--text-tertiary);">${j.loc} • ${j.type}</div>
                            </td>
                            <td style="padding: 15px; color: white;">
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <i class="ph-bold ph-building" style="color: var(--primary);"></i>
                                    ${j.recruiterId === 'admin' ? 'Global Admin' : (j.recruiterId || 'Unknown')}
                                </div>
                                <div style="font-size: 0.8rem; color: var(--text-tertiary);">${new Date(j.postedDate || Date.now()).toLocaleDateString()}</div>
                            </td>
                            <td style="padding: 15px; color: white;">${j.applications || 0}</td>
                            <td style="padding: 15px;">
                                <span style="background: ${j.status === 'Open' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; color: ${j.status === 'Open' ? '#34d399' : '#f87171'}; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">
                                    ${j.status}
                                </span>
                            </td>
                            <td style="padding: 15px;">
                                <button onclick="alert('Force Close logic implemented here')" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); color: #f87171; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">
                                    <i class="ph-bold ph-lock-key"></i> Force Close
                                </button>
                            </td>
                        </tr>
                    `).join('') : `<tr><td colspan="5" style="padding: 40px; text-align: center; color: var(--text-tertiary);">No jobs posted yet.</td></tr>`}
                </tbody>
            </table>
        </div>
    `;
        }

        function renderGlobalCandidates() {
            const content = document.getElementById('dynamic-content');
            const apps = HRMS_STATE.recruitment.getApplications(); // No ID = All Apps

            content.innerHTML = `
        <div class="dashboard-header" style="margin-bottom: 30px;">
            <h1 style="color: white; font-size: 1.8rem;">Global Candidate Database</h1>
            <p style="color: var(--text-tertiary);">Centralized view of all talent applying to the platform.</p>
        </div>

        <div style="background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(255,255,255,0.02); text-align: left;">
                         <th style="padding: 15px; color: var(--text-secondary);">Candidate</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Applied For</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Client</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Status</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${apps.length > 0 ? apps.map(a => {
                const job = HRMS_STATE.recruitment.getJobs().find(j => j.id === a.jobId);
                const clientName = job ? (job.recruiterId === 'admin' ? 'Global Admin' : job.recruiterId) : 'Unknown';
                return `
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 15px; color: white;">
                                <div style="font-weight: 600;">${a.name}</div>
                                <div style="font-size: 0.8rem; color: var(--text-tertiary);">${a.email}</div>
                            </td>
                            <td style="padding: 15px; color: white;">${a.jobTitle}</td>
                            <td style="padding: 15px; color: var(--text-secondary);">${clientName}</td>
                            <td style="padding: 15px;">
                                <span style="background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">
                                    ${a.status || 'New'}
                                </span>
                            </td>
                            <td style="padding: 15px;">
                                <button style="background: none; border: 1px solid rgba(255,255,255,0.1); color: var(--text-secondary); padding: 4px 8px; border-radius: 4px; cursor: pointer;">
                                    View
                                </button>
                            </td>
                        </tr>
                        `;
            }).join('') : `<tr><td colspan="5" style="padding: 40px; text-align: center; color: var(--text-tertiary);">No candidates found.</td></tr>`}
                </tbody>
            </table>
        </div>
    `;
        }

        function renderAuditLogs() {
            const content = document.getElementById('dynamic-content');
            const logs = HRMS_STATE.audit.getLogs();

            content.innerHTML = `
        <div class="dashboard-header" style="margin-bottom: 30px;">
            <h1 style="color: white; font-size: 1.8rem;">System Audit Logs</h1>
            <p style="color: var(--text-tertiary);">Track all critical actions performed by Admins and Clients.</p>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 20px;">
            ${logs.length > 0 ? logs.map(log => `
                <div style="display: flex; gap: 15px; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <div style="color: var(--text-tertiary); font-size: 0.85rem; min-width: 140px;">
                        ${new Date(log.timestamp).toLocaleString()}
                    </div>
                    <div style="flex: 1;">
                        <span style="color: #60a5fa; font-weight: 600; margin-right: 10px;">[${log.action}]</span>
                        <span style="color: white;">${log.details}</span>
                        <div style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 4px;">User: ${log.userId}</div>
                    </div>
                </div>
            `).join('') : '<div style="color: var(--text-tertiary);">No activity logs available.</div>'}
        </div>
    `;
        }

        function renderTenantManagement() {
            const content = document.getElementById('dynamic-content');
            const tenants = HRMS_STATE.tenants.getAll();

            content.innerHTML = `
        <div class="dashboard-header" style="margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="color: white; font-size: 1.8rem;">Tenant Management</h1>
                <p style="color: var(--text-tertiary);">Oversee all client organizations and their subscription status.</p>
            </div>
            <button onclick="showTenantForm()" style="background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                <i class="ph-bold ph-plus-circle"></i> Onboard New Tenant
            </button>
        </div>

        <!-- CREATE TENANT FORM -->
        <div id="tenant-form-container" style="display: none; background: rgba(30, 41, 59, 0.4); padding: 30px; border-radius: 12px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
            <h3 style="margin-bottom: 20px; color: white;">Onboard New Client Organization</h3>
            <form onsubmit="handleCreateTenant(event)" style="display: grid; gap: 20px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <label style="display: block; color: var(--text-secondary); margin-bottom: 8px;">Organization Name</label>
                        <input type="text" name="name" required placeholder="e.g. Acme Corp" style="width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px;">
                    </div>
                    <div>
                        <label style="display: block; color: var(--text-secondary); margin-bottom: 8px;">Admin Email</label>
                        <input type="email" name="email" required placeholder="admin@acme.com" style="width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px;">
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                     <div>
                        <label style="display: block; color: var(--text-secondary); margin-bottom: 8px;">Subscription Plan</label>
                        <select name="plan" required style="width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px;">
                            <option value="Startup">Startup (₹50k/mo)</option>
                            <option value="Growth">Growth (₹1.5L/mo)</option>
                            <option value="Enterprise">Enterprise (Custom)</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: var(--text-secondary); margin-bottom: 8px;">License Seats</label>
                        <input type="number" name="employees" value="50" style="width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px;">
                    </div>
                    <div>
                        <label style="display: block; color: var(--text-secondary); margin-bottom: 8px;">Admin Password</label>
                        <input type="text" name="password" value="welcome123" required style="width: 100%; padding: 12px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px;">
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button type="submit" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: 600;">Create Tenant</button>
                    <button type="button" onclick="document.getElementById('tenant-form-container').style.display='none'" style="background: transparent; color: var(--text-tertiary); border: 1px solid rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 6px; cursor: pointer;">Cancel</button>
                </div>
            </form>
        </div>

        <!-- TENANT LIST -->
        <div style="background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(255,255,255,0.02); text-align: left;">
                         <th style="padding: 15px; color: var(--text-secondary);">Organization</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Plan</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Users</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Joined</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Status</th>
                         <th style="padding: 15px; color: var(--text-secondary);">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${tenants.length > 0 ? tenants.map(t => `
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 15px; color: white;">
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <div style="width: 32px; height: 32px; background: var(--primary); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${t.name.substring(0, 2).toUpperCase()}</div>
                                    <div>
                                        ${t.name}
                                        <div style="font-size: 0.8rem; color: var(--text-tertiary);">${t.adminEmail}</div>
                                    </div>
                                </div>
                            </td>
                             <td style="padding: 15px; color: var(--text-secondary);"><span style="background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">${t.plan}</span></td>
                             <td style="padding: 15px; color: var(--text-secondary);">${t.employees}</td>
                             <td style="padding: 15px; color: var(--text-secondary); font-size: 0.9rem;">${new Date(t.joinedDate).toLocaleDateString()}</td>
                             <td style="padding: 15px;">
                                <span style="background: rgba(16, 185, 129, 0.1); color: #34d399; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">${t.status}</span>
                             </td>
                             <td style="padding: 15px;">
                                <button style="background: none; border: 1px solid rgba(255,255,255,0.1); color: white; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Manage</button>
                             </td>
                        </tr>
                    `).join('') : `
                         <tr><td colspan="6" style="padding: 40px; text-align: center; color: var(--text-tertiary);">No tenants found. Onboard your first client.</td></tr>
                    `}
                </tbody>
            </table>
        </div>
    `;
        }

        window.showTenantForm = function () {
            document.getElementById('tenant-form-container').style.display = 'block';
        };

        window.handleCreateTenant = function (e) {
            e.preventDefault();
            const form = e.target;

            // Simple Plan Price mapping
            const prices = { 'Startup': 50000, 'Growth': 150000, 'Enterprise': 500000 };

            const data = {
                name: form.name.value,
                adminEmail: form.email.value,
                password: form.password.value,
                plan: form.plan.value,
                employees: parseInt(form.employees.value),
                planPrice: prices[form.plan.value] || 0
            };

            HRMS_STATE.tenants.create(data);
            renderTenantManagement(); // Refresh view
        };
