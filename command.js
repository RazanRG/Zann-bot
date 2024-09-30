/*
   Base By ArxzyDev
   My Contact wa.me/6289513081052
*/
require('./system/settings')
require('./system/listmenu')
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@whiskeysockets/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const yts = require('yt-search');
const fg = require('api-dylux')
const { youtube } = require("btch-downloader");
const uploadImage = require('./lib/uploadImage')
const cheerio = require("cheerio");
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize,
} = require("./lib/myfunc");
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("./lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = [];
let kuismath = [];
let tebakgambar = [];
let tebakkata = [];
let tebakkalimat = [];
let tebaklirik = [];
let tebaktebakan = [];
let tebakbendera = [];
let tebakbendera2 = [];
let tebakkabupaten = [];
let tebakkimia = [];
let tebakasahotak = [];
let tebaksiapakahaku = [];
let tebaksusunkata = [];
let tebaktekateki = [];
let akinator = [];
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync("./src/data/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./src/data/owner.json"));
let _user = JSON.parse(fs.readFileSync("./src/data/user.json"));
let _afk = JSON.parse(fs.readFileSync("./src/data/user/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./src/total-hit-user.json"));
let autosimi = JSON.parse(fs.readFileSync("./src/data/simi.json"));
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const VnArxzy = JSON.parse(fs.readFileSync("./src/media/vn.json"));
const StickerArxzy = JSON.parse(fs.readFileSync("./src/media/sticker.json"));
const ImageArxzy = JSON.parse(fs.readFileSync("./src/media/image.json"));
const VideoArxzy = JSON.parse(fs.readFileSync("./src/media/video.json"));
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id");

const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (waktu < "23:59:00") {
  var ucapanWaktu = "Selamat Malam 🏙️";
}
if (waktu < "19:00:00") {
  var ucapanWaktu = "Selamat Petang 🌆";
}
if (waktu < "18:00:00") {
  var ucapanWaktu = "Selamat Sore 🌇";
}
if (waktu < "15:00:00") {
  var ucapanWaktu = "Selamat Siang 🌤️";
}
if (waktu < "10:00:00") {
  var ucapanWaktu = "Selamat Pagi 🌄";
}
if (waktu < "05:00:00") {
  var ucapanWaktu = "Selamat Subuh 🌆";
}
if (waktu < "03:00:00") {
  var ucapanWaktu = "Selamat Tengah Malam 🌃";
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
  try {
    /* ~~~~~~~~~ BASE ARXZYDEV ~~~~~~~~~ */
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
    const isCmd = body.startsWith(prefix, "");
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await conn.decodeJid(conn.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isSimi = autosimi.includes(from);
    /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isText = type == "textMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : ".";
    const isAsu = body.startsWith(pric);
    const isCommand = isAsu
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    const isAfkOn = afk.checkAfkUser(m.sender, _afk);
    const isAdrian = "6289513081052@s.whatsapp.net".includes(m.sender);
    /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await conn.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
    const isCreator = [numberowner, ..._owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium =
      isCreator || isCreator || checkPremiumUser(m.sender, premium);
    const isUser = _user.includes(m.sender);
    expiredCheck(conn, m, premium);
    /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
    if (!conn.public) {
      if (isCreator && !m.key.fromMe) return;
    }
    if (autoread) {
      conn.readMessages([m.key]);
    }
    if (autobio) {
      conn.updateProfileStatus(`-`).catch((_) => _);
    }
    if (chatUpdate["messages.upsert"]) {
      const upsert = chatUpdate["messages.upsert"];
      for (let msg of upsert.messages) {
        if (
          msg.key.remoteJid == "status@broadcast" &&
          !msg.key.fromMe &&
          !msg.message?.protocolMessage
        ) {
          console.log(
            `Lihat status ${msg.pushName} ${
              msg.key.participant.split("@")[0]
            }\n`,
          );
          conn.readMessages([msg.key]);
        }
      }
    }
    if (isCommand) {
      let titida = ["composing", "recording"];
      yte = titida[Math.floor(titida.length * Math.random())];
      conn.sendPresenceUpdate(yte, from);
    }
    if (m.sender.startsWith("212") && global.autoblok212 === true) {
      return conn.updateBlockStatus(m.sender, "block");
    }
    if (!m.sender.startsWith("62") && global.onlyindo === true) {
      return conn.updateBlockStatus(m.sender, "block");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: conn.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${conn.getName(i + "@s.whatsapp.net")}\n
FN:${conn.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@gh.my.id\n
item2.X-ABLabel:Email\n
item3.URL:https://zannbot.xyz\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    if (isCmd && !isUser) {
      _user.push(sender);
      fs.writeFileSync("./src/data/user.json", JSON.stringify(_user, null, 2));
    }
    /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
    if (isCommand) {
      console.log(`<================>`);
      console.log(
        chalk.black(
          chalk.bgWhite(!isCommand ? "<> MESSAGE </>" : "<> COMMAND </>"),
        ),
        chalk.black(chalk.bgGreen(hariini)),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat),
      );
      console.log(`<================>`);
      const cmdadd = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./src/total-hit-user.json", JSON.stringify(hit));
      };
      cmdadd();
      const totalhit = JSON.parse(
        fs.readFileSync("./src/total-hit-user.json"),
      )[0].hit_cmd;
    }
    /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
    for (let Mwuhehe of VnArxzy) {
      if (budy === Mwuhehe) {
        let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`);
        conn.sendMessage(
          m.chat,
          {
            audio: audiobuffy,
            mimetype: "audio/mp4",
            ptt: true,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of StickerArxzy) {
      if (budy === Mwuhehe) {
        let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`);
        conn.sendMessage(
          m.chat,
          {
            sticker: stickerbuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of ImageArxzy) {
      if (budy === Mwuhehe) {
        let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`);
        conn.sendMessage(
          m.chat,
          {
            image: imagebuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of VideoArxzy) {
      if (budy === Mwuhehe) {
        let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`);
        conn.sendMessage(
          m.chat,
          {
            video: videobuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }
    //reply
        async function zannreply(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                conn.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: namabot,
                            body: namaowner,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./media/cheemspic.jpg'),
                            sourceUrl: link
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               conn.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: namabot,
                        body: namaowner,
                        thumbnail: fs.readFileSync('./media/cheemspic.jpg'),
                        sourceUrl: "zannbot.xyz",
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                m.reply(teks)
            }
        }
    /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
    if (
      akinator.hasOwnProperty(m.sender.split("@")[0]) &&
      isCmd &&
      ["0", "1", "2", "3", "4", "5"].includes(body)
    ) {
      kuis = true;
      var { server, frontaddr, session, signature, question, step } =
        akinator[m.sender.split("@")[0]];
      if (step == "0" && budy == "5")
        m.reply("Maaf Anda telah mencapai pertanyaan pertama");
      var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`;
      var get_result = await fetchJson(ini_url);
      var get_result = get_result.result;
      if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*Terima Kasih*\n*Powered By ArxzyDev & LoL Human*";
        await conn
          .sendMessage(m.chat, {
            image: {
              url: get_result.image,
            },
            caption: ini_txt,
          })
          .then(() => {
            delete akinator[m.sender.split("@")[0]];
            fs.writeFileSync(
              "./src/data/akinator.json",
              JSON.stringify(akinator),
            );
          });
        return;
      }
      var { question, _, step } = get_result;
      ini_txt = `${question}\n\n`;
      ini_txt += "0 - Ya\n";
      ini_txt += "1 - Tidak\n";
      ini_txt += "2 - Saya Tidak Tau\n";
      ini_txt += "3 - Mungkin\n";
      ini_txt += "4 - Mungkin Tidak\n";
      ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya";
      if (args[0] === "5") {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`;
        var get_result = await fetchJson(ini_url);
        var get_result = get_result.result;
        var { question, _, step } = get_result;
        ini_txt = `${question}\n\n`;
        ini_txt += "0 - Ya\n";
        ini_txt += "1 - Tidak\n";
        ini_txt += "2 - Saya Tidak Tau\n";
        ini_txt += "3 - Mungkin\n";
        ini_txt += "4 - Mungkin Tidak";
        ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya";
      }
      conn.sendText(m.chat, ini_txt, m).then(() => {
        const data_ = akinator[m.sender.split("@")[0]];
        data_["question"] = question;
        data_["step"] = step;
        akinator[m.sender.split("@")[0]] = data_;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
      });
    }
    if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakgambar[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakgambar[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakgambar[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete kuismath[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await m.reply(
          `🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`,
        );
        delete kuismath[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakasahotak[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakasahotak[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m);
        delete tebakasahotak[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaksiapakahaku[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaksiapakahaku[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebaksiapakahaku[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaksusunkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaksusunkata[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaksusunkata[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakbendera.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakbendera[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakbendera[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakbendera[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakbendera2[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakbendera2[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakbendera2[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkabupaten[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakkabupaten[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakkabupaten[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakkimia.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkimia[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakkimia[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m);
        delete tebakkimia[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktekateki[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaktekateki[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaktekateki[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaklagu.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklagu[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaklagu[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaklagu[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakkata[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m);
        delete tebakkata[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkalimat[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebakkalimat[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakkalimat[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklirik[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaklirik[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaklirik[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktebakan[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await m.reply("*Anda Telah menyerah*");
        delete tebaktebakan[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await conn.sendText(
          m.chat,
          `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebaktebakan[m.sender.split("@")[0]];
      } else m.reply("*Jawaban Salah!*");
    }
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING",
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        // nek wayahku
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1,
          ))
      ) {
        m.reply(
          {
            "-3": "Game telah berakhir",
            "-2": "Invalid",
            "-1": "Posisi Invalid",
            0: "Posisi Invalid",
          }[ok],
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Menang!`
    : isTie
    ? `Game berakhir`
    : `Giliran ${["", ""][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
: @${room.game.playerX.split("@")[0]}
: @${room.game.playerO.split("@")[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        conn.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      conn.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }
    /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
    if (m.isGroup && !m.key.fromMe) {
      let mentionUser = [
        ...new Set([
          ...(m.mentionedJid || []),
          ...(m.quoted ? [m.quoted.sender] : []),
        ]),
      ];
      for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
          let getId2 = afk.getAfkId(ment, _afk);
          let getReason2 = afk.getAfkReason(getId2, _afk);
          let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
          let heheh2 = ms(getTimee);
          m.reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`);
        }
      }
      if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync("./src/data/user/afk-user.json", JSON.stringify(_afk));
        conn.sendTextWithMentions(
          m.chat,
          `@${m.sender.split("@")[0]} telah kembali dari afk`,
          m,
        );
      }
    }
    
    const HannMedia = m.mtype
    if(HannMedia === "stickerMessage"){
    if (isCreator) {
        const pesanstick = [
          "stiker paan itu",
          "apasih",
          "🗿",
          "😹",
          "apalah jirr itu",
          "paan si",
          "itu kontol yaa bang?",
          "stiker bokep ni pasti",
          "si pengoleksi stiker datang",
          "aelah stiker mulu",
          "pergi sana memek",
          "bego sih stiker ini pula",
          "ipilih jir",
          "ih apacoba"
          ]
          let stickpesan = pickRandom(pesanstick)
        	  return m.reply(stickpesan)
        }
 }
    
    switch (isCommand) {
      case "status":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (args.length < 1) return m.reply("perilah apa?");
          if (q === "image") {
            let imgSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { image: { url: imgSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/video/.test(mime)) {
            let VidSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { video: { url: VidSw }, caption: q },
              { statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (/audio/.test(mime)) {
            let VnSw = await conn.downloadAndSaveMediaMessage(quoted);
            await conn.sendMessage(
              "status@broadcast",
              { audio: { url: VnSw }, mimetype: "audio/mp4", ptt: true },
              { backgroundColor: "#FF000000", statusJidList: _user },
            );
            m.reply(mess.done);
          } else if (q) {
            conn.sendMessage(
              "status@broadcast",
              { text: q },
              { backgroundColor: "#FF000000", font: 3, statusJidList: _user },
            );
          } else {
            m.reply(
              "Replay Media Jika Mau Dengan Caption Ketik .status caption",
            );
          }
        }
        break;
      case "autosimi":
        if (!isCreator) return m.reply(mess.owne);
        if (args.length < 1) return m.reply("perilah apa?");
        if (q == "on") {
          autosimi.push(from);
          fs.writeFileSync("./src/data/simi.json", JSON.stringify(autosimi));
          m.reply("Sukses mengaktifkan mode simi");
        } else if (q == "off") {
          autosimi.splice(from, 1);
          fs.writeFileSync("./src/data/simi.json", JSON.stringify(autosimi));
          m.reply("Sukes menonaktifkan mode simi");
        } else {
          m.reply("Agak Laen");
        }
        break;
      case "setimgqouted":
      case "siq":
        {
          if (!isCreator) return m.reply(mess.owner);
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/quoted.jpg");
          fs.unlinkSync(delb);
          m.reply(mess.done);
        }
        break;
      case "setimgmenu":
      case "sim":
        {
          if (!isCreator) return m.reply(mess.owner);
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/menu.jpg");
          fs.unlinkSync(delb);
          m.reply(mess.done);
        }
        break;
      case "setvidmenu":
      case "svm":
        {
          if (!isCreator) return m.reply(mess.owner);
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/menu.mp4");
          fs.unlinkSync(delb);
          m.reply(mess.done);
        }
        break;
      case "addprem":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 2)
          return m.reply(
            `Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`,
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          m.reply("Sukses Premium");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          m.reply("Sukses Via Nomer");
        }
        break;
      case "delprem":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/premium.json",
              JSON.stringify(premium),
            );
          }
          m.reply("Sukses Delete");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1,
          );
          fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
          m.reply("Sukses Via Nomer");
        }
        break;
      case "listprem":
        {
          if (!isCreator) return m.reply(mess.owner);
          let data = require("./src/data/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let i of data) {
            txt += `Nomer : ${i.id}\n`;
            txt += `Expired : ${i.expired} Second\n`;
          }
          conn.sendMessage(
            m.chat,
            {
              text: txt,
              mentions: i,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "delsesi":
      case "clearsession":
        {
          if (!isCreator) return m.reply(mess.owner);
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return m.reply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state"),
            );
            console.log(filteredArray.length);
            let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
            if (filteredArray.length == 0) return m.reply(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            m.reply(teks);
            await sleep(2000);
            m.reply("Menghapus file sampah...");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            m.reply("Berhasil menghapus semua sampah di folder session");
          });
        }
        break;
      case "join":
        try {
          if (!isCreator) return m.reply(mess.owner);
          if (!text) return m.reply("Masukkan Link Group!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return m.reply("Link Invalid!");
          m.reply(mess.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await conn
            .groupAcceptInvite(result)
            .then((res) => m.reply(json(res)))
            .catch((err) => m.reply(json(err)));
        } catch {
          m.reply("Gagal Masuk Ke Group");
        }
        break;
      case "cekapikey":
        if (!isCreator) return m.reply(mess.owner);
        let g = await fetchJson(
          `https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`,
        );
        m.reply(q.result);
        break;
      case "ambilsesi":
      case "getsesi":
        if (!isCreator) return m.reply(mess.owner);
        m.reply("Tunggu Sebentar, Sedang mengambil file sesi mu");
        let sesi = fs.readFileSync("./src/total-hit-user.json");
        conn.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "total-hit-user.json",
          },
          {
            quoted: m,
          },
        );
        break;
      case "myip":
      case "ipbot":
        if (!isCreator) return m.reply(mess.owner);
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              m.reply("🔎 My public IP address is: " + ip);
            });
          },
        );
        break;
      case "shutdown":
        if (!isCreator) return m.reply(mess.owner);
        m.reply(`Otsukaresama deshita🖐`);
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!isCreator) return m.reply(mess.owner);
        m.reply("Proses....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Contoh ${prefix + command} on/off`);
        if (q === "on") {
          autoread = true;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        } else if (q === "off") {
          autoread = false;
          m.reply(`Berhasil mengubah autoread ke ${q}`);
        }
        break;
      case "autobio":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Example ${prefix + command} on/off`);
        if (q == "on") {
          autobio = true;
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        } else if (q == "off") {
          autobio = false;
          m.reply(`Berhasil Mengubah AutoBio Ke ${q}`);
        }
        break;
      case "mode":
        if (!isCreator) return m.reply(mess.owner);
        if (args.length < 1)
          return m.reply(`Example ${prefix + command} public/self`);
        if (q == "public") {
          conn.public = true;
          m.reply(mess.done);
        } else if (q == "self") {
          conn.public = false;
          m.reply(mess.done);
        }
        break;
      case "setexif":
        if (!isCreator) return m.reply(mess.owner);
        if (!text)
          return m.reply(`Contoh : ${prefix + command} packname|author`);
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        m.reply(
          `Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`,
        );
        break;
        case 'setreply':{
               if (!isCreator) return m.reply(mess.owner)
               if (!text) return m.reply(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  m.reply(mess.done)
               } else {
                  m.reply(`There are 3 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!isCreator) return m.reply(mess.owner);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await conn.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await conn.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await conn.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case "block":
        if (!isCreator) return m.reply(mess.owner);
        let blockw = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .updateBlockStatus(blockw, "block")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "unblock":
        if (!isCreator) return m.reply(mess.owner);
        let blockww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .updateBlockStatus(blockww, "unblock")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "leave":
        if (!isCreator) return m.reply(mess.owner);
        if (!m.isGroup) return m.reply(mess.group);
        m.reply("Dadah Semuanya 🥺");
        await conn.groupLeave(m.chat);
        break;
      case "backup":
        if (!isCreator) return m.reply(mess.owner);
        if (m.isGroup) return m.reply(mess.private);
        m.reply(mess.wait);
        exec("zip backup.zip *");
        let malas = await fs.readFileSync("./backup.zip");
        await conn.sendMessage(
          m.chat,
          {
            document: malas,
            mimetype: "application/zip",
            fileName: "backup.zip",
          },
          {
            quoted: m,
          },
        );
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return m.reply(mess.owner);
          if (!text)
            return m.reply(
              `Text mana?\n\nContoh : ${prefix + command} Besok Libur `,
            );
          let getGroups = await conn.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          m.reply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${
              anu.length * 1.5
            } detik`,
          );
          for (let i of anu) {
            await sleep(1500);
            let a = "```" + `\n\n${text}\n\n` + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            conn.sendMessage(i, {
              text: a,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Broadcast By Owner",
                  body: `Telah Terkirim ${i.length} Group`,
                  thumbnailUrl:
                    "https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
          m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;
      case "getcase":
      case "ambilcase":
        if (!isCreator) return m.reply(mess.owner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("conn.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        m.reply(`${getCase(q)}`);
        break;

      /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */

      case "closetime":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case "opentime":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        break;
      case "kick":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwww], "remove")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "add":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwww], "add")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "promote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "demote":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await conn
          .groupParticipantsUpdate(m.chat, [blockwwwwwa], "demote")
          .then((res) => m.reply(json(res)))
          .catch((err) => m.reply(json(err)));
        break;
      case "setname":
      case "setsubject":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await conn
          .groupUpdateSubject(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setdesc":
      case "setdesk":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!text) return "Text ?";
        await conn
          .groupUpdateDescription(m.chat, text)
          .then((res) => m.reply(mess.success))
          .catch((err) => m.reply(json(err)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins) return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!quoted)
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return m.reply(
            `Kirim/m.reply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await conn.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await conn.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        } else {
          var memeg = await conn.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          m.reply(mess.done);
        }
        break;
      case "tagall":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let teks = `ダ TAG FOR ADMIN ダ
 
                  *MESSAGE: ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `◈ @${mem.id.split("@")[0]}\n`;
        }
        conn.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "hidetag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        conn.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "totag":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!isAdmins) return m.reply(mess.admin);
        if (!m.quoted)
          return m.reply(`Reply pesan dengan caption ${prefix + command}`);
        conn.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
      case "editinfo":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "unlocked")
            .then((res) => m.reply(`Sukses Membuka Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "locked")
            .then((res) => m.reply(`Sukses Menutup Edit Info Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        let response = await conn.groupInviteCode(m.chat);
        conn.sendText(
          m.chat,
          `👥 *INFO LINK GROUP*\n📛 *Nama :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "@" + groupMetadata.owner.split`@`[0]
              : "Tidak diketahui"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          },
        );
        break;
      case "revoke":
      case "resetlink":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        await conn
          .groupRevokeInvite(m.chat)
          .then((res) => {
            m.reply(
              `Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`,
            );
          })
          .catch((err) => m.reply(json(err)));
        break;
      case "listonline":
      case "liston":
        if (!m.isGroup) m.reply(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        let online = [...Object.keys(store.presences[id]), botNumber];
        conn.sendText(
          m.chat,
          "⏰ List Online:\n\n" +
            online.map((v) => "🌱 @" + v.replace(/@.+/, "")).join`\n`,
          m,
          {
            mentions: online,
          },
        );
        break;

      /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
      case "ping":
      case "botstatus":
      case "statusbot":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0,
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            },
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key],
      )}`,
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times,
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}`,
  )
  .join("\n\n")}`
    : ""
}
`.trim();
          await conn.sendMessage(
            m.chat,
            {
              text: respon,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "STATUS SERVER",
                  body: `${latensi.toFixed(4)} Second`,
                  thumbnailUrl:
                    "https://telegra.ph/file/05c3b67e766b157ca655f.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "buypremium":
      case "premiumuser":
        {
          let teks = `Hi ${pushname}👋\n Ingin Beli Premium? Chat Saja Owner😉`;
          await conn.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "BUY PREMIUM",
                  body: `15k / MONTH`,
                  thumbnailUrl:
                    "https://telegra.ph/file/c0cad5270a204eb878711.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "sewa":
      case "sewabot":
        m.reply(`Ketik ${prefix}owner Saja`);
        break;
      case "speedtest":
        {
          m.reply("Testing Speed...");
          let cp = require("child_process");
          let { promisify } = require("util");
          let exec = promisify(cp.exec).bind(cp);
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim())
              conn.sendMessage(
                m.chat,
                {
                  text: stdout,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
            if (stderr.trim())
              conn.sendMessage(
                m.chat,
                {
                  text: stderr,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
          }
        }
        break;
      case "runtime":
        let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`;
        conn.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "RUNTIME",
                body: `FORGET DONATE`,
                thumbnailUrl:
                  "https://telegra.ph/file/e293453cd41317e7cf2a4.jpg",
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          },
        );
        break;
      case "sc":
      case "script":
      case "scriptbot":
        uy = `https://github.com/SysSolutionsPE/Rxzy-MD-V1.2`;
        conn.sendMessage(
          m.chat,
          {
            text: uy,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "Script Free",
                body: `SCRIPT BOT ${namabot} Ada Di Youtube @conndev`,
                thumbnailUrl:
                  "https://telegra.ph/file/0720685135c68851ca869.jpg",
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          },
        );
        break;
      case "donate":
      case "donasi":
        let katanya = `Hallo Kakak ${pushname}\n\nJika Ingin Berdonasi Menggunakan QRIS\n\n\n*NOTES:*\n 1.Bawa Bukti Telah Berdonasi Kepada Owner!!!\nSeberapa Pun Kakak Berdonasi Bagi Kami Sangat Berharga`;
        conn.sendMessage(
          m.chat,
          {
            image: fs.readFileSync("./media/qris.jpg"),
            caption: katanya,
          },
          {
            quoted: m,
          },
        );
        break;
      case "owner":
        {
          conn.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list,
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tqto":
        m.reply(
          `*Terima Kasih Kepada*\n\n>| 1. ArxzyDev ( Author )\n>| 2. LoL Human ( Rest APIs )\n>| 3. ZTRAM ( Team )\n>| 4. Penyedia Module\n>| 5. Subscriber & Creator Bot WhatsApp\n\n\n\n\n\n Powered By ArxzyDev`,
        );
        break;

      /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!quoted)
            return m.reply(
              `Balas Video/Image Dengan Caption ${prefix + command}`,
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else if (isVideo || /video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return m.reply("Maksimal 10 detik!");
            let media = await quoted.download();
            let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else {
            return m.reply(
              `Kirim Gambar/Video Dengan Caption ${
                prefix + command
              }\nDurasi Video 1-9 Detik`,
            );
          }
        }
        break;
      case "smeme":
        {
          let respond = `Kirim/Reply image/sticker dengan caption ${
            prefix + command
          } text1|text2`;
          if (!/image/.test(mime)) return m.reply(respond);
          if (!text) return m.reply(respond);
          m.reply(mess.wait);
          atas = text.split("|")[0] ? text.split("|")[0] : "-";
          bawah = text.split("|")[1] ? text.split("|")[1] : "-";
          let dwnld = await conn.downloadAndSaveMediaMessage(qmsg);
          let fatGans = await TelegraPh(dwnld);
          let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            bawah,
          )}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
          let pop = await conn.sendImageAsSticker(m.chat, smeme, m, {
            packname: packname,
            author: author,
          });
          fs.unlinkSync(pop);
        }
        break;
      case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return m.reply(`Kirim/Reply image/video dengan caption ${prefix + command} teks1|teks2`)
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `Reply sticker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            conn.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              },
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await conn.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `Kirim/m.reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `Arxzy-MD.mp3`,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return m.reply(
              `m.reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          conn.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "togif":
        {
          if (!/webp/.test(mime))
            return m.reply(
              `m.reply stiker dengan caption *${prefix + command}*`,
            );
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await conn.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case "tourl":
        {
          m.reply(mess.wait);
          let media = await conn.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            m.reply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            m.reply(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
      case "snobg":
        {
          let respond = `Kirim Atau Reply Gambar Dengan Caption ${
            prefix + command
          }`;
          if (!/image/.test(mime)) return m.reply(respond);
          let dwnld = await conn.downloadAndSaveMediaMessage(qmsg);
          let fatGans = await TelegraPh(dwnld);
          let smeme = `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${fatGans}`;
          let pop = await conn.sendImageAsSticker(m.chat, smeme, m, {
            packname: packname,
            author: author,
          });
          fs.unlinkSync(pop);
        }
        break;
      case "emojimix2":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1) return m.reply(`Contoh : ${prefix + command} 😅+🤔`);
          if (!emoji2) return m.reply(`Contoh : ${prefix + command} 😅+🤔`);
          m.reply(mess.wait);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1,
            )}_${encodeURIComponent(emoji2)}`,
          );
          for (let res of anu.results) {
            let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case "emojimix1":
        {
          if (!text) return m.reply(`Contoh : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              text,
            )}`,
          );
          for (let res of anu.results) {
            let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!quoted) return m.reply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await conn.downloadAndSaveMediaMessage(quoted);
            conn.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: `Here you go!`,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          } else if (/video/.test(mime)) {
            anuanuan = await conn.downloadAndSaveMediaMessage(quoted);
            conn.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: `Here you go!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case "toqr":
        {
          if (!q) return m.reply(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, {
            scale: 35,
          });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64",
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await conn.sendMessage(
            from,
            {
              image: medi,
              caption: "Here you go!",
            },
            {
              quoted: m,
            },
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "fliptext":
        {
          if (args.length < 1)
            return m.reply(`Example:\n${prefix}fliptext ArxzyDev`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          m.reply(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`,
          );
        }
        break;
      /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */
      case "infogempa":
        let k = await fetchJson(
          `https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`,
        );
        m.reply(mess.wait);
        var caption = `Lokasi : ${k.result.lokasi}\n`;
        caption += `Waktu : ${k.result.waktu}\n`;
        caption += `Potensi : ${k.result.potensi}\n`;
        caption += `Magnitude : ${k.result.magnitude}\n`;
        caption += `Kedalaman : ${k.result.kedalaman}\n`;
        caption += `Koordinat : ${k.result.koordinat}`;
        await conn.sendMessage(
          m.chat,
          {
            image: {
              url: k.result.map,
            },
            caption,
          },
          {
            quoted: m,
          },
        );
        break;
      /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
      case "listvn":
        {
          let teks = "┌──⭓「 *List Vn* 」\n│\n";
          for (let x of VnArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${VnArxzy.length}*`;
          m.reply(teks);
        }
        break;
      case "liststicker":
        {
          let teks = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let x of StickerArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${StickerArxzy.length}*`;
          m.reply(teks);
        }
        break;
      case "listimage":
        {
          let teks = "┌──⭓「 *List Image* 」\n│\n";
          for (let x of ImageArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${ImageArxzy.length}*`;
          m.reply(teks);
        }
        break;
      case "listvideo":
        {
          let teks = "┌──⭓「 *List Video* 」\n│\n";
          for (let x of VideoArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${VideoArxzy.length}*`;
          m.reply(teks);
        }
        break;
      case "addvideo":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Nama Videonya?");
          if (VideoArxzy.includes(q))
            return m.reply("Nama Yang Kamu Masukan Sudah Ada");
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          VideoArxzy.push(q);
          await fsx.copy(delb, `./media/video/${q}.mp4`);
          fs.writeFileSync(
            "./src/media/video.json",
            JSON.stringify(VideoArxzy),
          );
          fs.unlinkSync(delb);
          m.reply(
            `Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`,
          );
        }
        break;
      case "delvideo":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Nama Video");
          if (!VideoArxzy.includes(q))
            return m.reply("Nama Tidak Ada Di Dalam Database");
          let wanu = VideoArxzy.indexOf(q);
          VideoArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/video.json",
            JSON.stringify(VideoArxzy),
          );
          fs.unlinkSync(`./media/video/${q}.mp4`);
          m.reply(`Success Sukses Menghapus Video ${q}`);
        }
        break;
      case "addimage":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Nama Imagenya?");
          if (ImageArxzy.includes(q))
            return m.reply(
              "Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database",
            );
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          ImageArxzy.push(q);
          await fsx.copy(delb, `./media/image/${q}.jpg`);
          fs.writeFileSync(
            "./src/media/image.json",
            JSON.stringify(ImageArxzy),
          );
          fs.unlinkSync(delb);
          m.reply(
            `Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`,
          );
        }
        break;
      case "delimage":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Nama Imagenya");
          if (!ImageArxzy.includes(q))
            return m.reply("Nama Image Yang Kamu Masukan Tidak Terdaftar");
          let wanu = ImageArxzy.indexOf(q);
          ImageArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/image.json",
            JSON.stringify(ImageArxzy),
          );
          fs.unlinkSync(`./media/image/${q}.jpg`);
          m.reply(`Suksed Menghapus Image ${q}`);
        }
        break;
      case "addsticker":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Nama Stickernya?");
          if (StickerArxzy.includes(q)) return m.reply("Nama Telah Di Pakai");
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          StickerArxzy.push(q);
          await fsx.copy(delb, `./media/sticker/${q}.webp`);
          fs.writeFileSync(
            "./src/media/sticker.json",
            JSON.stringify(StickerArxzy),
          );
          fs.unlinkSync(delb);
          m.reply(
            `Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`,
          );
        }
        break;
      case "delsticker":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Nama Stickernya");
          if (!StickerArxzy.includes(q))
            return m.reply("Nama Tidak Terdaftar Di Database");
          let wanu = StickerArxzy.indexOf(q);
          StickerArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/sticker.json",
            JSON.stringify(StickerArxzy),
          );
          fs.unlinkSync(`./media/sticker/${q}.webp`);
          m.reply(`Sukses Menghapus Sticker ${q}`);
        }
        break;
      case "addvn":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Namanya?");
          if (VnArxzy.includes(q)) return m.reply("Nama Telah Di Pakai");
          let delb = await conn.downloadAndSaveMediaMessage(quoted);
          VnArxzy.push(q);
          await fsx.copy(delb, `./media/audio/${q}.mp3`);
          fs.writeFileSync("./src/media/vn.json", JSON.stringify(VnArxzy));
          fs.unlinkSync(delb);
          m.reply(
            `Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`,
          );
        }
        break;
      case "delvn":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (args.length < 1) return m.reply("Masukan Namanya");
          if (!VnArxzy.includes(q))
            return m.reply("Nama Tidak Terdaftar Di Database");
          let wanu = VnArxzy.indexOf(q);
          VnArxzy.splice(wanu, 1);
          fs.writeFileSync("./src/media/vn.json", JSON.stringify(VnArxzy));
          fs.unlinkSync(`./media/audio/${q}.mp3`);
          m.reply(`Sukses Menghapus Audio ${q}`);
        }
        break;

      /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender),
            )
          )
            return m.reply("Kamu masih didalam game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true),
          );
          if (room) {
            m.reply("Partner ditemukan!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Menunggu @${room.game.currentTurn.split("@")[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
            if (room.x !== room.o)
              await conn.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await conn.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            m.reply(
              "Menunggu partner" +
                (text
                  ? ` mengetik command dibawah ini ${prefix}${command} ${text}`
                  : ""),
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              conn.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
            } else if (!this.game) {
              m.reply(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            m.reply("rusak");
          }
        }
        break;
      case "suitpvp":
      case "suit":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender),
            )
          )
            m.reply(`Selesaikan suit mu yang sebelumnya`);
          if (m.mentionedJid[0] === m.sender)
            return m.reply(`Tidak bisa bermain dengan diri sendiri !`);
          if (!m.mentionedJid[0])
            return m.reply(
              `_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`,
              m.chat,
              {
                mentions: [_owner[1] + "@s.whatsapp.net"],
              },
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0]),
            )
          )
            return m.reply(
              `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`,
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${
            m.mentionedJid[0].split`@`[0]
          } untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`;
          this.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
      case "kuismath":
      case "math":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return m.reply(
              `Mode: ${Object.keys(modes).join(
                " | ",
              )}\nContoh _useran: ${prefix}math medium`,
            );
          let result = await genMath(text.toLowerCase());
          conn
            .sendText(
              m.chat,
              `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(
                result.waktu / 1000
              ).toFixed(2)} detik`,
              m,
            )
            .then(() => {
              kuismath[m.sender.split("@")[0]] = result.jawaban;
            });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Jawaban: " + result.jawaban);
            m.reply(
              "Waktu Habis\nJawaban: " + kuismath[m.sender.split("@")[0]],
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
      case "tebak":
        {
          if (args[0] === "gambar") {
            if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakgambar[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakgambar.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakgambar[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kata") {
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkata[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakkata[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kalimat") {
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkalimat[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakkalimat[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakkalimat[m.sender.split("@")[0]];
            }
          } else if (args[0] === "lirik") {
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaklirik[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebaklirik[m.sender.split("@")[0]];
            }
          } else if (args[0] === "tebakan") {
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaktebakan[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaktebakan[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaktebakan[m.sender.split("@")[0]];
            }
          } else if (args[0] === "bendera") {
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakbendera[m.sender.split("@")[0]] =
                  result.name.toLowerCase();
              });
            await sleep(60000);
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.name);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakbendera[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakbendera[m.sender.split("@")[0]];
            }
          } else if (args[0] === "bendera2") {
            if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakbendera2[m.sender.split("@")[0]] =
                  result.name.toLowerCase();
              });
            await sleep(60000);
            if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.name);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakbendera2[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakbendera2[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kabupaten") {
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendImage(
                m.chat,
                result.url,
                `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkabupaten[m.sender.split("@")[0]] =
                  result.title.toLowerCase();
              });
            await sleep(60000);
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.title);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakkabupaten[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakkabupaten[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kimia") {
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkimia[m.sender.split("@")[0]] =
                  result.lambang.toLowerCase();
              });
            await sleep(60000);
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.lambang);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakkimia[m.sender.split("@")[0]];
            }
          } else if (args[0] === "asahotak") {
            if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakasahotak[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakasahotak[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakasahotak[m.sender.split("@")[0]];
            }
          } else if (args[0] === "siapakahaku") {
            if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaksiapakahaku[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaksiapakahaku[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaksiapakahaku[m.sender.split("@")[0]];
            }
          } else if (args[0] === "susunkata") {
            if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaksusunkata[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaksusunkata[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaksusunkata[m.sender.split("@")[0]];
            }
          } else if (args[0] === "tekateki") {
            if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0]))
              return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            conn
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaktekateki[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              conn.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaktekateki[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaktekateki[m.sender.split("@")[0]];
            }
          }
        }
        break;
      case "akinator":
        m.reply(
          `Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran Pengguna permainan ini melalui serentetan pertanyaan.\n\n~> ${prefix}akinatorstart : Untuk memulai\n~> ${prefix}akinatorstop : Untuk berhenti`,
        );
        break;
      case "akinatorstart":
        if (!isPremium) return m.reply(mess.prem);
        if (m.isGroup) return m.reply(mess.private);
        if (akinator.hasOwnProperty(m.sender.split("@")[0]))
          return m.reply("Selesein yg sebelumnya dulu atuh");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/akinator/start?apikey=${lol}`,
        );
        let { server, frontaddr, session, signature, question, step } =
          get_result.result;
        const data = {};
        data["server"] = server;
        data["frontaddr"] = frontaddr;
        data["session"] = session;
        data["signature"] = signature;
        data["question"] = question;
        data["step"] = step;
        imi_txt = `${question}\n\n`;
        imi_txt += "0 - Ya\n";
        imi_txt += "1 - Tidak\n";
        imi_txt += "2 - Saya Tidak Tau\n";
        imi_txt += "3 - Mungkin\n";
        imi_txt += "4 - Mungkin Tidak";
        conn.sendText(m.chat, imi_txt, m).then(() => {
          akinator[m.sender.split("@")[0]] = data;
          fs.writeFileSync(
            "./src/data/akinator.json",
            JSON.stringify(akinator),
          );
        });
        break;
      case "akinatorstop":
        if (!akinator.hasOwnProperty(m.sender.split("@")[0]))
          return m.reply("Anda tidak memiliki akinator sebelumnya");
        delete akinator[m.sender.split("@")[0]];
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
        m.reply("Success mengcancel akinator sebelumnya");
        break;

      case "afk":
        if (!m.isGroup) return m.reply(mess.group);
        if (isAfkOn) return m.reply("Kakak Sudah Afk Sebelumnya");
        let reason = text ? text : "Nothing.";
        afk.addAfkUser(m.sender, Date.now(), reason, _afk);
        m.reply(
          `@${m.sender.split("@")[0]} Sedang AFK\nDengan Alasan : ${reason}`,
        );
        break;
      case "ask":
      case "openai":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (!full_args)
            return m.reply("What are you looking for in this bot");
          let d = await fetchJson(
            `https://skizo.tech/api/openai?text=${full_args}&apikey=${xzn}`,
          );
          await conn.sendMessage(
            from,
            {
              text: d.result,
            },
            { quoted: m },
          );
        }
        break;

/* gada wm gausah comot trus pasang WM kntoll,,sharing ya share aja */


case'play': case 'song': case 'music': {
if (!text) return m.reply(`Kamu mau lagu apa, jalang?!, kasih tahu aku cara menggunakan fitur ini\nContoh: ${prefix + command} dj paradise`);
m.reply(mess.wait)
try {
const { youtube } = require("btch-downloader")
        let search = await yts(text)
        let anup3k = search.videos[0]
const { title, thumbnail, url, timestamp, views } = anup3k
let { mp3 } = await youtube(url)
        let doc = { 
            audio: {
                url: mp3
            },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: url,
                    title: title,
                    sourceUrl: url, 
                    thumbnail: await fetchBuffer(thumbnail)
                }
            }
        };
        await conn.sendMessage(m.chat, doc, { quoted: m });
} catch (e) {
   console.log(e)
   reply('Ups maaf terjadi kesalahan')
}
}
break
      /**
*Fitur Case Tiktok Dl
• don't forget to follow.
° https://whatsapp.com/channel/0029VaUfn1B2v1IliXAL9U1s
*Credit Farisoffc
**/
case "tt": case "tiktok": {
if (!q) return m.reply(` Contoh :${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid`)
m.reply(mess.wait)
const data = await fg.tiktok(text)
const json = data.result
conn.sendMessage(m.chat, { video: { url: json.play }, caption: `title: ${json.title}` }, { quoted:m })
}
break

      case "tiktokaudio":
      case "ttaudio":
        {
          if (!q) return m.reply("where is the link");
          if (!q.includes('tiktok')) return m.reply(`Link Invalid`)
          const data = await fg.tiktok(text)
const json = data.result
          conn.sendMessage(
            m.chat,
            {
              audio: {
                url: data.result,
              },
              mimetype: "audio/mp4",
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "cocofun":
        if (!q) return m.reply("where is the link");
        let j = await fetchJson(
          `https://api.lolhuman.xyz/api/cocofun?apikey=${lol}&url=${q}`,
        );
        conn.sendMessage(
          m.chat,
          {
            video: {
              url: j.result.nowm,
            },
            caption: j.result.tag,
          },
          {
            quoted: m,
          },
        );
        break;
      case "mediafire":
        if (!q) return m.reply("where is the link");
        let ha = await fetchJson(
          `https://api.lolhuman.xyz/api/mediafire?apikey=${lol}&url=${q}`,
        );
        conn.sendMessage(
          m.chat,
          {
            document: {
              url: ha.result.link,
            },
            minetype: "*/*",
          },
          {
            quoted: m,
          },
        );
        break;
      case "pin":
      case "pindl":
        if (!q) return m.reply("where is the link");
        let l = await fetchJson(
          `https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`,
        );
        await conn.sendMessage(
          m.chat,
          {
            video: {
              url: l.result,
            },
          },
          {
            quoted: m,
          },
        );
        break;
      case "snackvideo":
      case "sv":
        if (!q) return m.reply("where is the link");
        let ma = await fetchJson(
          `https://api.lolhuman.xyz/api/snackvideo?apikey=${lol}&url=${q}`,
        );
        conn.sendMessage(
          m.chat,
          {
            video: {
              url: ma.result.url,
            },
            caption: ma.result.caption,
          },
          {
            quoted: m,
          },
        );
        break;
      case "ytmp4":
        {
          if (!q) return m.reply("where is the link");
          let n = await fetchJson(
            `https://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${q}`,
          );
          let mono = "```";
          let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`;
          await conn.sendMessage(
            m.chat,
            {
              document: {
                url: n.result.link.link,
              },
              mimetype: "video/mp4",
              fileName: "Downloader Ytmp4 By ArxzyDev.mp4",
              caption: ytmp4p,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: n.result.title,
                  body: "",
                  thumbnailUrl: n.result.thumbnail,
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "ytmp3":
        {
          if (!q) return m.reply("where is the link");
          let n = await fetchJson(
            `https://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${q}`,
          );
          let mono = "```";
          let ytmp4p = `${mono}Downloader Youtube\n\nTitle: ${n.result.title}\nDiUpload Oleh: ${n.result.uploader}\nLinkChannel: ${n.result.channel}\nDurasi Video: ${n.result.duration}\nDitonton Sebanyak: ${n.result.view}${mono}`;
          await conn.sendMessage(
            m.chat,
            {
              document: {
                url: n.result.link.link,
              },
              mimetype: "audio/mp3",
              fileName: "Downloader Ytmp3 By ArxzyDev.mp3",
              caption: ytmp4p,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: n.result.title,
                  body: "",
                  thumbnailUrl: n.result.thumbnail,
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "igdl":
      case "ig":
      case "instagram":
        {
          if (!q) return m.reply("Link?");
          let ag = await fetchJson(
            `https://api.lolhuman.xyz/api/instagram?apikey=${lol}&url=${q}`,
          );
          for (var i = 0; i < ag.result.length; i++) {
            let pap = ag.result[i].includes(".jpg") ? "image" : "video";
            await conn.sendMessage(
              m.chat,
              {
                [pap]: {
                  url: ag.result[i],
                },
                caption: "",
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case "pindl":
        {
          if (!q) return m.reply("Link?");
          let apacuba = await fetchJson(
            `https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${q}`,
          );
          for (var i = 0; i < apacuba.result.length; i++) {
            let pap = apacuba.result[i].includes(".jpg") ? "image" : "video";
            await conn.sendMessage(
              m.chat,
              {
                [pap]: {
                  url: apacuba.result[i],
                },
                caption: "",
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case "igdlh":
      case "highlights":
        {
          if (!q) return m.reply("Link?");
          let ap = await fetchJson(
            `https://api.lolhuman.xyz/api/ig-highlights?apikey=${lol}&url=${q}`,
          );
          for (var oa = 0; oa < ap.result.length; oa++) {
            let pap = ap.result[oa].includes(".jpg") ? "image" : "video";
            await conn.sendMessage(
              m.chat,
              {
                [pap]: {
                  url: ap.result[oa],
                },
                caption: "",
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;

      case "qc":
        {
        	if (!text) return m.reply(`teks mana bang`)
let teks = m.quoted ? quoted.text : text
 try {
   try {
                    pic = await conn.profilePictureUrl(m.sender, 'image')
                } catch {
                    pic = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": pushname ,
                  "photo": {
                     "url": pic
                  }
               },
               "text": text,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
 const buffer = Buffer.from(json.data.result.image, 'base64') 
conn.sendImageAsSticker(m.chat, buffer, m, {
                  packname: global.packname , author: global.author
               })    //m.reply(util.format(json.data.result.image))
      } catch (e) {
         console.log(e)
         m.reply(`${e}\n\nServer sedang eror, coba lagi tahun depan`)
      }
      }
      break
      case "attp":
        if (!q) return m.reply("Masukan Text");
        m.reply(mess.wait);
        conn.sendMessage(
          m.chat,
          {
            sticker: {
              url: `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${q}`,
            },
          },
          {
            quoted: m,
          },
        );
        break;

case 'h':
    case 'hidetag':
        {
            if (!m.isGroup) return m.reply(global.mess.group)
            if (!isAdmins) return m.reply(global.mess.admin)
            let tek = m.quoted ? quoted.text : (text ? text : "")
            conn.sendMessage(m.chat, {
                text: tek,
                mentions: participants.map(a => a.id)
            }, {
                quoted: m // BIAR SUPPORT IP BANG 😂
            })
        }
        break    

      case "remini":
      case "hd":
        {
          // if (!isPremium) return m.reply(mess.prem)
          if (!isMedia) return m.reply("Where The A Image");
          let media = await conn.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          conn.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "reminiv2":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (!isMedia) return m.reply("Where The A Image");
          let media = await conn.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          await conn.sendMessage(
            m.chat,
            {
              image: {
                url: `https://skizo.tech/api/torch-srgan?url=${anu}&apikey=${xzn}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "recolor":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (!isMedia) return m.reply("Where The A Image");
          let media = await conn.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          await conn.sendMessage(
            m.chat,
            {
              image: {
                url: `https://skizo.tech/api/colorizer?url=${anu}&&apikey=${xzn}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case 'removebg': case 'nobg':{
if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://widipe.com/removebg?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.result}}, { upload: conn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: id_saluran,
                  newsletterName: wm.saluran,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await conn.relayMessage(m.chat, msgs.message, {})
}
break

      case "tele":
      case "telestick":
        {
          if (!isPremium) return m.reply(mess.prem);
          if (!q) return m.reply("Link?");
          let agg = await fetchJson(
            `https://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${q}`,
          );
          for (var ki = 0; ki < agg.result.sticker.length; ki++) {
            await conn.sendImageAsSticker(m.chat, agg.result.sticker[ki], m, {
              packname: packname,
              author: author,
            });
          }
        }
        break;

      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "tupai":
        {
          try {
            let set;
            if (/bass/.test(command))
              set = "-af equalizer=f=54:width_type=o:width=2:g=20";
            if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
            if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
            if (/earrape/.test(command)) set = "-af volume=12";
            if (/fast/.test(command))
              set = '-filter:a "atempo=1.63,asetrate=44100"';
            if (/fat/.test(command))
              set = '-filter:a "atempo=1.6,asetrate=22100"';
            if (/nightcore/.test(command))
              set = "-filter:a atempo=1.06,asetrate=44100*1.25";
            if (/reverse/.test(command)) set = '-filter_complex "areverse"';
            if (/robot/.test(command))
              set =
                "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
            if (/slow/.test(command))
              set = '-filter:a "atempo=0.7,asetrate=44100"';
            if (/smooth/.test(command))
              set =
                "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
            if (/tupai/.test(command))
              set = '-filter:a "atempo=0.5,asetrate=65100"';
            if (/audio/.test(mime)) {
              m.reply(mess.wait);
              let media = await conn.downloadAndSaveMediaMessage(qmsg);
              let ran = getRandom(".mp3");
              exec(
                `ffmpeg -i ${media} ${set} ${ran}`,
                (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return m.reply(err);
                  let buff = fs.readFileSync(ran);
                  conn.sendMessage(
                    m.chat,
                    {
                      audio: buff,
                      mimetype: "audio/mpeg",
                    },
                    {
                      quoted: m,
                    },
                  );
                  fs.unlinkSync(ran);
                },
              );
            } else
              m.reply(
                `Balas audio yang ingin diubah dengan caption *${
                  prefix + command
                }*`,
              );
          } catch (e) {
            m.reply(e);
          }
        }
        break;
      case "menu all":
      case "help":
        let menunya = `
Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
ダ Owner Menu
${prefix}delsesi
${prefix}setimgqouted
${prefix}setimgmenu
${prefix}setvidmenu
${prefix}setmenu
${prefix}setreplay
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

ダ Ai Menu
${prefix}ask
${prefix}chatgpt
${prefix}txt2img

ダ Anime Menu
${prefix}waifu
${prefix}catgirl

ダ Convert Sound
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

ダ Premiun Menu
${prefix}reminiv2
${prefix}recolor
${prefix}openai
${prefix}telestick

ダ Group Menu
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

ダ Main Menu
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

ダ Information
${prefix}infogempa

ダ Convert Menu
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

ダ Database Menu
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

ダ Game Menu
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

ダ Downloader
${prefix}tt
${prefix}tt2
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

ダ Other Menu
${prefix}ttp
${prefix}attp
${prefix}removebg
${prefix}play *[maintenance]*
${prefix}remini`;
        if (typemenu === "v1") {
          conn.sendMessage(
            m.chat,
            {
              image: fs.readFileSync("./media/menu.jpg"),
              caption: menunya,
            },
            {
              quoted: m,
            },
          );
        } else if (typemenu === "v2") {
          conn.sendMessage(
            m.chat,
            {
              text: menunya,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: namabot,
                  body: `Bot Created By ${namaowner}`,
                  thumbnail: fs.readFileSync("./media/menu.jpg"),
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        } else if (typemenu === "v3") {
          conn.sendMessage(
            m.chat,
            {
              video: fs.readFileSync("./media/menu.mp4"),
              caption: menunya,
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
        } else if (typemenu === "v4") {
          conn.relayMessage(
            m.chat,
            {
              scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: menunya,
              },
            },
            {},
          );
        }
        break;
        // nambah fitur di sini
        case 'catgirl':
        let res = await fetch(`https://fantox-apis.vercel.app/catgirl`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error';
  conn.sendMessage(m.chat, {image: {url: json.url}, caption: mess.done}, {quoted: m})
  break
case 'chatgpt':
 conn.sendPresenceUpdate('composing', from);
 conn.readMessages([m.key]);
 if (args.length === 0) {
 m.reply(`*Contoh:*\n${prefix + command} halo`);
 return;
 }
 try {
 const text = encodeURIComponent(args.join(' '));
 let response = await axios.get(`https://simple-rest-api-botz.vercel.app/api/chatgpt?msg=${text}`);
 let { answer } = response.data.result;
 await conn.sendMessage(from, { text: answer }, { quoted: m });
 } catch (error) {
 m.reply('Terjadi kesalahan saat mengubungi OpenAI, Coba lagi nanti.');
 }
 break;
 case 'mydata': {
const datakk = await fetchJson 
(`https://api.ip2location.io/`)
  let kanjutt = `[ *DATA KU* ]
  
  IP: ${datakk.ip}
  Country Code: ${datakk.country_code}
  Country Name: ${datakk.country_name}
  Region: ${datakk.region_name}
  City Name: ${datakk.city_name}
  Latitude: ${datakk.latitude}
  Longitude: ${datakk.longitude}
  Zip Code: ${datakk.zip_code}
  Time Zone: ${datakk.time_zone}
  ASN: ${datakk.asn}
  AS: ${datakk.as}
  `
  await conn.sendMessage(from, {text: kanjutt}, {quoted: m})
}
break;
/**
 * 
 * [ *CASE WAIFU* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */
case 'waifu': {
const waifud = await fetchJson 
(`https://pic.re/image.json`)
const waifut = "https://" + waifud.file_url
  conn.sendMessage(from, { image: { url: waifut }, caption: `Hell nah\n\nSize: ${waifud.file_size}` }, { quoted: m })
}
break


case 'upchvn':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`Use ${prefix+command} Judul Lagu|Terserah\nExample ${prefix+command} Mungkin | Kita Sad Dulu`) 
 conn.sendMessage(`${global.id_saluran}`, { react: { text: '🕐', key: m.key }})
 ngawi = text.split("|")[0]
 jomokck = text.split("|")[1]
 await sleep(6000)
conn.sendMessage(m.chat,{audio: await quoted.download(),mimetype: 'audio/mp4',ptt: true,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: global.id_saluarn,
serverMessageId: 20,
newsletterName: global.wm.saluran
}, externalAdReply: {
title: ngawi, 
body: jomokck,
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
sourceUrl: null,
mediaType: 1
}, }}) 
//lilychan.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
conn.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case 'upch':{
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply('```🚩 Masukan Text Yang Ingin Di Post Ke Saluran```')
conn.sendMessage(`${global.id_saluran}`, { text : `${text}`,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true,//YanzOfficial
forwardedNewsletterMessageInfo: {
newsletterJid: global.id_saluran,
serverMessageId: 20,//YanzOfficial
newsletterName: global.wm.saluran
},
externalAdReply: {
title: global.wm.pemilik, 
body: "",//YanzOfficial
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
sourceUrl: null,
mediaType: 1
}, }
})
m.reply(mess.done)
}
break

case 'aimenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${aimenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'animemenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${animemenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'databasemenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${databasemenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'othermenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${othermenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'premiummenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${premiummenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'groupmenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${groupmenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'convertmenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${convertmenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'donwloadmenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${dlmenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'soundmenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${soundmenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'mainmenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${mainmenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'gamemenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${gamemenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'ownermenu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB
${readmore}
${ownermenu(prefix)}`
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: 'quick_reply',
            buttonParamsJson: `{\"display_text\":\"Back\",\"id\":\".menu\"}`
                 },]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break

case 'menu': {
let xmenu = `Hello ${pushname} 👋
ダ INFO BOT & USER
◈ TotalUser: ${Object.keys(_user).length} User
◈ TotalHit : ${
          JSON.parse(fs.readFileSync("./src/total-hit-user.json"))[0].hit_cmd
        } Hit
◈ RoleUser : ${isPremium ? "Premiun" : "Freemiun"}

ダ INFO WAKTU SETEMPAT
◈ Date: ${hariini}
◈ Time: ${wib} WIB

Saya adalah ${global.namabot} ✨\nSebuah progam yang dirancang sedemikian rupa untuk membuat para pengguna mudah dalam menggunakan Bot ini. Berbagai fitur menari dan berguna bisa kalian dapatkan di ${global.namabot}.\nSaya di rancang oleh *${global.namaowner}*`
const datas = {
    title: "Open here!",
    sections: [{
            title: "All Menu",
            highlight_label: "Populer",
            rows: [{
                    header: "Allmenu",
                    title: "Menampilkan semua menu",
                    description: "",
                    id: ".help",
                }],
        },
        {
            title: 'Menu list',
            highlight_label: "Populer",
            rows: [
            {
                    header: "Menu Ai",
                    title: "menampilkan menu ai",
                    description: "",
                    id: ".aimenu",
                },
            {
                    header: "Menu Main",
                    title: "menampilkan menu main",
                    description: "",
                    id: ".mainmenu",
                },
                {
                    header: "Menu Owner",
                    title: "menampilkan menu owner",
                    description: "",
                    id: ".ownermenu",
                },
                {
                    header: "Menu Sound",
                    title: "menampilkan menu sound",
                    description: "",
                    id: ".soundmenu",
                },
                {
                    header: "Menu Convert",
                    title: "menampilkan menu convert",
                    description: "",
                    id: ".convertmenu",
                },
                {
                    header: "Menu Group",
                    title: "menampilkan menu group",
                    description: "",
                    id: ".groupmenu",
                },
                {
                    header: "Menu Download",
                    title: "menampilkan menu download",
                    description: "",
                    id: ". downloadmenu",
                },
                {
                    header: "Menu Database",
                    title: "menampilkan menu database",
                    description: "",
                    id: ".databasemenu",
                },
                {
                    header: "Menu Premium",
                    title: "menampilkan menu premium",
                    description: "",
                    id: ".premiummenu",
                },
                {
                    header: "Menu Anime",
                    title: "menampilkan menu anime",
                    description: "",
                    id: ".animemenu",
                },
                {
                    header: "Menu Game",
                    title: "menampilkan menu game",
                    description: "",
                    id: ".gamemenu",
                },
                {
                    header: "Menu Other",
                    title: "menampilkan menu other",
                    description: "",
                    id: ".othermenu",
                },
         ],
         },
        {
            title: 'Info Bot',
            highlight_label: "INFORMASI",
            rows: [
            {
                    header: "Info Script",
                    title: "Informasi mengenai script Bot",
                    description: "",
                    id: ".sc",
                },
            {
                    header: "Info Owner",
                    title: "Informasi mengenai owner Bot",
                    description: "",
                    id: ".owner",
                },
            {
                    header: "Info kecepatan respon",
                    title: "Informasi mengenai kecepatan respon Bot",
                    description: "",
                    id: ".ping",
                },
               {
                    header: "Credits",
                    title: "informasi base ini",
                    description: "",
                    id: ".tqto",
                }
                ],
        }
    ]
};
let msg = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': `zannbot.xyz`
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> ${namabot} Menu </>${zan}\n\n${xmenu}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [ {
                    name: "single_select",
                buttonParamsJson: JSON.stringify(datas) 
                 },
                 {
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Telegram\",\"url\":\"${telebot}\",\"merchant_url\":\"https://www.google.com\"}`
									},
                 ]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, msg.message, {});
  }
break

/**
 * 
 * [ *CASE TXT2IMG* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
conn.sendMessage(m.chat, {image: {url: x}, caption: mess.done}, {quoted: m})
}
}
break
/**
 * 
 * [ *CASE TTDL SIMPEL NO STATS* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix}tt2 https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktok(url) {
	return new Promise(async (resolve, reject) => {
		const msc = await axios({
			url: "https://musicaldown.com/id",
			method: "GET",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
			}
		})
		const a = cheerio.load(msc.data)
		let FORM = {
			[`${a("#link_url").attr("name")}`]: url,
			[`${a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
			verify: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
		}
		const getPost = await axios({
			url: "https://musicaldown.com/id/download",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(FORM))
		})

		const postmp3 = await axios({
			url: "https://musicaldown.com/id/mp3",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(getPost))
		})

		const w = cheerio.load(getPost.data)
		const x = cheerio.load(postmp3.data)
		const FormatPost = {
			nowm: w("body > div.welcome.section > div").find("div.col.s12.l8 > a").eq(2).attr("href"),
			audio: x("a.btn.waves-effect.waves-light.orange").eq(2).attr("href")
		}
		return resolve(FormatPost)
	})
}
let tiktik = await tiktok(text)
await conn.sendMessage(m.chat, { video: { url: tiktik.nowm }, caption: mess.success }, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: tiktik.audio }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'button': {
let textu7 = generateWAMessageFromContent(m.chat, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': 'zannbot.xyz'
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': global.wm.pemilik
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': `${zan}</> BUTTON </>${zan}`,
                  'subtitle': '--',
                  'hasMediaAttachment': false,
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [{
										"name": "single_select",
										"buttonParamsJson": "{\"title\":\"MENU\",\"sections\":[{\"title\":\"MENU BOT NAILONG\",\"highlight_label\":\"Made By Rixzyy\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"}]}]}"
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
									},
									{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
									},
									{
										"name": "cta_call",
										"buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
									},
									{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
									},
									{
										"name": "cta_reminder",
										"buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
									},
									{
										"name": "cta_cancel_reminder",
										"buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
									},
									{
										"name": "address_message",
										"buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
									},
									{
										"name": "send_location",
										"buttonParamsJson": ""
									}
									]
                })
              })
            },
          }
        }, {
          quoted: m
        });
        conn.relayMessage(m.chat, textu7.message, {});
  }
break
/**
 * 
 * [ *CASE UPAUDIO* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'upaudio':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`khusus audio, .upaudio jidsaluran|request dari|judul lagu`)
    yaelahh = text.split("|")[0]
    ngawi = text.split("|")[1]
    bjirrwoila = text.split("|")[2]
 conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
 await sleep(6000)
conn.sendMessage(yaelahh, { 
  audio: await quoted.download(), 
viewOnce: false, 
seconds: "900000000", ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3", 
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: { 
newsletterName: wm.saluran,
newsletterJid: id_saluran,
}, 
externalAdReply: { 
showAdAttribution: true, 
mediaType: 2, 
mediaUrl: `http://wa.me/6283824196477/${Math.floor(Math.random() * 100000000000000000)}`, 
title: `[🎶] - ${bjirrwoila}`, 
body: `Request by ${ngawi}`, 
sourceUrl: "", 
thumbnail: fs.readFileSync('./media/cheemspic.jpg'),
}
}
})
await sleep(2000)
conn.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case "test": {
m.reply("bot online")
}
break

        // end
      default:
        if (isSimi && body != undefined) {
          // res = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lol}&text=${body}&badword=true`)
          res = await fetchJson(
            `https://api.simsimi.net/v2/?text=${body}&lc=id`,
          );
          m.reply(res.success);
        }
        if (budy.startsWith("=>")) {
          if (!isCreator) return m.reply(mess.owner);

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            m.reply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return m.reply(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return m.reply(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (err) {
    console.log(util.format(err))
        let e = String(err)
conn.sendMessage("6289671842736@s.whatsapp.net", { text: "Atmin baik, tampaknya ada kesalahan, tolong perbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}});
};
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

