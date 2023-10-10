require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'sites',
        description: 'You can find many darknet sites here. All of them are secure. ✅',
    },
    {
        name: 'xtc',
        description: 'List of the best seller XTC Pills 💊',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.t);

(async () => {
    try {
        console.log('Registering commands...');

        await rest.put(
            Routes.applicationCommands(process.env.c, process.env.s),
            { body: commands }
        );
        
        console.log('Got ya command ✅');

    } catch (error) {
        console.log(`I'M BROKEN, WHY???: ${error}`);
    }
})();