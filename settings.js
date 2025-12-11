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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5QTmt1ejV0eUdJUDlXOVJvRGRwUFZDckNMam5hS3RBRE4rQy9RY04wQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWlabTFuNldXWUUrZ0VoTWRHbFAzdG03cDlieHh0aGpIYkRBM2w2NGNCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTE9qdUROazl2WDFTdURvemQxUE5XRlU2U1Rjd2J2cjg4aUxlWEtYb1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFZndWVFZtOER2VGVQL2ZmU2R4Nm5SN0xyQVBHbnRDbHlCNW5PazdpY3pVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFaEF6QjYwMllpTmJMY2JsRzBTSU4zcERKVHVOaHYzQ3c3TU4rOUdnMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCU2pWNWlUektNYTdYNUEvWGJrRkl2TktRQzhkUzk5dGlsUmM5WE5TQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0M3ZXlCVDZ4WDV4ZFpxQUVjS3RFL1RiUHhLeUd1RGtVczY2WUN4NjhGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzhodGdUNnBZZVBPdzdQL2UzZ0FZNms3YnhwVDlQVUROODlhdXI3RXJ5RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRDdGNDV3dTK3NUZ3prMEtWdlZ2RndLMXZvRndlanhwaXpFL3doKzVKSS9MNWUzRWhMZFNnWWQrczd6SkRxam1zZEJNeStKSS9WREx3SHFlQTB4a0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiIzM25menhBWE9wVEZ4NzhiWXhneVVJL3RTUG1uUkVzREh5clpyODc1d2VNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzg0ODU4NDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNUIyRUI3OUU2RUQ3RTNBODBGNzRBRjUzRjU4RUMxNCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1NDQ1MjgxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0MDc4NDg1ODQzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUxMTZCNjMwRTlGQkQyNDIzNjEzNEY2RTFBMUQyQkYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NTQ0NTI4MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3ODQ4NTg0MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1QzNFNDdFQ0Y4Mjk1RDAyOEE3Mzc2QURENzBBQUE0IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjU0NDUyODF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzg0ODU4NDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTVFMEQ5REQ5OUI3OTI4N0Q3OUQ3QTgzNzNCM0JFMyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1NDQ1MjgyfV0sIm5leHRQcmVLZXlJZCI6ODE0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE0LCJhY2NvdW50U3luY0NvdW50ZXIiOjMsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkNMTENXWkRSIiwibWUiOnsiaWQiOiI0MDc4NDg1ODQzMzoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDb3NtaW4iLCJsaWQiOiIxMTkwMDk3ODU3MDA0MTE6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbTV4UG9ERUkrZDZza0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEa1Z1ZERKSXlFejZYQmtXcEZJa1lvdXhMTGRFMk5hSUNWcE1TZjFsT3hnPSIsImFjY291bnRTaWduYXR1cmUiOiJPcVlQblpnY2pzV2FRZ0g4N0p3TFY1UFpiQktKdGtIZ25xcWJ4TVlQcm5zMjkrazdLMUo0VG81cjFjeE4zWkNsRnByVVBiR3hqWGpRa2xkWFZmejFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOE0vUlFNUUNSVVRhTXB5SDdNZTNzNCs4aU1USVdJMjNkOXpoVVBEZlVCNlpDYk5tYnRkT256cXRVbzBydjhNcTdxbFpNazR5T0xGZTJzSGdTUHA2Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMTkwMDk3ODU3MDA0MTE6MjZAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE1RmJuUXlTTWhNK2x3WkZxUlNKR0tMc1N5M1JOaldpQWxhVEVuOVpUc1kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NTQ0NTI3OCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFERzAifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '40784858433' 

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
