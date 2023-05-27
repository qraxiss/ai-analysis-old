//Require dependencies
const Express = require('express') // Http server
const Morgan = require('morgan') // Terminal logging
const { status500 } = require('../errors') // Error Models
const Session = require('express-session') //Express session manager
const { MongoConnection } = require('../logic') //Express session manager
const MongoStore = require('connect-mongo') //Session manager for MongoDB, Express

//Initilaziation
const app = Express()

// Session Start
app.use(
  Session({
    name: 'PROJECT_PHPSESSID',
    store: MongoStore.create(MongoConnection),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    ttl: 86400 // 2 Weeks
  })
)
console.log('DB => MongoStore initalized')

//Middlewares
app.use(Morgan('dev'))
app.use(Express.json({ limit: '10mb' }))


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH')
  next()
})

//Require routes
const analysisRouter = require('./routes/analysis')
const authRouter = require('./routes/auth')
const openaiRouter = require('./routes/openai')

//Routes
app.use('/analysis', analysisRouter)
app.use('/auth', authRouter)
app.use('/openai', openaiRouter)

//Error Handling
app.use(status500)

//Listen for requests
app.listen(process.env.PORT, console.log('API => Listening on port %s', process.env.PORT))
