// Catch Selectors
let choseLevelArea = document.querySelector(".chose-level");
let levelButtons = document.querySelectorAll(".chose-level button");
let levelInfoArea = document.querySelector(".level-info");
let levelInfoSpans = document.querySelectorAll(".level-info .inf p span");
let LevelMsg = document.querySelector(".message");
let lvlNameSpan = document.querySelector(".message .lv1");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let controlArea = document.querySelector(".control");
let timeLeftSpan = document.querySelector(".control .time span");
let scoreGot = document.querySelector(".control .score .got");
let scoreTotal = document.querySelector(".control .score .total");
let startButton = document.querySelector(".start");
let finishMessage = document.querySelector(".finsh");
// Array Of Words
const words01 = [
  "python",
  "coding",
  "router",
  "script",
  "server",
  "cloud",
  "kernel",
  "gitlab",
  "docker",
  "github",
  "markup",
  "cookie",
  "google",
  "backup",
  "binary",
  "cache",
  "network",
  "storage",
  "hosting",
  "firewall",
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];
const words02 = [
  "tree",
  "book",
  "fish",
  "bird",
  "car",
  "home",
  "cup",
  "door",
  "star",
  "love",
  "milk",
  "hand",
  "foot",
  "elephant",
  "hippopotamus",
  "lion",
  "tiger",
  "bear",
];
const words03 = [
  "code",
  "data",
  "byte",
  "node",
  "java",
  "html",
  "chip",
  "wiki",
  "apps",
  "ping",
  "test",
  "push",
  "drag",
  "bash",
  "copy",
  "edit",
  "link",
  "save",
  "scan",
  "zoom",
  "widget",
  "router",
  "binary",
  "cookie",
  "modems",
  "upload",
  "backup",
  "server",
  "script",
  "output",
  "driver",
  "kernel",
  "syntax",
  "clouds",
  "domain",
  "frames",
  "github",
  "pixels",
  "python",
  "vector",
  "algorithm",
  "encryption",
  "cybersecurity",
  "artificial",
  "automation",
  "blockchain",
  "augmented",
  "simulation",
  "networking",
  "mainframe",
  "virtualization",
  "microprocessor",
  "programming",
  "supercomputer",
  "nanotechnology",
  "cloudcomputing",
  "hyperthreading",
  "microservices",
  "biotechnology",
  "biotechnology",
  "biotechnology",
  "cryptography",
];
const words04 = [
  "network",
  "compile",
  "virtual",
  "scanner",
  "digital",
  "storage",
  "browser",
  "backend",
  "decoder",
  "firefox",
  "software",
  "database",
  "internet",
  "hardware",
  "firewall",
  "keyboard",
  "download",
  "notebook",
  "firmware",
  "websites",
  "Artificial",
  "Algorithm",
  "Blockchain",
  "Encryption",
  "Networking",
  "Cybersecurity",
  "Mainframe",
  "Microprocessor",
  "Automation",
  "Cryptography",
  "Virtualization",
  "Nanotechnology",
  "Augmentation",
  "Biometrics",
  "Semiconductor",
  "Telecommunication",
  "Supercomputer",
  "Information",
  "Datawarehouse",
  "Digitization",
];

// ############################################################
// Combine All Arrays
function combineArrays(...arrays) {
  return arrays.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, []);
}
const allArrays = combineArrays(words01, words02, words03, words04);
// for (let i = 0; allArrays.length; i++) {
//   allArrays[i].toLowerCase();
// }
// console.log(allArrays);
// ############################################################
// Function to filter out duplicate words
function filterUniqueWords(wordsArray) {
  return [...new Set(wordsArray)];
}
const allArraysFiltered = filterUniqueWords(allArrays);

// console.log(allArraysFiltered);

//###################################################
// Genrate Arrays Levels
const wLevel_1 = [];
const wLevel_2 = [];
const wLevel_3 = [];
const wLevel_4 = [];

function categorizeLevels(array) {
  // Shuffle the array
  const shuffledArray = array.sort(() => Math.random() - 0.5);

  // Clear existing level arrays
  wLevel_1.length = 0;
  wLevel_2.length = 0;
  wLevel_3.length = 0;
  wLevel_4.length = 0;

  // Categorize words into levels
  for (let i = 0; i < shuffledArray.length; i++) {
    const word = shuffledArray[i];
    if (word.length <= 4 && wLevel_1.length < 20) {
      wLevel_1.push(word);
    } else if (word.length <= 6 && word.length > 4 && wLevel_2.length < 20) {
      wLevel_2.push(word);
    } else if (word.length <= 8 && word.length > 6 && wLevel_3.length < 20) {
      wLevel_3.push(word);
    } else if (word.length > 8 && wLevel_4.length < 20) {
      wLevel_4.push(word);
    }
    // Stop if all levels have 20 words
    if (wLevel_1.length === 20 && wLevel_2.length === 20 && wLevel_3.length === 20 && wLevel_4.length === 20) {
      break;
    }
  }
}
categorizeLevels(allArrays);
// ----------------------------------------------
// console.log("Level 1 (Easy):", wLevel_1);
// console.log(wLevel_1.length);
// console.log("Level 2 (Medium):", wLevel_2);
// console.log(wLevel_2.length);
// console.log("Level 3 (Hard):", wLevel_3);
// console.log(wLevel_3.length);
// console.log("Level 4 (Very Hard):", wLevel_4);
// console.log(wLevel_4.length);

// ###################################################

// Setting Levels
const lvls = {
  Esay: 4,
  Normal: 4,
  Hard: 5,
  Very_Hard: 5,
};

//Generate Start Screan

LevelMsg.style.display = "none";
input.style.display = "none";
controlArea.style.display = "none";
controlArea.style.display = "none";
upcomingWords.style.display = "none";
startButton.style.display = "none";

//############################################################
// Genrate The Level [Easy - Normal - Hard - Very Hard]
let defaultLevelName, defaultLevelSeconds;

levelButtons.forEach((target) => {
  target.addEventListener("click", () => {
    choseLevelArea.remove();
    // Show Element
    LevelMsg.style.display = "block";
    input.style.display = "block";
    controlArea.style.display = "flex";
    upcomingWords.style.display = "flex";
    startButton.style.display = "block";
    levelInfoArea.style.display = "none";
    // #############
    defaultLevelName = target.value;
    defaultLevelSeconds = lvls[defaultLevelName];
    // Setting level Name + Seconds +score
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    detArray();
    scoreTotal.innerHTML = words.length;
  });
});

const words = [];
function detArray() {
  if (defaultLevelName === "Esay") {
    words.push(...wLevel_1);
  } else if (defaultLevelName === "Normal") {
    words.push(...wLevel_2);
  } else if (defaultLevelName === "Hard") {
    words.push(...wLevel_3);
  } else if (defaultLevelName === "Very_Hard") {
    words.push(...wLevel_4);
  }
  console.log(words);
}

// Dissable Paste Event
input.onpaste = function () {
  return false;
};

//###################################################################
//                            Start Game
//###################################################################
startButton.onclick = function () {
  this.remove();
  input.focus();
  // Generate Word Function
  genworde();
};

function genworde() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // console.log( words.length)
  // Append The word
  theWord.innerHTML = randomWord;
  // Get word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove From Array
  words.splice(wordIndex, 1);
  // ##words[wordIndex].remove()
  upcomingWords.innerHTML = "";
  // Generate Words
  for (let i = 0; i < words.length; i++) {
    // Create Div
    let div = document.createElement("div");
    let divTxt = document.createTextNode(words[i]);
    // Append
    div.appendChild(divTxt);
    upcomingWords.appendChild(div);
  }
  // Start Paly function
  startplay();
}

function startplay() {
  choseLevelArea.remove();
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty input field
        input.value = "";
        // Increse The Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Generate Word Functaion
          genworde();
        } else {
          // Remove Elments
          theWord.remove();
          input.remove();
          upcomingWords.remove();
          let span = document.createElement("span");
          let spanTxt = document.createTextNode("You Win");
          span.className = "good";
          span.appendChild(spanTxt);
          let button = document.createElement("button");
          button.className = "btn-restart";
          let btnText = document.createTextNode("Restart");
          button.addEventListener("click", load);
          button.appendChild(btnText);
          finishMessage.appendChild(span);
          finishMessage.appendChild(button);
        }
      } else {
        // Remove Elments
        theWord.remove();
        input.remove();
        upcomingWords.remove();
        let span = document.createElement("span");
        let spanTxt = document.createTextNode("Game Over ");
        span.className = "bad";
        span.appendChild(spanTxt);
        let button = document.createElement("button");
        button.className = "btn-restart";
        let btnText = document.createTextNode("Restart");
        button.addEventListener("click", load);
        button.appendChild(btnText);
        finishMessage.appendChild(span);
        finishMessage.appendChild(button);
      }
    }
  }, 1000);
}
function load() {
  location.reload();
}
