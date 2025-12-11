//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhqM2tSQk1jN0JXNjY3QmNXMTdBVVRhc29CM2dGb3JXL0NpdjNwMklIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjJ5VHc4MUV6TS94YnN0RTNZYjNyeUNqcXFlaTRFQnlDYnhteFltYS9YWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRk9GUWFHK25ZSmhseFRrWWRBc2VWbzl3VjhlN1VWWmVNNjVTV0JvL253PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbGIzMVA3VnVON2VWOFpOS2haM1BMZW5relZUVnRLZDBhVG5CNW1lWURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDMHpCZ3BBUVVXaklLMFlUWnd2dkxCUjBpbmppMFo1dUliaDM1cjMxRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF0cUx2ZEF1NzJndmZqMWFwZGhRck1Zd2F5RTZ1M2FYRkdDbllMdWVVd1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NyMSthZ1R2WGw2Mmw3QTMwZlc4Wmc1NCtxam9lNFZQZVduM2h3dDhsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNHMzE2dWJ3YlVJUUV3aVBxc3REa0F6R0lBQnRnTFlELzByM3RMUElHST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZKd05hRXRkTHZ3QWNic3drNWRycGpLNVNXZ1FLV05QNVVxd2sxVWNoMTd4Y0pqS2JtTk5qdjNORHBiNHlna0FOS25vdmIzUkxic2dIWVFpdytYR2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InRYVll6R2poOW55dUxDV0tpTDZCa0h1djZBN0lIZzdqdFl1Mk1ReW9FbEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMTNFMDI5MUQyNzQyMjA0ODgxNkZGNjlCMEMyNkUwIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjU0NDAzMDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0Q2ODZENzk5MEMzQ0FBOTcwNzA2OTlBRTI4Q0MzNiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1NDQwMzA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0MDc3MDgxMTkyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNGRjBEMzg4RjMyNTQxQjBBQzFENkQzOUJFQkZBMkUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NTQ0MDMwNn1dLCJuZXh0UHJlS2V5SWQiOjgxOSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxOSwiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4RldQNUxNRCIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6MzVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDc0MzAyNjA2MzM3Mjk6MzVAbGlkIiwibmFtZSI6ImNvc21pbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzI0cmJZQ0VLRDI2Y2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT3hNZ2plZ3RzbUR4cktTSDlWL1c1NldVSXFKV2p0ellpdGhHYit0QlRRbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGs5QUVXeXprQUJhZmRQemRXU1BIbkRLVlpxd0VPZ05BT05ocGRzKy9STk1oU3lveFpEdS9YYk93OEF4YnJJUnRpV056QzFpRnRuN2VXY2k2anBwRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik4xckl3Sy9MK0dtbERrMTdTczNIMnFQRXdVaFNjWHFlMnl1Vlp0a0ZqdkxxTDN2d2ZmSU01Rmc0K2JQOVRmelNqQjhwY3BaQW1PWlVxcGdUVnVqUml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjA3NDMwMjYwNjMzNzI5OjM1QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUc1RJSTNvTGJKZzhheWtoL1ZmMXVlbGxDS2lWbzdjMklyWVJtL3JRVTBLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjU0NDAzMDEsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFVDEifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '40770811929' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'cosmin' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
