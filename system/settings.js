/*
   Base By ArxzyDev
   My Contact wa.me/6289513081052
   Recode By Zannbot
   
   False = off
   True = on
*/

const fs = require("fs");
const chalk = require("chalk");


/* ~~~~~~~~~ REST API ~~~~~~~~~ */
global.api = {
skizo: "DeltaForce777", // login skizo.tech
lol: "Akiraa", // login lolhuman.xyz
btz: "btzRazanaja" // login api.betabotz.eu.org
};
/*
 PERINSIP REST API 
  REST API digunakan secara luas untuk mengakses data dan fungsionalitas layanan web, seperti:

 * Antarmuka pengguna aplikasi
 * Integrasi sistem
 * Pertukaran data antar aplikasi
 * Otomasi tugas
 * Analisis data
*/


/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "6289671842736"; // Owner Utama
global.owner = ["6289671842736"]; // Owner Lainnya
global.namaowner = "Razan."; // Nama Owner
global.premium = ["62895347198105"]; // Premium User
global.nobot = "62895602242948"; // nomor bot
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "Zannbot [BETA]"; // NickBot
global.typemenu = "v2"; // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = "v2"; // v1' > 'v2' > 'v3' > 'v4'
global.packname = ""; // Watermark Sticker
global.author = "zannbot.xyz"; // Watermark Sticker
global.xprefix = ['','!','.',',','/']
global.wm = {
 saluran: "Saluran By Razan",
 pemilik: "Powered By Razan"
};
global.zan = '`';
global.pesanonline = "bot online loh ya";
/* ~~~~~~~~~ SETTINGS TELEGRAM ~~~~~~~~~ */
global.OWNER = ["http://t.me/Razanaja"]
global.OWNER_NAME = "Razanaja"
global.BOT_TOKEN = '7536776943:AAFLTlSFFlGsOpWTx-Np58mwLJ6aU_sGULQ'
global.telebot = "http://t.me/Zannbot_bot",
global.imageUrl = "https://btch.pages.dev/file/313139c543db723fb67e6.jpg", //Thumbnail Url
global.buttonUrl = "https://github.com/ERLANRAHMAT/telebot", //Script Url
global.xapi = "https://api.betabotz.eu.org",
/* ~~~~~~~~~ FUNGTION ~~~~~~~~~ */
global.CodePairing = true // untuk mengambil kode wa
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "_*[ Done ]*_",
  prem: "_*[ Premium ]*_ Only",
  admin: "_*[ Admin Group ]*_ Only",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "_*[ Owner ]*_ Only",
  group: "_*[ Group ]*_ Only",
  private: "_*[ Private Chat ]*_ Only",
  wait: "_*[ Sedang Di Proses ]*_",
  error: "_*[ Sorry Fitur Error ]*_",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync("./media/quoted.jpg");
global.menu = fs.readFileSync("./media/menu.jpg");
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "https://instragram.com/razanaja.cuy";
global.linksaluran = "link saluran wa lu"
/* ~~~~~~~~~ OPSIONAL ~~~~~~~~~ */
global.id_saluran = "120363318031462993@newsletter";
/* ~~~~~~~~~ FALSE TRUE ~~~~~~~~~ */
global.autoread = true; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.welcome = true // Welcome goodbye
global.adminevent = true
global.groupevent = true // Notifikasi Grup
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
