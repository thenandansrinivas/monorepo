import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import morgan from 'morgan'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const ENV = process.env.NODE_ENV
dotenv.config({
    path: ENV === 'dev' ? '../.env.dev' : '../.env'
})

const PORT = process.env.PORT || 3000

app.use(morgan('dev'))

if (ENV !== 'dev') {
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')));
app.get('*', async (req, res, next) => { 
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
}
else
{
    app.get('*', async (req, res, next) => {
        res.status(200).send('Application is running on development mode')
    })
    }

app.listen(PORT, () => {
    console.log(`server up and running on ${PORT}`)
})