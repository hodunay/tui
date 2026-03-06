import readline from 'readline'

function hideCursor () {
    process.stdout.write('\x1B[?25l')
}

function showCursor () {
    process.stdout.write('\x1B[?25l')
}

process.on('exit', showCursor)
process.on('SIGINT', showCursor)

export default class Prompt {

    constructor (data) {
        Object.assign(this, data)
        this.finished = false
        this.lines = 0
    }

    static use (type, data) {
        this[type] = data
    }

    setup () {
        readline.emitKeypressEvents(Prompt.in)
        if (Prompt.in.isTTY) Prompt.in.setRawMode(true)

        if(Prompt.templateEngine)
            this.template = Prompt.theme ? Prompt.theme.template[this.type] : false
    }

    clear () {
        Prompt.out.cursorTo(0, 0)
        Prompt.out.clearScreenDown()
    }

    teardown () {
        if (Prompt.in.isTTY) Prompt.in.setRawMode(false)
    }

    prepareOptions (options, assign = false) {
        if(Array.isArray(options)) {
            options = options.map( (item, i) => {
                let opt = { title: item, value: i }
                // if(assign) opt = Object.assign(opt, assign)
                return opt
            })
            return options
        } 

        else if (typeof options === 'object') {
            return options
        } 
    }

    clearLastRender () {
        if (!this.lines) return

        for (let i = 0; i < this.lines -1; i++) {
            Prompt.out.clearLine(0)
            Prompt.out.moveCursor(0, -1)
        }

        Prompt.out.cursorTo(0)
    }

    async render () {

        if (this.before) this.before(this)

        this.setup()

        if(!this.actions?.()) {
            let response = await this.build()
            Prompt.out.write( response )
            return response
        }

        return await new Promise((resolve, reject) => {

            const cleanup = () => {
                Prompt.in.off('keypress', handler)
                this.teardown()
                Prompt.out.write('\x1B[?25h') // show cursor
            }

            const handler = (chunk, key) => {

                if (key?.ctrl && key.name === 'c') {
                    cleanup()
                    return reject(new Error('Interrupted'))
                }

                const actions = this.actions?.()                

                if (typeof actions?.[key?.name] === 'function') {
                    hideCursor()
                    actions[key.name]()
                    Prompt.out.write( this.build() )
                } 

                else if (!this.finished && key?.name && chunk) {

                    if (key?.name === 'backspace') {
                        this.value = this.value.slice(0, -1)
                    } else {
                        this.value = this.value + chunk.toString()
                    }

                    Prompt.out.clearLine()
                    Prompt.out.cursorTo(0)
                    Prompt.out.write(this.build())

                    // validate realtime
                }

                if (this.finished) {
                    cleanup()
                    if (this.after) this.after(this)
                    resolve(this)
                } 

                // to clear full screen
                // this.clear()
                // Prompt.out.write(this.build())

                
            }

            if(Prompt.validator) {
                // console.log(Prompt.validator)
                // const validation = Prompt.validator.check( state.value.length ? state.value : state.defaultValue, validator, { live: false } )
                // state.error = !validation.valid
                // state.errorMessage = validation.error
            }

            Prompt.in.on('keypress', handler)
            let response = this.build()
            Prompt.out.write( response )
            showCursor()
            
        })

    }

    useTemplate (data, template = false) {
        return Prompt.templateEngine ? Prompt.templateEngine(data, template) : false
    }

}
