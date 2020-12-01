const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});
require("dotenv").config();

client.on("message", (msg) => {
  switch (msg.content) {
    case "!ping":
      msg.channel.send(" pong");
      break;

    case "!bk":
      msg.reply("BE KIRAM");
      break;

    case "!assignRole-test":
      msg.member.roles.add("783429501731602482");
      break;

    case "hi":
      msg.react("👋");
      break;
  }
});

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.on("message", async (message) => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === "!join-mj") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === "!avatar") {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.login(process.env.DISCORD_TOKEN_ID);
