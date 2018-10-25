const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: 'Argos ',
    unknownCommandResponse: false,
    owner: '109435743994130432',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['tricks', 'Simple trick commands'],
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