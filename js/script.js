'use strict';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
let ampm = '';
if(hour < 12) {
    ampm = 'a.m.';
} else {
    ampm = 'p.m.';
}

const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${ampm}`;
document.getElementById('time').textContent = output;

function check(){

	if(window.confirm('送信してよろしいですか？')){ // 確認ダイアログを表示

		return true; // 「OK」時は送信を実行

	}
	else{ // 「キャンセル」時の処理

		window.alert('キャンセルされました'); // 警告ダイアログを表示
		return false; // 送信を中止

	}

}