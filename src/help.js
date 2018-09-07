const Discord = require("discord.js");
var bleu = Math.floor.toString(3);
var prefix = "$"
module.exports.run = async (bot, message, args) => {

message.delete();

 let help = new Discord.RichEmbed()
    .setDescription("**Help Command**")
	.setColor(bleu)
	.addField(`${prefix}clear`, "Supprime une parti du tchat")
	.addField(`${prefix}purge <number of message>`, "Supprime le nombre de message demander")
	.addField(`${prefix}sondage`, "Crée un sondage")
	.addField(`${prefix}server`, "Information sur le serveur")
	.addField(`${prefix}addrole <user> <name of roles>`, "ajoute un role a une personne")
	.addField(`${prefix}echo`, "Fait parler le bot")
	.addField(`${prefix}say`, "Fait parler le bot dans un embed")
	.addField(`${prefix}ban <user> <reason>`, "Ban un utilisateur")
	.addField(`${prefix}kick <user>`, "Kick un utilisateur")
	.addField(`${prefix}mute <user> <reason>`, "Mute une personne")
	.addField(`${prefix}unmute <user> <reason>`, "Enleve le mute d'une personne")
	.setFooter("By Enzo2911 For Skitroz#4632 & Skyne0#7336")

	
   message.author.send(help);
          


};

module.exports.help = {
  name:"help"
};
