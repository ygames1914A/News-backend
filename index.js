import express from "express"
import cors from "cors"


const app = express()


app.use(cors())

app.get("/", async (req,res) => {
    const respones = await fetch("https://gnews.io/api/v4/top-headlines?category=general&lang=ar&country=eg&max=10&apikey=88bf36fa19025cef6c0c80cb59985cf3")
    const data = await respones.json()
    res.send(data)
})

app.listen(3000,() => {
    console.log("server is running on port 3000")
})