const { Command } = require('discord.js-commando');

var links = [
    'https://giphy.com/gifs/451oO1k1UhzYpfQbwF',
    'https://giphy.com/gifs/ctztlKr31B7tWkny9C'
];

module.exports = class ComeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'come',
            group: 'tricks',
            memberName: 'come',
            description: 'Make Argos come!',
            examples: ['Come']
        });
    }

    run(msg) {
        var randomLink = links[Math.floor(Math.random()*links.length)];
        return msg.say(randomLink);
    }
};