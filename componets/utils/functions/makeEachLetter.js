const Letter = require('../classes/letter');




// const A = new Letter(1, 'A',"aliceblue")
function createLetterObj() {
    //function to get a random letter in the abcList
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

// console.log(randomCharacter);

// function to get the number corsponding with the order of the letter in the list 
function getLetterNumber() {

    var letterNumber = 0

    for (let index = 0; index < alphabet.length; index++) {

        if(randomCharacter == alphabet[index]) {
            letterNumber = index + 1
        } 
        else {
            console.log("thats not the one");
        }

    
        
    }
    return letterNumber

}
console.log(getLetterNumber());

    // function to get a random color in the ColorList 
    const colorList = [
        "antiquewhite", 
        "aqua", 
        "aquamarine", 
        "azure", 
        "beig",
        "black",
        "blanchedalmond",
        "blue",
        "blueviolet",
        "brown",
        "burlywood",
        "cadetblue",
        "chartreuse",
        "chocolate",
        "coral",
        "cornflowerblue",
        "cornsilk",
        "crimson",
        "cyan",
        "darkblue",
        "darkcyan",
        "darkgoldenrod",
        "darkgray",
        "darkgreen",
        "darkgrey",
        "darkkhaki",
        "darkmagenta",
        "darkolivegreen",
        "darkorange",
        "darkorchid",
        "darkred",
        "darksalmon",
        "darkseagreen",
        "darkslateblue",
        "darkslategrey",
        "darkturquoise",
        "darkviolet",
        "deeppink",
        "deepskyblue",
        "dimgray",
        "dimgrey",
        "dodgerblue",
        "firebrick",
        "floralwhite",
        "forestgreen",
        "fuchsia",
        "gainsboro",
        "ghostwhite",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greenyellow",
        "grey",
        "honeydew",
        "hotpink",
        "indianred",
        "indigo",
        "ivory",
        "khaki",
        "lavender",
        "lavenderblush",
        "lawngreen",
        "lemonchiffon",
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightgreen",
        "lightgrey",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategrey",
        "lightsteelblue",
        "lightyellow",
        "lime",
        "limegreen",
        "linen",
        "magenta",
        "maroon",
        "mediumaquamarine",
        "mediumblue",
        "mediumorchid",
        "mediumpurple",
        "mediumseagreen",
        "mediumslateblue",
        "mediumspringgreen",
        "mediumturquoise",
        "mediumvioletred",
        "midnightblue",
        "mintcream",
        "mistyrose",
        "moccasin",
        "navajowhite",
        "navy",
        "oldlace",
        "olive",
        "olivedrab",
        "orange",
        "orangered",
        "orchid",
        "palegoldenrod",
        "palegreen",
        "paleturquoise",
        "palevioletred",
        "papayawhip",
        "peachpuff",
        "peru",
        "pink",
        "plum",
        "powderblue",
        "purple",
        "rebeccapurple",
        "red",
        "rosybrown",
        "royalblue",
        "saddlebrown",
        "salmon",
        "sandybrown",
        "seagreen",
        "seashell",
        "sienna",
        "silver",
        "skyblue",
        "slateblue",
        "slategray",
        "snow",
        "springgreen",
        "steelblue",
        "tan",
        "teal",
        "thistle",
        "tomato",
        "turquoise",
        "violet",
        "wheat",
        "white",
        "whitesmoke",
        "yellow",
        "yellowgreen"]

    const randomColor = colorList[Math.floor(Math.random() * colorList.length)]

    console.log(randomColor);

    // function to create an new obj from the letter class 
    // random number 1 though 26
    // const randomNumber = Math.floor(Math.random() * alphabet.length);
    var numbderOfRandomChar = getLetterNumber()

const NewLetter = new Letter(numbderOfRandomChar, randomCharacter.toUpperCase(), randomColor);
console.log(NewLetter);
    // const A = new Letter(1, 'A', 'yellow');

    // a for loop to create an obj for each of the letters in the abcList 
    return NewLetter

}

 const letter = createLetterObj()

 console.log(letter);