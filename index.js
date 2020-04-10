const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const dotenv = require('dotenv')
dotenv.config()

const Twitter = require('twitter')
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

function sendTweet(text) {
    client.post('statuses/update', {status: text}, function(error, tweet, response) {
        if (!error) {
            console.log(tweet)
        } else {
            console.log(error)
        }
    })


}

function twitHandler(req, res) {
    const tweet = req.body.tweet
    if (tweet.length < 3) {
        res.status(400)
        res.send("tweet must be at least 3 chars")
        return
    }
    sendTweet(tweet)
    res.status(200)
    //res.redirect('http://twitter.com/bog_bot')
    res.redirect('https://twitter.com/MattChe18717840')
}

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.post("/tweet", twitHandler)

app.listen(3000)