const config = require("./config.js");
const SDClient = require('./client.js');
const globaljs = require('./global.js');
var options = {
  serverid: config.serverid,
  loginServer: 'https://play.pokemonshowdown.com/~~' + config.serverid +'/action.php',
  nickName: config.nickName,
  pass: config.pass,
  autoJoin: config.autoJoin
};
var Bot = new SDClient(config.server, config.port, options);
Bot.connect();
Bot.on('connect', function (connection) {
  console.log('Connected to Pokémon Showdown.');
});
  config.admin.forEach(function(element) {
    admin.push(toId(element));
  });
  config.alpha.forEach(function(element) {
    alpha.push(toId(element));
  });
  config.beta.forEach(function(element) {
    beta.push(toId(element));
  });
  config.gamma.forEach(function(element) {
    gamma.push(toId(element));
  });
  config.locked.forEach(function(element) {
    locked.push(toId(element));
  });
  client = 'UwU';
Bot.on('chat', function (room, time, by, message) {
  if (message === `${config.nickName}?`) return Bot.say(room, `Hi, I'm ${config.nickName}! My prefix is \`\`${config.prefix}\`\`. I hope to be of assistance!`);
    if (!message.startsWith(prefix)) return;
    messagecontent = message.substr((prefix).length);
    const args = messagecontent.split(' ');
    const command = args.shift().toLowerCase();
    if (locked.includes(toId(by))) return;
    if (by.startsWith('~') || by.startsWith('&') || by.startsWith('#') || by.startsWith('@')) {
      if (!admin.includes(toId(by)) && !alpha.includes(toId(by))) alpha.push(toId(by));
    }
    if (by.startsWith('%')) {
      if (!admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by))) beta.push(toId(by));
    }
    if (by.startsWith('+')) {
      if (!admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by)) && !gamma.includes(toId(by))) gamma.push(toId(by));
    }
    if (command === 'help') {
      if (!args[0] || args[0].toLowerCase() === 'help') return Bot.say(room, 'Uhh, what do you need help with?');
      fs.readdir(cfol, (e, files) => {
        if (args[0].toLowerCase() === 'eval') return Bot.say(room, 'Admin stuff. Shh.');
        if (!files.includes(`${args[0].toLowerCase()}.js`)) return Bot.say(room, 'Command not found.');
        const commandFile = require(`./commands/${args[0].toLowerCase()}.js`);
        if (commandFile.help == undefined) return Bot.say(room, 'Help for this command was not found.');
        if (commandFile.permissions === 'admin' && !admin.includes(toId(by))) return Bot.say(room, 'Admin stuff. Shh.');
        if (commandFile.permissions === 'alpha' && !admin.includes(toId(by)) && !alpha.includes(toId(by))) return Bot.say(room, 'Alpha stuff. Shh.');
        if (commandFile.permissions === 'beta' && !admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by))) return Bot.say(room, 'Beta stuff. Shh.');
        if (commandFile.permissions === 'gamma' && !admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by)) && !gamma.includes(toId(by))) return Bot.say(room, 'Gamma stuff. Shh.');
        return Bot.say(room, commandFile.help);
      });
      return;
    }
    if (command === 'eval') {
      if (!admin.includes(toId(by))) return Bot.say(room, 'Access denied.');
      try {
        Bot.say(room, eval(args.join(' ')));
      }
      catch (e) {
        Bot.say(room, e.message);
        console.log(e.stack);
      }
      return;
    }
    fs.readdir(cfol, (e, files) => {
      if (!files.includes(`${command}.js`)) return Bot.say(room, 'Command not found.');
      const commandFile = require(`./commands/${command}.js`);
      if (commandFile.permissions === 'admin') {
        if (!admin.includes(toId(by))) return Bot.say(room, 'Access denied.');
        return commandFile.commandFunction(Bot, room, by, args, client);
      }
      if (commandFile.permissions === 'alpha') {
        if (!admin.includes(toId(by)) && !alpha.includes(toId(by))) return Bot.say(room, 'Access denied.');
        return commandFile.commandFunction(Bot, room, by, args, client);
      }
      if (commandFile.permissions === 'beta') {
        if (!admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by))) return Bot.say(room, 'Access denied.');
        return commandFile.commandFunction(Bot, room, by, args, client);
      }
      if (commandFile.permissions === 'gamma') {
        if (!admin.includes(toId(by)) && !alpha.includes(toId(by)) && !beta.includes(toId(by)) && !gamma.includes(toId(by))) return Bot.say(room, 'Access denied.');
        return commandFile.commandFunction(Bot, room, by, args, client);
      }
      if (commandFile.permissions === 'none') {
        return commandFile.commandFunction(Bot, room, by, args, client);
      }
    });
});  
Bot.on('pm', function (by, message) {
  if (!admin.includes(toId(by))) Bot.pm('PartMan', `${by}: ${message}`);
  let mtoid = toId(message);
  if (mtoid.indexOf('invit') !== -1) Bot.pm(by, `/invite ${omroom}`);
    if (!message.startsWith(prefix)) return;
    messagecontent = message.substr((prefix).length);
    const args = messagecontent.split(' ');
    const command = args.shift().toLowerCase();
    if (!admin.includes(toId(by))) return;
    if (command === 'do') {
      Bot.pm(by, args.join(' '));
    }
    if (command === 'eval') {
      try {
          Bot.pm(by, eval(args.join(' ')));
      }
      catch (e) {
        Bot.pm(by, e.message);
        console.log(e.stack);
      }
    }
    if (command === 'kill') Bot.disconnect();
    if (command === 'sayin') {
      roomin = args.shift();
      messagetext = args.join(' ');
      Bot.say(roomin, messagetext);
    }
    if (command === 'sayintc' && args[0]) Bot.say(tcroom, args.join(' '));
    if (command === 'pm') {
      let cargs = messagecontent.split(',');
      let personto = cargs.shift();
      Bot.pm(personto, cargs.join(','));
    }
    if (command === 'j' && args[0]) Bot.pm(by, `/j ${args.join(' ')}`);
});