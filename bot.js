require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client ({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

client.on('ready', (c) => {
    console.log(`😸✅ Woop Woop ${c.user.tag} logged in successfully!`);
})

// command stuff meow
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'sites') {
        interaction.reply("Some proofed darknet sites: https://dark.fail/");
    }

    // Idk wie ich das damals hingekriegt habe diese dinger kleiner zu skalieren
    if (interaction.commandName === 'xtc') {
        const firstEmbed = new EmbedBuilder()
            .setTitle('CRAZY RED XTC')
            .setDescription('300mg XTC | 160mg MDMA')
            .setColor('Red')
            .setImage('https://images-ext-2.discordapp.net/external/P3EEOmMg2jQCaIskzneOIhgQi8DG7_BudYQZIq05AK0/https/mydrugs123.web.app/static/media/red_pill.e002a90f.png?width=671&height=671')

        const secondEmbed = new EmbedBuilder()
            .setTitle('CONFUSED XTC')
            .setDescription('300mg XTC | 150mg MDMA')
            .setColor('Yellow')
            .setImage('https://images-ext-2.discordapp.net/external/iUoqO0KuN8KdcpuVZnPw3noiX6qgHVtfFPujvHT9XR0/%3Fwidth%3D671%26height%3D671/https/images-ext-1.discordapp.net/external/FCbqh-ESmJZtoCG53iU9fMI2d9cEhXlTqpmc2z8J2GM/https/mydrugs123.web.app/static/media/yellow_pill.c0319c8e.png')

        const thirdEmbed = new EmbedBuilder()
            .setTitle('CONFUSED XTC')
            .setDescription('200mg XTC | 70mg MDMA')
            .setColor('Purple')
            .setImage('https://images-ext-1.discordapp.net/external/pGuL-jkGB23X4bsVTUdO1y1CKrwxz7DTS5qnVCs1rQs/https/mydrugs123.web.app/static/media/purple_pill.d313b9b0.png?width=671&height=671')
        
        const fourthEmbed = new EmbedBuilder()
            .setTitle('GREEN SNOWFLAKE XTC')
            .setDescription('300mg XTC | 150mg MDMA')
            .setColor('Green')
            .setImage('https://images-ext-2.discordapp.net/external/Uf0KymRqTQoLPipAh12SHcSPscJ3sNzZ_rqLVwbkUQo/https/mydrugs123.web.app/static/media/green_pill.a407a62b.png?width=671&height=671')
            
        const fivedEmbed = new EmbedBuilder()
            .setTitle('BLUE CLOVER XTC')
            .setDescription('250mg XTC | 100mg MDMA')
            .setColor('Blue')
            .setImage('https://images-ext-2.discordapp.net/external/-rWpkTQMrMxMmLelF8a4jLHmLvbrMIDCPLcRDONjXjc/https/mydrugs123.web.app/static/media/blue_pill.351327e7.png?width=671&height=671')
            
            
        interaction.reply({ embeds: [firstEmbed, secondEmbed, thirdEmbed, fivedEmbed]});
    }
});

client.login(process.env.t);