module.exports = {
    async up(db) {
        await db.createCollection("courses", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["name"],
                    properties: {
                        name: {
                            bsonType: "string",
                            description: "must be a string and is required"
                        },
                        modules: {
                            bsonType: "array",
                            description: "must be an array and is not required",
                        },
                        category: {
                            bsonType: "string",
                            description: "must be a string and is not required",
                        },
                        status: {
                            enum: ["active", "hidden"],
                            description: "can only be one of the enum values",
                        }
                    }
                }
            }
        });
    },

    async down(db) {
        await db.collection('courses').drop();
    }
};
