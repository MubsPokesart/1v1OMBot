module.exports ={
    permissions: "none",
    help: `Displays all available ranks. Syntax: ${prefix}ranks`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `The current ranks are: Admin, Alpha, Beta, Gamma`);
    }
}