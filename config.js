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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_36_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktQdFYrRlRwNmVIZnBlSDhsNUJ0WUpLQ0RzUHRId1Y2ZVlkNG9uaDJ4aVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNpYUI3SHpDUi02Nmx0eWVJcDc5VWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzIzYWNkMjAtMzJjNi00OWM0LWFiYTMtOWYwODEwYjFlZmEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDkxLFxuICAgICAgMTU3LFxuICAgICAgMzQsXG4gICAgICAxMzgsXG4gICAgICAxMjIsXG4gICAgICAxMDksXG4gICAgICAxNTYsXG4gICAgICAxNDIsXG4gICAgICA5NixcbiAgICAgIDEzNixcbiAgICAgIDQ4LFxuICAgICAgNzIsXG4gICAgICA1NCxcbiAgICAgIDYxLFxuICAgICAgMTMwLFxuICAgICAgMzEsXG4gICAgICAxMjYsXG4gICAgICAxMjYsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA5MixcbiAgICAgIDIyNixcbiAgICAgIDg5LFxuICAgICAgMTQyLFxuICAgICAgMTExLFxuICAgICAgMTM1LFxuICAgICAgMTgsXG4gICAgICAxMTMsXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDIxOSxcbiAgICAgIDEwMSxcbiAgICAgIDEyOSxcbiAgICAgIDE1NixcbiAgICAgIDYsXG4gICAgICA5NCxcbiAgICAgIDE4MCxcbiAgICAgIDEzNSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRV0xKOFBWR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0ODg4OTIyNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxMDg0NTk1NzI4NTQ1OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIS3kyRVErT3Evc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibytJWnRDakUzeUNuenJBNnRzN0MyZ1E2R2hja1lnT3lpOXg3ZWtiWTBtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsVnNoa1A0b000OU1KSzkrR1IrdTZtdk5TUFZnbmxKQU0rY2Ftb3RNejJYb0pFTXZoMXdUQit0L0pWVjB6Nms3T2ZQYWs5US8zTnRIYWR1STM2YVdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqNkI4eG5vb2tkeUQ0YXlSd1FtRnJNeldBc0dZZVhhZ3U4OU9LWkhiZ1IxU3d1cFVYVWw3WWd5QitRanVYS3RwN1VKb0lHQ0xhcG1FSW83bThvK2JnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4ODg5MjI2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjEzMzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRCs5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEKzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDVDQ5UmxMVS9KOWRrR2NlUnlNUm9rV28zaHNqMXRWeWR2K1VwNGFpZVVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDY2MjEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NjEzMzc2NDY0XCJ9Igp9"  // PUT your SESSION_ID 


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
