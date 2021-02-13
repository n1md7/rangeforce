module.exports = {
    async up(db, client) {
        // TODO write your migration here.
        // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});

        await db.collection("users").insertOne({
            username: 'Admin',
            modules: [
                {
                    id: "195f20b1-0ef2-453b-883b-a88902e12fb5",
                    status: "active",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
                    status: "active",
                    endDate: '12/02/2021',
                    endWeekDate: '01/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    status: "active",
                    endDate: '12/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }
            ]
        });

        await db.collection("users").insertOne({
            username: 'Nimda',
            modules: [
                {
                    id: "195f20b1-0ef2-453b-883b-a88902e12fb5",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/01/2021',
                }, {
                    id: "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
                    status: "done",
                    endDate: '12/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/01/2021',
                }, {
                    id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                },
            ]
        });
        await db.collection("users").insertOne({
            username: 'Jack',
            modules: [
                {
                    id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }
            ]
        });
        await db.collection("users").insertOne({
            username: 'George',
            modules: [
                {
                    id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                }, {
                    id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                    status: "done",
                    endDate: '13/02/2021',
                    endWeekDate: '08/02/2021',
                    endMonthDate: '01/02/2021',
                },
            ]
        });
    },

    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    }
};
