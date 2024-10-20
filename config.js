/*

# Base By me Tohid 
# Youtube= Tohid khan
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐸','🗿']
global.owner = ['918930358452']
global.ownMain = '917849917350'
global.NamaOwner = 'Mr-Tohid' //your name
global.sessionName = 'session'
global.connect = true // for qr code do this false
global.namabot = 'TOHID-KHAN-9' //don't change
global.author = 'Mr-Tohid' //don't change
global.packname = 'Mr-Tohid' //sticker name
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = 'https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu' //don't change this
global.url2 = 'https://GitHub.com/Tohidkhan6332' //Don't change this
global.linkgc = 'https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu'
global.delayjpm = 3500

global.mess = { // Don't change this
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not owner or Mr Tohid.',
premium: 'You are not a premium user or Mr Tohid.',
seller: 'This feature can only be used by resellers and Mr Tohid.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Tohid Khan',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ good Morning ͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ how r u brother༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁this is my location ̥ ̊ ༚👻⃰ꢵ⭑trck ͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑thanks⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► 𝐌𝐑-𝐓𝐎𝐇𝐈𝐃 - 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ 𝐌𝐑-𝐓𝐎𝐇𝐈𝐃 - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "𝐌𝐑-𝐓𝐎𝐇𝐈𝐃 - #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})