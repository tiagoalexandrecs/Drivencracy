import JoiBase from "joi"
import JoiDate from "@joi/date"

const joi= JoiBase.extend(JoiDate)

const pollSchema= joi.object({
    title: joi.string().min(1).required(),
    expireAt: joi.date().format("YYYY-MM-DD HH:mm").min("now")
})

export default pollSchema;