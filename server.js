const Discord = require("discord.js");
const chalk = require("chalk");
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const config = require("./config.json");
var bleu = Math.floor.toString(3);

bot.commands = new Discord.Collection();

fs.readdir("./src/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Je ne trouve pas de Commande :p !.");
        return;
};
bot.on("ready", async () => {
   jsfile.forEach((f, i) => {
        let props = require(`./src/${f}`);
        
		 bot.commands.set(props.help.name, props);
		 bot.user.setActivity("Site -> GiftCardShop.pw", { type: "LISTENING" });
 
    });
});
});
bot.on('ready', () => {

        console.log("--------------------------------------");
        console.log('--> ' + (chalk.yellow('Bot By ENZO2911 ')) +' \n--> ' + (chalk.magenta('Connecter avec succès :')) + ' \n--> ' + (chalk.green(`Name De L'hote:        `))+ `[ ${bot.user.tag} ]` + ' \n--> '+(chalk.green('Nombre de commande:    ')) +  `[ ! ]`  + '\n--> '+ (chalk.green('Nombre d\'utilisateurs: ')) + `[ ${bot.users.size} ]` + '\n--> '+ (chalk.green('Nombre de salons:      ')) + `[ ${bot.channels.size} ]` + '\n--> '+ (chalk.green('Nombre de serveurs:    ')) + `[ ${bot.guilds.size} ]`);
        console.log("--------------------------------------");
        console.log('--> ' + (chalk.green(`I'm ready !`)));
        console.log('______________________________________');
 
});


	
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = config.prefix;
	let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
	var argresult = args.join(' ');
    let cmd = messageArray[0];
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
	var me =  message.author.id !== "295621584822075414" && message.author.id !== "301678641438523393 " && message.author.id !== "472384346809040906"
    
////////////////////////////// RESTART BOT ///////////////////////////////////////////////	
	
	if (message.content.startsWith(prefix + 'stop')) { 

   if(me) return;
   message.delete().then(() => process.exit(1))
}
	
////////////////////////////// CHANGE LE JEUX ///////////////////////////////////////////
  if (message.content.startsWith(prefix + 'setGame')) {
	  
    if(me) return;
    message.delete();
      bot.user.setGame(argresult); return message.reply('Mon **jeu** a était **modifié** avec **succés** !!')
  }  else
///////////////////////////// CHANGE L'ECOUTE ///////////////////////////////////////////
 if (message.content.startsWith(prefix + 'setEcoute')) {
	  
    if(me) return;
   message.delete();
     bot.user.setActivity((argresult), { type: "LISTENING" }); return message.reply('Mon **Ecoute** a était **modifié** avec **succés** !!')
  } else

/////////////////////////////// CHANGE STATUT /////////////////////////////////////////////
  if (message.content.startsWith(prefix + 'setstatut')) {
	  
    if(me) return;
    message.delete();
      bot.user.setStatus(argresult); return message.reply('Mon **status** a était **modifié** avec **succés** !!')
    // idle = absent | dnd = offline  | invisible = invisible  | online = online //
    } else 
//////////////////////////////// CHANGE NAME OF BOT ///////////////////////////////////////
   if(message.content.startsWith(prefix + 'setname')){
    if(me) return;
       message.delete().catch(O_o=>{});
  
    bot.user.setUsername(message.content.substr(9));
    }
//////////////////////////////// ADD ROLE /////////////////////////////////////////////////
 if(message.content.startsWith(prefix + "addrole")) {
		
     let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     
	 if(!rMember) return message.reply("L'utilisateur n'existe pas !");
    
     let role = args.join(" ").slice(22);
    
     if(!role) return message.reply("Précisez un rôle a ajouté .!");
     
	 let gRole = message.guild.roles.find('name', role);
    
	 if(!gRole) return message.reply("Je ne trouve pas se rôle .!");

     if(rMember.roles.has(gRole.id)) return message.reply("Tu a déja le role. !");
      
	 rMember.addRoles(gRole.id);
  
  
 }
///////////////////////////// COMMMANDE SAY //////////////////////////////////////////////
   
   if(message.content.startsWith(prefix + "echo")) {
	 
	 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
 
	const args = message.content.slice().trim().split(/ +/g);
    
	const command = args.shift().toLowerCase();
    
	const sayMessage = args.join(" ");
    
	message.delete().catch(O_o=>{}); 
    
	message.channel.send(sayMessage);
	
  }
  
   if(message.content.startsWith(prefix + "say")) {
	 
	 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
 
    message.delete();
    
	let Say = args.join(" ")
	
	var embed = new Discord.RichEmbed()
	.setTitle('ADMINISTRATOR SAID : ')
    .setColor(bleu)
	.setDescription(Say)	
	
	message.channel.sendEmbed(embed)
   }

////////////////////////////// SERVER INFO /////////////////////////////////////////////
if(message.content.startsWith(prefix + "server")) {
	
message.delete();
    let servericon = message.guild.iconURL;
    var date = message.guild.createdAt;
	
	let serverembed = new Discord.RichEmbed()
        .setColor("#42dff4")
		.setDescription("**-------- SERVER INFO --------**")
		
        .addField("Server:", message.guild.name)
        .addField("Creator's id:", bot.user.createdTimestamp, true)
		.addField("Creater Of This Serveur:", message.guild.owner, true)
        .addField("Créé le:", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" : "+date.getHours()+":"+date.getMinutes(), true)
        .addField("Total members:", message.guild.memberCount, true)
		.addField('Nombre de Channels:', message.guild.channels.size, true)
		.addField('Nombre de Roles:', message.guild.roles.size, true)
	    .addField("Région du serveur:", message.guild.region)
		.addField('Niveau de vérification du Server:', message.guild.verificationLevel)
		.setThumbnail(servericon)
		
		 message.channel.send(serverembed);
}
/////////////////////////////// SONDAGE /////////////////////////////////////////////////////

if(message.content.startsWith(prefix + 'sondage')){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
 
   message.delete();
			
		    let args = message.content.split(" ").slice(1);
			
			let thingToEcho = args.join(" ")
			
			var embed = new Discord.RichEmbed()
			    .setDescription('Petit Sondage')
                .addField( thingToEcho , "Répondre par :white_check_mark: ou :x:")
				.setColor("RANDOM")
				.setTimestamp()
            message.channel.sendEmbed(embed)
			
     
			.then(function (message){
        message.react("✅")
        message.react("❎")
       	
			}).catch(function(){
				
			});
			message.delete()
		}
//////////////////////////////// PURGE /////////////////////////////////////////////////////////
if(message.content.startsWith(prefix + 'purge')){
 
 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette **Commande** !!");
 
     message.delete();
     
	 let sender = message.author; 
     
	 let cont = message.content.slice(prefix.length).split(" "); 
     
	 let args = cont.slice(1); 
 
        async function purge() {
            message.delete();
         
            if (isNaN(args[0])) {

                message.channel.send('Entre le nombre de message a supprimé :ok_hand:  \n Usage: ' + prefix + 'purge <et le nombre de message>'); 

                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + 'En cours de supprésion !');


            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(Error `${error}`)); 

        }

        purge();
 message.delete();
    };
///////////////////////////////// kick ///////////////////////////////////////////////////////

	if (message.content.startsWith(prefix + 'kick')) {
      message.delete();
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission **KICK** !!");
  
        var member= message.mentions.members.first();
        // Kick go mdrr
        member.kick().then((member) => {
            // good msg
            message.channel.send(":wave: " + member.displayName  + " a été kick par un administrateur kicked :point_right: ");
        }).catch(() => {
             // fail msg
            message.channel.send("Pas la perm :tired_face: " );
        });
    }
////////////////////////////////// OTHER ///////////////////////////////////////////////////////

 if(message.content.startsWith(prefix + 'site')) {
	 message.channel.send('Voici le site internet : http://giftcardshop.pw/ :) ')
	 
 }
});
  
bot.login(config.token);