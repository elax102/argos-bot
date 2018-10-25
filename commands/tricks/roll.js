const { Command } = require('discord.js-commando');

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
        return msg.say('https://www.instagram.com/p/BoE4SpOB7we/?utm_source=ig_web_button_share_sheet');
    }
};