const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
if(!message.member.hasPermission("MUTE_MEMBERS")) return msg.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
     
 message.delete();
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                name: "Muted",
                color: "#00FFOO",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        } catch(e){
        console.log(e.stack);
            }
        }
        
        let taReason = args.join(" ").slice(22);
       if (!taReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
   	 let mute = new Discord.RichEmbed()
    .setDescription("**Info Du Mute**")
    .setColor("00FF00")
	
    .addField("Mute:", tomute)
    .addField("The Reason:", taReason)
	.addField("Role:", muterole)
	.addField("Info", "**Fait une demande a un admin pour te faire UnMute !**");
	
await(tomute.addRole(muterole.id));
  let incidentchannel = message.guild.channels.find(`name`, "incidents");
   if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    incidentchannel.send(mute);
}
		
	 	  
module.exports.help = {
  name: "mute"
}