#Filesystem Utilities
fs = require 'fs'
path = require 'path'

#The express server
express = require 'express'
app = express()

app.use express.static __dirname + '/files/'
app.listen 8080

app.get '/', (req, res) ->
	res.sendFile __dirname + '/files/index.html'

#Websocket Server
server = require('http').Server(app)
server.listen 8081
io = require('socket.io') (server)

io.on 'connection', (socket) ->
	fs.readFile __dirname + '/files/views/content.html' , 'utf8', (err,data) ->
		socket.emit 'render', data
