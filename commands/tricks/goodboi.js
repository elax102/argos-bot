const { Command } = require('discord.js-commando');

module.exports = class GoodboiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'who\'s a goodboi?',
            group: 'tricks',
            memberName: 'goodboi',
            description: 'Is Argos a goodboi!',
            examples: ['goodboi']
        });
    }

    run(msg) {
        return msg.say('Everyone is a goodboi!');
    }
};