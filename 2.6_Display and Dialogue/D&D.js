
let res


alert("Hello World");
//メッセージを表示し OKを押すまで実行を停止



res = prompt("テキストを入力してください");
// OK -> テキスト内容
// CANSEL -> null
// 空でOK -> "" 空のstring
alert(res);

res = prompt("テキストを入力してください", "デフォルト値");
// デフォルト値 -> 入力欄に初めから入っている。



res = confirm("OK?");
// OK -> true
// CANSEL -> false
alert(res);