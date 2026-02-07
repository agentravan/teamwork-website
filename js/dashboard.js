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
            { icon: 'ph-buildings', label: 'Tenant Management', active: false, view: 'tenants' },
            { icon: 'ph-users-three', label: 'Access Requests', active: false, view: 'requests', badge: HRMS_STATE.requests.getPending().length },
            { icon: 'ph-chart-line-up', label: 'Revenue Analytics', active: false, view: 'revenue' },
            { icon: 'ph-gear', label: 'System Settings', active: false, view: 'settings' }
        ];
    } else {
        // Client Admin Menu (Future)
        menuItems = [
            { icon: 'ph-house', label: 'Dashboard', active: true },
            { icon: 'ph-users', label: 'Employees', active: false },
            { icon: 'ph-money', label: 'Payroll', active: false }
        ];
    }

    const html = `
        <div class="sidebar-menu">
            ${menuItems.map(item => `
                <a href="#" class="menu-item ${item.active ? 'active' : ''}" onclick="switchView('${item.view}')">
                    <i class="ph-bold ${item.icon}"></i>
                    <span>${item.label}</span>
                    ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
                </a>
            `).join('')}
        </div>
        
        <div class="sidebar-footer" style="padding: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
            <a href="#" onclick="HRMS_STATE.auth.logout()" class="menu-item" style="color: #ef4444;">
                <i class="ph-bold ph-sign-out"></i>
                <span>Logout</span>
            </a>
        </div>
    `;

    sidebar.innerHTML = html;
}

// --- VIEWS ---

function renderSuperAdminDashboard() {
    const content = document.getElementById('dynamic-content');
    const stats = HRMS_STATE.tenants.getStats();

    content.innerHTML = `
        <div class="dashboard-header" style="margin-bottom: 30px;">
            <h1 style="color: white; font-size: 1.8rem;">Platform Overview</h1>
            <p style="color: var(--text-tertiary);">Welcome back, Super Admin. Here is what's happening today.</p>
        </div>

        <!-- STATS GRID -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 40px;">
            <div class="stat-card" style="background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="color: var(--text-tertiary); font-size: 0.9rem; margin-bottom: 10px;">Total MRR</div>
                <div style="color: #10b981; font-size: 1.8rem; font-weight: 700;">₹${stats.mrr.toLocaleString()}</div>
                <div style="color: var(--text-tertiary); font-size: 0.8rem; margin-top: 5px;">+12% from last month</div>
            </div>
            <div class="stat-card" style="background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="color: var(--text-tertiary); font-size: 0.9rem; margin-bottom: 10px;">Active Tenants</div>
                <div style="color: #3b82f6; font-size: 1.8rem; font-weight: 700;">${stats.activeTenants} <span style="font-size: 1rem; color: var(--text-tertiary);">/ ${stats.totalTenants}</span></div>
            </div>
            <div class="stat-card" style="background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="color: var(--text-tertiary); font-size: 0.9rem; margin-bottom: 10px;">Total Employees Managed</div>
                <div style="color: #f59e0b; font-size: 1.8rem; font-weight: 700;">${stats.totalEmployees.toLocaleString()}</div>
            </div>
             <div class="stat-card" style="background: rgba(30, 41, 59, 0.4); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="color: var(--text-tertiary); font-size: 0.9rem; margin-bottom: 10px;">Pending Requests</div>
                <div style="color: #ef4444; font-size: 1.8rem; font-weight: 700;">${HRMS_STATE.requests.getPending().length}</div>
            </div>
        </div>

        <!-- RECENT ACTIVITY / TENANT LIST -->
        <h2 style="color: white; font-size: 1.4rem; margin-bottom: 20px;">Organization Health</h2>
        <div style="background: rgba(30, 41, 59, 0.4); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: rgba(255,255,255,0.02); text-align: left;">
                        <th style="padding: 15px; color: var(--text-secondary); font-weight: 500;">Organization</th>
                        <th style="padding: 15px; color: var(--text-secondary); font-weight: 500;">Plan</th>
                        <th style="padding: 15px; color: var(--text-secondary); font-weight: 500;">Employees</th>
                        <th style="padding: 15px; color: var(--text-secondary); font-weight: 500;">Status</th>
                        <th style="padding: 15px; color: var(--text-secondary); font-weight: 500;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${HRMS_STATE.db.tenants.map(t => `
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <td style="padding: 15px; color: white;">${t.name}<br><span style="font-size: 0.8rem; color: var(--text-tertiary);">${t.adminEmail}</span></td>
                            <td style="padding: 15px; color: var(--text-secondary);"><span style="background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">${t.plan}</span></td>
                            <td style="padding: 15px; color: var(--text-secondary);">${t.employees}</td>
                            <td style="padding: 15px;">
                                <span style="
                                    background: ${t.status === 'ACTIVE' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; 
                                    color: ${t.status === 'ACTIVE' ? '#34d399' : '#f87171'}; 
                                    padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;
                                ">${t.status}</span>
                            </td>
                            <td style="padding: 15px;">
                                <button style="background: none; border: 1px solid rgba(255,255,255,0.1); color: white; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Manage</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function switchView(viewName) {
    // Handling view switching (placeholder for now)
    if (viewName === 'overview') {
        renderSuperAdminDashboard();
    } else {
        const content = document.getElementById('dynamic-content');
        content.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-tertiary);">Module '${viewName}' is under construction.</div>`;
    }
}
