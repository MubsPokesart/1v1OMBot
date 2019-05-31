module.exports ={
    permissions: "beta",
    help: `Creates a Monotype Tour. Syntax: ${prefix}monotype`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `${omtour.monotype}`);
    }
}