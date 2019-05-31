module.exports ={
    permissions: "none",
    help: `Casts a vote while a Type Poll is running! Syntax: ${prefix}vote (OM)`,
    commandFunction: function (Bot, room, by, args, client) {
        if (pollStat === 'inactive') return Bot.say(room, 'There are no polls currently active.');
        if (pollStat === 'active') {
        	if (!args[0]) return Bot.say(room, unxa);
        	let votedtype = args.join('').toLowerCase();
            if (votedtype === 'options') {
                let optionarr = [];
                omlist.forEach(function(element) {
                    optionarr.push(toName(element));
                });
                return Bot.say(room, `The options for this poll are: ${optionarr.join(', ')}`);
            }
            if (votedtype === 'anythinggoes') votedtype = 'ag';
            if (votedtype === 'underused') votedtype = 'uu';
            if (votedtype === 'almostanyability') votedtype = 'aaa';
            if (votedtype === 'littlecup') votedtype = 'lc';
            if (votedtype === '2v2') votedtype = 'tvt';
            if (votedtype === '2v2doubles') votedtype = 'tvt';
        	if (!omlist.includes(votedtype)) return Bot.say(room, 'Invalid type.');
        	if (voters.includes(toId(by))) return Bot.say(room, 'You have already voted for this poll!');
        	voters.push(toId(by));
        	votes.push(votedtype);
        	Bot.say(room, 'Your vote has been cast.');
        }
    }
}