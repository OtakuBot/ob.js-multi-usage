// ----- [ Identity Command was developed by NightcoreATDZO#3550 ] ----- //

const yourbot = require('../fun/yourbot.json')
const types = ['Psychopath', 'Depressed', 'Cheerful', 'Bright', 'Dark', 'Deceiver', '๐ญ Funny', 'Fishy', 'Cool', 'Insecure', 'Lonely', 'Optimistic', 'Brave', 'Brilliant', 'Dreamer', 'Nurturer', 'Peaceful', 'Hot', 'weeb', 'otaku', 'Perfect', 'Overthinker', 'Idealist'];
const social = [' ๐ Loser', ' ๐ฑโโ๏ธ The nice guy', '๐ฑโโ๏ธ The cute girl', '๐ญ Memer', '๐จโ๐ Nerd', '๐ป Kinky'];
const relationship = ['๐ค Single', '๐จโ๐ฉโ๐งโ๐ฆ Married', '๐ฉโโค๏ธโ๐จ Taken', '๐คฃ Forever alone'];
const hobbies = ['๐จ Art', '๐จ Drawing', '๐จ Painting', '๐ค Singing', '๐ Writing', '๐ผ Anime', 'Minecraft', ' ๐ watching hentai', ':x: Nothing', 'League Of Legends', 'Pubg'];
const genres = ['๐ถ Nightcore', '๐ถ K-pop', '๐ถ Electronic', '๐ถ BTS', '๐ถ DJ', '๐ถ Pop', '๐ถ Rap', '๐ถ AMV'];

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
            name: ' ๐ | Social',
            value:  `${social[Math.floor(Math.random() * social.length)]}`,
        },
        {
            name: ' ๐ | Relationship',
            value: `${relationship[Math.floor(Math.random() * relationship.length)]}`,
        },
        {
            name: ' ๐ | Hobbies',
            value: `${hobbies[Math.floor(Math.random() * hobbies.length)]}`,
        },
        {
            name: ' ๐ถ | Genres',
            value: `${genres[Math.floor(Math.random() * genres.length)]}`,
        },
    ], 
    footer: {
        text: ` | ยฉ ${yourbot.name} | V${yourbot.version}`,
        icon_url: '', // Put your bot's avatar link here
    },
    
    }
    message.channel.send({ embeds: [personality] })
    }
}

// ----- [ If you find a bug, please contact the bot developer ( NightcoreATDZO#3550 ) ] ----- //