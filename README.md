# KABOOM! opens tabs for you, so you can get into your project mindset faster.

Set your config once, so that you don't have to activate that python environment, open tabs for logs, start server, seed database - you get the point.

## TODO

+ [ ] Allow this to be installed with something like `npm install -g`


## Updates by David (10/8/2019)

+ Modifies to use Terminal.app
+ Modifies bin/kaboom to be runnable from globally installed version (usr bin or symlinked)
+ Modifies configuration file to be kaboom.json
+ Modifies running to open a new window and then run all windows as tabs in new window

Now install this globally, make `kaboom` accessible on your terminal. Then you can do:

+ `cd <your project>`
+ `kaboom`

And your project terminal windows with all your commands will run! KABOOM.


## Installation

- ### Install ttab:
  `[sudo] npm install ttab -g`

  **Important**: Irrespective of installation method, `Terminal` / `iTerm2` (`iTerm.app`) needs to be granted _access for assistive devices_ in order for `ttab` to function properly, which is a _one-time operation that requires administrative privileges_.
  If you're not prompted on first run and get an error message instead, go to `System Preferences > Security & Privacy`, tab `Privacy`, select `Accessibility`, unlock, and make sure `Terminal.app` / `iTerm.app` is in the list on the right and has a checkmark.
  For more information, see [Apple's support article on the subject](https://support.apple.com/en-us/HT202802)

  *(Part of readme from https://raw.githubusercontent.com/mklement0/ttab/)*

- ### Install dependencies
  `yarn`

## Config
Have a look at `config.sample.js` and create `config.js` that suits you.

`"splits"` stand for tab split.

`"title"` field seems to be silently failing in `ttab` (they mention iTerm support as experimental) but it makes the `config.json` easier to understand, so I use it anyways.


## Run

`./bin kaboom`
