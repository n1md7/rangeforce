export type Course = {
    name: string,
    modules: string[],
    tags: string[]
}

export type Category = {
    name: string,
    courses: Course[]
}

export const categories: Category[] = [
    {
        name: 'Tutorial',
        courses: [
            {
                name: 'Platform Tutorial',
                modules: ["ffdb241c-da0f-4d8f-95ef-f7a3891a91c0"],
                tags: []
            }
        ]
    }, {
        name: 'Web Application Security',
        courses: [
            {
                name: 'Web Application Security Foundations',
                modules: [
                    "195f20b1-0ef2-453b-883b-a88902e12fb5",
                    "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00"
                ], // module ids
                tags: ['Blue Team']
            }, {
                name: 'Injection: OS Command Injection',
                modules: ["bdc71ef9-5cfb-40ef-a03d-abc069a2ad00"],
                tags: ['Blue Team', 'Read Team']
            }, {
                name: 'Injection: SQL Injection',
                modules: [
                    "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
                    "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0"
                ],
                tags: ['Blue Team', 'Read Team', 'Orange Team']
            }, {
                name: 'Sensitive Data Exposure',
                modules: ["ffdb241c-da0f-4d8f-95ef-f7a3891a91c0"],
                tags: ['Blue Team', 'Read Team']
            },
        ]
    }, {
        name: 'Assessments',
        courses: [
            {
                name: 'Assessments',
                modules: [
                    "195f20b1-0ef2-453b-883b-a88902e12fb5",
                    "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                    "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00"
                ],
                tags: ['Orange Team']
            }
        ]
    }
];
