
// 对前台传过来的评论进行编码
var comments = {};


// html编码
function html_encode(str) {
	var s = '';
	if (str.length == 0) {
		return '';	
	}
	s = str.replace(/&/g,"&gt;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/\s/g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	s = s.replace(/\n/g,"<br>");
	return s;
}


exports.comments = function (req,res){
	comments.v = html_encode(req.query.comment);
	res.send(comments);

}