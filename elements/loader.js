import Prompt from '../prompt.js'

export default class Loader extends Prompt {

    type = 'loader'

    static schema = {
        label: { required: true },
        time: { required: true }
    }

    async build() {

        return await new Promise( (resolve, reject) => {

            Prompt.out.write( this.useTemplate(this, this.template) )
            const spinnerFrames = Prompt.theme.spinner

            let i = 0

            const loader = setInterval(() => {
                Prompt.out.clearLine(0)
                Prompt.out.cursorTo(0)
                Prompt.out.write(spinnerFrames[i])
                i = (i + 1) % spinnerFrames.length
            }, 80)


            setTimeout( () => {
                clearInterval(loader)
                Prompt.out.clearLine(0)
                Prompt.out.cursorTo(0)
                this.finished = true
                if(this.template) {
                    // resolve(this.useTemplate('✔ Done\n', this.template))
                    resolve('✔ Done')
                    // resolve(this.useTemplate('✔ Done\n'))
                } else {
                    return `Done\n`
                }
            }, this.time)
            
        })

    }

}