module.exports = {
  async up(db) {
    await db.createCollection("users", {
      validator: { $jsonSchema: {
          bsonType: "object",
          required: [ "username", "password" ],
          properties: {
            username: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            password: {
              bsonType : "string",
              description: "must be a string and is required"
            },
            coursesFinished: {
              bsonType: "array",
              description: "list of course identifiers",
            },
            coursesInProgress: {
              bsonType: "array",
              description: "list of courses that are in progress",
            },
            status: {
              enum: [ "active", "blocked" ],
              description: "can only be one of the enum values",
            }
          }
        } }
    });
  },

  async down(db) {
    await db.collection('users').drop();
  }
};
