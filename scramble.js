/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**
 * help()
 * Displays the game instructions.
 * @Return: String
 */

function help () {
  return `Welcome to Scramble. 
The game where you unscramble letters to make words.

Once you start the game, you will be given a scrambled word.
If you correctly guess the word, you will receive a point.
If you guess incorrectly you will receive a strike.
You can also pass on a word. 

To start a new game use start().
To make guess use guess('word').
To skip a word use pass().
To show these instructions again use help().`
}

// Displays the instructions when the page loads.
console.log(help())

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

/**
 * Create an array of words to be use for the game
 * Must contain at least 10 items
 */
const words = [
  'Aardvark',
  'Albatross',
  'Alligator',
  'Alpaca',
  'Ant',
  'Anteater',
  'Antelope',
  'Ape',
  'Armadillo',
  'Donkey',
  'Baboon',
  'Badger',
  'Barracuda',
  'Bat',
  'Bear',
  'Beaver',
  'Bee',
  'Bison',
  'Boar',
  'Buffalo',
  'Butterfly',
  'Camel',
  'Capybara',
  'Caribou',
  'Cassowary',
  'Cat',
  'Caterpillar',
  'Cattle',
  'Chamois',
  'Cheetah',
  'Chicken',
  'Chimpanzee',
  'Chinchilla',
  'Chough',
  'Clam',
  'Cobra',
  'Cockroach',
  'Cod',
  'Cormorant',
  'Coyote',
  'Crab',
  'Crane',
  'Crocodile',
  'Crow',
  'Curlew',
  'Deer',
  'Dinosaur',
  'Dog',
  'Dogfish',
  'Dolphin',
  'Dotterel',
  'Dove',
  'Dragonfly',
  'Duck',
  'Dugong',
  'Dunlin',
  'Eagle',
  'Echidna',
  'Eel',
  'Eland',
  'Elephant',
  'Elk',
  'Emu',
  'Falcon',
  'Ferret',
  'Finch',
  'Fish',
  'Flamingo',
  'Fly',
  'Fox',
  'Frog',
  'Gaur',
  'Gazelle',
  'Gerbil',
  'Giraffe',
  'Gnat',
  'Gnu',
  'Goat',
  'Goldfinch',
  'Goldfish',
  'Goose',
  'Gorilla',
  'Goshawk',
  'Grasshopper',
  'Grouse',
  'Guanaco',
  'Gull',
  'Hamster',
  'Hare',
  'Hawk',
  'Hedgehog',
  'Heron',
  'Herring',
  'Hippopotamus',
  'Hornet',
  'Horse',
  'Human',
  'Hummingbird',
  'Hyena',
  'Ibex',
  'Ibis',
  'Jackal',
  'Jaguar',
  'Jay',
  'Jellyfish',
  'Kangaroo',
  'Kingfisher',
  'Koala',
  'Kookabura',
  'Kouprey',
  'Kudu',
  'Lapwing',
  'Lark',
  'Lemur',
  'Leopard',
  'Lion',
  'Llama',
  'Lobster',
  'Locust',
  'Loris',
  'Louse',
  'Lyrebird',
  'Magpie',
  'Mallard',
  'Manatee',
  'Mandrill',
  'Mantis',
  'Marten',
  'Meerkat',
  'Mink',
  'Mole',
  'Mongoose',
  'Monkey',
  'Moose',
  'Mosquito',
  'Mouse',
  'Mule',
  'Narwhal',
  'Newt',
  'Nightingale',
  'Octopus',
  'Okapi',
  'Opossum',
  'Oryx',
  'Ostrich',
  'Otter',
  'Owl',
  'Oyster',
  'Panther',
  'Parrot',
  'Partridge',
  'Peafowl',
  'Pelican',
  'Penguin',
  'Pheasant',
  'Pig',
  'Pigeon',
  'Pony',
  'Porcupine',
  'Porpoise',
  'Quail',
  'Quelea',
  'Quetzal',
  'Rabbit',
  'Raccoon',
  'Rail',
  'Ram',
  'Rat',
  'Raven',
  'Red deer',
  'Red panda',
  'Reindeer',
  'Rhinoceros',
  'Rook',
  'Salamander',
  'Salmon',
  'Sand Dollar',
  'Sandpiper',
  'Sardine',
  'Scorpion',
  'Seahorse',
  'Seal',
  'Shark',
  'Sheep',
  'Shrew',
  'Skunk',
  'Snail',
  'Snake',
  'Sparrow',
  'Spider',
  'Spoonbill',
  'Squid',
  'Squirrel',
  'Starling',
  'Stingray',
  'Stinkbug',
  'Stork',
  'Swallow',
  'Swan',
  'Tapir',
  'Tarsier',
  'Termite',
  'Tiger',
  'Toad',
  'Trout',
  'Turkey',
  'Turtle',
  'Viper',
  'Vulture',
  'Wallaby',
  'Walrus',
  'Wasp',
  'Weasel',
  'Whale',
  'Wildcat',
  'Wolf',
  'Wolverine',
  'Wombat',
  'Woodcock',
  'Woodpecker',
  'Worm',
  'Wren',
  'Yak',
  'Zebra'
]

/**
 * An object that will hold the game status including
 * - The game active status
 * - The random list of words
 * - The current word
 * - The current scrambled word
 * - The number of strikes
 * - The number of points
 * - The maximum number of strikes allowed
 * - The number of passes used
 * - The maximum number of passes
 */
const game = {
  active: false,
  word: null,
  scrambled: null,
  strikes: 0,
  points: 0,
  maxStrikes: 3,
  maxPasses: 3,
  passes: 0
}

function getWord () {
  game.word = game.words.splice(0, 1)[0]

  return shuffle(game.word).toUpperCase()
}

/**
 * The start function: ()
 * Check if the game active status is false
 *  Set game active to true
 *  Set game strikes to 0
 *  Set game points to 0
 *  Set game passes to 0
 *  Get a new random list of words
 *  Set game words to the list of words
 *  Get the first word off the list
 *  Set game current word to the new word
 *  Scramble the word and set to uppercase
 *  Set game scramble word to the scrambled word
 *  Response: The scrambled word
 * else
 *  Response: The game cannot be started
 */
function start () {
  if (!game.active) {
    game.active = true
    game.strikes = 0
    game.passes = 0
    game.words = shuffle(words).slice(0, 10)
    game.scrambled = getWord()

    return game.scrambled
  } else {
    console.warn('A game has already been started.')
  }
}

/**
 * The guess function: (word)
 * Check if the game active status is true
 *  Check if word is equal to game current word (adjust case)
 *    Increase game points by 1
 *    Check if there are more words in the scrambled list
 *      Get next word off the list
 *      Set game current word to new word
 *      Scramble the word and set to uppercase
 *      Set game scramble word to the scrambled word
 *      Response: Guess is correct
 *      Response: Next scrambled word
 *    else
 *      Set game active to false
 *      Response: No more words, final score
 *      Response: Play again
 *  else
 *    Increase game strikes by 1
 *    Check if game strikes is greater or equal to game max strikes
 *      Set game active to false
 *      Response: Out of strikes, final score
 *      Response: Play again
 *    else
 *      Response: Guess is incorrect, remaining strikes
 *      Response: Current scrambled word
 * else
 *  Response: No current game
 *  Response: Use start()
 */
function guess (word) {
  if (game.active) {
    if (word.toUpperCase() === game.word.toUpperCase()) {
      game.points++

      if (game.words.length) {
        game.scrambled = getWord()
        console.warn(`Correct! Current score: ${game.points}`)
        return `Next word: \n\n${game.scrambled}`
      } else {
        game.active = false
        console.warn(`There are no more words. Game over. \nFinal score: ${game.points}`)
        return 'Use the start() to play again.'
      }
    } else {
      game.strikes++

      if (game.strikes >= game.maxStrikes) {
        game.active = false
        console.warn(`You are out of strikes. Game over. \nFinal score: ${game.points}.`)
        return 'Please use start() to start a new game.'
      } else {
        console.warn(`Wrong! You have ${game.maxStrikes - game.strikes} strikes left.`)
        return `Current word: \n\n${game.scrambled}`
      }
    }
  } else {
    console.warn('There is no current game.')
    return 'Please use start() to start a new game.'
  }
}

/**
 * The pass function: ()
 *  Check if the game active status is true
 *    Check if the number of passes used is less than the max number of passes
 *      Increase the number of passes used
 *      Response: Pass used, passes remaining
 *      Get next word off the list
 *      Set game current word to new word
 *      Scramble the word and set to uppercase
 *      Set game scramble word to the scrambled word
 *      Response: Next scrambled word
 *    else
 *      Response: No passes left
 *      Response: Current scrambled word
 *  else
 *    Response: No current game
 *    Response: Use start()
 */
function pass () {
  if (game.active) {
    if (game.passes < game.maxPasses) {
      game.passes++

      console.warn(`You used a pass. You have ${game.maxPasses -
        game.passes} passes left.`)
      return `Next word: \n\n${getWord()}`
    } else {
      console.warn('You have no passes left.')
      return `Current word: \n\n${game.scrambled}`
    }
  } else {
    return 'There is no current game. Please use start() to start a new game.'
  }
}
