
/*
    比較結果は、Boolean : true false
*/
alert(5 > 1);
alert(5 == 1);
alert(5 != 1);


/*
    文字列比較は、Unicode順序で比較。
*/
alert("a" > "A"); // Unicode順序なので "a" > "A"となる。


/*
    厳密な等価は、===で行う。型変換無しでの等価チェック。
*/
alert(0 == false);
alert(0 === false);