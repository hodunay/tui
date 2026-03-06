import Prompt from '../prompt.js'

export default class Question extends Prompt {
    
    type = 'question'
    static alias = 'ask'

    constructor (data) {
        super(data)
        this.value = this.defaultValue
    }

    static schema = {
        label: { required: true },
        placeholder: { required: true },
        defaultValue: { default: '' },
        name: { required: false },
    }

    actions () {
        return {
            return: () => {
                if(!this.value) this.value = this.placeholder
                this.finished = true
            }
        }
    }

    build () {

        this.clearLastRender()

        let output

        if (this.template) {
            output = this.useTemplate(this, this.template)
        } else {

            output = `\n${this.label}`
            if(this.value) {
                output += ` ${this.value}`
            } else {
                output += ` ${this.placeholder}`
            }

        }        

        this.lines = output.split('\n').length
        return output
    }

}