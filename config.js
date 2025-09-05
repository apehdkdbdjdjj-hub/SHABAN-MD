const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhVREVEN1lFU0IzYTdSaEtVY3dpQWZFQXBlcHpZb2wzaklaWVRXVlpsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWdPdjBCVHpWaFVhcjhITXJBa1F3ZENyWmxDQ2tNbXFGY09nVTNOSDFDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ3RzcEVPdTF2d3VPQ1FxV0pJZ2NKL1NMV0pLdXV2WHJMNVBtMmJQbWtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1M0NWN3JyMnUvdDJiWUFVTkkyU0RtTVFoOWtBci9SQzlJWjFqa0RkUlRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGc0JqWkNGdWVxdGt3OThmeGVpajlhcVRzWVBZaFBYcUFFWUE2Y0d4VUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJpcVVuZFh2T1o4Qjlia1A0cXYvdzNHbkt5eFFKVWY1SWJDcmpKSk84QzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FkOTJEL0VLb3JIMkQyR2Y4YU9qK1RrZjFBZThaZFJFUDFoRVZkT3hWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWZDekQyT05IM0UrczljajYwWlMrMWVTQy9PUTM3azJFZ1p3VERtdWdqQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpxTGcvbG0zT1R1WDRmWDBsT3N4TThVc2hncXp5WHlsUitOR1UwSWJBYWJkTVhTbHNiM1I2NWdCSTgzdHphUUFTd0VEM0pFNFN6NmRXWUxvZEZpY0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJkTk5JeXo5amozYmJwdEJ5Uk9HdW53UXVXM1lVZ0FJaU5OdVYzY0lpdU9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzMDMzMDY0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MUY4MDgzMkIxQkU5OTkzMUNGRDk1MjZDQkI3MTM3MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3MDgxOTg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMzAzMzA2NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTc2NEE1ODZGNDNBQ0Q3MUExMUY1MzA2MDAwN0QyQjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzA4MTk4NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTVY4S0dGUzUiLCJtZSI6eyJpZCI6IjkyMzEzMDMzMDY0MjoxN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MTI3OTEwNzI1MjQwMzoxN0BsaWQiLCJuYW1lIjoi8J2QjPCdkIDwnZCS8J2QjvCdkI7wnZCMIPCdkIfwnZCO8J2QjSDwnZCY8J2QgPCdkJbwnZCRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKNnl6TDRDRVByaTY4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyU29RbGpYaTV4V3lneHVxT3JnQWxlS25BV3hUZFFvWG0xdlh6ZzkwMUVZPSIsImFjY291bnRTaWduYXR1cmUiOiJUb3BvOXNhTTZUeFplaHJQU2kvQ2JweFVxU1VyZU9meUZGUVJ3RG9aOFZ6a1ZlZ0cxbnAweGZlWENwUHI5R0I3UXFPYzg1STFJT2N4c1F0d2RSdDFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWpBcVJxS0s3R1RiUnNSREE2TmdMcU9ReUZrQk5PT0pjampNQUgrWkQ0YkxGSjBCbERBM3d6c0diTXlVWUVkZ0VCZFcxSlBvOVp4SVVrYWZuVERTQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzAzMzA2NDI6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTBxRUpZMTR1Y1Zzb01icWpxNEFKWGlwd0ZzVTNVS0Y1dGIxODRQZE5SRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MDgxOTgyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUEyRSJ9",
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
