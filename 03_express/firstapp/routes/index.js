
/*
 * GET home page.
 */

var items = [
    { "text": "1st Post." },
	{ "text": "2nd Post." }
];

exports.index = function(req, res){
	res.render('index', { title: 'Entry List', items: items });
};