const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/KLYqSyC/1712896587524.jpg" || "https://i.ibb.co/v4CMGHY/1710520380815.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ❦ 𓆩𝗪𝗔𝗦𝗜_𝗞𝗜𝗡𝗚࿐ ☙" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923189492995";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/KLYqSyC/1712896587524.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_08_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgODMsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQaDdrdnpqd2txNzFRTUxEQmFsWWV5Ri80V1M5QlFBZVpzYUROSmVEc3RzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTNWt2bTVSNlFuYUk3dGtITXVHdUxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyNzViODAxLWIwMjUtNGVjMC1iY2U5LTM2MDllMzUyMGJmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICA2NSxcbiAgICAgIDE5MSxcbiAgICAgIDE0MCxcbiAgICAgIDM5LFxuICAgICAgMTQwLFxuICAgICAgMjAyLFxuICAgICAgMTQ2LFxuICAgICAgMTI4LFxuICAgICAgMTc3LFxuICAgICAgMTcxLFxuICAgICAgMTczLFxuICAgICAgMzMsXG4gICAgICAyMTgsXG4gICAgICAxMixcbiAgICAgIDIyOSxcbiAgICAgIDE5NCxcbiAgICAgIDg3LFxuICAgICAgMjIsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICA2MixcbiAgICAgIDEyNCxcbiAgICAgIDEwOSxcbiAgICAgIDU4LFxuICAgICAgNjUsXG4gICAgICAyNixcbiAgICAgIDIyMyxcbiAgICAgIDg3LFxuICAgICAgMTk1LFxuICAgICAgMjExLFxuICAgICAgNSxcbiAgICAgIDE0OCxcbiAgICAgIDg3LFxuICAgICAgMjI3LFxuICAgICAgMTI1LFxuICAgICAgMTcyLFxuICAgICAgMTgsXG4gICAgICAxNzUsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTlgxWEs3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg5NDkyOTk1OjU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk4MDgzODExODIxNTA6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJacml3UTdaK3B1d1lZR2lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5NmlSVlZEYU43RStOQlpXMHVLWUFlYzJENTRyVDZnS1ByN0JSWW5IVDM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9TS3hDUE9lUW1SVFVZaHlxRjUxWUNqMVM4QWErMjVTY0h1V0t3MlkyejJkWXU0Wk1LWEdDc1M3VVliakdidUU2amVsclFFV0tvM3MvREovSVdzZkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInN4OGg5V1lYSm5YWkk2TUoyQ2Q3QzdHNUNySUJ2TDBmRGFWODBzYU1UeFdsSHJ2L25rZktHVHc0NmNFNnRWTmZVVVRkZ1QweHpKbTRBeDZpaEM4dEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4OTQ5Mjk5NTo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUwMjA1Mjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ❦ 𝗗𝗘𝗘𝗣_𝗧𝗛𝗜𝗡𝗞𝗘𝗥 ☙ ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "❦ 𝗔𝗪𝗔𝗜𝗦_𝗜𝗤𝗕𝗔𝗟 ☙",
  ownername:process.env.OWNER_NAME|| "❦ 𝗗𝗘𝗘𝗣_𝗧𝗛𝗜𝗡𝗞𝗘𝗥 ☙",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
