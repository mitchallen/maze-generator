
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

```js
    "use strict";

    var mazeFactory = require("@mitchallen/maze-generator");

    let xSize = 5;
    let ySize = 6;

    var maze = mazeFactory.Square({ x: xSize, y: ySize });
```
    
## Browser Usage:

Example:

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Maze Generator Example</title>
        <meta name="description" content="Maze Generator Example">
        <script src="https://unpkg.com/@mitchallen/maze-generator@0.1.24/dist/maze-generator.min.js"></script>
        <script>
          var factory = window.MitchAllen.MazeGenerator;
          console.log(factory);
          var xSize = 10, ySize = 5;
          var sm = factory.Square( { x: xSize, y: ySize } );
          console.log(sm);
          sm.generate();
          sm.printBoard(); 
        </script>
      </head>
      <body>
        <h1>Maze Generator Example</h1>
        <p>See JavaScript developer console for output.</p>
      </body>
    </html>
```


* * *

## Methods

For more methods see the parent class: __[@mitchallen/connection-grid](https://www.npmjs.com/package/@mitchallen/connection-grid)__.

### gridFactory = factory.create(spec)

The __create__ method is deprecated. Use __Square__ instead.

### mazeFactory = factory.Square(spec)

Factory method that returns a __square__ maze generator object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the maze.

If x and y size values are less than one (0) they will be normalized to 0.

You can call Square multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = mazeFactory.Square( { x: 5, y: 10 } );
    var maze2 = mazeFactory.Square( { x: 7, y: 20 } );

    maze1.generate();
    maze2.generate();
    
### mazeFactory = factory.Hexagon(spec)

Factory method that returns a __hexagon__ maze generator object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the maze.

If x and y size values are less than one (0) they will be normalized to 0.

You can call Hexagon multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = mazeFactory.Hexagon( { x: 5, y: 10 } );
    var maze2 = mazeFactory.Hexagon( { x: 7, y: 20 } );

    maze1.generate();
    maze2.generate();
    
### mazeFactory = factory.Triangle(spec)

Factory method that returns a __triangle__ maze generator object. 

It takes one spec parameter that must be an object with x and y values specifying the size of the maze.

If x and y size values are less than one (0) they will be normalized to 0.

You can call Triangle multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = mazeFactory.Triangle( { x: 5, y: 10 } );
    var maze2 = mazeFactory.Triangle( { x: 7, y: 20 } );

    maze1.generate();
    maze2.generate();

### mazeFactory = factory.Circle(spec)

Factory method that returns a __circle__ maze generator object. 

It takes one spec parameter that must be an object with a __rings__ value specifying the size of the maze.

You can call Circle multiple times to create multiple mazes.

    var mazeFactory = require("@mitchallen/maze-generator");

    var maze1 = mazeFactory.Circle( { rings: 5 } );
    var maze2 = mazeFactory.Circle( { rings: 6 } );

    maze1.generate();
    maze2.generate();

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

    SQUARE MAZE: 20, 20
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
    

    HEXAGON MAZE: 10, 5
     _   _   _   _   _   
    / \_/ \_/ \_/ \_/ \_ 
    \ / \_       _  \_  \
    /  _  \_/ \_/  _/ \ /
    \_/ \_  \ /  _/  _  \
    /  _  \ / \ /  _/ \ /
    \_/ \ /  _/ \ /  _/ \
    /  _  \_/ \ / \ / \ /
    \ /  _/  _/ \ /  _  \
    / \_/ \   \_  \ / \_/
    \_   _  \_   _/  _  \
      \_/ \_/ \_/ \_/ \_/
      

    TRIANGLE MAZE: 10, 5
      ____________________        
     /        \          /        
    /__  __    \        /         
    \       \   \   \   \         
     \ __    \   \   \   \        
     /    \   \      /   /        
    /      \   \ __ /   /         
    \   \      /    \   \         
     \   \ __ /      \   \        
     /            \      /        
    /__  __  __  __\ __ /         
                      

    CIRCLE MAZE: 5
    _________________________________________________
    | _ _ | _ |____ __| _ ___ | _____ __| ___ | ___ |
    __| |_| |____ |__ __|__ |_|__ | | | __| |___| |__
    |_______|   ____|___|___________|_______________|
    _       |________________________________________
    |_______________________________________________|


## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test

Run all tests using nodemon:

    $ npm run test-nodemon
    
Run suites using nodemon:

    $ npm run test-square
    $ npm run test-hexagon
    $ npm run test-triangle
    $ npm run test-circle
   
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

#### Version 0.1.21

* replaced modules/square.js with @mitchallen/maze-generator-square
* updated browser example

#### Version 0.1.20

* Fixed issue integrating new core and grunt with npm test

#### Version 0.1.19

* replaced modules/base.js with @mitchallen/maze-generator-core
* square now uses @mitchallen/connection-grid-square instead of @mitchallen/connection-grid

#### Version 0.1.18

* removed old file from dist folder

#### Version 0.1.17

* added browser client example
* updated documentation

#### Version 0.1.16

* updated package to use @mitchallen/connection-grid version 0.1.25
* added browser client support

#### Version 0.1.15

* updated package to use @mitchallen/connection-grid version 0.1.19

#### Version 0.1.14

* updated package to use @mitchallen/connection-grid version 0.1.18

#### Version 0.1.13

* updated package to use @mitchallen/connection-grid version 0.1.17
* Moved __connectsAny__ from __Circle__ to @mitchallen/connection-grid

#### Version 0.1.12

* Added __Circle__ method
* updated package to use @mitchallen/connection-grid version 0.1.16

#### Version 0.1.11

* Added __Triangle__ method

#### Version 0.1.10

* Added __Hexagon__ method

#### Version 0.1.9

* Corrected version history

#### Version 0.1.8

* updated package to use @mitchallen/connection-grid version 0.1.14
* now use connection-grid.Square instead of .create (deprecated)
* Restructured code base
* Added __Square__ method to replace __create__ method (deprecated)

#### Version 0.1.7

* updated package to use @mitchallen/connection-grid version 0.1.8

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
