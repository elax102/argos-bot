const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'good',
            group: 'tricks',
            memberName: 'good',
            description: 'Good morning or evening',
            examples: ['dm @User Hi there!'],
            args: [
                {
                    key: 'TOD',
                    prompt: 'Time of day',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, {TOD}) {
        if(TOD == 'morning'){
            return msg.say('Gooooob morning!');
        }
        if(TOD == 'night'){
            return msg.say('Nighty night! See you tomorrow! I love you!');
        }
        else{
            return msg.say('I don\'t know what that is but I hope everyone has a nice time :)');
        }
    }
};