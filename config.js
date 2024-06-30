const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349138190301";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_25_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjljUnZybmlUVm1xRmhlUzg5MDlML0MwNmhXRm9RTnNpV1RvOXRBYUduVnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzODE5MDMwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGRTNGMUQzOTJGQ0NFMzk1QjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5Nzg5OTIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzODE5MDMwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5MkE1RkRFQjQzRkUxMzFGQjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5Nzg5OTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc1SmNLMXZqUmpTTDFUN3ZNbVlySmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjc2Nzk1ZjEtMThhZi00ODZiLWI3ZTMtMmZlNDQ3NDg5ZDE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgODksXG4gICAgICAzOCxcbiAgICAgIDQ4LFxuICAgICAgMjU1LFxuICAgICAgOTQsXG4gICAgICAxNzQsXG4gICAgICAyMCxcbiAgICAgIDEzNyxcbiAgICAgIDkzLFxuICAgICAgNjUsXG4gICAgICA2MyxcbiAgICAgIDIwNyxcbiAgICAgIDEzLFxuICAgICAgMTIsXG4gICAgICAxNDcsXG4gICAgICAxOSxcbiAgICAgIDU0LFxuICAgICAgMTY2LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDEwOSxcbiAgICAgIDE1MCxcbiAgICAgIDEyNyxcbiAgICAgIDE5MSxcbiAgICAgIDk4LFxuICAgICAgMTcxLFxuICAgICAgMjE3LFxuICAgICAgOTgsXG4gICAgICAzNixcbiAgICAgIDUxLFxuICAgICAgMjM3LFxuICAgICAgMjIzLFxuICAgICAgMTk2LFxuICAgICAgOTUsXG4gICAgICAxMDIsXG4gICAgICA4MixcbiAgICAgIDY4LFxuICAgICAgMjI5LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNDQjdHS0RXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4MTkwMzAxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNaWRlc3F1YXJlXCIsXG4gICAgXCJsaWRcIjogXCIxNjE3NTMyNjY3MTI2Njk6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUDlzN0lFRU56U2g3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJxMVF1bkgvZDBKNTRRalROajdheUpmc1VUVFY1SzhUVkpYL09QL3UzRzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOGYyUUJrbzkwU3ZBWkhhYi9ZT3JxNzJ4cFRHa3lCYWdkb0g5TmlVOXN3VmVCb0I1YjdhV0ZJLzROb0JNVUdaSmVqT251bmhYS3plRis5TlliakorQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVldacmp4WDllaU1rZGJ6dmZiQS9GWnRPSW01d2RCZ215V0YvSVVRMllsQVVQRHpJYzZzL1JpRHdhN1VRbVNlajRmdThjUDlSWkRjZnU1eHhOOEwvQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzODE5MDMwMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3ODk5MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1QWi5qc29uIjogIntcImtleURhdGFcIjpcIldMWmVGRlRVejdmZEc3RTlCTnBDYzJ2OG1PdEpYM01qZnpKT25PSk4zeHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3OTQ1MTA3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5Nzg5OTIwNTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
