
let inf = Infinity; //無限大 どの値よりも大きい。
alert(inf);

alert("1 / 0 = " + 1 / 0); // infinity
alert("-1 / 0 = " + -1 / 0); // -inifity
alert("Infinity + 1 = " + inf + 1); // infinity1
alert("Infinity + -1 = " + inf + -1); // infinity-1

/******************************************************************************/ 

let nan = NaN; //計算上のエラーを表す。(文字/数値)
alert(nan)

alert("hoge / 1 = " + "hoge" / 1); // NaN
alert("NaN + 1 = " + nan + 1); // NaN1
alert("NaN + Infinity = " + NaN + Infinity); // NaNInfinity
alert("hoge + 1 = " + "hoge" + 1); // hoge1 

/******************************************************************************/

let msg = "Wold"
let phrase = `Hello ${msg}`;
alert(phrase)

/*
    "" & '' = 文字列
    `` = 拡張機能 ${...} 文字列内の変数展開可能
*/

/******************************************************************************/

let t_bool = true;
let f_bool = false;

let nul = null; // 虚無

let undf = undefined; // 未定義 "値の代入がない"

/******************************************************************************/

alert(typeof(inf)); // number
alert(typeof(msg)); // string
alert(typeof(nul)); // object
alert(typeof(alert)); // function
