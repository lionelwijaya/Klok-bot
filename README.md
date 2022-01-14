# Klok-bot
 Klok-bot is a discord bot that can 2 simple commands, a timestamp command and reminder command.
 
# Usage & disclaimer
 Since the bot is not deployed online, you will have to host your own discord bot and generate your own token in order to use/test the bot.
 You will also need to install node.js in order for the code to work

# command example
 The prefix of the bot is ?

 ?ts
 with no argument this will show the timestamp of your local time
 
 ?ts 1 0 0
 If given argument, user will need to provide 3 parameters (hours, minute, second). The example above means user has provided arugment of 
 1 hour , 0 minute, 0 second
 
 ?remind 0 5 0 text @tag
 Same as above, the first 3 argument is the (hours, minute, second), the 4th argument is the reminder text and the 5th argument is optional.
 If the 5th argument is not provided, the bot will remind the user that issued that command, if a tag is mentioned, the bot will remind that tagged user 
 instead.
