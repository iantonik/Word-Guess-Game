
var wordBank = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie",]

var remainingGuesses = 12;
var guessedLetters = [];
var wins = 0;
var word;
var activeWord = []
var gameReset = true;


document.onkeyup = function () {
    if (gameReset) {
        document.getElementById("user-win").style.visibility = "hidden";
        document.getElementById("user-lost").style.visibility = "hidden";
        resetStats()
        newWord()
        updateStats()
        gameReset = false;
    }
    else {
        validateUserGuess();
        updateStats();
        gameStatus();
        
    }
}


function resetStats() {
    remainingGuesses = 12;
    guessedLetters = [];
    word;
    activeWord = []
}


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


function validateUserGuess() {
    userGuess = event.key.toLowerCase();


    var numberOfGuessedLetters = 0;
    
    if (!userGuess.match(/^[a-z]$/)) {
        alert("Invalid choice of letters. Please try again.")
    }
    else if (guessedLetters.length && guessedLetters.indexOf(userGuess) >= 0) {
        alert("You already guessed this letter. Please try again.")
    }
    else {
        for (var i = 0; i < word.length; i++) {

            if (word.charAt(i) === userGuess) {
                activeWord[i] = userGuess;
                numberOfGuessedLetters++;
            }
        }
        if (numberOfGuessedLetters === 0) {
            console.log("wrong guess")
            --remainingGuesses;
        }
        guessedLetters.push(userGuess);
    }
}

function gameStatus() {
    if (activeWord.indexOf(" _ ") === -1) {
        wins++;
        updateStats();
        document.getElementById("user-win").style.visibility = "visible";
        gameReset=true;
        
        
    }
    else if (remainingGuesses === 0) {
        updateStats();
        document.getElementById("user-lost").style.visibility = "visible";
        gameReset = true;
        
    }

}

