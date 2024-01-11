// src/commands/math.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('math')
        .setDescription('Perform basic math operations')
        .addNumberOption(option => 
            option.setName("first_number")
                .setDescription("Enter the first number")
                .setRequired(true)
        )
        .addNumberOption(option => 
            option.setName("second_number")
                .setDescription("Enter the second number")
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("operation")
                .setDescription("Choose the math operation")
                .setRequired(true)
                .addChoices(
                    { name: 'Add', value: 'add' },
                    { name: 'Subtract', value: 'subtract' },
                    { name: 'Multiply', value: 'multiply' },
                    { name: 'Divide', value: 'divide' }
                )
        ),
    async execute(interaction) {
        const firstNumber = interaction.options.getNumber("first_number");
        const secondNumber = interaction.options.getNumber("second_number");
        const operation = interaction.options.getString("operation");

        let result;
        switch (operation) {
            case 'add':
                result = firstNumber + secondNumber;
                break;
            case 'subtract':
                result = firstNumber - secondNumber;
                break;
            case 'multiply':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                result = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";
                break;
            default:
                result = 'Invalid operation';
                break;
        }

        await interaction.reply(`The result is: ${result}`);
    },
};
