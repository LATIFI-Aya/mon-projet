import { Schema} from "mongoose" 
import mongoose from "mongoose"

//const { Schema } = mongoose;

const postSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    desc:{
        type: String,
        default: "general",
    },
    category:{
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    visite: {
        type: Number,
        default: false,
    },
},
 {timestamps: true}
);

export default mongoose.model("Post", postSchema);
