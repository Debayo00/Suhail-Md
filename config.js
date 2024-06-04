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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_14_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvZ2wxajZ4V1kva1kzblovdHE3SUZPYitYNTdvZjBqeUk0UmhiaEY4TCtnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6cW9sM1FES1NXaWo4a0ZiYmI4eXl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyOWI0YjY4LTVmODUtNGVhNS1iNjIxLWFlMmVmN2I1NjkwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICA3MCxcbiAgICAgIDExOSxcbiAgICAgIDEyOSxcbiAgICAgIDExOCxcbiAgICAgIDE3LFxuICAgICAgMixcbiAgICAgIDExOCxcbiAgICAgIDQ1LFxuICAgICAgNjQsXG4gICAgICAxOTksXG4gICAgICA3MixcbiAgICAgIDE3MyxcbiAgICAgIDEwMixcbiAgICAgIDEwNyxcbiAgICAgIDcyLFxuICAgICAgMTg4LFxuICAgICAgODUsXG4gICAgICAxMjgsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAyOCxcbiAgICAgIDE4LFxuICAgICAgMTY0LFxuICAgICAgMjEwLFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDI2LFxuICAgICAgNTUsXG4gICAgICAyMTgsXG4gICAgICAzMyxcbiAgICAgIDM2LFxuICAgICAgNyxcbiAgICAgIDQxLFxuICAgICAgMjM1LFxuICAgICAgMjMxLFxuICAgICAgOTQsXG4gICAgICAxNDksXG4gICAgICAyMCxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5HOUFOVDJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4ODg5MjI2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODEwODQ1OTU3Mjg1NDU6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVh1eW9JREVOclIrN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3Q3NyanBuTitJZTNlQi9lbG9XVWxXaVJ0VDdwbnBhUm1PS3NBelR3RUQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVUa3RxSGNwYnYzSXdIT211Qi9DTFRzUFZUREVXcTkxUk5rQStnS1MyODgya2IyTHBKaUFXL2RvcWcxMmJaYVBlY2kvSmZNZjNGSjN6WUZFb0p0R0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNFci9QanlybHhvcHhSM0o5ZTFBcE0vYytIbFcvdU5TM28yY3F5TFQ0dlVXYk9ZVTRGNWZMQ0h3cUkvZHBOdHlwY1U5bjYyTjlrRUhCOVllZGNpS2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDg4ODkyMjY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0OTYwNDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
