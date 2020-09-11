const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(function() {

  let activities = [`enter your text`]

 let activity = activities[Math.floor(Math.random()*activities.length)]
 
 let numberomembers = `${client.users.size}`

 client.user.setActivity(activity, { type: "LISTENING"})
}, 5000)


  console.log(`Please join https://discord.gg/qubzgXe for more`);




client.login('enter your token');