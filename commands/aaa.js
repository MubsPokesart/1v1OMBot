module.exports ={
    permissions: "beta",
    help: `Creates an AAA Tour. Syntax: ${prefix}aaa`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, omtour.aaa);
    }
}