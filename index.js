require('dotenv').config()
const Discord = require('discord.js');
const {
    Client, Intents, Embed, Embedbuilder, EnumResolvers, GatewayIntendBits, Partials, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, Colors, Collection, MessageEmbed, ButtonBuilder
} = require('discord.js');
const fs = require('fs')
const client = new Discord.Client({
messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: [
Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
    Partials.enum
],
  intents: ['Guilds',
    'GuildMembers',
    'GuildBans',
    'GuildEmojisAndStickers',
    'GuildIntegrations',
    'GuildWebhooks',
    'GuildInvites',
    'GuildVoiceStates',
    'GuildPresences',
    'GuildMessages',
    'GuildMessageReactions',
    'GuildMessageTyping',
    'DirectMessages',
    'DirectMessageReactions',
    'DirectMessageTyping',
    'MessageContent',
     'DirectMessages']
});





//if the server doesn't have a set prefix yet
let prefix = '&';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(guild=>console.log(`${guild.name}(${guild.id})`));
});

process.on('unhandledRejection', err => {
  console.log(`Unhandled Promise Rejection: ${err.message}`);
});


client.on('messageCreate', async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
const args = message.content.substring(5,);
  if(message.content.toLowerCase().includes(`${prefix}halo`)){
message.delete();
    message.channel.send(args);
  }});

client.on('messageCreate', message => {
if(message.content.toLowerCase().includes(`外遇`)){
    message.channel.send('https://media.discordapp.net/attachments/956867669959794728/967764688857366568/unknown.png');
  }});

const cron = require('cron');
            
client.setMaxListeners(50)

client.on('messageCreate',  async (message) => {
    if (message.channel.type == 1){ 
      try{
        let a = message.author
const User = client.users.cache.find(user => user.id === a);
        let channel = client.channels.fetch(process.env.DISCORD_CHANNELID).then(channel => {
          channel.send('人:' + message.author.tag + ', 訊息:' + message.content)
        }).catch(err => {
          console.log(err)
        })
    }catch (error) {
            console.error(error);}
     // put your code here
     console.log(message.content)

}

});



client.login(process.env.token).then(() => { 
    client.user.setPresence({ status: 'idle' });
});
