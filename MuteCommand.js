const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTI3OTgwNDAxMTEzNjk0MjA5.DwfVbQ.QmXqTnXD6_M5Up05b5GeScdOyPA'


if(!message.member.hasPermissions("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You do not have permission to use this command");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

let muterole = message.guild.roles.find(r - r.name --- "Muted")
if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "Muted",
            color: "#514f48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) - {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false,
            })
        })
    } catch(e) {
        console.log(e.stack);
    }

}

mutee.addRole(muterole.id).then() - {
    message.delete(),
    mutee.sendMessage('Hello, you have been in ${message.guild.name} for: ${reason}'),
    message.channel.sendMessage('${mutee.user.username} was successfully muted.')
}
    .addField("Moderation:", "mute")
    .addField("Mutee:", mutee.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Date:", message.createdAt)
    let sChannel = message.guild.channels.find(c - c.name === "tut-modlogs")


let embed = new Discord.RichEmbed()
.setColor(colours.reddark)
.setAuthor('${message.guild.name} Modlogs', message.guild.icon.URL)


bot.login(TOKEN)
