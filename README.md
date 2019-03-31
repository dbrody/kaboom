# KABOOM! opens tabs for you, so you have few more secs to check that tiktoks you secretly love.

Set your config once, so that you don't have to activate that python environment, open tabs for logs, start server, seed database - you get the point.

## Installation

### `[sudo] npm install ttab -g`

**Important**: Irrespective of installation method, `Terminal` / `iTerm2` (`iTerm.app`) needs to be granted _access for assistive devices_ in order for `ttab` to function properly, which is a _one-time operation that requires administrative privileges_.  
If you're not prompted on first run and get an error message instead, go to `System Preferences > Security & Privacy`, tab `Privacy`, select `Accessibility`, unlock, and make sure `Terminal.app` / `iTerm.app` is in the list on the right and has a checkmark.  
For more information, see [Apple's support article on the subject](https://support.apple.com/en-us/HT202802)

*(Part of readme from https://raw.githubusercontent.com/mklement0/ttab/)*

## Config
Use `config.sample.json` to create `config.json`.

`"splits"` stand for tab split.

`"title"` field seems to be silently failing in `ttab` (they mention iTerm support as experimental) but it makes the `config.json` easier to understand, so I use it anyways.


## Run 

`./bin kaboom`
