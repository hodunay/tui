
# Node.js Terminal UI

<p align="center">
Minimal and extensible toolkit for building interactive CLI flows in Node.js.
</p>

<p align="center">

![npm version](https://img.shields.io/npm/v/@minojs/tui)
![npm downloads](https://img.shields.io/npm/dm/@minojs/tui)
![node version](https://img.shields.io/node/v/@minojs/tui)
![license](https://img.shields.io/npm/l/@minojs/tui)

</p>

---

## Overview

**Node.js Terminal UI (TUI)** is a minimal toolkit for building interactive command-line interfaces.

It allows you to define a **flow of elements** that run sequentially in the terminal.  
Each element can display information, collect input, or execute logic.

Typical use cases include:

- CLI installers
- project generators
- deployment scripts
- interactive configuration tools
- surveys and questionnaires

The toolkit focuses on **simplicity, small footprint, and extensibility**.

Built-in elements include:

- Message
- Question
- Select
- Multi-select
- Wait / Loader
- Confirmation
- Function executor

TUI also supports:

- themes
- input validation
- custom elements
- event hooks

---

# Demo

Example CLI interaction:

```

> Welcome to TUI

? What is your name?

> Igor

✔ Environment: Production
✔ Continue deployment? Yes

```

Add a GIF demo in your repository:

```

docs/demo.gif

````

Example embed:

```markdown
![demo](docs/demo.gif)
````

---

# Why choose TUI

* zero heavy dependencies
* minimal runtime
* extensible elements
* themeable
* designed for CLI tooling
* simple sequential flow architecture

---

# Installation

```bash
npm install @minojs/tui
```

---

# Getting started

Create a simple CLI flow.

```javascript
import TUI from '@minojs/tui'

// Define a flow
const tui = new TUI([
    { type: 'message', label: 'Welcome to TUI!' },
    {
        type: 'question',
        label: 'What is your first name?',
        placeholder: 'first name',
        name: 'firstname'
    }
])

// Ask a single question outside of flow
tui.question({
    label: 'What is your last name?',
    placeholder: 'last name',
    name: 'lastname'
})

// Run the flow
const result = await tui.run()

console.log(result)
```

`run()` executes the flow sequentially and returns collected values.

Example result:

```js
{
  firstname: "Igor",
  lastname: "Hodunay"
}
```

---

# Configuration

A `TUI` instance can be created using either:

* a **flow array**
* a **configuration object**

Configuration allows you to extend the core functionality.

```javascript
const config = {
    flow: [],
    theme: class {},
    validator: class {},
    elements: []
}

const tui = new TUI(config)
```

### Options

| Option    | Description                         |
| --------- | ----------------------------------- |
| flow      | Default sequence of elements        |
| theme     | Theme class controlling CLI styling |
| validator | Validation module                   |
| elements  | Custom elements to extend TUI       |

---

# Elements

TUI includes a small set of built-in elements for common CLI interactions.

Each element is internally registered using:

```
Element.registerType()
```

Elements can be used inside a flow or called directly from the `tui` instance.

---

# Message

Displays static text in the terminal.

Useful for:

* headers
* instructions
* progress messages

Within flow:

```js
{ type: 'message', label: 'Welcome to the CLI!' }
```

Standalone usage:

```js
tui.message('Welcome to the CLI!')
```

or

```js
tui.message({ label: 'Welcome to the CLI!' })
```

---

# Question

Prompts the user for text input.

The value will be stored under the specified `name`.

```js
{
  type: 'question',
  label: 'What is your name?',
  placeholder: 'John',
  name: 'username'
}
```

Alternative usage:

```js
tui.question({
    label: 'What is your name?',
    placeholder: 'John',
    name: 'username'
})
```

Aliases:

```js
tui.ask({...})
```

---

# Select

Allows the user to choose **one option** from a list.

```js
{
    type: 'select',
    label: 'Choose environment',
    options: ['Development', 'Production'],
    name: 'env'
}
```

Standalone usage:

```js
tui.select({
    label: 'Choose environment',
    options: ['Development', 'Production'],
    name: 'env'
})
```

Navigation is typically handled with arrow keys.

---

# Multi-Select

Allows selecting **multiple options**.

```js
{
  type: 'multiselect',
  label: 'Select features',
  options: ['Auth', 'Payments', 'Analytics']
}
```

Standalone usage:

```js
tui.multiselect({
    label: 'Select features',
    options: ['Auth', 'Payments', 'Analytics']
})
```

---

# Confirmation

Simple Yes / No confirmation prompt.

Returns `true` or `false`.

```js
{
  type: 'confirm',
  label: 'Continue deployment?'
}
```

Standalone usage:

```js
tui.confirm({
    label: 'Continue deployment?'
})
```

---

# Loader

Displays a waiting state during async tasks.

Typical usage:

```js
{
    type: 'loader',
    text: 'Processing...'
}
```

Often used together with tasks or async operations.

---

# Task / Function executor

Runs custom logic inside the flow.

```js
{
    type: 'task',
    run: async (context) => {
        console.log('Processing...')
    }
}
```

Useful for:

* API calls
* file operations
* build steps
* deployment logic

Standalone usage:

```js
tui.task({
    run: async (context) => {
        console.log('Processing...')
    }
})
```

---

# Keyboard Controls

| Key   | Action        |
| ----- | ------------- |
| ↑ ↓   | navigate      |
| ← →   | change option |
| space | toggle        |
| enter | confirm       |

You can override key behavior using custom actions:

```js
actions: {
    return: value => console.log(value)
}
```

---

# Events

Elements support lifecycle hooks.

```js
{
    type: 'question',
    label: 'Your name',
    before: () => console.log('Starting question'),
    after: () => console.log('Answer received')
}
```

These hooks allow you to run custom logic before or after an element executes.

---

# Validation

Input values can be validated using a validation function or module.

Validator receives the current value and must return:

* `true` → valid
* `string` → error message

Example:

```js
{
    type: 'question',
    label: 'Email',
    validate: value => value.includes('@') || 'Invalid email'
}
```

---

# Themes

Themes control the visual appearance of the CLI.

You can customize:

* colors
* markers
* borders
* templates
* layouts

Example theme:

```js
class MyTheme {

    static marker = {
        current: '>'
    }

    static border = '|'

}
```

Apply the theme:

```js
const tui = new TUI({
    theme: MyTheme
})
```

## Options

| Key         | Action        |
| ----------- | ------------- |
| colors      |               |
| templates   |               |
| marker      |               |
| borders     |               |

---

# Custom Elements

You can extend TUI by creating your own elements.

Example:

```js
class Spinner extends Element {
    static type = 'spinner'
}
```

Register it:

```js
const tui = new TUI({
    elements: [Spinner]
})
```

---

# Examples

Run the example collection:

```bash
npx node-cli@latest --examples
```

Source:

```
https://github.com/hodunay/tui/blob/main/src/examples/index.js
```

Examples include:

* CLI questionnaire
* menu navigation
* confirmation flows
* custom elements

---

# Use Cases

TUI works well for:

* CLI installers
* developer tooling
* deployment scripts
* project scaffolding
* interactive configuration
* terminal surveys

---

# Contributing

Contributions are welcome.

Feel free to open issues or submit pull requests.

---

# Roadmap

- [ ] arguments support ? 
- [ ] use Method for themes, custom elements, validator and commands/fs actions
- [ ] RGB colors theme support
- [ ] Accept validator
- [ ] Terminal Forms

---

# License

MIT
