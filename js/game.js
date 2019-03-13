// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "you're going to a dead mans grave",
            choices: [
                {
                    text: "Enter the graveyard",
                    nextLevel: "tombstone",
                },

                {
                    text: "Leave without a doubt",
                    nextLevel: "startOver",
                },
            ]
        },

        tombstone: {
            background_image: "fire.gif",
            music: "",
            message: "choose your weapons",
            choices: [
                {
                    text: "flashlight and Shovel",
                    nextLevel:"underWorld",
                },
                
                {
                    text: "taxi card info and a phone",
                    nextLevel:"home",
                }
            ]
        },

        startOver:{
            message: "We saw potencial in you:(",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        underWorld:{
            message: "choose between mystical artifacts",
            choices: [
                {
                    text: "eternal key ",
                    nextLevel: "doorOfwisdom",
                },
                 {
                    text: "magic elixir",
                    nextLevel: "curse",
                },
        ]
        },
                home:{
            message: "you're such a wimp and lost your pride",
            choices: [
                {
                    text: "start over ",
                    nextLevel: "start",
                },
                 
            ]
        },

    }
};
