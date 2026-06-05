import express from "express"
import cors from "cors"


const app = express()


app.use(cors())

app.get("/", async (req,res) => {
    const {category , apikey} = req.query
    const respones = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=ar&country=eg&max=10&apikey=${apikey}`)
    const data = await respones.json()
    res.send(data)
})

app.listen(3000,() => {
    console.log("server is running on port 3000")
})