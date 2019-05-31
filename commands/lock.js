module.exports = {
	permissions: 'alpha',
	help: `Locks a user from using Bot commands. Syntax: ${prefix}lock (user)`,
	commandFunction: function (Bot, room, by, args, client) {
		if (!args[0]) return Bot.say(room, 'Who?');
		let tbpro = toId(args.join(' '));
		if (admin.includes(tbpro)) {
			if (admin.includes(toId(by))) return Bot.say(room, 'Nope.');
			locked.push(toId(by));
			return Bot.say(room, 'You have been locked for attempting to lock an admin.');
		}
		if (alpha.includes(tbpro)) {
			if (!admin.includes(toId(by))) return Bot.say(room, 'You are not permitted to lock this user.');
		}
		locked.push(tbpro);
		Bot.say(room, 'User has been locked.');
		Bot.log(`${tbpro} was locked.`);
	}
}