import mongoose from 'mongoose';
import config from './config';
import Player from './DB/Model/Player';

mongoose.connect(config.db.uri)
  .then(() => {
    console.log('Successfully Connected');
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });

// const myPlayer = Player({
//   name: 'mohit',
//   email: 'bac@xyz.com',
// });

// myPlayer.save(function(err){
//   if(err) {
//       console.log("some erre");
//       throw err;
//   }
//   console.debug('user successfully ssaved');

// });
