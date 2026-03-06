export default class Element {

    static types = {}

    static registerType(type, component) {
        this.types[type] = component
        
        if(component.alias) {
            this.types[component.alias] = component
        }

    }

    constructor (params = {}, {theme} = {}) {

        if (typeof params === 'string') {
            params = { type: 'message', text: params }
        }

        const { type } = params
        if (!type) throw new Error('Element type required')

        const Component = Element.types[type]
        if (!Component) throw new Error(`Unknown type "${type}"`)

        const data = {}

        for (const key in Component.schema) {
            const rule = Component.schema[key]
            const value = params[key] ?? rule.default

            if (rule.required && (value === undefined || value === null)) {
                throw new Error(`"${key}" required for type "${type}"`)
            }

            data[key] = value
        }

        if (theme) data.theme = theme
        if (params.template) data.template = params.template
        if (params.before) data.before = params.before
        if (params.after) data.after = params.after

        return new Component(data)
    }
}