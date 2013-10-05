// chapter01:最もシンプルなHTTPサーバ


// httpモジュールをロード（httpモジュールって何？）

var http = require('http');

// createServerメソッド
// HTTPリクエストを処理してレスポンスを返すHTTPサーバアプリケーションとしての処理を定義する関数を指定

// レスポンスヘッダにステータスコード「200」OKContent-Type「text/plain」
// レスポンスボディに「Hello World」

// listenメソッドで1337番ポートとループバックアドレスにバインドしてサーバを開始

http.createServer(function (req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');