import Prompt from '../prompt.js'

export default class Message extends Prompt {

    type = 'message'

    static schema = {
        label: { required: true },
        text: { required: false }
    }

    build() {
        this.finished = true

        if(this.template) {
            return this.useTemplate(this, this.template)
        } else {
            return `${this.label}\n`
        }

    }

}