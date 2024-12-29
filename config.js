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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_27_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSUzBkZHk0UVc2RVlSdEk5bWJaWXlCMUZsSmFISkRSc2xLSXI4cXRpMTBZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqclB0WHpaZFJhZUJKRFRHV3ZOSHBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3NjEzMGVlLTk2NGEtNDBmZi1hN2MwLTc1ZDE4NzdmMDJiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyNTQsXG4gICAgICAxNzYsXG4gICAgICA0MSxcbiAgICAgIDk2LFxuICAgICAgMjExLFxuICAgICAgNTksXG4gICAgICAxMCxcbiAgICAgIDUxLFxuICAgICAgMjIyLFxuICAgICAgMTEzLFxuICAgICAgMTU0LFxuICAgICAgMTA3LFxuICAgICAgMTY3LFxuICAgICAgNTcsXG4gICAgICAxMjIsXG4gICAgICAyNDMsXG4gICAgICA2OSxcbiAgICAgIDEwNyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxNjQsXG4gICAgICAxOTYsXG4gICAgICAyMjcsXG4gICAgICA4NCxcbiAgICAgIDIxLFxuICAgICAgMyxcbiAgICAgIDEzOCxcbiAgICAgIDU2LFxuICAgICAgMjI3LFxuICAgICAgMjEsXG4gICAgICAxMCxcbiAgICAgIDIzOCxcbiAgICAgIDIzMyxcbiAgICAgIDE4OCxcbiAgICAgIDk5LFxuICAgICAgOTIsXG4gICAgICAxMTksXG4gICAgICAyMTEsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQRE1KQkJLNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTg5NDkyOTk1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTk4MDgzODExODIxNTA6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJacml3UWpaL0R1d1lZSUNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5NmlSVlZEYU43RStOQlpXMHVLWUFlYzJENTRyVDZnS1ByN0JSWW5IVDM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1GenlhNlJ4eWFOc0tLQTZ4ZkEybHdoZEZ0SHdkV2x3My9YQytRRDFsc001Y0VSdEhtOFJTM2U4NzkrVjFEd2lkL21MZE9RcjV0eXpUMGs3MENLY0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVwVDI0N0M5KzVYSHVxaThubHRTdE1jaTArM0d3YXErSkFaOURSVGlZc2pPdy9EV2NNYlpTbEduaVJHMURHUmZQVHJwS1d5UjFPd3dmYnk1UitEK0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE4OTQ5Mjk5NTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0NDY0MTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBd2tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF3ay5qc29uIjogIntcImtleURhdGFcIjpcIk9BbkR5UTBRQWxEV1FmeXF6M2pRWnRxeXdhWXdWbEJiSkgrYXlSR0xDSHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMwMzk4NjYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
