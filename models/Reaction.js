const { Schema } = require('mongoose');

const UserSchema = new Schema({
    reactionId: {
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
    },

    reactionBody: {
        type: String,
        required: 'A reaction is required',
        maxLength: 280
    },

    username: {
        type: String,
        required: 'Username is required'
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
  //  id: false
}
);

module.exports = UserSchema;