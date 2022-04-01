// ----- [ HowSmart Command was developed by NightcoreATDZO#3550 ] ----- //

const yourbot = require('../game/yourbot.json')

module.exports = {
    name : 'howsmart',
    category : 'game',
    description : 'Returns howsmart point',             
        run : async(client, message, args) => {
        let member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;
        
    const msg = await message.channel.send(` LOAD SMART SCALE ...`)
    const howsmart = Math.floor(Math.random() * 100)
    const roll = {
        color: 0xff9900,
        author: {
            name: ` | OtakuBot | How Smart`,
            icon_url: '', // Put your bot's avatar link here
        },
        fields: [{
            name: `**${member.user.username}**`,
            value: ` I rate you ` + howsmart + ` of your smart scale`,
        }],
        footer: {
            text: ` | © ${yourbot.name} | V${yourbot.version}`,
            icon_url: '', // Put your bot's avatar link here
        },
    }
    if(howsmart >= 60) {
        message.channel.send("My Note : **intelligent** ")
      } else {
          if(howsmart <= 60) {
              message.channel.send("My Note: **you're baka** ")
          }
      }
    await message.channel.send({ embeds: [roll] })
    msg.delete()
    
        }
    }

// ----- [ If you find a bug, please contact the bot developer ( NightcoreATDZO#3550 ) ] ----- //