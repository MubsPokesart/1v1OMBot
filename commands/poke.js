module.exports ={
    permissions: "gamma",
    help: `Pokes someone.`,
    commandFunction: function (Bot, room, by, args, client) {
        Bot.say(room, `/me pokes ${args.join(' ')}`);
    }
}