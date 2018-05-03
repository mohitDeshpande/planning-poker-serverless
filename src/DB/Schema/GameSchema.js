import mongoose from 'mongoose';
import Player from './PlayerSchema';
import Ticket from './TicketSchema';

const GameSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  players: [Player],
  tickets: [Ticket],
  dateCreated: Date,
});

export default GameSchema;
