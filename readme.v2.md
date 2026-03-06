# Node.js Terminal UI



## Example 

``` js
let tui = new TUI({theme: {primaryColor: 'red'}})
tui.message('test')
tui.confirm('confirm test')
await tui.run()
```

## Tasks flow / Survey

``` js
let ui = new TUI([
    {type: 'message', text: 'Welcome to MinoJS 1!', label: 'This wizzard will help you install MinoJS on this machine.' },    // before: e => {console.log('before', e.text)}
    {type: 'message', text: 'Support: https://minojs.com'},
    {type: 'message', text: 'So, this has one more line 1'},
    {type: 'wait', text: 'Scanning ports...', time: 10000},
    {type: 'error', text: 'Error took place'},
    {type: 'confirm', text: 'Allow changing /etc/hosts to add new domain?'}, // template: {current: '{{text}}'}
    {type: 'select',  text: 'Select modules:', name: 'modules', options: ['Create app', 'Stop app', 'Reload app']}
])

let result = await ui.run()
```

## Elements 

### Message

Passing in an array requires `type` and `text`: 

``` js
    let message = {type: 'message', text: 'So, this has one more line 1'}
    const ui = new TUI([message])
    await ui.run()
```

Can be called independently: 

``` js
    const ui = new TUI()
    ui.message('So, this has one more line 1')
    await ui.run()
```

Create element without rendering, should work independently
``` js
import Message from '../../cli/tui/elements/message.js'
console.log( new Message({text: 'Hello independent message'}) )
```

### Confirm
### Select
### Multi Select
### Input / ask
### Textarea
### Wait 
### Execute (waiting for function passed results)

## Options

- use Theme
- use Validator
- use Commands exec

## Roadmap

- [ ] arguments support ? 
- [ ] use Method for themes, custom elements, validator and commands/fs actions
- [ ] RGB colors theme support
- [ ] Accept validator
- [ ] Terminal Forms