/* CUSTOM GAME DATA */
const JSON_OBJ = {
    easy : [
        { name: "First Four Lost Numbers", items: "4, 8, 15, 16" },
        { name: "Parts of a Book", items: "Spine, Cover, Author, Index" },
        { name: "Literary Devices", items: "Metaphor, Simile, Alliteration, Hyperbole" },
        { name: "Types of Angles", items: "Acute, Right, Obtuse, Straight" },
        { name: "The World's Oceans", items: "Arctic, Southern, Indian, Pacific" },
        { name: "Parts of a Cell", items: "Ribosomes, Lysosomes, Cytoplasm, Nucleus" },
        { name: "Types of Engineers", items: "Mechanical, Electrical, Civil, Computer" },
        { name: "Brass Instruments", items: "Trumpets, Trombone, French Horn, Tuba" },
        { name: "History of Art Movements", items: "Impressionism, Abstract, Cubism, Surrealism" },
        { name: "Renewable Energy", items: "Biomass, Solar, Wind, Geothermal" },
        { name: "Geometric Transformations", items: "Translation, Reflection, Dilation, Rotation" },
        { name: "Common Apples", items: "Fuji, Gala, Honeycrisp, Cosmic" },
        { name: "Types of Clouds", items: "Cirrus, Cumulus, Stratus, Nimbus" },
        { name: "Book Genres", items: "Fantasy, Adventure, Sci-Fi, Romance" },
        { name: "Reduplicative Words", items: "Yo-yo, Bon-Bon, Mahi-mahi, Murmur"},
        { name: "Utterings of a Giant", items: "Fee, Fi, Fo, Fum" },
        { name: "Grains", items: "Barley, Sorghum, Buckwheat, Millet" },
        { name: "American Football Terms", items: "Sack, Blitz, Snap, Down" },
        { name: "Mythical Creatures", items: "Chimera, Baba Yaga, Banshee, Jinn"},
        { name: "Musical Notes", items: "Do, Fa, Ti, La" },
        { name: "Classical Composers", items: "Beethoven, Mozart, Bach, Tchaikovsky" },
        { name: "World Religions", items: "Christianity, Islam, Hinduism, Buddhism" },
        { name: "Countries With One Neighbor", items: "South Korea, The Gambia, Haiti, Timor-Leste" },
        { name: "Apple _____", items: "Cider, Juice, Watch, Pie" },
        { name: "Weather Events", items: "Tornado, Hailstorm, Hurricane, Blizzard" },
        { name: 'Numbers', items: "1, 2, 3, 4" }  
    ],
    medium : [
        { name: "The First Four Biblical Gospels", items: "Matthew, Mark, John, Luke" },
        { name: "Animals of the Chinese Zodiac", items: "Ox, Rabbit, Goat, Rat" },
        { name: "Pokémon Types", items: "Grass, Electric, Dark, Psychic" },
        { name: "Types of Chemical Bonds", items: "Ionic, Covalent, Metallic, Hydrogen" },
        { name: "Chess Terms", items: "Fork, Pin, Skewer, Promotion "},
        { name: "Martial Arts", items: "Wushu, Aikido, Krav Maga, Hapkido" },
        { name: "Names of macOS Versions", items: "Monterey, Catalina, Mojave, Sierra" },
        { name: "Types of Pasta", items: "Pene, Orzo, Farfalle, Ziti" },
        { name: "Rock Music Subgenres", items: "Alternative, Grunge, Metal, Punk" },
        { name: "Computer Memory Storage", items: "Hard Drives, Caches, Registers, RAM" },
        { name: "Types of Brain Waves", items: "Beta, Alpha, Delta, Theta" },
        { name: "Works of Jane Austen", items: "Emma, Mansfield Park, Persuasion, Northanger Abby" },
        { name: "Movies Set in Florida", items: "Caddyshack, Scarface, 2 Fast 2 Furious, Bad Boys" },
        { name: "Korean Delicacies", items: "Tteokbokki, Bulgogi, Bibimbap, Japchae" },
        { name: "Puzzles", items: "Crossword, Jigsaw, Mazes, Sudoku" },
        { name: "Foreign Loanwords", items: "Cafe, Kindergarden, Paparazzi, Karaoke" },
        { name: "Islands", items: "Cook, Sandwich, Solomon, Shetland" },
        { name: "Marvel Villains", items: "Mystique, Vulture, Ronan, Kingpin" },
        { name: "Types of Hand Stitches", items: "Back, Cross, Slip, Straight" },
        { name: "Brands of Blenders", items: "Ninja, Nutribullet, Wolf, Cuisinart" },
        { name: "Neutral Countries During WWII", items: "Ireland, Spain, Sweden, Switzerland" },
        { name: "British Spelling", items: "Colour, Flavour, Honour, Neighbour" },
        { name: "Dogs by Breed Group", items: "Sporting, Hound, Working, Terrier" },
        { name: "Compound Words", items: "Toothbrush, Runway, Starfish, Sunflower" },
        { name: "Citrus Fruits", items: "Grapefruit, Yuzu, Kumquat, Citron" },
    ],
    hard : [
        { name: "Bands with Three Members", items: "Nirvana, Green Day, Blink-182, Boygenius" },
        { name: "Classical Greek Muses", items: "Calliope, Clio, Erato, Thalia" },
        { name: "Disney Villains", items: "Hades, Yzma, Queen of Hearts, Lady Tremaine" },
        { name: "_____ Call", items: "Curtain, Close, House, Prank" },
        { name: "_____ Case", items: "Cold, Use, Edge, Test" },
        { name: "Math Proofs", items: "Contradiction, Induction, Exhaustion, Direct" },
        { name: "Slippery Things", items: "Ice, Grease, Slippers, Bananas" },
        { name: "Things That Are Woody", items: "Tree, Guitar, Cabinet, Allen" },
        { name: "Genetic Mutations", items: "Frameshift, Missense, Nonsense, Silent" },
        { name: "Types of Electrical Circuits", items: "Series, Parallel, Combination, Mesh" },
        { name: "Animal Group Names", items: "Crash, Band, Stench, Pack" },
        { name: "Failed Proposed U.S. States", items: "Jefferson, Franklin, Superior, Lincoln" },
        { name: "Heteronyms", items: "Lead, Bow, Alternate, Windy" },
        { name: "Quarks", items: "Top, Down, Charm, Strange" },
        { name: "Mathematicians", items: "Fermat, Hilbert, Riemann, Erdös" },
        { name: "Valid Topological Deformations", items: "Bend, Crush, Twist, Stretch"},
        { name: "Ice Cream Toppings", items: "Marshmallow, Chocolate, Sprinkle, Nuts" },
        { name: "NATO Alphabet", items: "Romeo, Tango, India, Hotel" },
        { name: "Common Dreams", items: "Falling, Nudity, Chased, Rotten Teeth" },
        { name: "Weapons in 'Clue'", items: "Wrench, Rope, Pipe, Poison" },
        { name: "Paradoxes", items: "Zeno's, Liar's, Barbershop, Russell's" },
        { name: "Forms of Tax", items: "Income, Sales, Property, Estate" },
        { name: "Music Festivals", items: "Coachella, Glastonbury, Lollapalooza, Bonnaroo" },
        { name: "Common Phobias", items: "Heights, Spiders, Crowds, Germs" },
        { name: "Dog Commands", items: "Sit, Stand, Down, Come" },

    ],
    expert : [
        { name: "Finger-Related", items: "Good Job, That Way, Care for Tea?, I Do" },
        { name: "Things on a Spectrum", items: "Colors, Politics, Genders, Autism" },
        { name: "Merriam-Webster Words of the Year", items: "w00t, bailout, surreal, gaslighting" },
        { name: "The Careers of Oprah Winfrey", items: "Talk Show Host, Actress, Author, Philanthropist" },
        { name: "Semordnilap", items: "Drawer, Stressed, Live, Deliver" },
        { name: "_____ Cat", items: "Alley, Cool, Copy, Lap" },
        { name: "_____ Rolls", items: "California, Dragon, Rainbow, Spider" },
        { name: "Abstract Algebra Structures", items: "Monoid, Group, Ring, Field" },
        { name: "Types of Hair Cuts", items: "Bob, Bowl, Pixie, Crew" },
        { name: "_____ Stones", items: "Birth, Rolling, Stepping, Mile" },
        { name: "Things That Spread", items: "Illness, Fire, Rumor, Happiness" },
        { name: "Directed by Christopher Nolan", items: "Memento, Following, Insomnia, Dunkirk" },
        { name: "Classic Arcade Games", items: "Centipede, Tempest, Defender, Asteroids" },
        { name: "Types of Diamond Cuts", items: "Cushion, Princess, Oval, Marquise" },
        { name: "Types of Human Memory", items: "Sensory, Working, Episodic, Semantic" },
        { name: "Old School Programming Languages", items: "Fortran, Pascal, Lisp, Prolog" },
        { name: "'Peter Pan' Characters", items: "Hook, Nana, Peter, Wendy" },
        { name: "Motivation", items: "Drive, Prompt, Spark, Spur" },
        { name: "Names That Are Verbs", items: "Chuck, Rob, Josh, Sue" },
        { name: "Top-Level Domains", items: "gov, com, mil, net" },
        { name: "NBA MVPs", items: "James, Nash, Curry, Duncan" },
        { name: "Acronyms", items: "Laser, Radar, Scuba, Sonar" },
        { name: "Military Use Origins", items: "Aviators, Jeep, Internet, Duct Tape" },
        { name: "Brave", items: "Heroic, Daring, Audacious, Gallant" },
        { name: "Currency", items: "Note, Bill, Buck, Dough"}
    ],
}




/* GLOBAL VARIABLES */

// DOM elements
let game_area = document.querySelector('.items-list');
let lives_string = document.querySelector('#livesleft');
let outcome_string = document.querySelector('#selectionoutcome');
let buttons_list = document.querySelector('.buttons-list');

// Main sets
let keysArray = [];             // "name" key for each difficulty
let itemsArray = [];            // "items" keys for each difficulty, ordered
let itemsArray_r = [];          // randomized itemsArray[] for display
let selected = [];              // the 4 items selected by the user during the game
let correct = [];               // the set of difficulties that have been solved e.g. "hard"

// Color sets
let colors = ['easy', 'medium', 'hard', 'expert'];
let color_vars = ['--color-easy', '--color-medium', '--color-hard', '--color-expert'];

// Endgame & replay control
let lives = 4;                  // max number of lives
let message = '';               // message for: correct answer, win state, lose state




/* METHODS */




// Clears previous values to allow multiple games.
// @param none
// @retrn none
function clearFields(){
    // Clear previous values
    keysArray = [];
    itemsArray = [];
    itemsArray_r = [];

    // Text display reset
    lives = 4;
    lives_string.textContent = "Lives left: " + lives;
    outcome_string.textContent = "Welcome!";

    // Reset correct amount
    correct.length = 0;

    // Clear previous data in game_area
    game_area.innerHTML = '';

    // Reset button functionality
    buttons_list.childNodes.forEach(button => {
        button.disabled = false;
    });
}




// Get a random question set of each difficulty. Normalize results into array.
// @param none
// @retrn none
function initializeKeys(){

    // Randomly select 4 difficulies * 4 items = 16 to fill itemsArray[]
    for(let difficultyKey in JSON_OBJ){
        // Grab each difficulty
        let difficulty = JSON_OBJ[difficultyKey];

        // Generate Random Value
        let random = Math.floor(Math.random() * difficulty.length);

        // Add category and items to keysArray and itemsArray
        keysArray.push(difficulty[random].name);

        // 'items' requires splitting along comma-separated list then insert individually
        let items = difficulty[random].items.split(', ');
        items.forEach(item => {
            itemsArray.push(item);
        });
    }
}

// Randomly sort the items so that they can be displayed
function randomizeItems(){
    // Temp copy items array
    itemsArray_r = [...itemsArray];

    // Shuffle
    for (let i = itemsArray_r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemsArray_r[i], itemsArray_r[j]] = [itemsArray_r[j], itemsArray_r[i]];
    }

    // Clear previous data in game_area
    game_area.innerHTML = '';

    // Initialize Array
    for(let i = 0; i < itemsArray_r.length; i++){

        // Dynamically generate buttons
        const button = document.createElement('button');
        button.textContent = itemsArray_r[i];
        button.classList.add(`item`);
        button.classList.add(`item${i}`);

        // Calculate the difficulty class index based on the position in itemsArray
        let difficultyIndex = Math.floor(itemsArray.indexOf(itemsArray_r[i]) / 4);

        // Assign the appropriate difficulty class based on the calculated index
        let difficultyClass = '';

        switch (difficultyIndex) {
        case 0:
            difficultyClass = 'easy';
            break;
        case 1:
            difficultyClass = 'medium';
            break;
        case 2:
            difficultyClass = 'hard';
            break;
        case 3:
            difficultyClass = 'expert';
            break;
        default:
            break;
        }
        button.classList.add(difficultyClass);

        // Attach event listener to each button
        button.addEventListener('click', handleClick);

        // Append the button to the game area
        game_area.appendChild(button);
    }
    
    // Ensure that selected[] still appears after shuffling
    for(let i = 0; i < selected.length; i++){
        game_area.childNodes.forEach(child => {
            if(child.textContent == selected[i]){
                child.classList.toggle('selected');
            }
        });
    }

    // Ensure that selected[] still appears after shuffling
    // Ensure that colors[] remain the same after shuffling
    game_area.childNodes.forEach(child => {
        correct.forEach(correctClass => {
            if (child.classList.contains(correctClass)) {

                // Remove functionality
                child.classList.remove('selected');
                child.disabled = true;
    
                // Get difficulty name
                const difficulty = correctClass;
    
                // Set the background color based on difficulty name
                child.style.backgroundColor = `var(--color-${difficulty})`;
            }
        });
    });    
}

// BUTTON CLICK EVENTS
// ...
// ...
function handleClick(event){
    // Get the element that triggered this event
    let element = event.target;

    // Always toggle -> NO
    // Toggle if: A decrease decrements selected[] to below 4, an increase remains below four
    // Else, do not toggle

    // Cases : Toggle an element that isn't there, list is not full -> .toggle & push
    // Toggle an element that isn't there, list is full -> no toggle, no push
    // Toggle an element that is there, list is not full -> .toggle, filter out
    // Toggle an element that is there, list is full -> -> .toggle, filter out

    

    // Check: You can only select at most 4 elements
    if(selected.length < 4 || selected.includes(element.textContent)){

        // Toggle "selected" class style
        element.classList.toggle('selected');

        if (!selected.includes(element.textContent)) {
            // Push to selected[] if it is not there yet
            selected.push(element.textContent);
        } else {
            // Pop from selected[] if it is already there
            selected = selected.filter(item => item !== element.textContent);
        }
    }

    // Test
    console.log('selected: ' + selected);
}





// FUNCTIONALITY BUTTONS
// ...
// ...



// Shuffle items (randomize position in board)
function shuffle() {
    randomizeItems();
}


// Replayability
function newGame(){
    clearFields();
    initializeKeys();
    randomizeItems();
}

// Clear the "selected" items array
function clearSelection(){
    // Get the items
    let items = game_area.querySelectorAll('.item');

    items.forEach(item => {
        // All HTML items will now be unselected
        item.classList.remove('selected');

        // Clear selected[] array
        selected.length = 0;
    });

    console.log('selected: ' + selected);
}

// Clear 
function submit(){
    let valid = true; // Global Variable

    // User must have selected four items
    if(selected.length == 4) {
        // Search items[] array to find 'parent difficulty'
        // A valid selected[] array means all items in selected[] belong to the same difficulty && same group
        
        // The logic: itemsArray[] is ordered and should have all 4 groups of 4 next to each other

        let base_difficulty_index;
        for(let i = 0; i < itemsArray.length; i++){
            // Find the index where the difficulty starts (should be a factor of 4)
            if(selected[0] === itemsArray[i]) {
                base_difficulty_index = i - (i % 4);
            }
            // console.log(base_difficulty_index);
        }

        // Search in itemsArray[] to see if selected[] elements are consecutive
        for(let i = 0; i < selected.length; i++){
            // Get itemsArray[] index
            let current_index = base_difficulty_index + i;

            // Check selected[] to see if it exists
            for(let j = 0; j < selected.length; j++){
                if(selected[j] === itemsArray[current_index]) {
                    break;
                }
                else if(j == 3) {
                    valid = false;
                    break;
                }
            }

            // Break if the selected[] values are wrong
            if(!valid){
                break;
            }
        }

      // Formulate output based on "valid" variable
      // "valid" == true The four selected responses belong to the same group.  
      // "valid" == false The four selected responses DO NOT belong to the same group.

      // Valid selected[] 4 answers
      if(valid){
        // Calculate the color to change boxes to
        let diff_color;
        let message_color;
        switch(base_difficulty_index) {
            case 0 :
                diff_color = '--color-easy';
                message_color = 'EASY';
                correct.push('easy');
                break;
            case 4 :
                diff_color = '--color-medium';
                message_color = 'MEDIUM';
                correct.push('medium');
                break;
            case 8 :
                diff_color = '--color-hard';
                message_color = 'HARD';
                correct.push('hard');
                break;
            case 12 :
                diff_color = '--color-expert';
                message_color = 'EXPERT';
                correct.push('expert');
                break;
        }

        console.log("new color: " + diff_color);

        // Do the color change
        // Get items
        let items = game_area.querySelectorAll('.item');

        // Ensure that selected[] still appears after shuffling
        // Ensure that correct[] still appears after shuffling
        // Check items[] to change currently selected[] to the appropriate color

        // correct[correct.length - 1] to check WHAT WHAT JUST ADDED
        items.forEach(child => {
            for(let i = 0; i < correct.length; i++){
                if(child.classList.contains(correct[i])){
                    // Remove 'selected' property
                    child.classList.remove('selected');

                    // Disable button functionality
                    child.disabled = true;

                    console.log(correct[i]);

                    // Only add "new" color changes for each incoming difficulty
                    if(selected.includes(child.textContent)) {
                        // Set the appropriate background color for the difficulty
                        child.style.backgroundColor = `var(${diff_color})`;
                    }
                }
            }
        });
        // Clear selected[] array
        selected.length = 0;
        
        // Set the message output (for correct answers)
        message = `Found <span style='color: var(${diff_color})'>${message_color}</span> - ${keysArray[base_difficulty_index / 4]}`;
        outcome_string.innerHTML = message;

        // Check win condition
        if(correct.length == 4) {
            endgame("WIN");
        }




      } // end valid-answer behaviors

      // Incorrectly selected[] 4 answers
      else {
        // Grab items
        let items = game_area.querySelectorAll('.item');

        // Clear selected properties
        items.forEach(item => {
            if(selected.includes(item.textContent)){
                item.classList.remove('selected');
            }
        });

        // Clear selected[] array
        selected.length = 0;

        console.log(selected);

        // Decrement Lives
        bang();

      }



    } // end four-selected behaviors

    // Error: items selected !== 4
    else {
        alert("Select exactly 4 items to submit. Thank you!");
    }
} // end submit behaviors




// Decrement lives count, handle end-game func
function bang(){
    // Decrement lives
    lives = lives - 1;
    lives_string.textContent = "Lives left: " + lives;

    // 0 lives = Game over state.
    if(lives == 0) {
        // Run end-game behavior with a loss
        endgame("LOSS");
    }
}


// Compute Endgame
// @param state - "WIN" or "LOSS"
function endgame(state){
    // In either case, we must disable all buttons except 'New Game'
    buttons_list.childNodes.forEach(button => {
        button.disabled = true;
    });

    document.querySelector('.new-game').disabled = false;

    if(state === "WIN") {
        message += '. Congratulations! You\'ve won!';
    }
    else if(state === "LOSS"){
        message = 'Sorry. You lost. Please start a new game.'
    }

    // Display appropriate message
    outcome_string.innerHTML = message;
}


// Let's Go
newGame();
















/* MODAL CONTROL */

// Manual modal controls since "data-target" and "data-toggle" have been deprecated :(


// Open modal
document.getElementById('howToPlayBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('howToPlayModal'));
    myModal.show();
});
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('learnMoreModal'));
    myModal.show();
});

// Close modal
var closeButtons = document.querySelectorAll('.btn-close-play[data-dismiss="modal"]');
closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modal = btn.closest('.modal');
        if (modal) {
            var modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    });
});





