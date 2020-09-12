const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Now playing rpc for ${client.user.tag}!`);
});

setInterval(function() {

  let activities = [`ENTER YOUR TEXT`]

 let activity = activities[Math.floor(Math.random()*activities.length)]
 
 let numberomembers = `${client.users.size}`

 client.user.setActivity(activity, { type: "LISTENING"})
}, 5000)







client.login('ENTER YOUR TOKEN');

//this is the patched version
