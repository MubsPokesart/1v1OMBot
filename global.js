const config = require('./config.js');

global.omlist = ['ag', 'uu', 'tvt', 'inverse', 'aaa', 'stabmons', 'monotype', 'lc', 'cap'];
global.omtour = require('./OMS.js');
global.typelist = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
global.unxa = 'Unexpected number of arguments.';
global.pollStat = 'inactive';
global.finaltype = '';
global.votarr = [];
global.voters = [];
global.votes = [];
global.omroom = 'groupchat-1v1-1v1oms';  
global.admin = [];
global.alpha = [];
global.beta = [];
global.gamma = [];
global.locked = [];
global.cfol = './commands';
global.prefix = config.prefix;
global.toId = function toId(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}
global.toName = function toName(text) {
    if (text.toLowerCase() === 'tvt') return '2v2 Doubles';
    else if (text.toLowerCase() === 'aaa') return 'Almost Any Ability';
    else if (text.toLowerCase() === 'stabmons') return 'STABmons';
    else if (text.toLowerCase() === 'ag') return 'Anything Goes';
    else if (text.toLowerCase() === 'mnm') return 'Mix and Mega';
    else if (text.toLowerCase() === 'tvt') return '2v2';
    else if (text.toLowerCase() === 'inverse') return 'Inverse';
    else if (text.toLowerCase() === 'uu') return 'UnderUsed';
    else if (text.toLowerCase() === 'lc') return 'Little Cup';
    else if (text.toLowerCase() === 'monotype') return 'Monotype';
    else if (text.toLowerCase() === 'cap') return 'CAP';
    else return capitalize(text);
}
global.fs = require('fs');
global.capitalize = function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.substr(1);
}
global.modeString = function modeString(array) {
    if (array.length == 0)
        return null;

    var modeMap = {},
        maxEl = array[0],
        maxCount = 1;

    for(var i = 0; i < array.length; i++)
        {
        var el = array[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            maxEl += '&' + el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
global.speak = function speak(Bot, text, room) {
    Bot.say(room, text);
}