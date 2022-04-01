// ----- [ Identity Command was developed by NightcoreATDZO#3550 ] ----- //

const yourbot = require('../fun/yourbot.json')
const types = ['Psychopath', 'Depressed', 'Cheerful', 'Bright', 'Dark', 'Deceiver', '🎭 Funny', 'Fishy', 'Cool', 'Insecure', 'Lonely', 'Optimistic', 'Brave', 'Brilliant', 'Dreamer', 'Nurturer', 'Peaceful', 'Hot', 'weeb', 'otaku', 'Perfect', 'Overthinker', 'Idealist'];
const social = [' 😅 Loser', ' 👱‍♂️ The nice guy', '👱‍♀️ The cute girl', '🎭 Memer', '👨‍🎓 Nerd', '👻 Kinky'];
const relationship = ['🤓 Single', '👨‍👩‍👧‍👦 Married', '👩‍❤️‍👨 Taken', '🤣 Forever alone'];
const hobbies = ['🎨 Art', '🎨 Drawing', '🎨 Painting', '🎤 Singing', '📝 Writing', '🖼 Anime', 'Minecraft', ' 🔞 watching hentai', ':x: Nothing', 'League Of Legends', 'Pubg'];
const genres = ['🎶 Nightcore', '🎶 K-pop', '🎶 Electronic', '🎶 BTS', '🎶 DJ', '🎶 Pop', '🎶 Rap', '🎶 AMV'];

module.exports = {
    name : 'personality',
    category : 'fun',
    description : 'a fun thing',
    run : async(client, message) => {

    let personality = {
    color: 0x37dbde,
    author: {
        name: '| OtakuBot | Personality',
        icon_url: '' // Put your bot's avatar link here
    },
    
    fields: [
		{ 
            name: ' | Types', 
            value: `${types[Math.floor(Math.random() * types.length)]}`,
        },
        {
            name: ' 🏘 | Social',
            value:  `${social[Math.floor(Math.random() * social.length)]}`,
        },
        {
            name: ' 💞 | Relationship',
            value: `${relationship[Math.floor(Math.random() * relationship.length)]}`,
        },
        {
            name: ' 💓 | Hobbies',
            value: `${hobbies[Math.floor(Math.random() * hobbies.length)]}`,
        },
        {
            name: ' 🎶 | Genres',
            value: `${genres[Math.floor(Math.random() * genres.length)]}`,
        },
    ], 
    footer: {
        text: ` | © ${yourbot.name} | V${yourbot.version}`,
        icon_url: '', // Put your bot's avatar link here
    },
    
    }
    message.channel.send({ embeds: [personality] })
    }
}

// ----- [ If you find a bug, please contact the bot developer ( NightcoreATDZO#3550 ) ] ----- //