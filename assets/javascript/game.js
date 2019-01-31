
var wordBank = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie",]


var remainingGuesses = 12;
var guessedLetters = [];
var wins = 0;
var word;
var remainingGuesses = 12;
var activeWord = []

function updateStats() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("word").innerText = activeWord;
}


function newWord() {
    word = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < word.length; i++) {
        activeWord.push(" _ ")
        console.log(word);
    };
    document.getElementById("word").innerText = activeWord;
}


document.onkeyup = function validateUserGuess() {
    userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);

    var numberOfGuessedLetters = 0;
    if (!userGuess.match(/^[a-z]+$/)) {
        alert("Invalid choice of letters. Please try again.")
    }
    else if (guessedLetters.length>1 && guessedLetters.indexOf(userGuess)>-1){
        alert("You already guessed this letter. Please try again.")
    }
    else {
        for (var i = 0; i < word.length; i++) {

            if (word.charAt(i) === userGuess) {
                activeWord[i] = userGuess;
                numberOfGuessedLetters = numberOfGuessedLetters + 1;
            }
        }
        if (numberOfGuessedLetters === 0) {
            console.log("wrong guess")
            --remainingGuesses;
        }
    }


}

function gameStatus() {
    if (activeWord.indexOf(" _ ") === -1) {
        wins++;
        userWon = true;
    }
    if (remainingGuesses === 0){

    }
}

