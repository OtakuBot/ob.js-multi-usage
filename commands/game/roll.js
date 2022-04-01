// ----- [ Roll Command was developed by NightcoreATDZO#3550 ] ----- //

const yourbot = require('../game/yourbot.json')

module.exports = {
    name : 'roll',
    category : 'game',
    description : 'Returns rolls point',             
        run : async(client, message) => {

    const msg = await message.channel.send(` LOAD ROLL SCALE ...`)
    const roll = {
        color: 0xff9900,
        author: {
            name: ` | OtakuBot | Roll`,
            icon_url: '', // Put your bot's avatar link here
        },
        description: `**${msg.author.username}**, you rolled a **${Math.floor(Math.random() * 100) + 0}**!`,
        footer: {
            text: ` | © ${yourbot.name} | V${yourbot.version}`,
            icon_url: '', // Put your bot's avatar link here
        },
    }
    
    await message.channel.send({ embeds: [roll] })
    msg.delete()
    
        }
    }

// ----- [ If you find a bug, please contact the bot developer ( NightcoreATDZO#3550 ) ] ----- //