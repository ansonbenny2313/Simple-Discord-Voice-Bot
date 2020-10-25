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
    
     

 });

 client.login(token); //logging in our bot. Don't change anything here.