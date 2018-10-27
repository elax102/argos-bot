const { Command } = require('discord.js-commando');

var links = [
    'https://giphy.com/gifs/4HnZusOUDYbKjrzabe',
    'https://giphy.com/gifs/n9fTNj8lPzjw2B5OQ5',
    'https://giphy.com/gifs/fCTrgkgzggY1pHInEd'
];

module.exports = class RollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'tricks',
            memberName: 'roll',
            description: 'Make Argos roll over!',
            examples: ['roll']
        });
    }

    run(msg) {
        var randomLink = links[Math.floor(Math.random()*links.length)];
        return msg.say(randomLink);
    }
};