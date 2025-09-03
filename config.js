const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZiWjR0RlJwYlRyczVOSThJSCtvTnRIYzdMLzhrM3ZQYjdLbHhNZWJVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTBCTmtSZDY3WU9iY0xsRXd5dlRMNnEvd2lPVTNyVnR4bjNvN0EzN2hCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQUpRNzE0OHlUbEI4c0FpQjBXMnkrRjVSWDM2a081bWhERHU3Wmo3ZzBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaR1ZxUzlYbUNNQnZxdXVGVU9xSkRURE40NkZlc1BHL01pVlE5cmw0SHhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJeUtON0ZBTWEzZWYzR3NwTjU1Ni83VFFJRE9iTlBxcUo3NTNtcEZuMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRVaFFGU1cwNVRhM09MdXdRMEpRR242K05zUDBSODRXOFArZmhOVDBEMjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5vbTdWTE1FRDJTSUpMa2FvYVBIMCtrL2l3dG1mQUdyR2tlaVZySUUzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzBqQTVEdHBOMzlmYmxiLzBZMlRLeWlycGVJY09WSDBXVVhhZVhyTlJIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVrRS9FaFNjb0FnUGtaTTJXTkdEbzd4Wm1OOFlISU5uclNMTElucVFtUHREeFpyWmVwQ0JrNWFNbDUwVzR5QTB0MVZvVU9VekkxR2NLbm1FQWhXVUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiIvb3AxaFZmQ3RjUnIrNmR0VXFma3hjVDJzZGxRdjdoZXRDcHRnWHJlNVNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MjYwMzE4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0QyM0Q1NDQzQUE0QjY1N0JGRTdBQTkwRUI4MzRGMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2ODg1NzQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTI2MDMxODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzQTEwMUM3NjQ2NzMwNzQ3Njc5QzRDQ0YxMzk5NEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njg4NTc0OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjkyNjAzMTg0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNThBRTA0QjU5QkI0MjYzNTM2RDk5NEZBQzExRUU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4ODU3NTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFaSlNZWk1WIiwibWUiOnsiaWQiOiI5MjMyOTI2MDMxODQ6MzJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDUzNDMzMzM5NjE5NDc6MzJAbGlkIiwibmFtZSI6IuqvreqvreKUgMy94oOdIE7NouG0j82c4bSNyaogU82i4bSAyoDhtIvhtIDKgOKUgMy94oOdIOKcqCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStWaE5zQkVQRGwzOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidHFTNGtCV1NJczU1eWc0UlBsZXF1MXZFd2NBQzEwb3hvNVZyaG1aNE8zWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWx4Y1E5TnpMUUdCUlZsUEZlNWE3blVmbk5oaU9Pcm51VzJoakRmQng2ZUp4SnZPNGttWlBVRk9yQ2FTSG5XeUw2YnlLbmppMEpNNktnQUhuYWdBRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ims4azV6UktaVXVldHc1aytvekltN2dMdTM1eEN2cnVjeURJZnRkSU5zTWM1aGVEcldZbmlIbU5PRjVORnZLdjFuSHAyY1FjTVlMRVZucTZZUzUraURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjkyNjAzMTg0OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJha3VKQVZraUxPZWNvT0VUNVhxcnRieE1IQUF0ZEtNYU9WYTRabWVEdDIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njg4NTc0NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZjYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
