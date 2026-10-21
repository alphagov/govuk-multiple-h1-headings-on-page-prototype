module.exports = {
    "evisa": {
        title: "eVisas: access and use your online immigration status",
        breadcrumbs: [
            { text: "Home", href: '#' },
            { text: "Visas and immigration", href: '#' },
            { text: "What you need to do", href: '#' }
        ],
        related: {
            links: [
                { text: "Check if you need a UK visa", href: '#' },
                { text: "How to apply for a visa to come to the UK", href: '#' },
                { text: "Entering the UK: exemptions to controls", href: '#' }
            ],
            collections: [
                { text: "eVisa support videos", href: '#' },
                { text: "UKVI support videos", href: '#' }
            ],
            topics: [
                { text: "EU, EEA and Swiss citizens", href: '#' },
                { text: "What you need to do", href: '#' }
            ]
        },
        pages: [
            { slug: "index", text: "What an evisa is" },
            { slug: "set-up-ukvi-account", text: "Set up your UKVI account to access your eVisa"},
            { slug: "get-evisa-settlement-uk", text: "Get an eVisa if you have settlement in the UK"},
            { slug: "view-your-evisa", text: "View your eVisa and get a share code to prove your immigration status"},
            { slug: "travel-with-evisa", text: "Travel with your eVisa"},
            { slug: "update-ukvi-account", text: "Update your details in your UKVI account"},
            { slug: "report-error-evisa", text: "Report an error with your eVisa"}

        ]
    },
    "universal-credit": {
        title: "Universal Credit",
        breadcrumbs: [
            { text: "Home", href: '#' },
            { text: "Benefits", href: '#' },
            { text: "Benefits and financial support if you're on a low income", href: '#' }
        ],
        related: {
            links: [
                { text: "Sign in to your Universal Credit account", href: '#' },
                { text: "Benefits calculators", href: '#' },
                { text: "Housing Benefit", href: '#' },
                { text: "Self-employment and Universal Credit", href: '#' },
                { text: "Sign in to a service", href: '#' }
            ],
            collections: [
                { text: "Universal Credit: detailed information for claimants", href: '#' },
                { text: "Universal Credit: information for employers", href: '#' },
                { text: "Universal Credit: for claimants who receive a Migration Notice letter", href: '#' },
                { text: "Universal Credit: information for stakeholders and partners", href: '#' },
                { text: "Universal Credit: information for landlords", href: '#' }
            ],
            topics: [
                { text: "Benefits and financial support if you're caring for someone", href: '#' },
                { text: "Benefits and financial support if you're looking for work", href: '#' },
                { text: "Benefits and financial support if you're on a low income", href: '#' },
                { text: "Benefits and financial support if you're temporarily unable to work", href: '#' },
                { text: "Benefits and financial support when someone dies", href: '#' },
                { text: "Benefits and financial help", href: '#' },
                { text: "Caring for someone", href: '#' },
                { text: "Finding a job", href: '#' }
            ]
        },
        pages: [
            { slug: "index", text: "What Universal Credit is" },
            { slug: "eligibility", text: "Eligibility"},
            { slug: "", text: "What you'll get"},
            { slug: "", text: "How your wages affect your payments"},
            { slug: "", text: "How you're paid"},
            { slug: "", text: "How to claim"},
            { slug: "", text: "Your claimant commitment"},
            { slug: "", text: "Get an advance or other financial support"},
            { slug: "", text: "Report a change of circumstances"},
            { slug: "", text: "Contact Universal Credit"},

        ]
    },
    "right-to-rent": {
        title: "Prove your right to rent in England",
        breadcrumbs: [
            { text: "Home", href: '#' },
            { text: "Housing and local services", href: '#' },
            { text: "Renting a property", href: '#' }
        ],
        related: {
            links: [
                { text: "Private renting", href: '#' }
            ],
            topics: [
                { text: "Living in the UK, government and democracy", href: '#' },
                { text: "Renting a property", href: '#' },
                { text: "What you need to do", href: '#' }
            ]
        },
        pages: [
            { slug: "index", text: "Overview" },
            { slug: "", text: "Get a share code online"},
            { slug: "", text: "Using immigration documents"},
            { slug: "", text: "Using other documents"}
        ]
    },
    "self-assessment-tax": {
        title: "Self Assessment tax returns",
        breadcrumbs: [
            { text: "Home", href: '#' },
            { text: "Money and tax", href: '#' },
            { text: "Income Tax", href: '#' }
        ],
        related: {
            links: [
                { text: "File your Self Assessment tax return online", href: '#' },
                { text: "Understand your Self Assessment tax bill", href: '#' },
                { text: "Pay your Self Assessment tax bill", href: '#' },
                { text: "Get your SA302 tax calculation", href: '#' }
            ],
            collections: [
                { text: "Self Assessment: detailed information", href: '#' },
                { text: "Help setting up and running a small business", href: '#' },
                { text: "Repayments and refunds from HMRC: detailed information", href: '#' },
                { text: "Income Tax: detailed information", href: '#' },
                { text: "Self-employment: detailed information", href: '#' }
            ],
            topics: [
                { text: "Business tax and returns", href: '#' },
                { text: "Income Tax", href: '#' },
                { text: "Self Assessment", href: '#' },
                { text: "Your pay, tax and the National Minimum Wage", href: '#' }
            ]
        },
        pages: [
            { slug: "index", text: "Overview" },
            { slug: "", text: "Who must send a tax return"},
            { slug: "", text: "Registering for Self Assessment"},
            { slug: "", text: "Sending a return"},
            { slug: "", text: "If you no longer need to send a tax return"},
            { slug: "", text: "Deadlines"},
            { slug: "", text: "Penalties"},
            { slug: "", text: "If you need to change your return"},
            { slug: "", text: "Claiming a tax refund"},
            { slug: "", text: "How to get help"},
            { slug: "", text: "Returns for someone who has died"}
        ]
    },
    "student-finance": {
        title: "Student finance for undergraduates",
        stepByStep: {
            title: "Get undergraduate student finance: step by step",
            href: "#"
        },
        stepNav: {
            title: "Get undergraduate student finance: step by step",
            steps: [
              {
                number: 1,
                title: "Check if you're eligible",
                logic: "and",
                links: [
                  {
                    text: "Find out if you're eligible for student finance",
                    href: "#"
                  }
                ]
              },
              {
                number: 2,
                title: "Find out how much you could get",
                logic: "and",
                links: [
                  {
                    text: "Use the student finance calculator to estimate your student loan",
                    href: "#"
                  }
                ]
              },
              {
                number: 3,
                title: "Check extra help available",
                logic: "and",
                links: [
                  {
                    text: "Extra help for students with children or dependent adults",
                    href: "#"
                  },
                  {
                    text: "Disabled Students' Allowance (DSA)",
                    href: "#"
                  }
                ]
              },
              {
                number: 4,
                title: "Apply",
                logic: "and",
                links: [
                  {
                    text: "Apply online for student finance",
                    href: "#"
                  },
                  {
                    text: "Log in to your student finance account",
                    href: "#"
                  }
                ]
              },
              {
                number: 5,
                title: "Manage your student finance",
                links: [
                  {
                    text: "Update your details or change your course",
                    href: "#"
                  },
                  {
                    text: "Repaying your student loan",
                    href: "#"
                  }
                ]
              }
            ]
          },
        pages: [
            { slug: "index", text: "Overview" },
            { slug: "", text: "Eligibility"},
            { slug: "", text: "New full-time students"},
            { slug: "", text: "Continuing full-time students"},
            { slug: "", text: "Part-time students"},
            { slug: "", text: "Extra financial help"},
            { slug: "", text: "Apply"}
        ]
    },
    "guide-name": {
        title: "Guide Title",
        breadcrumbs: [
            { text: "Home", href: '#' },
            { text: "1", href: '#' },
            { text: "2", href: '#' }
        ],
        related: {
            links: [
                { text: "Link name", href: '#' },
                { text: "Link name", href: '#' }
            ],
            collections: [
                { text: "Link name", href: '#' },
                { text: "Link name", href: '#' }
            ],
            topics: [
                { text: "Link name", href: '#' },
                { text: "Link name", href: '#' }
            ]
        },
        pages: [
            { slug: "index", text: "First chapter title" },
            { slug: "", text: "Second chapter title"},
            { slug: "", text: "What you'll get"}
        ]
    }
}