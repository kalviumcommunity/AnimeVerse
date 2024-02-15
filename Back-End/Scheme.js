const mongoose = require('mongoose')

const AnimeCompoScheme = new mongoose.Schema(
    {
        Count: Number,
        Name: String,
        ReleaseDate: String,
        Type: String,
        ImageUrl: String,
        Description: String
    }
)

const Modal = mongoose.model('animelists', AnimeCompoScheme)
module.exports = Modal