const { Schema, model } = require('mongoose');


const Userschema  = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // match a valid email address
        match: [/.+\@.+\..+/]
    },

    thoughts : [
        {
            type: Schema.Types.ObjectId,
            // referring to the thought document model 
            ref: 'Thought'
        }
    ],
    friends : [
        {
            type: Schema.Types.ObjectId,
            // referring to the thought document model 
            ref: 'User'
        }
    ],
    
  });

  // export the User model
  module.exports = User;
