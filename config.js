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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlU2eEVMY1o1U1VzbHNQNmV1WWJGYldlUzJVRUF6a1Z0dTNmRXA4SVM4WG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdXR3FoMERSUmRHcFZjUWFCNW0ySUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmY5ZmNiMmItZjJhMS00MGEyLTlmNDUtYWQyZjQyMWUyMjdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDExOCxcbiAgICAgIDgyLFxuICAgICAgMjExLFxuICAgICAgMjQ3LFxuICAgICAgODIsXG4gICAgICAzMSxcbiAgICAgIDEwOSxcbiAgICAgIDIzOCxcbiAgICAgIDE2MyxcbiAgICAgIDY1LFxuICAgICAgMTgwLFxuICAgICAgMjIxLFxuICAgICAgMTU5LFxuICAgICAgMzQsXG4gICAgICAxNjgsXG4gICAgICAxMDcsXG4gICAgICAxODgsXG4gICAgICAyMCxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxOTEsXG4gICAgICAzNyxcbiAgICAgIDU5LFxuICAgICAgMTg4LFxuICAgICAgMTE1LFxuICAgICAgMTM1LFxuICAgICAgNjgsXG4gICAgICA5NCxcbiAgICAgIDE2MCxcbiAgICAgIDEyNCxcbiAgICAgIDIxMyxcbiAgICAgIDg1LFxuICAgICAgMTU1LFxuICAgICAgMjUsXG4gICAgICAyMjgsXG4gICAgICAxMzEsXG4gICAgICA2OCxcbiAgICAgIDEzNixcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSEQ2NlhGRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MTc2Mzg5OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS0lORyBUT0JJXCIsXG4gICAgXCJsaWRcIjogXCI4MDA1ODMyNDYxNTI3Mjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYZ2k4c0VFTkd4NWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3hiSmJXeW5hYXFrbWlJcVJtOE9velhRYm8xU3FKYXg5Q0s3VTZwN3p5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2YzdETG1NMTFYMWRaWmZwRUdxaTZ3RTh1TWpSeHRUNm1CS3F5VFZnU0xyWDkrbExSbld2RW9yUmt5Z2ZOL3lJcDNlRjA3YmpWOUg5cTA3YUx0K1dCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdlFyQ1RoVFZ0eUp4NG5QTngrL2d0UStDcFd4UThZYzhZcWhXNytWaEN4aktiRnRTbnVTS2xDdjhxeFBOZGM2Qzl6K3hsUEwxL2sxK3NvQVBiZ0tnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYxNzYzODk5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIyODYzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
