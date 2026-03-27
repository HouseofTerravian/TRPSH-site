const QUIZ_DATA = [
  {
    id: 1,
    category: "Interpersonal & Social",
    question: "What is the difference between setting a boundary and giving an ultimatum?",
    choices: [
      "A) They are the same thing — both tell someone what you won't accept",
      "B) A boundary protects your own well-being; an ultimatum tries to control someone else's behavior",
      "C) An ultimatum is healthier because it gives the other person a clear choice",
      "D) Boundaries are passive-aggressive; ultimatums are direct and honest"
    ],
    correct: 1,
    explanation: "A boundary says 'Here's what I will do to protect myself.' An ultimatum says 'Here's what you better do or else.' The key difference is who the action is about — boundaries are about you, ultimatums are about controlling them. Healthy relationships need boundaries, not threats.",
    research: "Nedra Glennon Tawwab, Set Boundaries, Find Peace (2021); Cloud & Townsend, Boundaries (1992)",
    adCategory: "relationships"
  },
  {
    id: 2,
    category: "Housing & Tenant Rights",
    question: "In most states, how much notice must a landlord give before entering your apartment for a non-emergency repair?",
    choices: [
      "A) No notice is required — they own the property",
      "B) 24 to 48 hours written notice",
      "C) 1 week minimum",
      "D) They can only enter if you're home"
    ],
    correct: 1,
    explanation: "Most states require 24 to 48 hours of written notice before a landlord can enter for non-emergency reasons. Your lease may specify more, but it can never specify less than what state law requires. Emergencies like a burst pipe are the exception — landlords can enter without notice to prevent damage.",
    research: "Nolo's Guide to Tenant Rights; varies by state — e.g., California Civil Code §1954 requires 24 hours",
    adCategory: "housing"
  },
  {
    id: 3,
    category: "Banking & Financial Systems",
    question: "What is ChexSystems, and why should you care about it?",
    choices: [
      "A) A credit bureau that tracks your credit card payments",
      "B) A consumer reporting agency that tracks your banking history — bounced checks, unpaid fees, and account closures",
      "C) A government database of all bank accounts you've ever opened",
      "D) A service banks use to verify your employment before opening an account"
    ],
    correct: 1,
    explanation: "ChexSystems is like a credit report but for your banking behavior. If you've had accounts closed for overdrafts or unpaid fees, that shows up here, and most banks check it before letting you open a new account. A negative record stays for 5 years and can make it really hard to get a basic checking account.",
    research: "Consumer Financial Protection Bureau (CFPB), Banking Access Reports; ChexSystems consumer disclosures",
    adCategory: "banking"
  },
  {
    id: 4,
    category: "Credit",
    question: "Which of the following has the LARGEST impact on your credit score?",
    choices: [
      "A) How many credit cards you have open",
      "B) Your payment history — whether you pay on time",
      "C) How long you've had credit accounts",
      "D) The types of credit you use (cards, loans, mortgage)"
    ],
    correct: 1,
    explanation: "Payment history makes up about 35% of your FICO score — it's the single biggest factor. One missed payment can drop your score by 100 points or more and stays on your report for 7 years. If you do nothing else, just pay on time, even if it's the minimum.",
    research: "FICO Score Model; myFICO.com — 5 factors: payment history (35%), amounts owed (30%), length of history (15%), new credit (10%), credit mix (10%)",
    adCategory: "credit"
  },
  {
    id: 5,
    category: "Legal Rights",
    question: "On average, how much does a single speeding ticket actually cost you when you factor in insurance increases?",
    choices: [
      "A) Just the fine — usually $100-$200",
      "B) About $500 total over 3 years including insurance hikes",
      "C) Around $1,000-$1,500+ over 3 years when you include the fine plus insurance increases",
      "D) It doesn't affect insurance unless you get three or more tickets"
    ],
    correct: 2,
    explanation: "A speeding ticket isn't just the fine on the paper. Your insurance can spike 20-30% for the next 3 years. A $150 ticket can easily cost you $1,000-$1,500 when you add it all up. That's real money that could've gone toward something that actually matters to you.",
    research: "NerdWallet (2023) analysis of insurance rate increases after traffic violations; Insurance Information Institute",
    adCategory: "legal"
  },
  {
    id: 6,
    category: "Health, Insurance & Taxes",
    question: "What does 'deductible' mean on a health insurance plan?",
    choices: [
      "A) The amount you pay each month for your insurance",
      "B) The amount you must pay out of pocket before insurance starts covering costs",
      "C) The percentage of each bill you're responsible for after insurance pays",
      "D) The maximum amount you'll ever have to pay in a year"
    ],
    correct: 1,
    explanation: "Your deductible is your 'entrance fee' before insurance kicks in. If you have a $2,000 deductible, you pay the first $2,000 of medical bills yourself that year. After that, insurance starts sharing the cost. Lower deductible plans cost more per month, but you pay less when you actually need care.",
    research: "Healthcare.gov glossary; Kaiser Family Foundation Employer Health Benefits Survey (2023)",
    adCategory: "health-insurance"
  },
  {
    id: 7,
    category: "Career & Money",
    question: "What is the real difference between a job, a career, and a side hustle?",
    choices: [
      "A) A job pays hourly, a career pays salary, a side hustle is under the table",
      "B) A job trades time for money; a career builds toward long-term growth; a side hustle is supplemental income you control",
      "C) They're basically the same thing — just different levels of pay",
      "D) A career requires a degree; a job and side hustle don't"
    ],
    correct: 1,
    explanation: "A job is about exchanging your time for a paycheck. A career is a long-term path where each role builds on the last and grows your skills, reputation, and earning power. A side hustle is income you create on your own terms. Knowing which one you're in helps you make smarter decisions about where to invest your energy.",
    research: "Bureau of Labor Statistics career guidance; Cal Newport, So Good They Can't Ignore You (2012)",
    adCategory: "career"
  },
  {
    id: 8,
    category: "Interpersonal & Social",
    question: "According to relationship researcher John Gottman, which behavior is the single strongest predictor that a relationship will fail?",
    choices: [
      "A) Frequent arguing about money",
      "B) Contempt — treating your partner with disgust, mockery, or superiority",
      "C) Spending too little quality time together",
      "D) Having different political or religious views"
    ],
    correct: 1,
    explanation: "Gottman identified 'The Four Horsemen' — criticism, contempt, defensiveness, and stonewalling — but contempt is the deadliest. When you roll your eyes, mock someone, or act like you're above them, you're telling them they're worthless. That kind of disrespect erodes love faster than any argument ever could.",
    research: "John Gottman, The Seven Principles for Making Marriage Work (1999); The Gottman Institute longitudinal studies",
    adCategory: "relationships"
  },
  {
    id: 9,
    category: "Banking & Financial Systems",
    question: "What typically happens if you repeatedly overdraft your bank account?",
    choices: [
      "A) The bank just declines your transactions with no penalty",
      "B) You get charged $30-$35 per overdraft, and the bank may eventually close your account and report you to ChexSystems",
      "C) Your credit score drops immediately",
      "D) The bank freezes your account for 24 hours each time"
    ],
    correct: 1,
    explanation: "Each overdraft can cost you $30-$35, and they can stack up fast — three purchases in one day could cost you $100+ in fees alone. If it becomes a pattern, the bank can close your account involuntarily and report it to ChexSystems, making it hard to open accounts anywhere else for years.",
    research: "Consumer Financial Protection Bureau (CFPB) overdraft fee studies (2022); FDIC Survey of Unbanked and Underbanked Households",
    adCategory: "banking"
  },
  {
    id: 10,
    category: "Interpersonal & Social",
    question: "What is 'love bombing' in a relationship?",
    choices: [
      "A) When someone is genuinely excited about you and shows it with lots of affection early on",
      "B) Overwhelming someone with excessive attention, gifts, and affection to gain control — often followed by withdrawal or manipulation",
      "C) A healthy courtship phase where both people express strong feelings",
      "D) When you fall in love too fast because of physical attraction"
    ],
    correct: 1,
    explanation: "Love bombing feels amazing at first — constant texts, gifts, and 'you're the only one who gets me.' But it's a manipulation tactic. The goal is to make you emotionally dependent fast, so when they pull back or start controlling behavior, you'll chase the high of how things were. Healthy love builds gradually.",
    research: "Archer, Dale (2017), Psychology Today; Stern, Robin, The Gaslight Effect (2007); Bancroft, Lundy, Why Does He Do That? (2002)",
    adCategory: "dating"
  },
  {
    id: 11,
    category: "Housing & Tenant Rights",
    question: "What is the legal difference between being 'asked to leave' by your landlord and being formally evicted?",
    choices: [
      "A) There's no difference — if the landlord says leave, you have to leave",
      "B) Being asked to leave is a request with no legal force; eviction is a court process with specific legal steps",
      "C) An eviction is faster because the landlord can skip the notice period",
      "D) You only get legal protections if you have a written lease"
    ],
    correct: 1,
    explanation: "A landlord asking you to leave is just a request — you are not legally required to go. Eviction is a formal court process: the landlord must give written notice, file in court, and a judge must approve it. Even without a written lease, you still have tenant rights. Never leave just because someone tells you to.",
    research: "Legal Services Corporation tenant rights guides; Nolo Press, Every Tenant's Legal Guide (2023)",
    adCategory: "housing"
  },
  {
    id: 12,
    category: "Credit",
    question: "If you have no credit history at all, what is your credit score?",
    choices: [
      "A) Zero",
      "B) It starts at 300 — the lowest possible score",
      "C) You don't have a score at all — you're 'credit invisible'",
      "D) Everyone starts at 500 and builds from there"
    ],
    correct: 2,
    explanation: "No history doesn't mean a bad score — it means no score at all. You're 'credit invisible,' which affects about 26 million Americans. Landlords, lenders, and even some employers can't evaluate you. Building credit early — even with a secured card or being added as an authorized user — gives you a starting point.",
    research: "CFPB, 'Data Point: Credit Invisibles' (2015) — 26 million adults have no credit file; FICO scoring models",
    adCategory: "credit"
  },
  {
    id: 13,
    category: "Health, Insurance & Taxes",
    question: "At what age do you lose eligibility to stay on your parents' health insurance under the Affordable Care Act?",
    choices: [
      "A) 21, or when you finish college",
      "B) 24, the year you graduate",
      "C) 26 — you can stay on until you turn 26 regardless of student or employment status",
      "D) There's no age limit as long as you're claimed as a dependent on taxes"
    ],
    correct: 2,
    explanation: "Under the ACA, you can stay on a parent's health insurance until you turn 26, no matter what — married, employed, in school, or not. But the day you turn 26, that coverage ends. You need to have a plan ready, whether it's employer insurance, marketplace coverage, or Medicaid. Don't let that date sneak up on you.",
    research: "Affordable Care Act, Section 2714; Healthcare.gov dependent coverage provisions",
    adCategory: "health-insurance"
  },
  {
    id: 14,
    category: "Career & Money",
    question: "When an employer offers a 401(k) match, what does that actually mean?",
    choices: [
      "A) They take money from your paycheck and invest it for you",
      "B) They match a percentage of what you contribute — it's essentially free money added to your retirement",
      "C) They guarantee a certain return on your investment",
      "D) It's a loan from your employer that you pay back when you leave"
    ],
    correct: 1,
    explanation: "If your employer matches 401(k) contributions, they're literally giving you free money. A common match is 50 cents for every dollar you contribute, up to 6% of your salary. Not contributing enough to get the full match is like turning down part of your paycheck. This is one of the easiest wealth-building moves you can make.",
    research: "Vanguard, How America Saves (2023); Bureau of Labor Statistics Employee Benefits Survey",
    adCategory: "career"
  },
  {
    id: 15,
    category: "Interpersonal & Social",
    question: "What is the difference between being alone and being lonely?",
    choices: [
      "A) They're the same — if you're alone, you're lonely",
      "B) Being alone is a physical state of solitude; loneliness is a painful feeling of disconnection that can happen even in a crowd",
      "C) Loneliness only happens when you don't have any friends",
      "D) Being alone is unhealthy; humans need constant social contact"
    ],
    correct: 1,
    explanation: "You can feel deeply lonely at a party full of people, and you can feel perfectly content spending a weekend by yourself. Loneliness is about the gap between the connection you want and the connection you have. Learning to enjoy your own company is actually one of the most important life skills you can develop.",
    research: "Cacioppo & Patrick, Loneliness: Human Nature and the Need for Social Connection (2008); Surgeon General's Advisory on Loneliness (2023)",
    adCategory: "mental-health"
  },
  {
    id: 16,
    category: "Legal Rights",
    question: "What happens if you fail to appear in court for a traffic ticket?",
    choices: [
      "A) The ticket is dismissed after 90 days",
      "B) You just get a small late fee added to the fine",
      "C) A bench warrant is issued for your arrest, your license may be suspended, and additional fines are added",
      "D) The court reschedules automatically and sends you a new date"
    ],
    correct: 2,
    explanation: "Skipping court — even for a minor traffic ticket — can snowball fast. A bench warrant means you can be arrested at any traffic stop, your license can be suspended, and the fines multiply. A small problem becomes a life-disrupting one. Always show up or handle it before the court date.",
    research: "National Center for State Courts; individual state failure-to-appear statutes; Legal Aid Society resources",
    adCategory: "legal"
  },
  {
    id: 17,
    category: "Banking & Financial Systems",
    question: "Why is using a debit card for online purchases riskier than using a credit card?",
    choices: [
      "A) Debit cards charge higher transaction fees",
      "B) If your debit card is compromised, the money is taken directly from your bank account; with a credit card, you dispute a charge before paying",
      "C) Debit cards don't work on most websites",
      "D) Credit cards always offer purchase insurance on every item"
    ],
    correct: 1,
    explanation: "When a thief uses your debit card, your actual money is gone — pulled right out of your checking account. Getting it back can take weeks of investigation while your bills bounce. With a credit card, it's the bank's money at risk, and you dispute the charge before it's ever paid. That buffer matters a lot.",
    research: "Federal Trade Commission consumer protection guides; Fair Credit Billing Act vs. Electronic Fund Transfer Act protections",
    adCategory: "banking"
  },
  {
    id: 18,
    category: "Interpersonal & Social",
    question: "What is the difference between people-pleasing and genuine kindness?",
    choices: [
      "A) There's no difference — being nice to people is always good",
      "B) People-pleasing is driven by fear of rejection and need for approval; kindness is a free choice with no strings attached",
      "C) People-pleasing is just being extra kind; it only becomes a problem if people take advantage",
      "D) Kindness is for strangers; people-pleasing is for people you care about"
    ],
    correct: 1,
    explanation: "Kindness comes from a place of genuine care — you help because you want to, and you're okay if the answer is no. People-pleasing comes from anxiety: you say yes because you're terrified of conflict, rejection, or being seen as difficult. Over time, it leads to resentment and burnout because you're abandoning your own needs.",
    research: "Braiker, Harriet, The Disease to Please (2002); Lerner, Harriet, The Dance of Anger (2014)",
    adCategory: "mental-health"
  },
  {
    id: 19,
    category: "Health, Insurance & Taxes",
    question: "What is an EOB (Explanation of Benefits), and does it mean you owe money?",
    choices: [
      "A) It's your final medical bill — pay the amount shown",
      "B) It's a summary from your insurance showing what was billed, what they paid, and what you may owe — but it is NOT a bill",
      "C) It's a receipt proving you already paid",
      "D) It's a pre-authorization form for your next visit"
    ],
    correct: 1,
    explanation: "An EOB is just your insurance company saying 'Here's what happened with this claim.' It shows what the provider charged, what insurance covered, and what's left. But it's NOT a bill. Wait for the actual bill from your doctor's office. Comparing the EOB to the bill can help you catch errors — medical billing mistakes are surprisingly common.",
    research: "Healthcare.gov; Kaiser Family Foundation; Medical Billing Advocates of America — estimates 80% of medical bills contain errors",
    adCategory: "health-insurance"
  },
  {
    id: 20,
    category: "Credit",
    question: "How long does a single missed payment stay on your credit report?",
    choices: [
      "A) 1 year",
      "B) 3 years",
      "C) 7 years",
      "D) 10 years — same as a bankruptcy"
    ],
    correct: 2,
    explanation: "One missed payment — even by a few days past 30 — stays on your credit report for 7 full years. The impact fades over time, but it's there. This is why autopay for at least the minimum is so important. A single slip-up in college can follow you into your late twenties.",
    research: "Fair Credit Reporting Act (FCRA), Section 605; Experian, Equifax, TransUnion reporting guidelines",
    adCategory: "credit"
  },
  {
    id: 21,
    category: "Career & Money",
    question: "What are 'transferable skills,' and why do they matter?",
    choices: [
      "A) Skills that only apply to one specific job or industry",
      "B) Abilities like communication, problem-solving, and leadership that you can carry from one job or field to another",
      "C) Technical certifications that transfer between companies",
      "D) Skills you list on a resume that you don't actually have"
    ],
    correct: 1,
    explanation: "Every job teaches you skills that work somewhere else. Managed a fast-food rush? That's crisis management and team coordination. Handled difficult customers? That's conflict resolution. The key is learning to name and frame these skills so employers see your value, even if your experience seems unrelated to the role.",
    research: "National Association of Colleges and Employers (NACE) Job Outlook Survey (2023); Bolles, What Color Is Your Parachute? (2024)",
    adCategory: "career"
  },
  {
    id: 22,
    category: "Interpersonal & Social",
    question: "What is 'stonewalling' in a conflict?",
    choices: [
      "A) Calmly taking a break to collect your thoughts",
      "B) Shutting down completely — refusing to respond, engage, or acknowledge the other person during a conflict",
      "C) Standing firm on your position during an argument",
      "D) Asking to change the subject because the topic is uncomfortable"
    ],
    correct: 1,
    explanation: "Stonewalling is one of Gottman's Four Horsemen — it's when someone completely withdraws, goes silent, or shuts down emotionally during conflict. It often happens when someone is overwhelmed (flooded), but to the other person it feels like being punished with silence. Taking a break is healthy; disappearing emotionally is destructive.",
    research: "Gottman & Silver, The Seven Principles for Making Marriage Work (1999); The Gottman Institute research on physiological flooding",
    adCategory: "relationships"
  },
  {
    id: 23,
    category: "Housing & Tenant Rights",
    question: "If your landlord refuses to fix a serious problem like broken heating or a water leak, what is your strongest legal option?",
    choices: [
      "A) Stop paying rent immediately until it's fixed",
      "B) Fix it yourself and never mention it",
      "C) Document everything in writing and file a complaint with your local housing authority or code enforcement",
      "D) Move out the next day — you have no recourse"
    ],
    correct: 2,
    explanation: "Document everything — take photos, send written requests (email or certified mail), and file complaints with your local housing or code enforcement agency. Many areas allow 'repair and deduct' or rent withholding, but only through a legal process. Just stopping rent without following proper steps can get you evicted, even when the landlord is wrong.",
    research: "Implied warranty of habitability (varies by state); HUD tenant complaint resources; Nolo Press legal guides",
    adCategory: "housing"
  },
  {
    id: 24,
    category: "Health, Insurance & Taxes",
    question: "What can happen if you simply don't file your taxes?",
    choices: [
      "A) Nothing — if you owe less than $1,000, the IRS doesn't care",
      "B) The IRS can charge penalties, interest, and eventually garnish wages, seize refunds, or file criminal charges",
      "C) You automatically get an extension until the next year",
      "D) Your employer files for you, so it doesn't matter"
    ],
    correct: 1,
    explanation: "The IRS doesn't forget. Failure-to-file penalties start at 5% of what you owe per month. Even if you can't pay what you owe, you should still file — the penalty for not filing is 10 times higher than the penalty for not paying. And if the IRS owes you a refund? You lose it after 3 years of not filing.",
    research: "IRS Publication 17; IRS failure-to-file vs. failure-to-pay penalty structures; 26 U.S.C. § 6651",
    adCategory: "health-insurance"
  },
  {
    id: 25,
    category: "Interpersonal & Social",
    question: "What is gaslighting?",
    choices: [
      "A) Lying about something once to avoid getting in trouble",
      "B) A manipulation tactic where someone makes you question your own memory, perception, or sanity over time",
      "C) Disagreeing with someone's perspective during an argument",
      "D) Being passive-aggressive instead of saying what you really mean"
    ],
    correct: 1,
    explanation: "Gaslighting isn't just lying — it's a sustained pattern of making you doubt your own reality. 'That never happened,' 'You're overreacting,' 'You're remembering it wrong' — said enough times, you start trusting them more than yourself. It's a form of psychological abuse and often escalates over time.",
    research: "Stern, Robin, The Gaslight Effect (2007); Sweet, Paige L., 'The Sociology of Gaslighting,' American Sociological Review (2019)",
    adCategory: "relationships"
  },
  {
    id: 26,
    category: "Credit",
    question: "What is a good target for your credit utilization ratio?",
    choices: [
      "A) Use up to 90% of your available credit to show you need it",
      "B) Keep it under 30%, but under 10% is even better",
      "C) Always carry a balance to show activity",
      "D) It doesn't matter as long as you make payments on time"
    ],
    correct: 1,
    explanation: "Credit utilization — how much of your available credit you're using — is the second biggest factor in your score at 30%. If you have a $1,000 limit, try to keep your balance under $300, ideally under $100. And no, you don't need to carry a balance to build credit. Pay it off every month.",
    research: "FICO scoring model; Experian credit education resources; myFICO.com utilization guidelines",
    adCategory: "credit"
  },
  {
    id: 27,
    category: "Legal Rights",
    question: "If a police officer pulls you over, which of the following are you legally required to do?",
    choices: [
      "A) Answer all questions, including where you're going and where you've been",
      "B) Provide your license, registration, and insurance; you can politely decline to answer questions beyond that",
      "C) Get out of the car immediately without being asked",
      "D) Consent to a vehicle search if they ask"
    ],
    correct: 1,
    explanation: "You must identify yourself and provide driving documents. Beyond that, you have the right to remain silent and the right to decline a search. Be polite, keep your hands visible, and say 'I respectfully decline to answer further questions' or 'I do not consent to a search.' Knowing your rights calmly is not the same as being combative.",
    research: "ACLU Know Your Rights guides; Fourth and Fifth Amendments to the U.S. Constitution; Terry v. Ohio (1968)",
    adCategory: "legal"
  },
  {
    id: 28,
    category: "Career & Money",
    question: "When is the best time to negotiate your salary?",
    choices: [
      "A) After you've been at the job for at least a year",
      "B) After they extend a written offer but before you accept — that's when you have the most leverage",
      "C) During the first interview to show confidence",
      "D) You shouldn't negotiate — employers offer the most they're willing to pay"
    ],
    correct: 1,
    explanation: "The moment between receiving an offer and accepting it is your golden window. The company has already decided they want you — that's when your leverage is highest. Failing to negotiate your starting salary can cost you over $600,000 in cumulative earnings across a career. It's uncomfortable for 15 minutes but worth it for decades.",
    research: "Babcock & Laschever, Women Don't Ask (2003); Harvard Law School Program on Negotiation; salary.com negotiation research",
    adCategory: "career"
  },
  {
    id: 29,
    category: "Interpersonal & Social",
    question: "What does the research say about social media use and loneliness?",
    choices: [
      "A) Social media has no measurable impact on mental health",
      "B) More social media always means more loneliness — it's a direct cause",
      "C) Limiting social media to about 30 minutes per day significantly reduced loneliness and depression in a controlled study",
      "D) Social media only affects people who already have mental health conditions"
    ],
    correct: 2,
    explanation: "A landmark study at the University of Pennsylvania found that students who limited social media to 30 minutes per day showed significant reductions in loneliness and depression after just three weeks. It's not that social media is pure evil — it's that passive scrolling replaces the real connection your brain actually needs.",
    research: "Hunt, Marx, Lipson & Young, 'No More FOMO,' Journal of Social and Clinical Psychology (2018), University of Pennsylvania",
    adCategory: "digital-life"
  },
  {
    id: 30,
    category: "Housing & Tenant Rights",
    question: "What does 'joint and several liability' mean on a lease with roommates?",
    choices: [
      "A) Each roommate is only responsible for their portion of the rent",
      "B) All roommates are individually responsible for the full rent — if one doesn't pay, the others owe the entire amount",
      "C) The landlord must pursue each roommate separately in court",
      "D) Only the person whose name is first on the lease is responsible"
    ],
    correct: 1,
    explanation: "This is the clause that catches people off guard. If your roommate bounces and stops paying, you're on the hook for their share — the full rent is your responsibility. The landlord doesn't care about your private split arrangement. Before signing a joint lease, understand that you're financially tied to everyone on it.",
    research: "Nolo Press, Every Tenant's Legal Guide; Black's Law Dictionary definition of joint and several liability",
    adCategory: "housing"
  },
  {
    id: 31,
    category: "Interpersonal & Social",
    question: "What is the difference between venting and emotional dumping?",
    choices: [
      "A) They're the same thing — both mean talking about your problems",
      "B) Venting is time-limited and asks for space; dumping is unloading without regard for the other person's capacity or consent",
      "C) Venting is healthy; dumping is just venting to the wrong person",
      "D) Dumping only happens in therapy"
    ],
    correct: 1,
    explanation: "Venting is saying 'Hey, I need to talk about something — do you have space for that right now?' and keeping it focused. Dumping is unloading all your stress on someone without asking, without a filter, and without caring that they might have their own stuff going on. One respects the relationship; the other depletes it.",
    research: "Zaki, Jamil, The War for Kindness (2019); research on empathy fatigue and compassion fatigue in relationships",
    adCategory: "communication"
  },
  {
    id: 32,
    category: "Banking & Financial Systems",
    question: "What is the difference between gross pay and net pay?",
    choices: [
      "A) Gross pay is what you earn before taxes and deductions; net pay is what actually hits your bank account",
      "B) Net pay is your total salary; gross pay is after deductions",
      "C) Gross pay is hourly; net pay is salary",
      "D) They're the same if you claim enough deductions on your W-4"
    ],
    correct: 0,
    explanation: "When someone offers you $40,000 a year, that's gross pay. After federal tax, state tax, Social Security, Medicare, and any benefits deductions, your net (take-home) pay is significantly less — often 25-35% less. Always budget based on net pay, not gross, or you'll overspend every single month.",
    research: "IRS Publication 15; Bureau of Labor Statistics; practical financial literacy curricula (Jump$tart Coalition)",
    adCategory: "banking"
  },
  {
    id: 33,
    category: "Credit",
    question: "What is the difference between a hard inquiry and a soft inquiry on your credit?",
    choices: [
      "A) Hard inquiries raise your score; soft inquiries lower it",
      "B) A hard inquiry happens when you apply for credit and can lower your score; a soft inquiry (like checking your own score) does not affect it",
      "C) They both lower your score equally",
      "D) Hard inquiries only happen when you miss a payment"
    ],
    correct: 1,
    explanation: "Every time you apply for a credit card, loan, or apartment that checks your credit, that's a hard pull — and it can ding your score by a few points. Checking your own score, pre-approval offers, and employment checks are soft pulls and don't affect it at all. Too many hard inquiries in a short period looks desperate to lenders.",
    research: "FICO scoring model impact analysis; CFPB consumer education resources; myFICO.com inquiry guidelines",
    adCategory: "credit"
  },
  {
    id: 34,
    category: "Legal Rights",
    question: "What does it actually mean when police say 'Anything you say can and will be used against you'?",
    choices: [
      "A) It's just a formality — they can't really use casual conversation in court",
      "B) It means literally anything — even something you think sounds innocent — can be taken out of context and used as evidence against you",
      "C) It only applies to a formal written statement",
      "D) It only applies after you've been formally charged with a crime"
    ],
    correct: 1,
    explanation: "This isn't a bluff or a technicality. Nervous rambling, 'explaining your side,' trying to talk your way out of it — all of it can be used in court, and it often is. The right to remain silent exists because talking to police without a lawyer almost never helps you and frequently hurts you, even if you're innocent.",
    research: "Miranda v. Arizona (1966); Duane, James, 'Don't Talk to the Police' (Regent University lecture, widely cited); Fifth Amendment protections",
    adCategory: "legal"
  },
  {
    id: 35,
    category: "Health, Insurance & Taxes",
    question: "What is the main difference between a W-2 and a 1099?",
    choices: [
      "A) W-2 is for part-time workers; 1099 is for full-time",
      "B) W-2 means your employer withholds taxes for you; 1099 means you're responsible for calculating and paying your own taxes",
      "C) 1099 workers get more benefits than W-2 employees",
      "D) W-2 income is taxed; 1099 income is not"
    ],
    correct: 1,
    explanation: "If you get a W-2, taxes are taken out of each paycheck automatically. If you get a 1099, you're considered self-employed — no taxes are withheld, and you owe both income tax AND self-employment tax (about 15.3% extra for Social Security and Medicare). Many new freelancers get destroyed at tax time because they didn't set money aside.",
    research: "IRS Form W-2 and Form 1099-NEC instructions; IRS Publication 505 (Tax Withholding and Estimated Tax)",
    adCategory: "health-insurance"
  },
  {
    id: 36,
    category: "Interpersonal & Social",
    question: "What is a 'trauma bond'?",
    choices: [
      "A) A deep emotional connection formed through a shared difficult experience, like surviving a natural disaster together",
      "B) An unhealthy attachment formed through cycles of abuse and intermittent reinforcement — where the abuser alternates between cruelty and affection",
      "C) The bond between a therapist and their client",
      "D) Any relationship that started during a tough time in your life"
    ],
    correct: 1,
    explanation: "Trauma bonds form when someone cycles between hurting you and being incredibly loving. Your brain gets hooked on the relief after the pain — it's the same mechanism as addiction. That's why people in abusive relationships often say 'But when it's good, it's really good.' The highs feel higher because the lows are so devastating.",
    research: "Dutton & Painter, 'Emotional Attachments in Abusive Relationships' (1993); Patrick Carnes, The Betrayal Bond (1997)",
    adCategory: "relationships"
  },
  {
    id: 37,
    category: "Career & Money",
    question: "How should you think about your first job out of high school or college?",
    choices: [
      "A) Don't take anything unless it's your dream job — settling sends the wrong message",
      "B) Your first job is a learning platform, not your final destination — focus on gaining skills, not just a title",
      "C) Take the highest-paying option regardless of what you'll learn",
      "D) Your first job determines your entire career path, so choose very carefully"
    ],
    correct: 1,
    explanation: "Your first job isn't your forever job — it's where you learn how workplaces function, build skills, and figure out what you actually like (and what you don't). The person who takes a 'less impressive' job but learns project management, client relations, and self-discipline often outpaces the person who held out for a title.",
    research: "Reid Hoffman, The Start-Up of You (2012); LinkedIn Workforce Report data on career pivots",
    adCategory: "career"
  },
  {
    id: 38,
    category: "Interpersonal & Social",
    question: "What does assertive communication look like compared to aggressive and passive-aggressive communication?",
    choices: [
      "A) Assertive is firm and direct while respecting others; aggressive attacks; passive-aggressive expresses anger indirectly",
      "B) Assertive means always getting your way politely",
      "C) Aggressive is just being honest; assertive is sugarcoating",
      "D) Passive-aggressive is the healthiest because it avoids direct conflict"
    ],
    correct: 0,
    explanation: "Assertive: 'I felt disrespected when you interrupted me. I'd like to finish my thought.' Aggressive: 'Shut up, you never let anyone talk!' Passive-aggressive: silently giving someone the cold shoulder for a week. Assertiveness is the only style that protects your needs while keeping the relationship intact.",
    research: "Alberti & Emmons, Your Perfect Right (1970/2017, 10th ed.); Linehan, DBT Skills Training Manual — interpersonal effectiveness module",
    adCategory: "communication"
  },
  {
    id: 39,
    category: "Housing & Tenant Rights",
    question: "What is the #1 reason roommate living situations fall apart?",
    choices: [
      "A) One person is messier than the other",
      "B) Different sleep schedules",
      "C) Unspoken expectations — people assume they're on the same page without ever discussing it",
      "D) Disagreements about splitting the rent"
    ],
    correct: 2,
    explanation: "Most roommate blowups happen because people never had a real conversation about expectations — guests, noise, cleaning, shared food, bill timing, overnight visitors. Everyone assumes their standard is 'normal.' Having that awkward conversation before you sign the lease prevents the explosion three months later.",
    research: "Carey, Benedict, 'The Art of Roommate Relations,' New York Times (2013); Emmons & McCullough research on expectation-reality gaps in cohabitation",
    adCategory: "housing"
  },
  {
    id: 40,
    category: "Credit",
    question: "What does it mean to co-sign a loan, and what is the real risk?",
    choices: [
      "A) You're just vouching for the person's character — there's no financial risk to you",
      "B) You're equally responsible for the full debt; if they don't pay, the lender comes after you and your credit is damaged",
      "C) You only owe half of the remaining balance if they default",
      "D) Co-signing only affects your credit if the loan goes to collections"
    ],
    correct: 1,
    explanation: "Co-signing isn't a favor — it's a legal commitment. If they miss payments, your credit gets hit. If they default, you owe the full amount. It shows up as your debt on your credit report, which can affect your ability to get your own loans. The FTC says 3 out of 4 co-signers end up paying some or all of the debt.",
    research: "Federal Trade Commission (FTC) co-signing advisories; CFPB consumer guides on co-signing risk",
    adCategory: "credit"
  },
  {
    id: 41,
    category: "Health, Insurance & Taxes",
    question: "What is renter's insurance, and why is it often worth the cost?",
    choices: [
      "A) Insurance the landlord provides that covers your belongings",
      "B) A policy you buy (usually $15-30/month) that covers your personal property, liability, and temporary housing if your place becomes unlivable",
      "C) A type of health insurance for people who rent",
      "D) Only necessary if you own expensive electronics"
    ],
    correct: 1,
    explanation: "If your apartment floods, gets broken into, or catches fire, your landlord's insurance covers the building — not your stuff. Renter's insurance typically costs $15-30/month and covers your belongings, liability (if someone gets hurt in your place), and even hotel costs if you're displaced. It's one of the cheapest forms of protection you can buy.",
    research: "National Association of Insurance Commissioners (NAIC); Insurance Information Institute renter's insurance data",
    adCategory: "health-insurance"
  },
  {
    id: 42,
    category: "Interpersonal & Social",
    question: "What is the difference between a mentor and a sponsor in your professional life?",
    choices: [
      "A) They're the same — someone who gives you career advice",
      "B) A mentor gives you advice and guidance; a sponsor actively uses their influence to open doors and advocate for you in rooms you're not in",
      "C) A sponsor is someone you pay for coaching; a mentor is free",
      "D) Mentors are inside your company; sponsors are outside"
    ],
    correct: 1,
    explanation: "A mentor talks to you. A sponsor talks about you — in meetings, during promotions, in hiring decisions. Both are valuable, but research shows sponsors have a bigger impact on career advancement because they put their reputation on the line for you. The key: you earn a sponsor by doing excellent, visible work.",
    research: "Hewlett, Sylvia Ann, Forget a Mentor, Find a Sponsor (2013); Center for Talent Innovation research on sponsorship",
    adCategory: "workplace-social"
  },
  {
    id: 43,
    category: "Banking & Financial Systems",
    question: "How much should you have in an emergency fund?",
    choices: [
      "A) $500 is enough for any emergency",
      "B) 3 to 6 months of essential living expenses",
      "C) At least $10,000 before you start investing",
      "D) One month's rent is sufficient"
    ],
    correct: 1,
    explanation: "The standard advice is 3-6 months of your essential expenses — rent, food, utilities, transportation, insurance. But even starting with $1,000 is a massive step. Nearly 40% of Americans can't cover a $400 emergency. Start where you are, automate a small transfer each paycheck, and build from there.",
    research: "Federal Reserve, Report on the Economic Well-Being of U.S. Households (2023); Dave Ramsey's Baby Step 1; Vicki Robin, Your Money or Your Life (2018)",
    adCategory: "banking"
  },
  {
    id: 44,
    category: "Interpersonal & Social",
    question: "What is 'emotional labor' in relationships?",
    choices: [
      "A) The physical effort of doing chores for someone else",
      "B) The invisible mental and emotional work of managing feelings, logistics, and social responsibilities in a relationship — often unequally distributed",
      "C) Getting paid to be nice to customers at work",
      "D) When someone makes everything about their feelings"
    ],
    correct: 1,
    explanation: "Remembering birthdays, planning holidays, noticing when someone's upset, keeping the social calendar, managing family dynamics — this is emotional labor, and in many relationships, it falls disproportionately on one person. It's exhausting when it's invisible and unappreciated. Naming it is the first step to sharing it.",
    research: "Hochschild, Arlie, The Second Shift (1989); Hartley, Gemma, Fed Up: Emotional Labor, Women, and the Way Forward (2018)",
    adCategory: "relationships"
  },
  {
    id: 45,
    category: "Legal Rights",
    question: "What is the difference between being 'detained' and being 'arrested'?",
    choices: [
      "A) They're the same thing — both mean you're going to jail",
      "B) Detained means you're temporarily held for questioning; arrested means you're formally charged and taken into custody",
      "C) You have rights when arrested but not when detained",
      "D) Detained only happens at airports and borders"
    ],
    correct: 1,
    explanation: "Being detained means an officer has reasonable suspicion to hold you briefly for investigation. Being arrested means they have probable cause to believe you committed a crime and you're formally taken into custody. In both cases, you have the right to remain silent. The key question to ask: 'Am I free to go?' If yes, walk away calmly.",
    research: "Terry v. Ohio (1968); Fourth Amendment jurisprudence; ACLU Know Your Rights resources",
    adCategory: "legal"
  },
  {
    id: 46,
    category: "Career & Money",
    question: "What should you do if your boss takes credit for your work?",
    choices: [
      "A) Confront them publicly in a meeting",
      "B) Start documenting your contributions, share your work directly with stakeholders, and use phrases like 'building on my analysis' in group settings",
      "C) Just accept it — that's how corporate culture works",
      "D) Immediately go to HR and file a formal complaint"
    ],
    correct: 1,
    explanation: "Don't blow up and don't go silent. Start making your work visible: send email summaries of your contributions, CC relevant people, and use 'I' statements in meetings — 'Based on the analysis I ran...' Create a paper trail. If it continues, a calm private conversation with your boss is appropriate before escalating.",
    research: "Grant, Adam, Give and Take (2013); Harvard Business Review articles on workplace credit dynamics; Sandberg, Lean In (2013)",
    adCategory: "career"
  },
  {
    id: 47,
    category: "Interpersonal & Social",
    question: "According to research, how often does your close friend group completely turn over?",
    choices: [
      "A) Every 2-3 years",
      "B) About every 7 years — you replace roughly half your close friends in that time",
      "C) True friends never change — your core group stays the same for life",
      "D) Every year during major life transitions"
    ],
    correct: 1,
    explanation: "A study tracking social networks found that people replace about half of their close friends every 7 years. It's not because something went wrong — it's because you grow, move, change priorities, and so do they. Letting friendships evolve naturally, including letting some go, is a sign of growth, not failure.",
    research: "Bhattacharya, Ghosh, Monsivais, Dunbar & Kaski, 'Sex differences in social focus across the life cycle in humans,' Royal Society Open Science (2016); Dunbar, R., Friends (2021)",
    adCategory: "identity"
  },
  {
    id: 48,
    category: "Health, Insurance & Taxes",
    question: "What is 'at-will employment,' and what does it mean for you?",
    choices: [
      "A) You can only be fired for cause — they need a documented reason",
      "B) Your employer can fire you at any time for any reason (or no reason) that isn't illegal, and you can quit at any time too",
      "C) It means you're a contract worker with no benefits",
      "D) It only applies to jobs that don't have a union"
    ],
    correct: 1,
    explanation: "In 49 out of 50 states (Montana is the exception), at-will employment means you or your employer can end the relationship at any time for any legal reason. They can't fire you for illegal reasons (race, gender, retaliation for reporting violations), but they can fire you because they don't like your shoes. Know your state's exceptions.",
    research: "National Conference of State Legislatures, 'At-Will Employment Overview'; Department of Labor employment law guides",
    adCategory: "health-insurance"
  },
  {
    id: 49,
    category: "Credit",
    question: "What credit score do most landlords require to approve a rental application?",
    choices: [
      "A) 800+ — you need excellent credit to rent",
      "B) 620-650 is the typical minimum, though requirements vary by landlord and market",
      "C) Credit score doesn't matter for renting — only for buying a home",
      "D) 500 — as long as you're not in collections"
    ],
    correct: 1,
    explanation: "Most landlords and property management companies look for a credit score of at least 620-650. In competitive rental markets, you might need higher. If your score is below that, you may need a co-signer, larger deposit, or proof of steady income. This is one reason building credit early — even with a small secured card — matters so much.",
    research: "TransUnion Rental Screening Solutions data; RentCafe annual renter credit score analysis",
    adCategory: "credit"
  },
  {
    id: 50,
    category: "Interpersonal & Social",
    question: "What are the components of a genuine apology according to research?",
    choices: [
      "A) Just say 'I'm sorry' sincerely and move on",
      "B) Express regret, acknowledge what you did wrong, take responsibility, offer repair, and request forgiveness — without excuses or 'but'",
      "C) Apologize once and then never bring it up again",
      "D) Buy a gift and show through actions, not words"
    ],
    correct: 1,
    explanation: "Research found that the most effective apologies include six components, with acknowledging responsibility being the most important. 'I'm sorry you feel that way' is not an apology — it shifts blame to the other person's feelings. A real apology owns what you did, explains how you'll prevent it, and doesn't use 'but' to justify it.",
    research: "Lewicki, Polin & Lount, 'An Exploration of the Structure of Effective Apologies,' Negotiation and Conflict Management Research (2016)",
    adCategory: "communication"
  },
  {
    id: 51,
    category: "Banking & Financial Systems",
    question: "What happens if a bank closes your account involuntarily?",
    choices: [
      "A) Nothing — you just open a new account at another bank",
      "B) It gets reported to ChexSystems, making it difficult to open new accounts at most banks for up to 5 years",
      "C) You lose all the money in the account permanently",
      "D) Your credit score drops by 100 points immediately"
    ],
    correct: 1,
    explanation: "When a bank closes your account — usually for repeated overdrafts, negative balances, or suspicious activity — they report it to ChexSystems. That record stays for 5 years and most banks check it before approving new accounts. You may be limited to second-chance banking programs, which often have extra fees and fewer features.",
    research: "ChexSystems consumer disclosure policies; FDIC resources on involuntary account closures",
    adCategory: "banking"
  },
  {
    id: 52,
    category: "Interpersonal & Social",
    question: "What is a 'parasocial relationship'?",
    choices: [
      "A) A relationship between two people who only interact on social media",
      "B) A one-sided emotional attachment to a celebrity, influencer, or content creator who doesn't know you exist",
      "C) A codependent friendship where one person does all the emotional work",
      "D) A relationship with a therapist or counselor"
    ],
    correct: 1,
    explanation: "When you watch someone's content every day, you start to feel like you know them — their humor, values, daily life. But they don't know you at all. That's a parasocial relationship. It's not inherently bad, but it becomes a problem when it replaces real human connection or when you confuse that familiarity with actual intimacy.",
    research: "Horton & Wohl, 'Mass Communication and Para-Social Interaction' (1956); Derrick, Gabriel & Hugenberg, 'Social surrogacy' in Journal of Experimental Social Psychology (2009)",
    adCategory: "digital-life"
  },
  {
    id: 53,
    category: "Health, Insurance & Taxes",
    question: "What is the difference between subsidized and unsubsidized federal student loans?",
    choices: [
      "A) Subsidized loans are for graduate students; unsubsidized are for undergrads",
      "B) With subsidized loans, the government pays the interest while you're in school; with unsubsidized, interest starts accruing immediately",
      "C) Subsidized loans have lower interest rates but higher fees",
      "D) There's no real difference — they're just different names for the same loan"
    ],
    correct: 1,
    explanation: "With subsidized loans, the government covers the interest while you're in school and during grace periods — they're based on financial need. With unsubsidized loans, interest starts building the day the money is disbursed. On a $20,000 unsubsidized loan, you could owe $3,000+ in interest before you even graduate if you don't make payments.",
    research: "Federal Student Aid (studentaid.gov); Department of Education loan program guidelines",
    adCategory: "health-insurance"
  },
  {
    id: 54,
    category: "Career & Money",
    question: "What is the most important thing to understand about networking?",
    choices: [
      "A) It's about collecting as many business cards and LinkedIn connections as possible",
      "B) Authentic networking is about building genuine relationships and offering value — not just asking for favors",
      "C) Networking only matters if you're looking for a job right now",
      "D) Introverts can't network effectively"
    ],
    correct: 1,
    explanation: "The people who network best aren't working a room handing out cards. They're building real relationships — asking thoughtful questions, following up after conversations, and looking for ways to help others first. The best time to build your network is before you need something from it.",
    research: "Ferrazzi, Keith, Never Eat Alone (2005); Casciaro, Gino & Kouchaki, 'The Contaminating Effects of Building Instrumental Ties,' Administrative Science Quarterly (2014)",
    adCategory: "career"
  },
  {
    id: 55,
    category: "Interpersonal & Social",
    question: "What is financial abuse in a relationship?",
    choices: [
      "A) When a couple disagrees about how to spend money",
      "B) When one partner controls, restricts, or manipulates the other's access to money to maintain power and limit independence",
      "C) When someone is bad with money and their partner has to manage the finances",
      "D) Only happens when one partner has no income at all"
    ],
    correct: 1,
    explanation: "Financial abuse is about control, not budgeting. It looks like: giving an 'allowance,' demanding receipts for every purchase, sabotaging someone's employment, hiding assets, or running up debt in a partner's name. It affects 99% of domestic violence cases and is one of the top reasons people stay in abusive situations — they literally can't afford to leave.",
    research: "National Network to End Domestic Violence; Adams, Adrienne, 'Measuring the Effects of Domestic Violence on Women's Financial Well-Being' (2011); NNEDV financial abuse statistics",
    adCategory: "relationships"
  },
  {
    id: 56,
    category: "Housing & Tenant Rights",
    question: "How much can a landlord legally deduct from your security deposit when you move out?",
    choices: [
      "A) Whatever they want — it's their property",
      "B) Only for documented damages beyond normal wear and tear, and most states require an itemized list within a specific timeframe",
      "C) They can keep it all if you don't give 60 days' notice",
      "D) Nothing — security deposits must always be returned in full"
    ],
    correct: 1,
    explanation: "Landlords can only deduct for actual damages — a hole you punched in the wall, not paint fading over time. Most states require them to send you an itemized list of deductions within 14-30 days. Take photos when you move in AND out. Without evidence, it becomes your word against theirs, and landlords often count on tenants not knowing the law.",
    research: "State-specific security deposit laws compiled by Nolo Press; CFPB tenant guides; e.g., California Civil Code §1950.5",
    adCategory: "housing"
  },
  {
    id: 57,
    category: "Legal Rights",
    question: "What is an arbitration clause, and why should you watch for it in contracts?",
    choices: [
      "A) A clause that lets you cancel the contract within 30 days",
      "B) A clause that means if you have a dispute, you must resolve it through private arbitration instead of going to court — often giving up your right to a jury trial or class action",
      "C) A clause that protects your privacy in case of a data breach",
      "D) A legal requirement in all employment contracts"
    ],
    correct: 1,
    explanation: "Arbitration clauses are buried in everything — gym memberships, job offers, app terms of service, credit cards. By agreeing, you give up your right to sue in court, join a class action, or have a jury hear your case. The arbitrator is often chosen by the company. Read before you sign, and know what you're waiving.",
    research: "American Arbitration Association; CFPB studies on forced arbitration (2015); Epic Systems Corp. v. Lewis (2018)",
    adCategory: "legal"
  },
  {
    id: 58,
    category: "Career & Money",
    question: "What is the biggest red flag in a job interview from the employer's side?",
    choices: [
      "A) They can't clearly describe the day-to-day responsibilities of the role",
      "B) They ask you to do a short skills test",
      "C) The interview runs longer than expected",
      "D) They ask about your long-term career goals"
    ],
    correct: 0,
    explanation: "If the people interviewing you can't explain what you'd actually be doing every day, that's a problem. It often means the role is poorly defined, expectations will shift constantly, or they're just looking for someone to dump work on. Other red flags: high turnover they can't explain, 'we're like a family here' (often means no boundaries), and pressure to accept immediately.",
    research: "Laszlo Bock, Work Rules! (2015); LinkedIn Talent Trends reports; Glassdoor workplace research",
    adCategory: "career"
  },
  {
    id: 59,
    category: "Interpersonal & Social",
    question: "What is 'coercive control' in a relationship?",
    choices: [
      "A) When a partner has strong opinions about how things should be done",
      "B) A pattern of behavior that isolates, monitors, and controls a partner — restricting their freedom, social connections, and autonomy",
      "C) Being controlling about finances only",
      "D) Only physical abuse counts as coercive control"
    ],
    correct: 1,
    explanation: "Coercive control doesn't require a single punch. It's a pattern: monitoring your phone, deciding who you can see, controlling what you wear, isolating you from friends and family, making you 'check in' constantly. It's now recognized as a crime in several countries because it systematically strips away a person's freedom and sense of self.",
    research: "Stark, Evan, Coercive Control (2007); UK Serious Crime Act 2015 (Section 76); Hamberger, Larsen & Lehrner, Journal of Family Violence (2017)",
    adCategory: "relationships"
  },
  {
    id: 60,
    category: "Banking & Financial Systems",
    question: "What is a common W-4 mistake that causes people to owe money at tax time?",
    choices: [
      "A) Claiming too many allowances or adjustments, which reduces withholding and leaves you with a surprise tax bill in April",
      "B) Filing as single instead of married",
      "C) Putting your legal name instead of a nickname",
      "D) Choosing direct deposit instead of paper check"
    ],
    correct: 0,
    explanation: "Your W-4 tells your employer how much tax to withhold from each paycheck. If you claim too many deductions or adjustments to get a bigger paycheck now, you'll owe money — sometimes thousands — when you file your taxes. It's better to get a small refund than to face a bill you can't pay. Use the IRS withholding estimator to check.",
    research: "IRS Form W-4 instructions; IRS Tax Withholding Estimator tool; common filing errors per IRS data",
    adCategory: "banking"
  },
  {
    id: 61,
    category: "Interpersonal & Social",
    question: "What is the difference between empathy, sympathy, and compassion?",
    choices: [
      "A) They're all the same — feeling bad for someone",
      "B) Sympathy is feeling pity from a distance; empathy is feeling with someone; compassion is empathy plus the motivation to help",
      "C) Empathy is stronger than compassion",
      "D) Sympathy requires understanding; empathy does not"
    ],
    correct: 1,
    explanation: "Sympathy says 'That's terrible, I'm sorry for you' — it keeps distance. Empathy says 'I feel that with you' — it connects. Compassion takes it further: 'I feel that with you, and I want to help.' Research shows compassion is actually more sustainable than empathy alone, because pure empathy without action can lead to burnout.",
    research: "Brené Brown, Dare to Lead (2018); Singer & Klimecki, 'Empathy and Compassion,' Current Biology (2014); Bloom, Paul, Against Empathy (2016)",
    adCategory: "mental-health"
  },
  {
    id: 62,
    category: "Credit",
    question: "What is the 'authorized user' strategy for building credit?",
    choices: [
      "A) Opening a joint credit card with a friend",
      "B) Being added to a responsible person's existing credit card account — their positive payment history can boost your score",
      "C) Authorizing someone else to check your credit report",
      "D) Using someone else's credit card with their verbal permission"
    ],
    correct: 1,
    explanation: "When someone with great credit adds you as an authorized user on their card, their account's positive history can appear on your credit report. You don't even have to use the card. It's one of the fastest ways to build credit from scratch, especially for young adults. Just make sure the primary cardholder has strong payment habits.",
    research: "FICO score model — authorized user accounts are factored in; CFPB consumer advisory on authorized user strategies; Experian credit education",
    adCategory: "credit"
  },
  {
    id: 63,
    category: "Health, Insurance & Taxes",
    question: "Can you negotiate a medical bill, and does it actually work?",
    choices: [
      "A) No — medical bills are fixed and non-negotiable",
      "B) Yes — hospitals and providers often reduce bills significantly if you ask, especially for uninsured patients or if you offer to pay in cash",
      "C) Only if you have a lawyer",
      "D) You can only negotiate before the service, not after"
    ],
    correct: 1,
    explanation: "Medical bills are almost always negotiable. Hospitals routinely charge wildly different prices for the same service, and most have financial assistance programs they don't advertise. Call billing, ask for an itemized bill (errors are common), and ask about payment plans or hardship discounts. Studies show patients who negotiate save 30-50% on average.",
    research: "JAMA Internal Medicine billing studies; CMS Hospital Price Transparency Rule (2021); Medical Billing Advocates of America",
    adCategory: "health-insurance"
  },
  {
    id: 64,
    category: "Interpersonal & Social",
    question: "What is the difference between 'fitting in' and 'belonging' according to Brené Brown?",
    choices: [
      "A) They're the same — if you fit in, you belong",
      "B) Fitting in means changing yourself to be accepted; belonging means being accepted for who you actually are",
      "C) Belonging requires more effort than fitting in",
      "D) Fitting in is for work; belonging is for personal relationships"
    ],
    correct: 1,
    explanation: "Brené Brown says fitting in is the opposite of belonging. When you fit in, you assess a group and change yourself to match. When you belong, you show up as yourself and are embraced for it. Fitting in is exhausting and fragile — one wrong move and you're out. True belonging doesn't require you to be anyone other than who you are.",
    research: "Brown, Brené, Braving the Wilderness (2017); Brown, Brené, The Gifts of Imperfection (2010)",
    adCategory: "identity"
  },
  {
    id: 65,
    category: "Housing & Tenant Rights",
    question: "What is the typical eviction notice timeline in most states?",
    choices: [
      "A) A landlord can have you removed within 24 hours",
      "B) Landlords must give a written notice (typically 3-30 days depending on the reason), then file in court if you don't comply — the whole process usually takes weeks to months",
      "C) You have exactly 7 days from the moment they tell you verbally",
      "D) There's no set timeline — it depends on the landlord's mood"
    ],
    correct: 1,
    explanation: "Eviction is a legal process, not a conversation. First comes a written notice (3 days for non-payment, 30 days for other reasons in many states). If you don't comply, the landlord must file in court, and you get a hearing date. A judge decides. It often takes 3-6 weeks minimum, sometimes months. No one can legally lock you out without a court order.",
    research: "State-by-state eviction timelines compiled by Nolo Press and Legal Services Corporation; local tenant rights organizations",
    adCategory: "housing"
  },
  {
    id: 66,
    category: "Career & Money",
    question: "Why should you consider the full benefits package, not just the salary?",
    choices: [
      "A) Benefits don't really add much financial value — salary is all that matters",
      "B) Benefits like health insurance, retirement matching, PTO, and tuition reimbursement can be worth $10,000-$30,000+ per year on top of your salary",
      "C) Benefits are the same at every company",
      "D) You can always negotiate benefits later; focus on salary first"
    ],
    correct: 1,
    explanation: "A job offering $50,000 with great benefits (health insurance, 5% 401k match, good PTO) can be worth more than a $60,000 job with bare-bones benefits. Health insurance alone can be worth $6,000-$15,000/year. Always calculate the total compensation, not just the number on the offer letter.",
    research: "Bureau of Labor Statistics, Employer Costs for Employee Compensation (2023); SHRM Employee Benefits Survey",
    adCategory: "career"
  },
  {
    id: 67,
    category: "Interpersonal & Social",
    question: "What does 'digital permanence' mean, and why does it matter?",
    choices: [
      "A) Your devices will eventually stop working and all data will be lost",
      "B) Anything you post, send, or share online can be saved, screenshotted, and exist forever — even if you delete it",
      "C) It means your digital accounts stay active after you die",
      "D) Social media companies delete everything after 7 years"
    ],
    correct: 1,
    explanation: "That tweet, that DM, that photo — once it's digital, you've lost control of it. Screenshots are forever. Employers search your name. College admissions check social media. Things said at 16 can resurface at 26. Digital permanence means treating every post like it could become public, permanent, and attached to your real name.",
    research: "Madden et al., Pew Research Center, 'Teens, Social Media, and Privacy' (2013/updated 2023); CareerBuilder survey — 70% of employers screen social media",
    adCategory: "digital-life"
  },
  {
    id: 68,
    category: "Legal Rights",
    question: "At what speed over the limit can a speeding ticket become a criminal offense in many states?",
    choices: [
      "A) Any amount over the speed limit is criminal",
      "B) Usually 25-30+ mph over the limit, or any speed over 100 mph — it can be charged as reckless driving, a misdemeanor",
      "C) It never becomes criminal — speeding is always just a fine",
      "D) Only if you're in a school zone"
    ],
    correct: 1,
    explanation: "In many states, going 25-30+ mph over the limit or exceeding 100 mph can elevate a ticket from a civil infraction to reckless driving — a criminal misdemeanor. That means potential jail time, a criminal record, license suspension, and insurance rates through the roof. A few seconds of speed can change your life trajectory.",
    research: "State-specific reckless driving statutes; e.g., Virginia Code § 46.2-862 (20+ mph over = reckless); NHTSA data on speed-related fatalities",
    adCategory: "legal"
  },
  {
    id: 69,
    category: "Banking & Financial Systems",
    question: "What is a common scam involving returned check fees?",
    choices: [
      "A) Someone sends you a check for more than the agreed amount and asks you to 'send back the difference' — the original check bounces days later",
      "B) Banks charge you a fee for depositing too many checks",
      "C) Checks from government agencies are always fake",
      "D) Returned check fees are illegal in most states"
    ],
    correct: 0,
    explanation: "This scam is everywhere — Craigslist, job offers, prize winnings. They send you a check for $3,000 instead of $1,000 and say 'just wire me back $2,000.' Your bank makes the funds available before the check actually clears. When it bounces days later, you owe the bank the full amount plus fees. If it feels too generous, it's a scam.",
    research: "Federal Trade Commission (FTC) fake check scam advisories; FDIC consumer alerts; Better Business Bureau scam tracker data",
    adCategory: "banking"
  },
  {
    id: 70,
    category: "Interpersonal & Social",
    question: "What is the sunk cost fallacy in relationships?",
    choices: [
      "A) When you invest money in a relationship and expect a return",
      "B) Staying in an unhealthy relationship because you've already invested so much time, energy, or emotion — even though it's not working",
      "C) When you break up too quickly because you didn't invest enough effort",
      "D) Splitting costs equally in a relationship regardless of income"
    ],
    correct: 1,
    explanation: "The sunk cost fallacy makes you think 'But we've been together for 3 years — I can't throw that away.' The time you've already spent is gone no matter what. The real question is: knowing what you know now, would you choose this relationship today? The past shouldn't hold your future hostage.",
    research: "Kahneman & Tversky, behavioral economics research on loss aversion (1979); applied to relationships by Rusbult's Investment Model Theory",
    adCategory: "relationships"
  },
  {
    id: 71,
    category: "Health, Insurance & Taxes",
    question: "What is the minimum GPA you typically need to maintain to keep your federal financial aid?",
    choices: [
      "A) 3.0 — you need at least a B average",
      "B) 2.0 — Satisfactory Academic Progress (SAP) requires at least a C average and completing 67% of attempted credits",
      "C) 1.5 — as long as you're passing most classes",
      "D) There's no GPA requirement — financial aid is based only on income"
    ],
    correct: 1,
    explanation: "Federal financial aid requires you to meet Satisfactory Academic Progress (SAP) standards: typically a 2.0 cumulative GPA and completing at least 67% of the credits you attempt. Withdrawing from classes or failing too many can put you on financial aid probation or suspension. Losing aid mid-degree is one of the top reasons students drop out.",
    research: "Federal Student Aid, Satisfactory Academic Progress (SAP) standards; National Student Clearinghouse completion rate data",
    adCategory: "health-insurance"
  },
  {
    id: 72,
    category: "Interpersonal & Social",
    question: "What is the difference between forgiving someone and reconciling with them?",
    choices: [
      "A) They're the same — if you forgive, you should let them back in",
      "B) Forgiveness is an internal release of resentment for your own peace; reconciliation is restoring the relationship — and it requires both people to change",
      "C) Reconciliation comes first, then forgiveness follows naturally",
      "D) You can't forgive without forgetting what happened"
    ],
    correct: 1,
    explanation: "Forgiveness is something you do for yourself — it's letting go of the weight of anger so it stops poisoning you. Reconciliation is rebuilding the relationship, and it requires the other person to genuinely change, not just apologize. You can fully forgive someone and still choose never to let them close again. That's not a contradiction — it's wisdom.",
    research: "Enright, Robert D., Forgiveness Is a Choice (2001); Worthington, Everett L., REACH Forgiveness model; American Psychological Association forgiveness research",
    adCategory: "mental-health"
  },
  {
    id: 73,
    category: "Credit",
    question: "What is a credit freeze, and when should you use one?",
    choices: [
      "A) It closes all your credit accounts temporarily",
      "B) It prevents new accounts from being opened in your name by blocking access to your credit report — useful for preventing identity theft",
      "C) It pauses your credit card payments during financial hardship",
      "D) It locks your credit score at its current number"
    ],
    correct: 1,
    explanation: "A credit freeze locks your credit report so no new accounts can be opened in your name without your permission. It's free, doesn't affect your credit score, and you can temporarily lift it when you need to apply for credit. After any data breach or if your SSN is compromised, this is the single most important step you can take.",
    research: "Federal Trade Commission (FTC) identity theft recovery guides; Equifax, Experian, TransUnion freeze policies; Economic Growth, Regulatory Relief, and Consumer Protection Act (2018)",
    adCategory: "credit"
  },
  {
    id: 74,
    category: "Legal Rights",
    question: "What are the real limitations of a public defender?",
    choices: [
      "A) Public defenders are not real lawyers",
      "B) They're fully qualified attorneys, but they typically carry extremely heavy caseloads — sometimes 2-4x the recommended maximum — which limits individual attention",
      "C) They only handle misdemeanors, not felonies",
      "D) They don't show up to court — they just file paperwork"
    ],
    correct: 1,
    explanation: "Public defenders are licensed, often passionate attorneys — but they're crushed by caseload. The American Bar Association recommends 150 felony cases per year max; many carry 400-700. That means less time to review evidence, meet with you, and build a defense. If you can afford a private attorney, it may be worth it for serious charges.",
    research: "American Bar Association formal opinion on defender caseloads; Brennan Center for Justice, 'How Public Defenders Became One of the Nation's Most Overburdened Professions' (2023)",
    adCategory: "legal"
  },
  {
    id: 75,
    category: "Career & Money",
    question: "What are your legal rights regarding breaks and overtime at work?",
    choices: [
      "A) Federal law requires paid 15-minute breaks every 4 hours",
      "B) Federal law requires overtime (1.5x pay) for non-exempt workers over 40 hours/week, but break requirements vary by state",
      "C) Breaks and overtime are optional perks, not legal requirements",
      "D) Overtime only applies to salaried employees"
    ],
    correct: 1,
    explanation: "The Fair Labor Standards Act requires time-and-a-half pay for non-exempt employees who work over 40 hours per week. But here's the surprise: federal law doesn't require breaks at all. Many states do mandate breaks, so know your state's rules. And 'non-exempt' means most hourly workers. If you're being denied overtime, that's wage theft.",
    research: "Fair Labor Standards Act (FLSA), 29 U.S.C. § 207; Department of Labor Wage and Hour Division; state-specific break laws",
    adCategory: "career"
  },
  {
    id: 76,
    category: "Interpersonal & Social",
    question: "What is the best way to respond when someone tells you they are having suicidal thoughts?",
    choices: [
      "A) Change the subject to cheer them up — don't dwell on it",
      "B) Ask directly if they're thinking about suicide, listen without judgment, and help them connect with professional support like the 988 Lifeline",
      "C) Promise not to tell anyone — confidentiality is most important",
      "D) Tell them other people have it worse to give them perspective"
    ],
    correct: 1,
    explanation: "The QPR model — Question, Persuade, Refer — is evidence-based training for this exact situation. Asking 'Are you thinking about suicide?' doesn't plant the idea; it opens a door. Listen without judgment, stay calm, and help connect them to the 988 Suicide & Crisis Lifeline (call or text 988). You don't need to be a therapist — you just need to not look away.",
    research: "QPR Institute (Quinnett, 1995); 988 Suicide & Crisis Lifeline; Joiner, Thomas, Why People Die by Suicide (2005); AFSP best practices for crisis response",
    adCategory: "mental-health"
  },
  {
    id: 77,
    category: "Health, Insurance & Taxes",
    question: "What should you do first if you think your identity has been stolen?",
    choices: [
      "A) Call your bank and cancel all your credit cards",
      "B) Place a fraud alert or credit freeze with all three credit bureaus, file a report at IdentityTheft.gov, and review your credit reports",
      "C) Post about it on social media to warn others",
      "D) Wait and see if any fraudulent charges appear before taking action"
    ],
    correct: 1,
    explanation: "Speed matters. Place a fraud alert (one bureau notifies the other two) or a credit freeze with Equifax, Experian, and TransUnion. File a report at IdentityTheft.gov — it creates a recovery plan and an official FTC report. Then check your credit reports for accounts you don't recognize. The faster you act, the less damage gets done.",
    research: "Federal Trade Commission, IdentityTheft.gov recovery process; Fair Credit Reporting Act fraud alert provisions; CFPB identity theft resources",
    adCategory: "health-insurance"
  },
  {
    id: 78,
    category: "Interpersonal & Social",
    question: "What is an attachment style, and why does it matter in relationships?",
    choices: [
      "A) A personality type that determines who you're attracted to",
      "B) A pattern of relating to others formed in childhood that shapes how you handle closeness, trust, and conflict in adult relationships",
      "C) How physically affectionate you are with your partner",
      "D) Something that only applies to romantic relationships"
    ],
    correct: 1,
    explanation: "Attachment theory identifies four main styles: secure, anxious, avoidant, and disorganized. They form in childhood based on how caregivers responded to your needs. Your style affects how you handle conflict, intimacy, and trust. The good news: attachment styles aren't fixed. With awareness and effort (or therapy), you can develop more secure patterns.",
    research: "Bowlby, John, Attachment and Loss (1969); Levine & Heller, Attached (2010); Ainsworth, Mary, Strange Situation experiments (1970)",
    adCategory: "relationships"
  },
  {
    id: 79,
    category: "Banking & Financial Systems",
    question: "Why is a prepaid debit card NOT the same as having a real checking account?",
    choices: [
      "A) Prepaid cards work exactly like checking accounts",
      "B) Prepaid cards often have higher fees, don't build banking history, and typically aren't reported to ChexSystems — so they don't help you rebuild banking relationships",
      "C) Prepaid cards have better fraud protection than bank accounts",
      "D) You can't use prepaid cards for online purchases"
    ],
    correct: 1,
    explanation: "Prepaid cards seem convenient but often come with monthly fees, reload fees, ATM fees, and inactivity fees that add up fast. They don't build banking history, don't help your ChexSystems record, and have weaker federal protections than bank accounts. If you're locked out of traditional banking, a second-chance checking account is almost always a better path.",
    research: "CFPB prepaid card fee studies (2019); FDIC recommendations for unbanked consumers; Pew Charitable Trusts prepaid card research",
    adCategory: "banking"
  },
  {
    id: 80,
    category: "Interpersonal & Social",
    question: "What is the difference between chemistry and compatibility in dating?",
    choices: [
      "A) They're the same — if there's chemistry, you're compatible",
      "B) Chemistry is the emotional and physical spark; compatibility is whether your values, life goals, and communication styles actually align for the long term",
      "C) Compatibility matters in friendships; chemistry matters in romance",
      "D) You can build chemistry but not compatibility"
    ],
    correct: 1,
    explanation: "Chemistry is the butterflies, the magnetic pull, the 'I can't stop thinking about you.' Compatibility is shared values, aligned life goals, and the ability to resolve conflict together. The trick is: chemistry fades over time in every relationship. Compatibility is what determines whether you're still happy at year 5, 10, or 30.",
    research: "Fisher, Helen, Why We Love (2004); Gottman & Silver stability predictors; Finkel, Eli, The All-or-Nothing Marriage (2017)",
    adCategory: "dating"
  },
  {
    id: 81,
    category: "Health, Insurance & Taxes",
    question: "How does trade school compare to a traditional 4-year degree in terms of earning potential and debt?",
    choices: [
      "A) A 4-year degree always leads to higher lifetime earnings",
      "B) Trade school graduates often enter the workforce 2+ years earlier, with less debt, and skilled trades pay $50,000-$90,000+ — sometimes outearning bachelor's degree holders",
      "C) Trade school is only for people who can't get into college",
      "D) Trade school careers have no growth potential"
    ],
    correct: 1,
    explanation: "Electricians, plumbers, HVAC technicians, and welders often earn $60,000-$90,000+ with far less student debt than 4-year graduates. Trade school takes 6 months to 2 years, costs a fraction of college, and many programs include paid apprenticeships. There's nothing lesser about skilled trades — and the demand is growing as fewer people enter these fields.",
    research: "Bureau of Labor Statistics Occupational Outlook Handbook (2023); Georgetown University Center on Education and the Workforce; National Student Clearinghouse debt-to-income data",
    adCategory: "health-insurance"
  },
  {
    id: 82,
    category: "Credit",
    question: "If your partner adds you to a joint credit account and then misses payments, what happens to your credit?",
    choices: [
      "A) Nothing — only the primary account holder's credit is affected",
      "B) Both partners' credit scores are damaged equally because both are fully responsible for the account",
      "C) Your credit is only affected if you're married",
      "D) Only the person who made the actual purchase is responsible"
    ],
    correct: 1,
    explanation: "Joint accounts mean joint responsibility — every payment and every missed payment shows up on both credit reports. This is especially risky in newer relationships. If the relationship ends badly, you're still on the hook. Think very carefully before opening joint credit accounts, especially early in a relationship.",
    research: "FICO scoring model — joint account reporting; CFPB consumer advisory on joint accounts and credit; Experian credit education",
    adCategory: "credit"
  },
  {
    id: 83,
    category: "Legal Rights",
    question: "What is the difference between a moving violation and a non-moving violation?",
    choices: [
      "A) Moving violations are more expensive; non-moving are free",
      "B) Moving violations (speeding, running a red light) affect your driving record and insurance; non-moving violations (expired tags, parking) typically do not",
      "C) Non-moving violations can lead to jail time",
      "D) There's no legal difference — they're all the same"
    ],
    correct: 1,
    explanation: "Moving violations — speeding, running stop signs, reckless driving — go on your driving record and make your insurance jump. Non-moving violations — parking tickets, expired registration, broken tail lights — are usually just fines with no points on your record. But unpaid non-moving violations can still lead to license suspension and warrants, so handle them.",
    research: "DMV.org state-by-state points system guides; Insurance Information Institute rate impact data; National Highway Traffic Safety Administration",
    adCategory: "legal"
  },
  {
    id: 84,
    category: "Career & Money",
    question: "When is the right time to leave a job?",
    choices: [
      "A) Only after you've been there for at least 2 years — anything less looks bad",
      "B) When you've stopped growing, the environment is toxic, or you have a better opportunity that aligns with your goals — not just because you had a bad week",
      "C) As soon as you feel bored or unchallenged",
      "D) Never — loyalty to a company is the most important thing"
    ],
    correct: 1,
    explanation: "There's no magic timeline. The question is: are you still growing, learning, and moving toward something? If the answer has been 'no' for a sustained period — or if the environment is genuinely harming your health or career — it's time. But always leave strategically: line up your next opportunity first, give proper notice, and don't burn bridges.",
    research: "Bureau of Labor Statistics tenure data; Buckingham & Coffman, First, Break All the Rules (1999); Gallup engagement studies",
    adCategory: "career"
  },
  {
    id: 85,
    category: "Interpersonal & Social",
    question: "What is the difference between 'holding space' for someone and trying to 'fix' their problem?",
    choices: [
      "A) Holding space means sitting quietly without talking",
      "B) Holding space means being fully present and listening without jumping to solutions; fixing means prioritizing your comfort over their need to be heard",
      "C) Fixing is always better because it's more helpful",
      "D) Holding space is passive; fixing is active — and active is always better"
    ],
    correct: 1,
    explanation: "When someone is hurting, they often don't want advice — they want to feel heard. Jumping to 'Here's what you should do' can feel dismissive, like their feelings are a problem to solve. Holding space means listening, validating, and being present without needing to fix anything. A simple 'That sounds really hard' is often more powerful than any solution.",
    research: "Rogers, Carl, On Becoming a Person (1961); Nagoski, Emily & Amelia, Burnout (2019); active listening research in counseling psychology",
    adCategory: "communication"
  },
  {
    id: 86,
    category: "Housing & Tenant Rights",
    question: "If your roommate's partner starts staying over every night but isn't on the lease, what are the risks?",
    choices: [
      "A) No risk — guests can stay as long as they want",
      "B) It can violate occupancy limits in your lease, increase utility costs you're splitting, and you may all face eviction if the landlord considers it an unauthorized occupant",
      "C) The landlord can only complain if the guest is there for over 6 months",
      "D) You can have them arrested for trespassing"
    ],
    correct: 1,
    explanation: "Most leases define how long a 'guest' can stay before they're considered an unauthorized occupant — often 7-14 consecutive days. An unauthorized occupant can put everyone on the lease at risk of eviction. Plus, more people means more utilities, more wear on the apartment, and more conflict. Address it early with your roommate, not after resentment builds.",
    research: "Nolo Press lease and occupancy guidelines; standard lease language analysis; Fair Housing Act occupancy standards",
    adCategory: "housing"
  },
  {
    id: 87,
    category: "Health, Insurance & Taxes",
    question: "What is an 'out-of-pocket maximum' on health insurance?",
    choices: [
      "A) The most you'll pay per doctor visit",
      "B) The most you'll pay for healthcare in a year — after you hit it, your insurance covers 100% of covered services",
      "C) The monthly premium amount",
      "D) The total amount your insurance company will pay for you per year"
    ],
    correct: 1,
    explanation: "The out-of-pocket maximum is your financial safety net. Once you've paid that amount in deductibles, copays, and coinsurance in a year, your insurance covers everything else at 100%. For 2024, the ACA limits this to $9,450 for individuals. It's the single most important number to look at when choosing a plan, especially if you have a chronic condition.",
    research: "Healthcare.gov plan comparison tools; ACA out-of-pocket maximum limits; Kaiser Family Foundation insurance literacy research",
    adCategory: "health-insurance"
  },
  {
    id: 88,
    category: "Interpersonal & Social",
    question: "What is the difference between supporting someone and enabling them?",
    choices: [
      "A) Supporting means giving money; enabling means giving time",
      "B) Supporting helps someone move toward growth; enabling removes the consequences of destructive behavior, making it easier for them to stay stuck",
      "C) They're the same — helping is always good",
      "D) Enabling only applies to substance abuse situations"
    ],
    correct: 1,
    explanation: "Supporting says 'I believe in you and I'll help you get where you need to go.' Enabling says 'I'll protect you from every consequence so you never have to change.' It feels like love, but it keeps people stuck. The hardest part of caring about someone is sometimes letting them experience the natural consequences of their choices.",
    research: "Beattie, Melody, Codependent No More (1986); Johnson, Vernon E., Intervention (1986); Al-Anon family program principles",
    adCategory: "family"
  },
  {
    id: 89,
    category: "Career & Money",
    question: "Do you need to report income from a side hustle, even if it's small?",
    choices: [
      "A) Only if you make over $10,000 in a year",
      "B) Yes — all income is technically taxable; if you make $600+ from a single client/platform, they'll report it to the IRS and you'll get a 1099",
      "C) Cash payments don't need to be reported",
      "D) Side hustle income is tax-free as long as it's not your primary job"
    ],
    correct: 1,
    explanation: "The IRS considers all income taxable — even $50 from selling something online. If you earn $600+ from one source, they'll send you a 1099 and report it. Self-employment tax hits at 15.3% on top of income tax. Set aside 25-30% of side hustle income for taxes. Many new freelancers get crushed at tax time because they didn't plan ahead.",
    research: "IRS Publication 334 (Tax Guide for Small Business); 1099-NEC reporting threshold; IRS self-employment tax rules (Schedule SE)",
    adCategory: "career"
  },
  {
    id: 90,
    category: "Interpersonal & Social",
    question: "How do you know if someone is depressed or just 'being lazy'?",
    choices: [
      "A) Depressed people cry a lot; lazy people just don't want to work",
      "B) Depression often looks like lost interest, fatigue, sleep changes, withdrawal, and difficulty concentrating — it's a clinical condition, not a character flaw",
      "C) If they can get up to do fun things but not work, it's laziness",
      "D) Depression only affects people with a diagnosed mental health history"
    ],
    correct: 1,
    explanation: "Depression doesn't always look like sadness — it often looks like someone who can't get out of bed, stopped caring about things they used to love, or seems irritable and withdrawn. Calling it 'laziness' is like telling someone with a broken leg to just walk it off. If someone's behavior has changed significantly for 2+ weeks, it's worth a gentle, non-judgmental check-in.",
    research: "DSM-5 diagnostic criteria for Major Depressive Disorder; NIMH depression statistics — affects 21 million U.S. adults; World Health Organization (WHO) depression fact sheet",
    adCategory: "mental-health"
  },
  {
    id: 91,
    category: "Career & Money",
    question: "What is the real difference between networking on LinkedIn and networking in real life?",
    choices: [
      "A) LinkedIn is always more effective because it scales better",
      "B) LinkedIn is good for initial connections and visibility, but real relationships — the kind that lead to opportunities — are built through in-person conversations, follow-ups, and genuine engagement",
      "C) Real-life networking is outdated — everything happens online now",
      "D) LinkedIn connections automatically become professional contacts who will help you"
    ],
    correct: 1,
    explanation: "Having 500+ LinkedIn connections means very little if none of them would take your call. LinkedIn is a tool for visibility and initial contact, but the relationships that actually lead to job referrals, mentorship, and opportunities are built through real conversations — coffee meetings, industry events, thoughtful follow-ups. Quality always beats quantity.",
    research: "Granovetter, Mark, 'The Strength of Weak Ties' (1973); LinkedIn's own Workforce Report data on how people actually get hired",
    adCategory: "career"
  },
  {
    id: 92,
    category: "Health, Insurance & Taxes",
    question: "What is the truth about gym membership cancellations?",
    choices: [
      "A) You can cancel anytime — just stop paying",
      "B) Many gyms lock you into contracts with steep cancellation fees, auto-renewal clauses, and procedures designed to make cancelling as difficult as possible",
      "C) Federal law requires all gyms to offer month-to-month memberships",
      "D) You can only cancel during the first 30 days"
    ],
    correct: 1,
    explanation: "Gyms are notorious for making it hard to cancel. Many require written letters (not email), charge early termination fees, auto-renew annually, or require 30-60 day notice before a billing cycle. Some states have gym-specific consumer protection laws. Always read the cancellation terms before signing up, and keep proof of any cancellation request.",
    research: "FTC consumer complaints on gym membership practices; state-specific health club consumer protection laws (e.g., New York GBL § 627)",
    adCategory: "health-insurance"
  },
  {
    id: 93,
    category: "Legal Rights",
    question: "Once you turn 18, what legal document should you have in place that most young adults overlook?",
    choices: [
      "A) A last will and testament",
      "B) A power of attorney — because once you're 18, your parents can no longer make medical or financial decisions for you, even in an emergency",
      "C) A business license",
      "D) A prenuptial agreement"
    ],
    correct: 1,
    explanation: "The moment you turn 18, you're a legal adult. If you're in an accident or incapacitated, your parents legally cannot access your bank account, make medical decisions, or even get information about your condition without a power of attorney and HIPAA authorization. It costs very little to set up and can prevent a nightmare for your family.",
    research: "American Bar Association estate planning guidance; HIPAA Privacy Rule (45 CFR § 164.510); state POA statutes",
    adCategory: "legal"
  },
  {
    id: 94,
    category: "Career & Money",
    question: "How should you handle a gap on your resume?",
    choices: [
      "A) Never mention it — hope they don't notice",
      "B) Be honest and frame it positively — highlight what you learned, any freelance work, caregiving, education, or personal development during that time",
      "C) Make up a fake job to fill the gap",
      "D) Gaps of any length disqualify you from most professional jobs"
    ],
    correct: 1,
    explanation: "Resume gaps are far more common and accepted than people think — especially post-pandemic. The key is framing: 'I took time to care for a family member while completing an online certification in...' shows character and growth. Lying creates a far bigger problem than the gap itself, because background checks will catch it.",
    research: "LinkedIn Workforce Report on career breaks (2022); SHRM survey — 92% of hiring managers say gaps are not automatic disqualifiers",
    adCategory: "career"
  },
  {
    id: 95,
    category: "Interpersonal & Social",
    question: "What does setting boundaries with parents look like when you're an adult?",
    choices: [
      "A) Cutting them off completely — that's the only way to have boundaries",
      "B) Respectfully communicating your limits on topics, visits, financial involvement, and decision-making while maintaining the relationship",
      "C) Just agreeing with everything to keep the peace",
      "D) Boundaries with parents are disrespectful and shouldn't exist"
    ],
    correct: 1,
    explanation: "Adult boundaries with parents might sound like: 'I love you, but I need you to call before coming over,' or 'I'm not comfortable discussing my finances.' It's not about disrespect — it's about establishing yourself as an adult with your own life. The transition is awkward for everyone, but it's necessary for healthy relationships on both sides.",
    research: "Tawwab, Nedra Glennon, Set Boundaries, Find Peace (2021); Bowen Family Systems Theory on differentiation of self",
    adCategory: "family"
  },
  {
    id: 96,
    category: "Banking & Financial Systems",
    question: "At what income threshold must you report freelance earnings to the IRS?",
    choices: [
      "A) $5,000",
      "B) $600 from a single payer triggers a 1099, but technically all self-employment income of $400+ requires you to file self-employment taxes",
      "C) $10,000 — anything under that is tax-free",
      "D) You only need to report it if you get a 1099"
    ],
    correct: 1,
    explanation: "If you earn $600+ from one client or platform, they'll send you (and the IRS) a 1099. But the IRS actually requires you to report and pay self-employment tax on any net self-employment income of $400 or more — even if you never get a 1099. Not reporting it doesn't mean the IRS doesn't know; payment platforms report to them too.",
    research: "IRS Publication 334; IRS self-employment tax threshold (Schedule SE); 1099-NEC and 1099-K reporting rules",
    adCategory: "banking"
  },
  {
    id: 97,
    category: "Housing & Tenant Rights",
    question: "If your landlord wants to enter your apartment to show it to potential new tenants, do you have to allow it?",
    choices: [
      "A) Yes — they own the property and can show it anytime",
      "B) They can show it, but they must give proper written notice (usually 24-48 hours) and schedule at reasonable times",
      "C) No — you can refuse all showings until your lease ends",
      "D) Only if you've already given notice that you're moving"
    ],
    correct: 1,
    explanation: "Near the end of your lease, landlords typically have the right to show the unit — but they still have to follow the same notice requirements (24-48 hours in most states) and schedule at reasonable times. You can request that showings only happen during certain hours. Your right to quiet enjoyment of your home doesn't disappear just because you're leaving.",
    research: "Nolo Press tenant rights guides; state landlord-tenant statutes on access for showings; implied covenant of quiet enjoyment",
    adCategory: "housing"
  },
  {
    id: 98,
    category: "Housing & Tenant Rights",
    question: "What is a lease break fee, and how does it typically work?",
    choices: [
      "A) You can break a lease at any time with no consequences",
      "B) A lease break fee is a penalty — often 1-2 months' rent — that you pay to end your lease early, and you may still owe rent until a new tenant is found",
      "C) Breaking a lease is illegal and leads to criminal charges",
      "D) Your security deposit always covers the break fee"
    ],
    correct: 1,
    explanation: "Breaking a lease isn't free. Most leases specify a break fee (commonly 1-2 months' rent), and in many states, you're responsible for rent until the unit is re-rented — though landlords must make a reasonable effort to find a new tenant. Early termination can also go on your rental history. Always check your lease terms and negotiate if possible.",
    research: "Nolo Press, tenant lease-breaking guides; state-specific early termination and mitigation of damages laws",
    adCategory: "housing"
  },
  {
    id: 99,
    category: "Health, Insurance & Taxes",
    question: "What does 'copay' vs. 'coinsurance' mean on your health insurance plan?",
    choices: [
      "A) They're the same — both mean what you pay per visit",
      "B) A copay is a flat fee per visit (like $30); coinsurance is a percentage of the bill you pay (like 20%) after meeting your deductible",
      "C) Copay applies to prescriptions; coinsurance applies to hospital stays",
      "D) Coinsurance is what the insurance company pays; copay is what you pay"
    ],
    correct: 1,
    explanation: "A copay is predictable — $30 for a doctor visit, $15 for a prescription. Coinsurance is a percentage, so 20% coinsurance on a $5,000 surgery means you pay $1,000. The key difference: copays are fixed amounts; coinsurance varies with the bill size. Understanding both helps you predict actual healthcare costs instead of being blindsided.",
    research: "Healthcare.gov glossary and plan comparison tools; Kaiser Family Foundation health literacy research",
    adCategory: "health-insurance"
  },
  {
    id: 100,
    category: "Career & Money",
    question: "What is the smartest approach to professional references?",
    choices: [
      "A) List your best friend and a family member",
      "B) Cultivate 3-5 professional contacts you've genuinely worked with, always ask permission before listing them, and give them context about the role you're applying for",
      "C) Just list anyone who will say nice things about you",
      "D) Wait until someone asks for references to figure it out"
    ],
    correct: 1,
    explanation: "References should be people who've seen your work firsthand — supervisors, project leads, even strong coworkers. Always ask permission ('Would you be comfortable serving as a reference?'), let them know when to expect a call, and tell them what the job is so they can highlight relevant things. A prepared reference gives a much stronger endorsement.",
    research: "SHRM reference checking guidelines; NACE employer survey on reference preferences",
    adCategory: "career"
  }
];
