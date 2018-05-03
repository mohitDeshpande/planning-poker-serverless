import { Schema } from 'mongoose';
import Card from './CardSchema';

const TicketSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  description: String,
  cards: [Card],
});

export default TicketSchema;
