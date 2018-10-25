const { Command } = require('discord.js-commando');

module.exports = class SpeakCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'speak',
            group: 'tricks',
            memberName: 'speak',
            description: 'Make Argos speak!',
            examples: ['speak']
        });
    }

    run(msg) {
        return msg.say('Woof!');
    }
};