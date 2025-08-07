const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vouch')
    .setDescription('Memberi vouch kepada seseorang')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Orang yang mau divouch')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('pesan')
        .setDescription('Pesan vouch opsional')),

  async execute(interaction) {
    const target = interaction.options.getUser('target');
    const message = interaction.options.getString('pesan');

    if (target.id === interaction.user.id)
      return interaction.reply({ content: '❌ Kamu tidak bisa vouch diri sendiri!', ephemeral: true });

    await interaction.reply(`👍 <@${interaction.user.id}> telah memberi vouch kepada <@${target.id}>!${message ? `\nPesan: ${message}` : ''}`);
  }
};