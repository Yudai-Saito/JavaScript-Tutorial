
let hello = "Hello";
let world = "World";
let msg = hello + world;
alert(msg);


alert("\"1\" + 1 = " + "1" + 1); // "11"
alert("\"1\" - 1 = " + String("1" - 1)); // 0

/* 二項演算子"+"は、文字列結合や変換を行ってしまう。 */


let right = "123";
let left = "456";
alert( +right + +left);
/*  単項演算子"+"で、文字列変数を数値に変換できる。Number()と同様。" 

    二項演算子"+"があるのに変換できるのは、単項演算子"+"の優先順位が高いといった理由。
    1 + 1 * 2 のようなイメージ。
*/


/*
    [計算処理は他言語同様]
    余剰 %
    べき乗 **
    インクリメント/デクリメント ++/--
*/