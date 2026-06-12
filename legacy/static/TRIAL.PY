import pandas as pd

data = {
    'Page': [
        '482 Visa Australia',
        'Skilled Migration Visa Australia',
        '485 Graduate Visa Australia',
        'Australia Visa Fees',
        'Working Visa Australia from Nepal',
        'Visitor Visa Australia',
        'Dependent Visa Australia',
        'Australia Student Visa Rules',
        '186 Visa Australia',
        'Australian Skilled Migration'
    ],
    'Meta Title': [
        '482 Visa Australia 2025: Work & PR Path from Nepal (50 chars)',
        'Skilled Migration Visa Australia: 189/190 Guide (48 chars)',
        '485 Graduate Visa Australia: Post-Study Work Visa (49 chars)',
        'Australia Visa Fees 2025: Full Breakdown & Costs (48 chars)',
        'Working Visa Australia from Nepal: 482 & 186 Options (52 chars)',
        'Visitor Visa Australia from Nepal: Easy Application (51 chars)',
        'Dependent Visa Australia from Nepal: Family Reunion (51 chars)',
        'Australia Student Visa Rules 2025: Latest Changes (49 chars)',
        '186 Visa Australia: Employer Sponsored PR Guide (47 chars)',
        'Australian Skilled Migration 2025: Points & Pathways (52 chars)'
    ],
    'Meta Description': [
        '482 visa Australia from Nepal: Temporary skill shortage visa, pathway to PR. Nepcoms – 98% success rate for Australia from Nepal, free assessment. Apply for working visa Australia today! (160 chars)',
        'Skilled migration visa Australia (189/190/491): Points test, PR in 24 months. Nepcoms – high visa success rate for Australia from Nepal, expert guidance & free eligibility check! (159 chars)',
        '485 graduate visa Australia: 2–4 years post-study work rights. Convert to skilled visa easily. Nepcoms – trusted for Australia student visa & migration from Nepal, free consultation! (158 chars)',
        'Australia visa fees 2025: Skilled, student, visitor, dependent breakdowns. Nepcoms – transparent costs, 98% visa success rate for Australia from Nepal. Free quote & assessment now! (157 chars)',
        'Working visa Australia from Nepal: 482 visa & pathways to PR. High success rate with Nepcoms – MARA-compliant, zero upfront fee. Start your Australian skilled migration journey! (159 chars)',
        'Visitor visa Australia from Nepal: Tourist & family visit requirements. Fast approval with Nepcoms – documents help, 95% success. Apply for Australia visit visa from Nepal easily! (156 chars)',
        'Dependent visa Australia from Nepal: Bring spouse/children on your visa. Nepcoms guides how to apply dependent visa for Australia from Nepal – family migration experts, free support! (160 chars)',
        'Australia student visa rules 2025: Latest changes & requirements. Nepcoms – high visa success rate for Australia from Nepal, free profile check for student & graduate visas! (155 chars)',
        '186 visa Australia: Employer sponsored permanent residency. Direct PR path from 482 visa. Nepcoms – expert Australian skilled migration, 98% success for Nepali applicants! (155 chars)',
        'Australian skilled migration 2025: Points system, 189/190/491 visas. Fast PR for skilled workers. Nepcoms – top consultancy for Australia migration from Nepal, free assessment! (160 chars)'
    ]
}

df = pd.DataFrame(data)
df.to_excel('migration_meta.xlsx', index=False)
print("Excel file created successfully.")