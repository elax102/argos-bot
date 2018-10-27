const { Command } = require('discord.js-commando');

var links = [
    'https://giphy.com/gifs/fCTrgkgzggY1pHInEd',
    'https://giphy.com/gifs/t75gcOw2CheQk0uckc'
];

module.exports = class DownCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'down',
            group: 'tricks',
            memberName: 'down',
            description: 'Make Argos lay down!',
            examples: ['Argos down']
        });
    }

    run(msg) {
        var randomLink = links[Math.floor(Math.random()*links.length)];
        return msg.say(randomLink);
    }
};