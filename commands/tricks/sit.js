const { Command } = require('discord.js-commando');

var links = [
    'https://giphy.com/gifs/Ym5GQUvG4irMUw2sKf',
    'https://giphy.com/gifs/2UIff1WaryF9xKEwR1'
];

module.exports = class SitCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sit',
            group: 'tricks',
            memberName: 'sit',
            description: 'Make Argos sit!',
            examples: ['Argos sit']
        });
    }

    run(msg) {
        var randomLink = links[Math.floor(Math.random()*links.length)];
        return msg.say(randomLink);
    }
};