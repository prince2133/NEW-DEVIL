const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Bot link ලබා දෙයි.'
else tmsg = "It gives bot link."


cmd({
    pattern: "script",
    alias: ["sc","git"],
    react: '📚',
    desc: tmsg,
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const result = '*🍭 ZeroTwo MD 🍭*\n\n*Github:* https://github.com/vihangayt0/Zero-Two-MD\n\n*Website:* https://zerotwomd.me'
reply(result)
} catch (e) {
l(e)
}
})
