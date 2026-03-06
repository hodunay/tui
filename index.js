import Components from './elements/index.js'
import Element from './element.js'
import Prompt from './prompt.js'

import Theme from './theme.js'
import Template from '/Users/hodunay/Packages/drafts/templates/index.js'
import Validator from '/Users/hodunay/Packages/drafts/cli-manager/validate/validate.js'

// Registering Components
Object.keys(Components).forEach(c => Element.registerType(c.toLowerCase(), Components[c]))

export default class TUI {

    constructor(config) {

        config.theme = true
        config.validator = true

        Prompt.use('in', process.stdin)
        Prompt.use('out', process.stdout)

        this.useTypes()
        this.setup(config)
    }

    useTypes () {
        Object.keys(Element.types).map( type => {
            this[type] = (args) => {

                let params = {}
                if (typeof args === 'string') {
                    params.type = 'message'
                    params.label = args
                }

                // todo: refactor
                let exists = Element.types[type]
                if (exists) {
                    params = {
                        type: exists.type ?? exists.alias,
                        ...args
                    }
                }
                
                this.flow.push( new Element(params) )
            }
        })
    }

    setup (config) {

        if(Array.isArray(config)) {
            this.flow = config.map(el => new Element(el))
        }

        if(config.theme) {
            Prompt.use('theme', Theme)
            Prompt.use('templateEngine', new Template())
            // Prompt.use('theme', config.theme)
        }

        if(config.flow) {
            this.flow = config.flow ? config.flow.map(el => new Element(el)) : []
        }

        if(config.validator) {
            Prompt.use('validate', Validator)
            // Prompt.use('validator', config.validator)
        }

        if(config.elements) {
            config.elements.map( el => {
                Element.registerType(el.name, el.component)
            })
        }
    }

    async run(context = {}) {
        for (const el of this.flow) {
            const result = await el.render()
            if (el.name && result) context[el.name] = result.value
        }
        return context
    }
}