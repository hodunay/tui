import Prompt from '../prompt.js'

export default class Select extends Prompt {
    
    type = 'select'

    constructor(data) {
        super(data)
        this.value = this.defaultValue
        this.index = 0

        this.options = this.prepareOptions(this.options)
    }

    static schema = {
        label: { required: true },
        options: { required: true },
        defaultValue: { default: null },
        name: { required: false },
    }

    actions() {
        return {
            up: () => this.index = Math.max(0, this.index-1),
            down: () => this.index = Math.min(this.options.length-1, this.index+1),
            return: () => {
                this.finished = true
                this.value = this.options[this.index]
            }
        }
    }

    build () {

        this.clearLastRender()

        let output
        
        if (this.template) {

            const renderedOptions = this.options.map( (opt, i) => {
                const state = i === this.index ? this.useTemplate(opt, this.template.option.selected) : this.useTemplate(opt, this.template.option.unselected)
                return state
            }).join('')

            output = this.useTemplate({label: this.label, options: renderedOptions}, this.finished ? this.template.finished : this.template.current)

        } else {
            output = `\n${this.label}`
            options.forEach( (opt, i) => {
                output += i === this.index ? `\n > ${opt.title}` : `\n   ${opt.title}`
            })
            output += '\n'
        }        

        this.lines = output.split('\n').length
        return output 
    }

}