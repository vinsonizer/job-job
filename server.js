const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var choreSet = [
  { name: 'Josh',
    chores: [
      { name: 'Dishwasher', complete: false },
      { name: 'Laundry', complete: true },
      { name: 'Play Piano', complete: false }
    ] },
  { name: 'Rachel',
    chores: [
      { name: 'Dishwasher', complete: false },
      { name: 'Laundry', complete: true },
      { name: 'Clean Toilets', complete: false }
    ] },
  { name: 'Rebekah',
    chores: [
      { name: 'Dishwasher', complete: false },
      { name: 'Laundry', complete: true },
      { name: 'Mop Floor', complete: false }
    ] }
]

app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', {
    choreSet: choreSet
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
