module.exports ={
    permissions: "beta",
    help: `Creates a 2v2 Tour. Syntax: ${prefix}2v2`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.tvt);
    }
}