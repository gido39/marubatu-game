// 先攻で開始するUI変更 ----------------
function startGameUI() {
	document.getElementById("attackTurn").textContent = "先攻";
	document.getElementById("gameStart").textContent = "";
	document.getElementById("gameReset").textContent = "ゲームを中断してはじめから[Reset the game]";
}
// --------------------------------
// アラート表示(既にあって置けない時)
function youAlert() {
	alert("そこはあなたの○です！\n他の場所を選択してください。");
}

function cpuAlert() {
	alert("そこはCPUの✕です！\n他の場所を選択してください。");
}
// --------------------------------
// ログ表示
function logPreview() {
	var num = String(orderNum + 1);
	document.getElementById("turnNum").textContent = num;
	document.getElementById("logPreview").textContent = orderListArr;
}
