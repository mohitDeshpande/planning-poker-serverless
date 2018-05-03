import mongoose from 'mongoose';

const CardSchema = mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  },
});

export default CardSchema;
