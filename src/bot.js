require('dotenv').config();
const fetch = require("node-fetch");
const mealFunctions = require('./app.js');


const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "."

client.on('ready', () => {
    console.log("The bot has logged in")
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

    if (CMD_NAME === "box") {
        if (args.length < 1) return message.reply('Please provide box type. The available types are guru, master, artisan, and professional!');
        const boxType = args[0].toLowerCase()
        if (boxType === "guru") {
            message.reply("Let me see what the best meal is at this given time...")
            mealFunctions.populateGuru()
        .then(() => {
            return message.reply(`${finalGurudecision}`)
            
        })
        .catch(error => {
            message.reply('Hmm... The web API seems to be not working properly.')
        })
        }
        else if (boxType === "professional") {
            mealFunctions.populateProfessional()
        .then(() => {
            return message.reply(`${finalProfessionaldecision}`)
            
        })
        .catch(error => {
            message.reply('Hmm... The web API seems to be not working properly.')
        })
        }
        else if (boxType === "artisan") {
            mealFunctions.populateArtisan()
        .then(() => {
            return message.reply(`${finalArtisandecision}`)
            
        })
        .catch(error => {
            message.reply('Hmm... The web API seems to be not working properly.')
        })
        }
        else if (boxType === "master") {
            mealFunctions.populateMaster()
        .then(() => {
            return message.reply(`${finalMasterdecision}`)
            
        })
        .catch(error => {
            message.reply('Hmm... The web API seems to be not working properly.')
        })
        }
        
        
    }



    if (CMD_NAME === "math") {
        
        if (args.length != 2) return message.reply('Please provide meal amount per box, then contribution points. Ex. .math 24 356 \nIf I return the value NaN, it means you accidentally included an input other than numbers.');
        var dishesRequired = args[0]
        var contributionPoints = args[1]
        var totalMeals = Math.floor(contributionPoints/2)
        var totalMealsrequired = totalMeals*dishesRequired;
        message.reply(`${totalMealsrequired} is the total amount of dishes you need for the amount of turn ins you have (which is based on your contribution rounded down)`)   
    }

    if (CMD_NAME === "help") {
        
        message.reply('My available commands current are .box and .math\nUse them in this order to satisfy your imperial cuisine needs :)')  
    }

    
    
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN)




