module.exports ={
    permissions: "beta",
    help: `Creates a CAP Tour. Syntax: ${prefix}cap`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.cap);
    }
}