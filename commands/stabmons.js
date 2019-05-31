module.exports ={
    permissions: "beta",
    help: `Creates a STABmons Tour. Syntax: ${prefix}stabmons`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.stabmons);
    }
}