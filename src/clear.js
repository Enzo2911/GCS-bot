const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
     
  message.delete().catch;

  if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messages.Deleted = messages.array().length;

            let embed = new Discord.RichEmbed()
            .setColor('00FF00')
            .setDescription(`${message.author} deleted **${messages.Deleted}** messages.`)
            message.channel.send(embed);
          })
          .catch(err => {
            console.log('Erreur Clear !');
            console.log(err);
          });
      }
    }

module.exports.help = {
  name: "clear"
}
