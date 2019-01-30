
var wordBank = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie",]

var remainingGuesses = 12;
var guessedLetters = [];
var wins=0;
var word;
var remainingGuesses = 12;
var activeWord=[]
var userWon = false;


function gameStart(){
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    for (var i=0; i<word.length; i++){
        activeWord.push(" _ ")
        console.log(word);
    };
    document.getElementById("word").innerText = activeWord;
}

function updateStats(){
    document.getElementById("wins").innerText = wins;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("word").innerText = activeWord;

}

function userWin(){
    if (activeWord.indexOf(" _ ") === -1){
        userWon = true;
    }
}

document.onkeyup = function validateUserGuess(event) {
    

    userGuess = event.key;
    guessedLetters.push(userGuess);

    var numberOfGuessedLetters=0;

    for (var i = 0; i < word.length; i++) {
        
        if (word.charAt(i) === userGuess) {
            activeWord[i] = userGuess;
            numberOfGuessedLetters=numberOfGuessedLetters+1;
        }
    }
    if (numberOfGuessedLetters === 0){
        console.log("wrong guess")
        --remainingGuesses;
    }
}







//press any key to get started
//use key events to listen for th eletters that player will type 
//text on page: Press any key to get started.
//on key press choose workd from wordBank
//ientify number of letters and draw positions on page
//document.onkeyup = function () {

    //     console.log(word);
    //     //For each key pressed by user: 
    //         replace placeholder with letter
    //     }
    //     else {
    //     if(remainingGuesses === 0){
    //      end game
    //      notify user of the lose and start a new game.