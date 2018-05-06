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

const Card = mongoose.model('Card', CardSchema);

export { CardSchema };
export default Card;
