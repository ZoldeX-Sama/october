const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&"
var adminprefix = '&'

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) { ///@» MHSTR 🇮🇶#1119
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
  let args = message.content.split(" ").slice(1); ///@» MHSTR 🇮🇶#1119
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { //@» MHSTR 🇮🇶#1119
  m.send(`${argresult}\n ${m}`); ///@» MHSTR 🇮🇶#1119
  }) /// @» MHSTR 🇮🇶#1119
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete(); ///@» MHSTR 🇮🇶#1119
  }; ///@» MHSTR 🇮🇶#1119
  }); //// @» MHSTR 🇮🇶#1119
 
 
 
  client.on("message", message => {
  ///@» MHSTR 🇮🇶#1119
              if (message.content.startsWith(prefix + "bc")) { //@» MHSTR 🇮🇶#1119
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); // @» MHSTR 🇮🇶#1119
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`); //@» MHSTR 🇮🇶#1119
  }) ///@» MHSTR 🇮🇶#1119
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `);
   message.delete(); //@» MHSTR 🇮🇶#1119
  };     /// @» MHSTR 🇮🇶#1119
  }); ///@» MHSTR 🇮🇶#1119

const developers = ["570963117631078412"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);
