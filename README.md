# @mitchallen/maze-generator

maze generator

[![CI](https://github.com/mitchallen/maze-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/mitchallen/maze-generator/actions/workflows/ci.yml)
[![Publish](https://github.com/mitchallen/maze-generator/actions/workflows/publish.yml/badge.svg)](https://github.com/mitchallen/maze-generator/actions/workflows/publish.yml)
[![Version](https://img.shields.io/github/package-json/v/mitchallen/maze-generator)](https://github.com/mitchallen/maze-generator/pkgs/npm/maze-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

* * *

## Installation

This package is published to **GitHub Packages**, not the public npm registry.

### 1. Create a GitHub personal access token

Go to **GitHub → Settings → Developer settings → Personal access tokens** and create a token with the `read:packages` scope.

### 2. Configure your project's `.npmrc`

Add the following to your project's `.npmrc` (or `~/.npmrc` for a global config):

```
@mitchallen:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 3. Install

```sh
npm install @mitchallen/maze-generator
```

* * *

## Usage

```js
"use strict";

var mazeFactory = require("@mitchallen/maze-generator");

let xSize = 5;
let ySize = 6;

var maze = mazeFactory.Square({ x: xSize, y: ySize });
```

* * *

## Methods

For more methods see the parent class: **[@mitchallen/connection-grid](https://github.com/mitchallen/connection-grid)**.

### gridFactory = factory.create(spec)

Deprecated. Use **Square** instead.

### mazeFactory = factory.Square(spec)

Returns a **square** maze generator object.

Takes a spec object with `x` and `y` values specifying the size of the maze. Values less than 1 are normalized to 0.

```js
var mazeFactory = require("@mitchallen/maze-generator");

var maze1 = mazeFactory.Square({ x: 5, y: 10 });
var maze2 = mazeFactory.Square({ x: 7, y: 20 });

maze1.generate();
maze2.generate();
```

### mazeFactory = factory.Hexagon(spec)

Returns a **hexagon** maze generator object.

Takes a spec object with `x` and `y` values specifying the size of the maze. Values less than 1 are normalized to 0.

```js
var mazeFactory = require("@mitchallen/maze-generator");

var maze1 = mazeFactory.Hexagon({ x: 5, y: 10 });
var maze2 = mazeFactory.Hexagon({ x: 7, y: 20 });

maze1.generate();
maze2.generate();
```

### mazeFactory = factory.Triangle(spec)

Returns a **triangle** maze generator object.

Takes a spec object with `x` and `y` values specifying the size of the maze. Values less than 1 are normalized to 0.

```js
var mazeFactory = require("@mitchallen/maze-generator");

var maze1 = mazeFactory.Triangle({ x: 5, y: 10 });
var maze2 = mazeFactory.Triangle({ x: 7, y: 20 });

maze1.generate();
maze2.generate();
```

### mazeFactory = factory.Circle(spec)

Returns a **circle** maze generator object.

Takes a spec object with a `rings` value specifying the size of the maze.

```js
var mazeFactory = require("@mitchallen/maze-generator");

var maze1 = mazeFactory.Circle({ rings: 5 });
var maze2 = mazeFactory.Circle({ rings: 6 });

maze1.generate();
maze2.generate();
```

### maze.generate(spec)

Generates a maze by filling a connection grid with connection info.

```js
maze.generate();
```

#### spec.mask

Generates a maze with masked-off cells.

```js
mazeGenerator.generate({
    mask: [
        { c: 2, r: 3 },
        { c: 2, r: 4 }
    ]
});
```

#### spec.start

Generates a maze starting at a cell other than `0,0`. Useful when `0,0` is masked.

```js
mazeGenerator.generate({
    start: { c: 3, r: 3 },
    mask: [
        { c: 0, r: 0 },
        { c: 0, r: 1 },
        { c: 1, r: 0 },
        { c: 1, r: 1 }
    ]
});
```

### maze.printBoard()

Logs the generated maze to the console.

```js
maze.generate();
maze.printBoard();
```

Example output:

```
SQUARE MAZE: 20, 20
 _______________________________________
|_  |    ___  |___   _   _|  ___   _  | |
| | | |___  | |   |_  |_____| |  _|  _| |
|  _| |_  | |___| | |  _____  |_  | |_  |
...
```

* * *

## Testing

```sh
npm test
```

Run a specific suite:

```sh
npm run test-square
npm run test-hexagon
npm run test-triangle
npm run test-circle
npm run test-ascii
```

* * *

## Publishing

Releases are published automatically to GitHub Packages when a GitHub Release is created.

To cut a new release:

```sh
npm version patch   # or minor / major
git push origin master --tags
```

Then go to **GitHub → Releases → Draft a new release**, pick the tag, and publish. The [publish workflow](.github/workflows/publish.yml) handles the rest.

* * *

## Repo

* [github.com/mitchallen/maze-generator](https://github.com/mitchallen/maze-generator)

* * *

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code before submitting a pull request.

* * *

## License

MIT
