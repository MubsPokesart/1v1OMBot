module.exports ={
    permissions: "beta",
    help: `Starts a Tour after the given interval. Syntax: ${prefix}delay (time [in minutes]), (tour)`,
    commandFunction: function (Bot, room, by, args, client) {
        if (!args[0]) return Bot.say(room, unxa);
        let newmes = args.join(' ');
        let cargs = newmes.split(',');
        let dtime = parseInt(toId(cargs[0]));
        if (isNaN(dtime)) return Bot.say(room, 'Invalid time.');
        let giventype = cargs[1].toLowerCase();
        if (omtour[giventype] == undefined) return Bot.say(room, 'That OM was not found.');
        let delayTimer = setTimeout(speak, dtime*60000,Bot, omtour[giventype], room);
        Bot.say(room, `A(n) ${toName(giventype)} Tour will be started in ${dtime} minutes!`);
    }
}