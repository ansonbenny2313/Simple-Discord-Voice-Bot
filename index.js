const Discord = require("discord.js");
const { prefix, token } = require("./auth.json");

const client = new Discord.Client();


client.once("ready", () => {
  console.log("Ready!");
});


client.on('message', async message => {
 
    if (!message.guild) return;
  
    if (message.content === 'invokeKeyword') { 
      
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        console.log("Started Playing audio.mp3") 
       
        const dispatcher = connection.play('./audio.mp3'); 
        dispatcher.on('finish', () => { 
            console.log('Finished playing!');   
            dispatcher.destroy(); 
            connection.disconnect();            
            }); 
            
      } else {
        message.reply('You need to join a voice channel first!'); 
      }
    }
  

  });

client.login(token); 