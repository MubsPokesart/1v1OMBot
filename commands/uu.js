module.exports ={
    permissions: "beta",
    help: `Creates a UU Tour. Syntax: ${prefix}uu`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.uu);
    }
}