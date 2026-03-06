import Prompt from '../prompt.js'

export default class Function extends Prompt {

    type = 'func'

    static schema = {
        fn: { required: true },
        params: { required: false },
        name: { required: false },
    }

    async build () {

        Prompt.out.write( this.useTemplate(this, this.template) )
        
        let {value, finished} = await this.fn(this, this.params)
        if(value) this.value = value
        if(finished) this.finished = finished

        return value ?? null

    }

}