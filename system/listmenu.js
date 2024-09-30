const chalk = require('chalk')
const fs = require('fs')

global.mainmenu = (prefix) => {
return `ダ Main Menu
${prefix}botstatus 
${prefix}mydata
${prefix}buypremium
${prefix}sewabot
${prefix}speedtest
${prefix}runtime
${prefix}script
${prefix}donate
${prefix}owner
${prefix}tqto
`}

global.soundmenu = (prefix) => {
return `ダ Convert Sound
${prefix}bass
${prefix}blown
${prefix}deep
${prefix}arrape
${prefix}fast
${prefix}fat
${prefix}nightcore
${prefix}reverse
${prefix}robot
${prefix}slow
${prefix}smooth
${prefix}tupai
`}

global.groupmenu = (prefix) => {
return `ダ Group Menu
${prefix}closetime
${prefix}opentime
${prefix}kick
${prefix}add
${prefix}promote
${prefix}demote
${prefix}setdecs
${prefix}setppgc
${prefix}tagall
${prefix}hidetag
${prefix}totag
${prefix}gruop *[option]*
${prefix}editinfo
${prefix}linkgc
${prefix}revoke
${prefix}listonline *[error]*
`}

global.gamemenu = (prefix) => {
return `ダ Game Menu
${prefix}tictactoe
${prefix}suitpvp
${prefix}kuismath
${prefix}tebak gambar
${prefix}tebak kata
${prefix}tebak kalimat
${prefix}tebak lirik
${prefix}tebak tebakan
${prefix}tebak bendera
${prefix}tebak bendera2
${prefix}tebak kabupaten
${prefix}tebak kimia
${prefix}tebak asahotak
${prefix}tebak siapakahaku
${prefix}tebak susunkata
${prefix}tebak tekateki
`}

global.aimenu = (prefix) => {
return `ダ Ai Menu
${prefix}ask
${prefix}chatgpt
${prefix}txt2img 
`}

global.ownermenu = (prefix) => {
return `ダ Owner Menu
${prefix}delsesi
${prefix}setimgqouted
${prefix}setimgmenu
${prefix}setvidmenu
${prefix}setmenu
${prefix}setreply
${prefix}cekapikey
${prefix}join
${prefix}ipserver
${prefix}shutdown  
${prefix}restart
${prefix}autoread *[option]*
${prefix}autobio *[option]*
${prefix}mode *[option]*
${prefix}setwm 
${prefix}setppbot
${prefix}block
${prefix}unblock 
${prefix}backup
${prefix}getcase
${prefix}upch
${prefix}upchvn
${prefix}upchaudio
`}

global.premiummenu = (prefix) => {
return `ダ Premiun Menu
${prefix}reminiv2
${prefix}recolor
${prefix}openai
${prefix}telestick
`}

global.convertmenu = (prefix) => {
return `ダ Convert Menu
${prefix}sticker
${prefix}smeme
${prefix}swm
${prefix}qc
${prefix}snobg
${prefix}toimage
${prefix}tovideo
${prefix}toaudio
${prefix}tomp3
${prefix}tovn
${prefix}togif
${prefix}tourl
${prefix}toqr
${prefix}toviewonce
${prefix}fliptext
${prefix}emojimix1
${prefix}emojimix2
`}

global.databasemenu = (prefix) => {
return `ダ Database Menu
${prefix}addvideo
${prefix}addimage
${prefix}addsticker
${prefix}addvn
${prefix}delvideo
${prefix}delimage
${prefix}delsticker
${prefix}delvn
${prefix}listvideo
${prefix}listimage
${prefix}liststicker
${prefix}listvn
`}

global.dlmenu = (prefix) => {
return `ダ Downloader
${prefix}tt
${prefix}ttaudio
${prefix}cocofun
${prefix}mediafire
${prefix}pindl
${prefix}snackvideo
${prefix}ytmp3
${prefix}ytmp4
${prefix}igdl
${prefix}igdlh
${prefix}pindl
`}

global.animemenu = (prefix) => {
return `ダ Anime Menu
${prefix}waifu
${prefix}catgirl
`}

global.othermenu = (prefix) => {
return `ダ Other Menu
${prefix}ttp
${prefix}attp
${prefix}removebg
${prefix}play *[maintenance]*
${prefix}remini
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
