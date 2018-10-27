const { Command } = require('discord.js-commando');

var links = [
    'https://giphy.com/gifs/i3gx5eHe64uHkTWMLQ',
    'https://giphy.com/gifs/2sgF0ntB9rU0qWq379'
];

module.exports = class ShakeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shake',
            aliases: ['paw'],
            group: 'tricks',
            memberName: 'shake',
            description: 'Make Argos shake!',
            examples: ['Argos shake']
        });
    }

    run(msg) {
        var randomLink = links[Math.floor(Math.random()*links.length)];
        return msg.say(randomLink);
    }
};