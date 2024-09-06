import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for a Message document
interface IMessage extends Document {
  userRole: string;
  message: string;
  timestamp: Date;
}

// Create the message schema
const messageSchema: Schema = new Schema({
  userRole: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the Message model
const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;
