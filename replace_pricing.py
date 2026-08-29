import os

replacements = {
    "src/app/globalhrx-hrms/page.tsx": [
        ("₹49", "{servicePricing.hrms.starter}"),
        ("₹79", "{servicePricing.hrms.professional}"),
        ("₹119", "{servicePricing.hrms.enterprise}")
    ],
    "src/app/payroll-management/page.tsx": [
        ("₹2,500", "₹{servicePricing.payroll.starter}"),
        ("₹5,000", "₹{servicePricing.payroll.professional}"),
        ("₹8,000", "₹{servicePricing.payroll.enterprise}")
    ],
    "src/app/compliance-outsourcing/page.tsx": [
        ("₹2,000", "₹{servicePricing.compliance.starter}"),
        ("₹4,000", "₹{servicePricing.compliance.professional}"),
        ("₹7,000", "₹{servicePricing.compliance.enterprise}")
    ],
    "src/app/recruitment-pricing/page.tsx": [
        ("₹3k - ₹5k", "₹{servicePricing.recruitment.starter}"),
        ("₹6k - ₹8k", "₹{servicePricing.recruitment.professional}"),
        ("Or Fixed Fee: ₹8k - ₹12k", "Or Fixed Fee: ₹{servicePricing.recruitment.enterprise}")
    ],
    "src/app/recruitment-services/page.tsx": [
        ("₹3k - ₹5k", "₹{servicePricing.recruitment.starter}"),
        ("₹6k - ₹8k", "₹{servicePricing.recruitment.professional}")
    ]
}

for filepath, reps in replacements.items():
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        modified = False
        for old, new in reps:
            if old in content:
                content = content.replace(old, new)
                modified = True
                
        if modified:
            # Inject import if not exists
            if "import { servicePricing }" not in content:
                content = content.replace("import React from 'react';", "import React from 'react';\nimport { servicePricing } from '@/config/pricing';")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    else:
        print(f"File {filepath} not found.")
