module.exports = {
    async up(db) {
        await db.createCollection("modules", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["name", "description"],
                    properties: {
                        name: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        description: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        type: {
                            bsonType: "string",
                            description: "must be a string",
                        },
                        difficulty: {
                            enum: ["piece of cake", "very easy", "easy", "medium", "hard", "too hard", "extremely hard"],
                            description: "must be a string",
                        },
                        tags: {
                            bsonType: "array",
                            description: "must be an array",
                        },
                        status: {
                            enum: ["active", "hidden"],
                            description: "can only be one of the enum values",
                        },
                        createdAt: {
                            bsonType: "date",
                            description: "module create date",
                        },
                        updatedAt: {
                            bsonType: "date",
                            description: "module update date",
                        },
                        usage: {
                            bsonType: "array",
                            description: "list of usage data"
                            // bsonType: "object",
                            // required: ["userId"],
                            // properties: {
                            //     userId: {
                            //         bsonType: "string",
                            //         description: "user identifier string"
                            //     },
                            //     date: {
                            //         bsonType: "date",
                            //         description: "date of usage"
                            //     },
                            // },
                            // default: []
                        }
                    }
                }
            }
        });
    },

    async down(db) {
        await db.collection('modules').drop();
    }
};
