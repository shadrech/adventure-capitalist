<p align="center">
<img height="150" src="./src/assets/logo@1.5x.png">
</p>

<p align="center"><b><a href="https://tatendachawanzwa.com/adventure-capitalist/index.html">Adventure Capitalist</a></b></p>

## Tech stack
React, Hooks, Context, Typescript, react-countdown ...

Design/gameplay inspired by [original Adventure Capitalist Online Game](http://en.gameslol.net/adventure-capitalist-1086.html)

Visit [my site](https://tatendachawanzwa.com/adventure-capitalist/index.html) for a demo or
In the project directory, you can run:

```bash
yarn
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### TODOs

A few things could be improved with more time
 - Add tests using jest, react-testing-library/enzyme and cypress
 - Loader code uses css and animates the width of the arrow to create loading effect. Probably best to find a way to animate css `transform` property as thats more perfomant (also loader and timer go out of sync after awhile. Needs fixing... or maybe its a feature 🤔)
 - Display earnings in a more nicer way, than just logging them
 - Maybe add some sort of deployment pipeline. Nice easy choice would be [serverless components](https://github.com/serverless/components)
