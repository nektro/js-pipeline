# js-pipeline

pipeline-operator : A functional implementation of the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator)

[![NPM](https://nodei.co/npm/pipeline-operator.png)](https://nodei.co/npm/pipeline-operator/)

## Installation

on the web:
```html
<script src="path/to/pipeline-operator/index.js"></script>
```

via npm:
```bash
$ npm install --save pipeline-operator
```

via yarn:
```bash
$ yarn add pipeline-operator
```

## Basic Usage
```js
// done with |>
let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

// import with pipeline (npm)
import pipeline from "pipeline-operator";

// import on web
import pipeline from "./pipeline-operator/index.js";

// equivalent code
let result = pipeline(
    "hello",
    doubleSay,
    capitalize,
    exclaim
);
```

## Credits
- [Follow the proposal!](https://github.com/tc39/proposal-pipeline-operator)
- [See the inspiration](https://gist.github.com/jonathanKingston/4df71289a2cd8dd8306a)

## License

MIT, see [LICENSE](LICENSE)
