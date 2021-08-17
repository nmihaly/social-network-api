const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: 'Username is required',
        minLength: 1,
        maxLength: 280
    },

 createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },

    username: {
        type: String,
        required: 'Username is required'
    },

    reactions: [
        {
        type: Schema.Types.ObjectId,
        ref: 'reactionSchema'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
  //  id: false
}
);

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.friends.length;
});


const User = model('Thought', ThoughtSchema);

module.exports = Thought;