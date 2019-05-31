module.exports ={
    permissions: "beta",
    help: `Creates an Inverse Tour. Syntax: ${prefix}inverse`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.inverse);
    }
}