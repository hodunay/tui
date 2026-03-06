import Message from './message.js'
import Select from './select.js'
import MultiSelect from './multiselect.js'
import Confirm from './confirm.js'
import ErrorMessage from './error.js'
import Wait from './wait.js'
import Question from './question.js'
import Function from './function.js'
// import Check from './check.js'

export default {
    message: Message,
    question: Question,
    confirm: Confirm, 
    select: Select,
    multiselect: MultiSelect,
    error: ErrorMessage,
    wait: Wait,
    func: Function,
}