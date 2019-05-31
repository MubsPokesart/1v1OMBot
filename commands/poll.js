module.exports ={
    permissions: "beta",
    help: `Creates a poll for the next type. After the stipulated time, automatically starts the next (standard) Type Tour, or ends the poll. Syntax: ${prefix}nexttype (time in minutes, or end/cancel/status) (autostart [optional])`,
    commandFunction: function (Bot, room, by, args, client) {
    	if (args[2]) return Bot.say(room, unxa);
    	if (!args[0]) return Bot.say(room, unxa);
    	if (args[0].toLowerCase() === 'cancel') {
            if (pollStat === 'inactive') return Bot.say(room, 'No poll is currently active.');
    	    voters.length = 0;
    	    votes.length = 0;
    	    pollStat = 'inactive';
    	    clearTimeout(pollFunctionTimer);
    	    return Bot.say(room, 'The poll has been cancelled.');
    	}
    	if (args[0].toLowerCase() === 'end') {
            if (pollStat === 'inactive') return Bot.say(room, 'No poll is currently active.');
    	    clearTimeout (pollFunctionTimer);
    	    return setTimeout(setPollStat, 1000, 'inactive');
    	}
        if (args[0].toLowerCase() === 'status' || args[0].toLowerCase() === 'display') {
            if (pollStat === 'inactive') return Bot.say(room, 'No poll is currently active.');
            let topvotes = modeString(votes).split('&');
            let dtopvotes = [];
            topvotes.forEach(function(element) {
                dtopvotes.push(toName(element));
            });
            if (dtopvotes.length == 0) dtopvotes.push('None');
            return Bot.say(room, `/addhtmlbox <CENTER>Current poll status: Active.<BR>Current Amount of Votes: ${votes.length - omlist.length}<BR>Current Lead: ${dtopvotes.join(', ')}</CENTER>`);
        }
    	if (pollStat === 'active') return Bot.say(room, 'A poll is already in progress.');
        voters.length = 0;
        votes.length = 0;
        if (args[2]) return Bot.say(room, unxa);
        if (!args[0]) return Bot.say(room, unxa);
        let ttime = parseInt(args[0]);
        if (isNaN(ttime)) return Bot.say(room, 'Given time is invalid.');
        if (ttime < 1) return Bot.say(room, 'Too short.');
        if (ttime > 30) return Bot.say(room, 'Too long.');
        if (args[1] && !['as', 'autostart'].includes(args[1].toLowerCase())) return Bot.say(room, 'Invalid syntax.');
        Bot.say(room, `/wall Votes for the next Tour are now open! Use ${prefix}vote (OM) to vote within the next ${ttime} minute(s)!`);
        pollStat = 'active';
        omlist.forEach(function(element) {
        	votes.push(element);
        });
        global.setPollStat = function setPollStat(status) {
        	if (!['active', 'inactive'].includes(status)) return pollStat = 'inactive';
        	pollStat = status;
        	Bot.say(room, 'The poll has ended!');
        	if (!args[1]) {
        		let finaltypewstr = modeString(votes);
        		let finaltypewarr = finaltypewstr.split('&');
        		let finaltype = finaltypewarr[Math.floor(Math.random()*finaltypewarr.length)];
        		if (!omlist.includes(finaltype)) return Bot.say(room, 'No votes cast. :(');
        		return Bot.say(room, `The voted type was: ${toName(finaltype)}!`);
        	}
        	if (args[1].toLowerCase() === 'as' || args[1].toLowerCase() === 'autostart') {
        		let finaltypewstr = modeString(votes);
        		let finaltypewarr = finaltypewstr.split('&');
        		let finaltype = finaltypewarr[Math.floor(Math.random()*finaltypewarr.length)];
        		if (!omlist.includes(finaltype)) return Bot.say(room, 'No votes cast. :(');
        		Bot.say(room, omtour[finaltype]);
        	}
        }
        global.pollFunctionTimer = setTimeout(setPollStat, ttime*60000, 'inactive');
        pollFunctionTimer;
    }
}