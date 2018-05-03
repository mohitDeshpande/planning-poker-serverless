import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.db.uri)
  .then(() => {
    console.log('Successfully Connected');
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });
