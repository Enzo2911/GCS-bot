const Discord = require("discord.js");
var bleu = Math.floor.toString(3);
var prefix = "$"
module.exports.run = async (bot, message, args) => {
var me =  message.author.id !== "295621584822075414" && message.author.id !== "301678641438523393 " && message.author.id !== "472384346809040906"
  if(me) return message.reply('**you are not the owners !**');
message.delete();

   
   
   let admin = new Discord.RichEmbed()
  .setDescription("**Admin Command**")
	.setColor(bleu)
	.addField(`${prefix}exit`, "déconnecte le bot")
	.addField(`${prefix}setName <nom>`, "Change le nom du bot")
	.addField(`${prefix}setGame <jeux>`, "Change l'activité au quel il joue")
	.addField(`${prefix}setEcoute <ecoute>`, "Change l'activité en ecoute")
	.addField(`${prefix}setstatut <idle & dnd & invisible & online`, "Change le statut du bot")
  .addField('Info Statut', 'idle = absent | dnd = offline  | invisible = invisible  | online = online ')
	.setFooter("By Enzo2911 For Skitroz#4632 & Skyne0#7336")
   
   message.author.send(admin);
          
};

module.exports.help = {
  name:"admin"
};