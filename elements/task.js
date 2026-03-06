import Prompt from '../prompt.js'

export default class Task extends Prompt {

    type = 'task'

    static schema = {
        run: { required: true },
        params: { required: false },
        name: { required: false },
    }

    async build () {

        Prompt.out.write( this.useTemplate(this, this.template) )
        
        let {value, finished} = await this.run(this, this.params)
        if(value) this.value = value
        if(finished) this.finished = finished

        return value ?? null

    }

}