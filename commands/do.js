module.exports = {
	permissions: 'admin',
	help: 'Does whatever you ask.',
	commandFunction: function (Bot, room, by, args, client) {
		Bot.say(room, args.join(' '));
	}
}