import Prompt from '../prompt.js'

export default class Confirm extends Prompt {

    type = 'confirm'

    constructor(data) {
        super(data)
        this.value = this.defaultValue ?? true
    }

    static schema = {
        label: { required: true },
        defaultValue: { default: false },
        name: { required: false },
    }

    actions() {
        return {
            'y': () => this.value = true,
            'n': () => this.value = false,
            'left': () => this.value = true,
            'right': () => this.value = false,
            'return': () => this.finished = true,
            'space': () => this.finished = true
        }
    }

    build () {
        this.clearLastRender()

        const options = [
            { title: 'Yes', value: true },
            { title: 'No', value: false }
        ]

        let output

        if (this.template) {
            const renderedOptions = options.map(opt => {
                const state = opt.value === this.value ? this.useTemplate(opt, this.template.option.selected) : this.useTemplate(opt, this.template.option.unselected)
                return state
            }).join(' /')

            output = this.useTemplate({label: this.label, options: renderedOptions}, this.template.current)

        } else {
            const yes = this.value ? '> Yes' : '  Yes'
            const no = !this.value ? '> No' : '  No'
            output = `\n${this.label}\n${yes} / ${no}\n`
        }

        this.lines = output.split('\n').length
        return output
    }
}