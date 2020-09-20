const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {
 if (!message.member.roles.get("734570900497629225")) //komutu kullana bilicek rol id   //yada bunu 
 return message.channel.send("**Bu komutu kullanmaya yetkin yok !!**");//ve bunu silip
var nöörcn = args[0]
if(!nöörcn) return message.reply(`**s!botkoruma aç veya kapat yazmalısın.**`)
if(nöörcn === "aç") {
db.set(`botkoruma_${message.guild.id}`, "aktif")
message.react('✅')
message.channel.send(`**Strong bot koruma aktif!** \n **Strong Kale duvarları güçlendirildi hiç bir şekilde kapanmaz !!** ✅`)
  
} else if(nöörcn === "kapat") {
db.delete(`botkoruma_${message.guild.id}`)
 message.react(' ✅')
message.channel.send(' Anti bot giriş sistemi pasif !!  ✅')

  
} else return message.reply('.botkoruma aç/kapat')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0  //burayı 4 yaparsanız ayarlar.json kısmındaki sahip id sine sahip yektili kullana bilir sadece
}

exports.help = {
  name: 'botkoruma',
  description: "",
  usage: ''
}