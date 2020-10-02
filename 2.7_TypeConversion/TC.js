
let value = 123; 
alert(typeof(value)); // 数値123
alert(typeof(String(value))); // 文字列123


value = "123"; 
alert(typeof(value)); // 文字列123
alert(typeof(Number(value))); // 数値123


alert(Number("hoge")) // NaN 変換失敗


