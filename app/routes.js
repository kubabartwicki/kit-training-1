var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

// training way of doing this sets action of the form to a page with no view
// that page has a route which handles all the logic :O

// router.post('/juggling-balls', function (req, res) {
//   var question1 = req.body.juggling-balls
//   if (question1 == '1 or 2') {
//     res.redirect('/juggling-trick')
//   } else if (question1 == 'None – I can not juggle') {
//     res.redirect('/ineligible')
//   }
// })

// training

router.post('/juggling-balls-answer', function (req, res) {

	var jugglingBalls = req.session.data['juggling-balls'];
	if (jugglingBalls == '3 or more') {
		res.redirect('/juggling-trick')
	} else {
		res.redirect('/ineligible')		
	}

})

module.exports = router

// req.query - only query strings
// req.session.data - kit-specific thing that stores everything until you clear it
// req.body - all data in the form, don't really need to use that imo
// ???????????

// query strings are automatically stored in session storage
// {{ data['foo'] }}
// {{ data.foo }}
// you don't need to pass it in a route at all