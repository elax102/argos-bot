const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '!',
    unknownCommandResponse: false,
    owner: '<Insert Your User ID Here>',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Our First Command Group'],
        ['group2', 'Our Second Command Group']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('game');
});

client.login('NTAzMjYyOTk0Nzg5MTcxMjAw.Dqz9Lg.t7-KVlY504N1d-BPm0cPcNK6PfA');