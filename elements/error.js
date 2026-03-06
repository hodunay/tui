import Prompt from '../prompt.js'

export default class ErrorMessage extends Prompt {

    type = 'error'

    static schema = {
        label: { required: true }
    }

    async build() {
        this.finished = true

        if(this.template) {
            return this.useTemplate(this, this.template)
        } else {
            return `Error: ${this.label}\n`
        }

    }

}