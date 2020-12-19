const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
//     if (message.content === 'ping') {
//        message.reply('pong');
//        }
    
     message.react("👍");
     message.react("👎");
    
    if (message.attachments.size > 0) {
        
        // If there is any attachment
        // We can add option to limit reactions to only messages with attachments later
        
        // Code goes here...
        
//         if (message.attachments.every(attachIsImage)){
//             //something
//         }
    }
 
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
