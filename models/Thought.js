const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ReactionSchema = new Schema(
    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        trim: true,
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
        getters: true,
    },
}
);

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

    reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
        id: false
}
);


const Thought = model('Thought', ThoughtSchema);

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}); 


module.exports = Thought;