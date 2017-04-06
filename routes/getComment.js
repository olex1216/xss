//从后台获取评论

var comments = require('./comment');




exports.getComment = function (req,res) {
	res.json({
		comment :comments.v;
	})
	
}