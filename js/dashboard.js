/**
 * Global HRX Dashboard Logic
 * Handles dynamic rendering of sidebar navigation and content views for 45+ modules.
 */

// --- 1. CONFIGURATION & DATA ---
// --- 1. CONFIGURATION & STATE INTEGRATION ---

// Ensure HRMS State is loaded (hrms-state.js must be included before this)
if (typeof HRMS === 'undefined') {
    console.error("HRMS State Manager not found!");
}

const currentUser = HRMS.getCurrentUser();

if (!currentUser) {
    // Redirect if not logged in
    window.location.href = 'login-hrx.html';
}

// Update Header with Real User Info
document.addEventListener('DOMContentLoaded', () => {
    // Update Profile Info
    const profileName = document.querySelector('.content-header .profile-name') || document.querySelector('.nav-content span[style*="font-weight: 500"]');
    // Selectors might need adjustment based on HTML structure

    // Look for specific elements in the hardcoded HTML header
    const nameEl = document.querySelectorAll('.nav-content span')[1];
    const roleEl = document.querySelectorAll('.nav-content span')[2];
    const avatarEl = document.querySelector('.nav-content span'); // Initials

    if (nameEl) nameEl.textContent = currentUser.name;
    if (roleEl) roleEl.textContent = currentUser.role;
    if (avatarEl) avatarEl.textContent = currentUser.name.substring(0, 2).toUpperCase();
});


// The massive list of features (Preserved definition)
const dashboardModules = [
    {
        id: "hr-advance",
        title: "HR Advance Management",
        icon: "ph-crown",
        items: [
            "HR Update",
            "Employee Demographics",
            "Employee Master Data",
            "Employee Profile",
            "Recruitment Analysis",
            "Employee Operations Data",
            "Employee Recruitment Data",
            "Operations Analysis",
            "Payroll Analysis",
            "Headcount Analysis"
        ]
    },
    {
        id: "recruitment",
        title: "Recruitment & Hiring",
        icon: "ph-briefcase",
        items: [
            "Recruiting Plan",
            "Cost Per Hire Calculator",
            "Candidate Screening Tracker",
            "Salary Template",
            "Pay Stub",
            "Payroll Check",
            "Payroll Implementation Project Plan"
        ]
    },
    {
        id: "employee-records",
        title: "Employee Records & Evaluations",
        icon: "ph-folder-user",
        items: [
            "Employee Database",
            "Employee Self-Evaluation",
            "Employee Evaluation Form",
            "Performance Review Questionnaire"
        ]
    },
    {
        id: "budgeting",
        title: "Budgeting & Planning",
        icon: "ph-currency-dollar",
        items: [
            "Human Resource Budget",
            "BALANCE SHEET TEMPLATE",
            "HR TRAINING BUDGET Template",
            "HR ANNUAL BUDGET Template",
            "HR Department Budget Template",
            "HR Implementation Plan Gantt Chart"
        ]
    },
    {
        id: "skills",
        title: "Skills & Training",
        icon: "ph-graduation-cap",
        items: [
            "Employee Competency Matrix",
            "Employee Skills Matrix",
            "Employee Training Plan",
            "Skills Matrix Template"
        ]
    },
    {
        id: "trackers",
        title: "Trackers",
        icon: "ph-target",
        items: [
            "Employee Leave Tracker Month Wise",
            "Employee Schedule Template",
            "Employee Tracker",
            "Ultimate Recruitment Tracker",
            "PROJECT PLAN TEMPLATE",
            "Weekly Planner & Daily Habit Tracker",
            "The Ultimate To-Do List",
            "Ultimate Task Tracker",
            "CRM: Client Tracker"
        ]
    },
    {
        id: "attendance",
        title: "Attendance & Management",
        icon: "ph-clock",
        items: [
            "Employee Attendance Sheet",
            "Weekly Class Attendance",
            "Weekly Employee Timesheet"
        ]
    },
    {
        id: "meetings",
        title: "Meetings & Reviews",
        icon: "ph-chats",
        items: [
            "One-on-One Meeting with Employee",
            "Simple Performance Review"
        ]
    },
    {
        id: "risk-monitoring",
        title: "Risk, Monitoring, & Reporting",
        icon: "ph-shield-warning",
        items: [
            "Success Criteria",
            "PERT Chart Analysis",
            "Risk Register",
            "Project Status Report Heatmap",
            "Communication Management Plan",
            "Statement of Work",
            "Project Outline",
            "Project Status Report",
            "WBS and WBS Dictionary",
            "Requirements Traceability Matrix",
            "Project Team Meeting Agenda",
            "Work Breakdown Structure"
        ]
    },
    {
        id: "resource-capacity",
        title: "Resource & Capacity Planning",
        icon: "ph-users-three",
        items: [
            "Resource Planning Dashboard",
            "Project Resource Matrix",
            "Resource Management Plan",
            "Resource Utilization",
            "Sprint Capacity Planning (Agile)",
            "Team Capacity Planner",
            "Capacity Planning Template",
            "Annual Leave Planner",
            "Monthly Leave Planner Template"
        ]
    },
    {
        id: "planning-portfolio",
        title: "Planning & Portfolio Tools",
        icon: "ph-briefcase-metal",
        items: [
            "Multiple Project Tracker",
            "Portfolio Excel Tracker",
            "Program Tracker",
            "Project Benefits Tracker",
            "Project Checklist",
            "Project Pipeline Tracker",
            "Project Portfolio Prioritization",
            "Project Scope Template",
            "RAIDAD"
        ]
    },
    {
        id: "financial-cost",
        title: "Advanced Financial & Cost",
        icon: "ph-chart-line-up",
        items: [
            "Cost-Benefit Analysis",
            "Earned Value Management Template",
            "Project Budget Template",
            "Project Cost Estimation",
            "Project Estimation Calculator",
            "Project Cost Management Plan",
            "Benefit Profile Template"
        ]
    },
    {
        id: "analytics",
        title: "Analytics & Reporting",
        icon: "ph-chart-pie-slice",
        items: [
            "Gap Analysis Template",
            "Issue Heatmap Dashboard",
            "Agile Project Status Report",
            "Multiple Project Status Report",
            "Milestones Template",
            "Production Schedule",
            "Schedule Management Plan",
            "Timesheet Tracking Template",
            "Sprint Capacity Planner Template",
            "Stakeholder Mapping",
            "Stakeholder Power-Interest Matrix",
            "Stakeholder Register Template",
            "Post-implementation review"
        ]
    },
    {
        id: "task-team",
        title: "Task & Team Management",
        icon: "ph-list-checks",
        items: [
            "Task List Template",
            "Task Priority Matrix",
            "Task Tracker Dashboard",
            "Team Charter Template",
            "Team Resource Plan Template",
            "Daily Work Log",
            "Multiple Project To-Do List Template",
            "Work Plan",
            "Meeting Minutes",
            "Project Status Meeting Agenda",
            "Project Closure Meeting Agenda"
        ]
    },
    {
        id: "risk-issue-change",
        title: "Risk, Issue, & Change Mgmt",
        icon: "ph-warning-circle",
        items: [
            "Software Change Request",
            "Change ADKAR Competency Assessment",
            "Change Curve Model",
            "Change Impact Assessment",
            "Change Readiness Assessment",
            "Issue Log (Agile/Waterfall)",
            "Issue Register",
            "RAID Log",
            "PMO Action Plan",
            "Change Management Process",
            "Change Management Template",
            "Disaster Recovery Approach Document",
            "Disaster Recovery Asset Register",
            "Disaster Recovery Closure Report",
            "Disaster Recovery Communication Plan",
            "Disaster Recovery Implementation Plan",
            "Disaster Recovery Plan Template"
        ]
    },
    {
        id: "meeting-reporting",
        title: "Meeting & Reporting Tools",
        icon: "ph-presentation-chart",
        items: [
            "Project Control Board Meeting Agenda",
            "Project Kickoff Meeting Agenda",
            "Project Management Meeting Agenda",
            "Client Status Update Template",
            "Daily Status Update Template",
            "Daily Update Template",
            "Sprint Report Template",
            "Application Impact Heatmap",
            "Risk Heatmap",
            "QA Status Report Template",
            "Performance Report Template",
            "Status Update Request Template",
            "Weekly Test Report Template"
        ]
    },
    {
        id: "project-closure",
        title: "Project Closure & Deliverables",
        icon: "ph-flag-checkered",
        items: [
            "Deliverables",
            "Project Release Plan",
            "Project Closure Report",
            "Project PIR Template",
            "Project Closure Checklist",
            "Implementation Project Plan",
            "Development Project Plan",
            "Project Task Tracker",
            "Project Brief",
            "Project Initiation"
        ]
    },
    {
        id: "operations",
        title: "Operations & Inventory",
        icon: "ph-warehouse",
        items: [
            "Equipment Inventory",
            "Kanban Card",
            "Operating Budget",
            "Operation Plan",
            "Standard Operating Procedure (SOP)",
            "Workload Analysis"
        ]
    }
];

// --- 2. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {

    // Inject "Reset System" Button for Super Admin
    if (currentUser.role === 'Super Admin') {
        const resetBtn = document.createElement('button');
        resetBtn.innerText = '⚠️ System Reset';
        resetBtn.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: #7f1d1d; color: white; border: none; padding: 5px 10px; border-radius: 4px; font-size: 0.7rem; cursor: pointer; z-index: 9999;';
        resetBtn.onclick = () => {
            if (confirm("DANGER: This will wipe all data and reset to fresh state. Continue?")) {
                HRMS.resetSystem();
            }
        };
        document.body.appendChild(resetBtn);
    }

    renderSidebar();

    // Load default module (Dashboard)
    loadModule('HR Advance Management', 'HR Update');

    // MOBILE TOGGLE LISTENER
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.getElementById('dynamic-sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    // Close sidebar on item click (mobile only)
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            // If clicking a nav-item (link), close sidebar if on mobile
            if (e.target.closest('.nav-item') && window.innerWidth < 992) {
                sidebar.classList.remove('mobile-open');
            }
        });
    }
});

// --- 3. SIDEBAR RENDERING ---

function renderSidebar() {
    const sidebarContainer = document.getElementById('dynamic-sidebar');
    if (!sidebarContainer) return;

    let html = `
        <div class="sidebar-header">
            Main Menu
        </div>
    `;

    dashboardModules.forEach((category, index) => {
        const categoryId = `cat-${index}`;

        // Generate list items
        const subItemsHtml = category.items.map(item => `
            <a href="#" class="nav-item" onclick="handleNavClick('${category.title.replace(/'/g, "\\'")}', '${item.replace(/'/g, "\\'")}')">
                ${item}
            </a>
        `).join('');

        html += `
            <div class="nav-category" id="${categoryId}">
                <div class="nav-category-header" onclick="toggleCategory('${categoryId}')">
                    <div style="display: flex; align-items: center;">
                        <i class="ph-duotone ${category.icon} icon-left"></i>
                        <span>${category.title}</span>
                    </div>
                    <i class="ph-bold ph-caret-down icon-chevron"></i>
                </div>
                <div class="nav-items">
                    ${subItemsHtml}
                </div>
            </div>
        `;
    });

    // Add logout at bottom
    html += `
        <div style="margin-top: auto; padding: 20px; border-top: 1px solid var(--border-subtle);">
            <a href="#" onclick="HRMS.logout()" style="display: flex; align-items: center; color: #ef4444; gap: 10px; text-decoration: none;">
                <i class="ph-bold ph-sign-out"></i>
                <span>Logout</span>
            </a>
        </div>
    `;

    sidebarContainer.innerHTML = html;
}

function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    // Close others
    document.querySelectorAll('.nav-category').forEach(cat => {
        if (cat.id !== categoryId) cat.classList.remove('active');
    });
    // Toggle current
    category.classList.toggle('active');
}

function handleNavClick(categoryTitle, itemTitle) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // Add active class to clicked item (this logic is simple for now)
    const clickedItem = Array.from(document.querySelectorAll('.nav-item')).find(el => el.textContent.trim() === itemTitle);
    if (clickedItem) clickedItem.classList.add('active');

    loadModule(categoryTitle, itemTitle);
}

// --- 4. MODULE CONTENT LOADING ---

function loadModule(category, moduleName) {
    const contentContainer = document.getElementById('dynamic-content');

    // Generate a unique ID for this module/view combo to store/retrieve data
    // Simply slugifying the name
    const moduleId = moduleName.toLowerCase().replace(/[^a-z0-0]/g, '-');

    // FETCH REAL DATA
    const moduleData = HRMS.getModuleData(moduleId);

    // Breadcrumb and Header
    let html = `
        <div class="content-header">
            <div>
                <div class="content-breadcrumb">${category} / ${moduleName}</div>
                <h1 class="content-title">${moduleName}</h1>
            </div>
            <div>
                <button class="btn btn-primary btn-sm" onclick="promptAddRecord('${moduleId}', '${moduleName}')"><i class="ph-bold ph-plus"></i> Add New</button>
                <button class="btn btn-outline btn-sm"><i class="ph-bold ph-download-simple"></i> Export</button>
            </div>
        </div>
    `;

    // Dynamic KPI Cards (Show zeros for fresh state)
    html += generateKPICards(moduleData);

    // Main Data View (Table)
    html += `
        <div class="data-table-container">
            <div class="data-table-header">
                <h3>${moduleName} Records</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="Search..." style="padding: 8px; border-radius: 4px; border: 1px solid #444; background: #222; color: white;">
                    <button class="btn btn-outline btn-sm"><i class="ph-bold ph-funnel"></i> Filter</button>
                </div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Reference / Name</th>
                            <th>Status</th>
                            <th>Date Created</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${renderTableRows(moduleData)}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    contentContainer.innerHTML = html;
}

function generateKPICards(data) {
    // Dynamic Stats based on Data
    const count = data.length;

    return `
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-label">Total Records</div>
                <div class="kpi-value">${count}</div>
                <div class="kpi-trend text-muted">System Active</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Pending Reviews</div>
                <div class="kpi-value">0</div>
                <div class="kpi-trend text-muted">No pending items</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">This Month</div>
                <div class="kpi-value">${count > 0 ? count : 0}</div>
                <div class="kpi-trend text-success">Updated just now</div>
            </div>
             <div class="kpi-card">
                <div class="kpi-label">System Health</div>
                <div class="kpi-value">100%</div>
                <div class="kpi-trend text-success"><i class="ph-bold ph-check"></i> Operational</div>
            </div>
        </div>
    `;
}

function renderTableRows(data) {
    if (!data || data.length === 0) {
        return `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-tertiary);">
                    <i class="ph-duotone ph-folder-open" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
                    No records found. Click "Add New" to get started.
                </td>
            </tr>
        `;
    }

    return data.map(row => `
        <tr>
            <td>${row.id}</td>
            <td>${row.mainField || 'Untitled Record'}</td>
            <td><span style="color: #10b981; font-weight: 600;">Active</span></td>
            <td>${new Date(row.createdAt).toLocaleDateString()}</td>
            <td>${row.createdBy}</td>
            <td>
                <button style="background: none; border: none; color: var(--primary); cursor: pointer;"><i class="ph-bold ph-pencil-simple"></i></button>
                <button onclick="HRMS.deleteRecord('${row.moduleId}', '${row.id}'); loadModule(currentCat, currentMod)" style="background: none; border: none; color: #ef4444; cursor: pointer; margin-left: 10px;"><i class="ph-bold ph-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

// Simple Add Record Mockup
function promptAddRecord(moduleId, moduleName) {
    const name = prompt(`Enter Name/Title for new ${moduleName}:`);
    if (name) {
        HRMS.addRecord(moduleId, {
            moduleId: moduleId,
            mainField: name,
            status: 'Active'
        });
        // We need to reload just this view, straightforward way:
        const cat = document.querySelector('.nav-category.active span')?.innerText || 'Module';
        loadModule(cat, moduleName);
    }
}

{
    id: "hr-advance",
        title: "HR Advance Management",
            icon: "ph-crown",
                items: [
                    "HR Update",
                    "Employee Demographics",
                    "Employee Master Data",
                    "Employee Profile",
                    "Recruitment Analysis",
                    "Employee Operations Data",
                    "Employee Recruitment Data",
                    "Operations Analysis",
                    "Payroll Analysis",
                    "Headcount Analysis"
                ]
},
{
    id: "recruitment",
        title: "Recruitment & Hiring",
            icon: "ph-briefcase",
                items: [
                    "Recruiting Plan",
                    "Cost Per Hire Calculator",
                    "Candidate Screening Tracker",
                    "Salary Template",
                    "Pay Stub",
                    "Payroll Check",
                    "Payroll Implementation Project Plan"
                ]
},
{
    id: "employee-records",
        title: "Employee Records & Evaluations",
            icon: "ph-folder-user",
                items: [
                    "Employee Database",
                    "Employee Self-Evaluation",
                    "Employee Evaluation Form",
                    "Performance Review Questionnaire"
                ]
},
{
    id: "budgeting",
        title: "Budgeting & Planning",
            icon: "ph-currency-dollar",
                items: [
                    "Human Resource Budget",
                    "BALANCE SHEET TEMPLATE",
                    "HR TRAINING BUDGET Template",
                    "HR ANNUAL BUDGET Template",
                    "HR Department Budget Template",
                    "HR Implementation Plan Gantt Chart"
                ]
},
{
    id: "skills",
        title: "Skills & Training",
            icon: "ph-graduation-cap",
                items: [
                    "Employee Competency Matrix",
                    "Employee Skills Matrix",
                    "Employee Training Plan",
                    "Skills Matrix Template"
                ]
},
{
    id: "trackers",
        title: "Trackers",
            icon: "ph-target",
                items: [
                    "Employee Leave Tracker Month Wise",
                    "Employee Schedule Template",
                    "Employee Tracker",
                    "Ultimate Recruitment Tracker",
                    "PROJECT PLAN TEMPLATE",
                    "Weekly Planner & Daily Habit Tracker",
                    "The Ultimate To-Do List",
                    "Ultimate Task Tracker",
                    "CRM: Client Tracker"
                ]
},
{
    id: "attendance",
        title: "Attendance & Management",
            icon: "ph-clock",
                items: [
                    "Employee Attendance Sheet",
                    "Weekly Class Attendance",
                    "Weekly Employee Timesheet"
                ]
},
{
    id: "meetings",
        title: "Meetings & Reviews",
            icon: "ph-chats",
                items: [
                    "One-on-One Meeting with Employee",
                    "Simple Performance Review"
                ]
},
{
    id: "risk-monitoring",
        title: "Risk, Monitoring, & Reporting",
            icon: "ph-shield-warning",
                items: [
                    "Success Criteria",
                    "PERT Chart Analysis",
                    "Risk Register",
                    "Project Status Report Heatmap",
                    "Communication Management Plan",
                    "Statement of Work",
                    "Project Outline",
                    "Project Status Report",
                    "WBS and WBS Dictionary",
                    "Requirements Traceability Matrix",
                    "Project Team Meeting Agenda",
                    "Work Breakdown Structure"
                ]
},
{
    id: "resource-capacity",
        title: "Resource & Capacity Planning",
            icon: "ph-users-three",
                items: [
                    "Resource Planning Dashboard",
                    "Project Resource Matrix",
                    "Resource Management Plan",
                    "Resource Utilization",
                    "Sprint Capacity Planning (Agile)",
                    "Team Capacity Planner",
                    "Capacity Planning Template",
                    "Annual Leave Planner",
                    "Monthly Leave Planner Template"
                ]
},
{
    id: "planning-portfolio",
        title: "Planning & Portfolio Tools",
            icon: "ph-briefcase-metal",
                items: [
                    "Multiple Project Tracker",
                    "Portfolio Excel Tracker",
                    "Program Tracker",
                    "Project Benefits Tracker",
                    "Project Checklist",
                    "Project Pipeline Tracker",
                    "Project Portfolio Prioritization",
                    "Project Scope Template",
                    "RAIDAD"
                ]
},
{
    id: "financial-cost",
        title: "Advanced Financial & Cost",
            icon: "ph-chart-line-up",
                items: [
                    "Cost-Benefit Analysis",
                    "Earned Value Management Template",
                    "Project Budget Template",
                    "Project Cost Estimation",
                    "Project Estimation Calculator",
                    "Project Cost Management Plan",
                    "Benefit Profile Template"
                ]
},
{
    id: "analytics",
        title: "Analytics & Reporting",
            icon: "ph-chart-pie-slice",
                items: [
                    "Gap Analysis Template",
                    "Issue Heatmap Dashboard",
                    "Agile Project Status Report",
                    "Multiple Project Status Report",
                    "Milestones Template",
                    "Production Schedule",
                    "Schedule Management Plan",
                    "Timesheet Tracking Template",
                    "Sprint Capacity Planner Template",
                    "Stakeholder Mapping",
                    "Stakeholder Power-Interest Matrix",
                    "Stakeholder Register Template",
                    "Post-implementation review"
                ]
},
{
    id: "task-team",
        title: "Task & Team Management",
            icon: "ph-list-checks",
                items: [
                    "Task List Template",
                    "Task Priority Matrix",
                    "Task Tracker Dashboard",
                    "Team Charter Template",
                    "Team Resource Plan Template",
                    "Daily Work Log",
                    "Multiple Project To-Do List Template",
                    "Work Plan",
                    "Meeting Minutes",
                    "Project Status Meeting Agenda",
                    "Project Closure Meeting Agenda"
                ]
},
{
    id: "risk-issue-change",
        title: "Risk, Issue, & Change Mgmt",
            icon: "ph-warning-circle",
                items: [
                    "Software Change Request",
                    "Change ADKAR Competency Assessment",
                    "Change Curve Model",
                    "Change Impact Assessment",
                    "Change Readiness Assessment",
                    "Issue Log (Agile/Waterfall)",
                    "Issue Register",
                    "RAID Log",
                    "PMO Action Plan",
                    "Change Management Process",
                    "Change Management Template",
                    "Disaster Recovery Approach Document",
                    "Disaster Recovery Asset Register",
                    "Disaster Recovery Closure Report",
                    "Disaster Recovery Communication Plan",
                    "Disaster Recovery Implementation Plan",
                    "Disaster Recovery Plan Template"
                ]
},
{
    id: "meeting-reporting",
        title: "Meeting & Reporting Tools",
            icon: "ph-presentation-chart",
                items: [
                    "Project Control Board Meeting Agenda",
                    "Project Kickoff Meeting Agenda",
                    "Project Management Meeting Agenda",
                    "Client Status Update Template",
                    "Daily Status Update Template",
                    "Daily Update Template",
                    "Sprint Report Template",
                    "Application Impact Heatmap",
                    "Risk Heatmap",
                    "QA Status Report Template",
                    "Performance Report Template",
                    "Status Update Request Template",
                    "Weekly Test Report Template"
                ]
},
{
    id: "project-closure",
        title: "Project Closure & Deliverables",
            icon: "ph-flag-checkered",
                items: [
                    "Deliverables",
                    "Project Release Plan",
                    "Project Closure Report",
                    "Project PIR Template",
                    "Project Closure Checklist",
                    "Implementation Project Plan",
                    "Development Project Plan",
                    "Project Task Tracker",
                    "Project Brief",
                    "Project Initiation"
                ]
},
{
    id: "operations",
        title: "Operations & Inventory",
            icon: "ph-warehouse",
                items: [
                    "Equipment Inventory",
                    "Kanban Card",
                    "Operating Budget",
                    "Operation Plan",
                    "Standard Operating Procedure (SOP)",
                    "Workload Analysis"
                ]
}
];

// --- 2. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();

    // Load default module (Dashboard)
    loadModule('HR Advance Management', 'HR Update');

    // MOBILE TOGGLE LISTENER
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.getElementById('dynamic-sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    // Close sidebar on item click (mobile only)
    if (sidebar) {
        sidebar.addEventListener('click', (e) => {
            // If clicking a nav-item (link), close sidebar if on mobile
            if (e.target.closest('.nav-item') && window.innerWidth < 992) {
                sidebar.classList.remove('mobile-open');
            }
        });
    }
});

// --- 3. SIDEBAR RENDERING ---

function renderSidebar() {
    const sidebarContainer = document.getElementById('dynamic-sidebar');
    if (!sidebarContainer) return;

    let html = `
        <div class="sidebar-header">
            Main Menu
        </div>
    `;

    dashboardModules.forEach((category, index) => {
        const categoryId = `cat-${index}`;

        // Generate list items
        const subItemsHtml = category.items.map(item => `
            <a href="#" class="nav-item" onclick="handleNavClick('${category.title.replace(/'/g, "\\'")}', '${item.replace(/'/g, "\\'")}')">
                ${item}
            </a>
        `).join('');

        html += `
            <div class="nav-category" id="${categoryId}">
                <div class="nav-category-header" onclick="toggleCategory('${categoryId}')">
                    <div style="display: flex; align-items: center;">
                        <i class="ph-duotone ${category.icon} icon-left"></i>
                        <span>${category.title}</span>
                    </div>
                    <i class="ph-bold ph-caret-down icon-chevron"></i>
                </div>
                <div class="nav-items">
                    ${subItemsHtml}
                </div>
            </div>
        `;
    });

    // Add logout at bottom
    html += `
        <div style="margin-top: auto; padding: 20px; border-top: 1px solid var(--border-subtle);">
            <a href="index.html" style="display: flex; align-items: center; color: #ef4444; gap: 10px; text-decoration: none;">
                <i class="ph-bold ph-sign-out"></i>
                <span>Logout</span>
            </a>
        </div>
    `;

    sidebarContainer.innerHTML = html;
}

function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    // Close others
    document.querySelectorAll('.nav-category').forEach(cat => {
        if (cat.id !== categoryId) cat.classList.remove('active');
    });
    // Toggle current
    category.classList.toggle('active');
}

function handleNavClick(categoryTitle, itemTitle) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // Add active class to clicked item (this logic is simple for now)
    const clickedItem = Array.from(document.querySelectorAll('.nav-item')).find(el => el.textContent.trim() === itemTitle);
    if (clickedItem) clickedItem.classList.add('active');

    loadModule(categoryTitle, itemTitle);
}

// --- 4. MODULE CONTENT LOADING ---

function loadModule(category, moduleName) {
    const contentContainer = document.getElementById('dynamic-content');

    // Breadcrumb and Header
    let html = `
        <div class="content-header">
            <div>
                <div class="content-breadcrumb">${category} / ${moduleName}</div>
                <h1 class="content-title">${moduleName}</h1>
            </div>
            <div>
                <button class="btn btn-primary btn-sm"><i class="ph-bold ph-plus"></i> Add New</button>
                <button class="btn btn-outline btn-sm"><i class="ph-bold ph-download-simple"></i> Export</button>
            </div>
        </div>
    `;

    // Dynamic KPI Cards (Randomized slightly for demo feel)
    html += generateKPICards(moduleName);

    // Main Data View (Table/Chart Placeholder)
    html += `
        <div class="data-table-container">
            <div class="data-table-header">
                <h3>${moduleName} Records</h3>
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="Search..." style="padding: 8px; border-radius: 4px; border: 1px solid #444; background: #222; color: white;">
                    <button class="btn btn-outline btn-sm"><i class="ph-bold ph-funnel"></i> Filter</button>
                </div>
            </div>
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name / Title</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Assignee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateDummyRows(5)}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    contentContainer.innerHTML = html;
}

function generateKPICards(moduleName) {
    // Return different KPIs based on context (mock logic)
    return `
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-label">Total Records</div>
                <div class="kpi-value">1,248</div>
                <div class="kpi-trend text-success"><i class="ph-bold ph-trend-up"></i> +12% this month</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Pending Action</div>
                <div class="kpi-value">24</div>
                <div class="kpi-trend text-warning"><i class="ph-bold ph-minus"></i> Needs Attention</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Completed</div>
                <div class="kpi-value">845</div>
                <div class="kpi-trend text-success"><i class="ph-bold ph-check"></i> High Efficiency</div>
            </div>
            <div class="kpi-card">
                <div class="kpi-label">Processing Time</div>
                <div class="kpi-value">1.2d</div>
                <div class="kpi-trend text-success"><i class="ph-bold ph-clock"></i> Faster than avg</div>
            </div>
        </div>
    `;
}

function generateDummyRows(count) {
    let rows = '';
    const statuses = ['Active', 'Pending', 'Closed', 'On Hold'];
    const users = ['John Doe', 'Sarah Smith', 'Mike Johnson', 'Emily Davis'];

    for (let i = 1; i <= count; i++) {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const user = users[Math.floor(Math.random() * users.length)];
        let statusColor = status === 'Active' ? '#10b981' : (status === 'Pending' ? '#f59e0b' : '#6b7280');

        rows += `
            <tr>
                <td>#REC-${202300 + i}</td>
                <td>Sample Record Entry ${i}</td>
                <td><span style="color: ${statusColor}; font-weight: 600;">${status}</span></td>
                <td>Oct ${10 + i}, 2026</td>
                <td>${user}</td>
                <td>
                    <button style="background: none; border: none; color: var(--primary); cursor: pointer;"><i class="ph-bold ph-pencil-simple"></i></button>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; margin-left: 10px;"><i class="ph-bold ph-trash"></i></button>
                </td>
            </tr>
        `;
    }
    return rows;
}
