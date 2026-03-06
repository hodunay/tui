import Message from './message.js'
import Select from './select.js'
import MultiSelect from './multiselect.js'
import Confirm from './confirm.js'
import ErrorMessage from './error.js'
import Loader from './loader.js'
import Question from './question.js'
import Task from './task.js'

export default {
    message: Message,
    question: Question,
    confirm: Confirm, 
    select: Select,
    multiselect: MultiSelect,
    error: ErrorMessage,
    loader: Loader,
    task: Task,
}