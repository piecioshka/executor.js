# executor-editor

[![npm version](https://badge.fury.io/js/executor-editor.svg)](https://badge.fury.io/js/executor-editor)
[![downloads count](https://img.shields.io/npm/dt/executor-editor.svg)](https://www.npmjs.com/~piecioshka)
[![dependencies](https://david-dm.org/piecioshka/executor-editor.svg)](https://github.com/piecioshka/executor-editor)
[![snyk](https://snyk.io/test/github/piecioshka/executor-editor/badge.svg?targetFile=package.json)](https://snyk.io/test/github/piecioshka/executor-editor?targetFile=package.json)

:hammer: Display and evaluate your JavaScript code.

![](./screenshots/editor.png)

## Demo 🎉

<https://piecioshka.github.io/executor-editor/demo/>

## Features

* :white_check_mark: Embed any programming code
* :white_check_mark: Highlight JavaScript syntax
* :white_check_mark: Auto-evaluate the JavaScript code
* :white_check_mark: Execute code on demand
* :white_check_mark: Layout modes: `horizontal`, `vertical`
* :white_check_mark: Multiple instance on single page
* :white_check_mark: Support skins
* :white_check_mark: Display errors in red color

## Installation

```bash
npm install executor-editor
```

or

```bash
bower install executor-editor
```

## Usage

1. Add CSS class `executor-editor` to HTML element:

    ```html
    <pre class="executor-editor">
    class Cake {
        toString() {
            return '[Cake]';
        }
    }

    console.log(String(new Cake()));
    </pre>
    ```

2. Add on the bottom of page, example before `</body>`

    ```html
    <link href="/path/to/executor-editor/dist/executor-editor.css"/>
    <link href="/path/to/executor-editor/dist/skins/blue-skin.css"/>
    <link href="/path/to/executor-editor/dist/skins/normal-skin.css"/>

    <script src="/path/to/executor-editor/dist/executor-editor.js"></script>
    <script>ExecutorEditor.setup();</script>
    ```

## API

All settings you can pass by HTML attributes.

### `data-autoevaluate`

* Default: `true`
* Options: `true` | `false`
* Example:

    ```html
    <pre class="executor-editor" data-autoevaluate="false">
        [...]
    </pre>
    ```

### `data-autofocus`

* Default: `true`
* Options: `true` | `false`
* Example:

    ```html
    <pre class="executor-editor" data-autofocus="true">
        [...]
    </pre>
    ```

### `data-skin`

* Default: `normal`
* Options: `normal` | `blue`
* Example:

    ```html
    <pre class="executor-editor" data-skin="blue">
        [...]
    </pre>
    ```

## Purpose

Project was made to embed code on presentation slides.

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2015-2019
