import mongoose from 'mongoose';
import { PlayerSchema } from './Player';
import { TicketSchema } from './Ticket';

const GameSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  players: [PlayerSchema],
  tickets: [TicketSchema],
  dateCreated: Date,
});

const Game = mongoose.model('Game', GameSchema)

export { GameSchema };
export default Game;
