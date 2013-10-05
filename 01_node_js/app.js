// chapter01:最もシンプルなHTTPサーバ
// chapter02:予期せぬ例外に備える


var n = 0;

// httpモジュールをロード（httpモジュールって何？）
var http = require('http');

// createServerメソッド
// HTTPリクエストを処理してレスポンスを返すHTTPサーバアプリケーションとしての処理を定義する関数を指定

// レスポンスヘッダにステータスコード「200」OKContent-Type「text/plain」
// レスポンスボディに「Hello World」

// listenメソッドで1337番ポートとループバックアドレスにバインドしてサーバを開始

http.createServer(function (req, res) {

	if(++n > 4){
		a;
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("result:" + n);

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');