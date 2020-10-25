 const Discord = require("discord.js");
 const { prefix, token } = require("./auth.json");

 const client = new Discord.Client();


 client.once("ready", () => {
     console.log("Ready!");
 });


 client.on('message', async message => {

     if (!message.guild) return;

     if (message.content == 'invokeKeyword') { 

         if (message.member.voice.channel) {
             const connection = await message.member.voice.channel.join();
             console.log("> Started Playing audio.mp3 Lalalala ")
                

             const dispatcher = connection.play('./audio.mp3'); // Change this './audio.mp3' with address to your music file. 
             // Right now, the audio file is assumed to be in the same folder as index.js and is name audio.mp3
             dispatcher.on('finish', () => {
                 console.log('Finished playing!'); // These lines will print
                 dispatcher.destroy();
                 connection.disconnect(); // Disconnect bot after playing
             });

         } else {
             message.reply('Hey! First You need to join a voice channel !'); // if some dumbo tries to invoke the bot without joining a VC
         }
     }
     // If you need to make more keywords and sounds, uncomment this or copy and paste it exactly here as many times as you need
     /*else if (message.content == 'invokeKeyword2') {  

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      console.log("Started Playing audio2.mp3")
      const dispatcher = connection.play('./audio2.mp3');
      dispatcher.on('finish', () => { 
          console.log('Finished playing!'); 
          dispatcher.destroy(); // end the stream
          connection.disconnect();
          }); 
          
    }
     else {
      message.reply('You need to join a voice channel first!');
    }
  }
*/


 });

 client.login(token); //logging in our bot. Don't change anything here.