let dayOfWeek = prompt("曜日を示す数字 (0-6) を入力してください (0:日, 1:月, 2:火, 3:水 4:木, 5:金, 6:土)");

// 入力を整数に変換
let dayNum = parseInt(dayOfWeek);

let message;

switch (dayNum) {
  case 0:
    message = "今日は日曜日です。";
    break;
  case 1:
    message = "今日は月曜日です。";
    break;
  case 2:
    message = "今日は火曜日です。";
    break;
  case 3:
    message = "今日は水曜日です。";
    break;
  case 4:
    message = "今日は木曜日です。";
    break;
  case 5:
    message = "今日は金曜日です。";
    break;
  case 6:
    message = "今日は土曜日です。";
    break;
    default:
    message = "無効な入力です。0から7までの数字を入力してください。";
}

console.log(message);