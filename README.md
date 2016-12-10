
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

If x and y size values are less than one (0) they will be normalized to 0.

You can call create multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = mazeFactory.create( { x: 5, y: 10 } );
    var maze2 = mazeFactory.create( { x: 7, y: 20 } );

    if(!maze1 || !maze2) ...

### maze.generate(spec = null);

Generates a maze by filling a connection grid with connection info. 

    maze.generate();
    
#### maze.generate(spec.mask = array)

Generates a maze with masked off cells.

    let spec = {
        mask: [
            { c: 2, r: 3 },
            { c: 2, r: 4 }
        ]
    };
    mazeGenerator.generate(spec);
    
#### maze.generate(spec.start = array)

Generates a maze starting at a cell other than 0,0. Useful when you want to mask off 0,0.

    let spec = {
        start: { c: 3, r: 3 },
        mask: [
            { c: 0, r: 0 },
            { c: 0, r: 1 },
            { c: 1, r: 0 },
            { c: 1, r: 1 }
        ]
    };
    mazeGenerator.generate(spec);

### maze.printBoard()

Logs to the console the generated maze. You should examine the source for this method to determine other ways to display the generated maze.

    maze.generate();
    maze.printBoard();

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

#### Version 0.1.6

* updated package to use @mitchallen/connection-grid version 0.1.7
* can now generate empty mazes
* negative x and y sizes will be normalized to zero

#### Version 0.1.5

* updated package to use @mitchallen/connection-grid version 0.1.5

#### Version 0.1.4

* added __start__ and __mask__ options to __generate__ method

#### Version 0.1.3

* updated documentation

#### Version 0.1.2

* now uses @mitchallen/connection-grid 0.1.3
* generate method now fills grid with zeros before generating maze
* max depth is now calculated automatically and no longer needs to be passed to generate method

#### Version 0.1.1 

* fixed error in documentation

#### Version 0.1.0 

* initial release











* * *
