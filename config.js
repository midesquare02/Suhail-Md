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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_06_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEp4MkU1UThjWmhsZjFPRy9LZ1I0ajlhRXhWV0N2M3crYjBrY2ZBTzlzcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM4MTkwMzAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTVGQUI3RjQ4QjNDM0E1QTNGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3MDQ4MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFI4ZnNnSXFSU2FZSzd5MVctNHJuQVwiLFxuICBcInBob25lSWRcIjogXCI1YTNiZTY0Zi02NGVmLTQyYjMtYmVlOC0zNjgzMjc3NTQ5MjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMTg1LFxuICAgICAgMTYzLFxuICAgICAgMTIyLFxuICAgICAgMTcsXG4gICAgICAxMzYsXG4gICAgICAyMDYsXG4gICAgICA5MixcbiAgICAgIDEyMixcbiAgICAgIDIwNSxcbiAgICAgIDIzNixcbiAgICAgIDIxMSxcbiAgICAgIDE0NCxcbiAgICAgIDE2NSxcbiAgICAgIDkwLFxuICAgICAgNjYsXG4gICAgICAxMzMsXG4gICAgICAzOCxcbiAgICAgIDI0NyxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICA2MyxcbiAgICAgIDE2NixcbiAgICAgIDIyNyxcbiAgICAgIDc2LFxuICAgICAgODYsXG4gICAgICA5NixcbiAgICAgIDkwLFxuICAgICAgNDYsXG4gICAgICA1NCxcbiAgICAgIDQ2LFxuICAgICAgMjU1LFxuICAgICAgMTU5LFxuICAgICAgOTAsXG4gICAgICA0MyxcbiAgICAgIDIzNSxcbiAgICAgIDE5LFxuICAgICAgNCxcbiAgICAgIDI0NCxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPWDdyd0xFS2ZIdWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieFp0VDBtQk5ySnJmQVE5R0Y3dlNaTkVMV0NaMVZXWGN1bjl0MmxaOEJ4Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqZEx1TWpaQmd3NDNhLzBHdER3aXdCdGZsSERhSHZlUklFUFNYcUhBN2lxUWwwaklKQm5oOER1U2VTOG9oVytoTEtBWXd5NFBGdXhmZFhNYkxMRlJoZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGWncxeFZtVTRGWmE5K3crZU54SWtaRUsvbzdPWmNvMzBnSmV6Q0M4T0I0dDFTNmJ1NFI3ZW5NNjZrNFlTOTdJN3ZNQUFMbHRvMGRhVVRkSDFjKzlndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzgxOTAzMDE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzEyNDIxMTIyNjYzMzM6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzgxOTAzMDE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MDQ4MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDY2ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNjZi5qc29uIjogIntcImtleURhdGFcIjpcIlZ0QUgxYjRlbFFHSkVHRzJBelNYRVJrZWtFMjBWT01sZStaWmV5VXUyVVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA4MDQyNDM1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzA0ODE0ODUwXCJ9Igp9"  // PUT your SESSION_ID 


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
