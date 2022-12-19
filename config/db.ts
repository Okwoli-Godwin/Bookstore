import mongoose from "mongoose"

const URI: string = "mongodb://localhost/bookstore"

mongoose.connect(URI)
mongoose.connection
.on("open", () => {
    console.log("Database connected")
})

.once("error", () => {
    console.log("Failed to connect to the database")
})