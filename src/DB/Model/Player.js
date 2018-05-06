import mongoose from 'mongoose';

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
});

const Player = mongoose.model('Player', PlayerSchema);

export { PlayerSchema };
export default Player;
