// ----- [ Baka Command was developed by NightcoreATDZO#3550 ] ----- //

const superagent = require('superagent')
const yourbot = require('../fun/yourbot.json')
module.exports = {
    name : 'baka',
    category : 'fun',
    description : 'Returns baka image',             
        run : async(client, message) => {
    const msg = await message.channel.send(` LOAD BAKA ...`)           
if (!message.mentions.users.first()) return message.reply("sussy baka?");
if (message.author.bot) return false;
if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
if (message.mentions.has(client.user.id)) return message.reply("no, you baka");
    const { body } = await superagent
    
    .get("https://nekos.life/api/v2/img/baka");
   
    const feed = {
        color: 0xff9900,
        author: {
            name: `| OtakuBot | Baka`,
            icon_url: '', // Put your bot's avatar link here
        },
        fields: [{
              name: `OvO Look 👉🏻 `,
              value: `${message.mentions.users.first().username}'s baka`,
        },
        ],
        image: {
            url: body.url,
        },
        footer: {
            text: ` | © ${yourbot.name} | V${yourbot.version}`,
            icon_url: '', // Put your bot's avatar link here
        },
    }
    await message.channel.send({ embeds: [feed] })
    msg.delete()
        }
    }

// ----- [ If you find a bug, please contact the bot developer ( NightcoreATDZO#3550 ) ] ----- //