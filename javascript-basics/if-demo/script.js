let userInput = prompt("年齢を入力してください:");

if (userInput !== null) {
  let age = parseInt(userInput); 
  if (!isNaN(age)) {
    if (age >= 18) {
      console.log("あなたは成人です。");
    } else {
      console.log("あなたは未成年です。");
    }
  } else {
    console.log("数字を入力してください。");
  }
} else {
  console.log("入力がキャンセルされました。");
}