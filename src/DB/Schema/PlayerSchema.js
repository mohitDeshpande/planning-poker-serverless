import { Schema } from 'mongoose';

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
});

export default PlayerSchema;
