import express from  'express'
import mainRouter from "./routes/router.ts";

const app = express()
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',mainRouter.router);
app.listen(port,()=>{
    console.log(`App Listing At port ${port}`)
})