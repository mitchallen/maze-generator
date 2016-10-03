
@mitchallen/maze-generator
==
maze generator
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/maze-generator --save
  
* * *

## Usage

    "use strict";

    var mazeFactory = require("@mitchallen/maze-generator");

    let xSize = 5;
    let ySize = 6;

    var maze = mazeFactory.create({ x: xSize, y: ySize });

## Methods

For more methods see the parent class: __[@mitchallen/connection-grid](https://www.npmjs.com/package/@mitchallen/connection-grid)__.

### mazeFactory = factory.create(spec)

Factory method that returns a maze generator object. This overrides the __create__ method in the parent class.

It takes one spec parameter that must be an object with x and y values specifying the size of the maze.

The x and y size values can not be less than one (1).

The method will return null if create fails, such as with bad parameters. You can call create multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = gridFactory.create( { x: 5, y: 10 } );
    var maze2 = gridFactory.create( { x: 7, y: 20 } );

    if(!maze1 || !maze2) ...

### maze.generate(maxDepth);

Generates a maze by filling a connection grid with connection info. The __maxDepth__ value is used as a safety valve to ensure that the recursive algorithm doesn't go on forever. If during the maze generation the maximum depth has been reached, a warning will be written to the console. You can experiment by gradually increasing it.

    let maxDepth = 300;
    maze.generate(maxDepth);
    maze.printBoard();


### maze.printBoard()

Logs to the console the generated maze.n You should examine the source for this method to determine other ways to display the generated maze.

Example:

    MAZE: 20, 20
     _______________________________________
    |_  |    ___  |___   _   _|  ___   _  | |
    | | | |___  | |   |_  |_____| |  _|  _| |
    |  _| |_  | |___| | |  _____  |_  | |_  |
    |_  |  ___|_  | | |  _|  _  |___| | |   |
    | | |_|  _____| | |_|  _| | |  ___|___| |
    | |_____|    ___|_  | |  _|___|     |  _|
    |_____   _|_|  _  | | |    _|  _| |_|_  |
    |  _____|  ___| |___| |_| |  _|  _|  ___|
    | |   |  _|_   _______|  _| | |_  | |   |
    |  _| | |   | |  ___    |  _| |  _| |_| |
    |_  |___| |___|  _|  _| | |_  |_  |_  | |
    | | |  ___  | | |   |___|_  |_  |_  |_  |
    | | |___  | | | | | |  _____|  ___|_____|
    |  _|   | | | | | | |_  | |  _  |  _   _|
    |_  | |___| | | | |_|  _| | |  _| | |_  |
    |  _|___  | |  _|_____|_  | |_____|  _| |
    |_  |  ___| |_  |   |   |___   ___  |  _|
    |  _|_|  ___| | | |___| |   |_|   | |_  |
    | |  ___| |   | | |  _| | |_  | | |___| |
    |___|_______|_____|_______|_____|_______|

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/maze-generator.git](https://bitbucket.org/mitchallen/maze-generator.git)
* [github.com/mitchallen/maze-generator.git](https://github.com/mitchallen/maze-generator.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
