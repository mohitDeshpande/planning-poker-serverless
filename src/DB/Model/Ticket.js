import mongoose from 'mongoose';
import { CardSchema } from './Card';

const TicketSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  description: String,
  cards: [CardSchema],
});

const Ticket = mongoose.model('Ticket', TicketSchema);

export { TicketSchema };
export default Ticket;
