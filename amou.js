const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let Lrows = await data.get(msg.author.id)
        
        if (Lrows === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(6000)
          await msg.channel.send("j4j \n https://discord.gg/nWjsw8PPuH") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(6000)
          await msg.channel.send("I AM JOINED WAITING FOR YOU")      
      }
      }
    }
  }
})


client.on("guildCreate", Lrows => {
  sleep(1000);
  if (
    Lrows.id=== "662637584693985282" ||  // <<--- j4j sunucu id
    Lrows.id === "662637584693985282"  // <<--- j4j sunucu id
  ) {
    
  } else {
    Lrows.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("785741821195452497") // <<-- j4j yapacağınız kanal idsi


       a.send("**J4J GELİN AKTİFİM BOT DEĞİLİM**")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("785741821195452497") // <<-- j4j yapacağınız kanal idsi


       a.send("**J4J GELIN GIRECEGINIZ SUNUCUDA ÖDÜLLÜ ETKİNLİK VAR**") // <-- yazmasını istediğiniz mesaj


      }, 60000);
})

client.login("") // user tokeniniz
