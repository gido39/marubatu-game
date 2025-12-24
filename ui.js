// マスをクリックした時に発火するイベント, pos00~22までの9種類  ----------------
function pos00() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[0][0] == "") {
			board1[0][0] = "you";
			document.getElementById("pos00").textContent = "○";
			orderListArr[orderNum] = "you00";
		} else if (board1[0][0] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[0][0] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}
	
		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos01() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[0][1] == "") {
			board1[0][1] = "you";
			document.getElementById("pos01").textContent = "○";
			orderListArr[orderNum] = "you01";
		} else if (board1[0][1] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[0][1] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos02() {
	// 先攻で開始
	if (orderNum == 0) {
	  startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[0][2] == "") {
			board1[0][2] = "you";
			document.getElementById("pos02").textContent = "○";
			orderListArr[orderNum] = "you02";
		} else if (board1[0][2] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[0][2] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos10() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[1][0] == "") {
			board1[1][0] = "you";
			document.getElementById("pos10").textContent = "○";
			orderListArr[orderNum] = "you10";
		} else if (board1[1][0] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[1][0] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos11() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[1][1] == "") {
			board1[1][1] = "you";
			document.getElementById("pos11").textContent = "○";
			orderListArr[orderNum] = "you11";
		} else if (board1[1][1] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[1][1] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos12() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[1][2] == "") {
			board1[1][2] = "you";
			document.getElementById("pos12").textContent = "○";
			orderListArr[orderNum] = "you12";
		} else if (board1[1][2] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[1][2] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos20() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[2][0] == "") {
			board1[2][0] = "you";
			document.getElementById("pos20").textContent = "○";
			orderListArr[orderNum] = "you20";
		} else if (board1[2][0] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[2][0] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos21() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[2][1] == "") {
			board1[2][1] = "you";
			document.getElementById("pos21").textContent = "○";
			orderListArr[orderNum] = "you21";
		} else if (board1[2][1] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[2][1] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}

function pos22() {
	// 先攻で開始
	if (orderNum == 0) {
		startGameUI();
	}

	if (gameSet == 0) {
		// マスが空かどうかチェック
		if (board1[2][2] == "") {
			board1[2][2] = "you";
			document.getElementById("pos22").textContent = "○";
			orderListArr[orderNum] = "you22";
		} else if (board1[2][2] == "you") {
			// 自分が置いてある
			youAlert();
		} else if (board1[2][2] == "cpu") {
			// CPUが置いてある
			cpuAlert();
		}

		// 自分の勝利かどうか判定
		winnerCheck();
	}
}
//  ------------------------------------------------
// ゲームスタート
function gameStart() {
	orderNum = 0;	// リセット
	document.getElementById("gameStart").textContent = "";
	document.getElementById("gameReset").textContent = "ゲームを中断してはじめから[Reset the game]";
	
	var i = Math.floor(Math.random() * 2);

	// 先攻と後攻の決定
	if (i == 0) {
		turnPlayer = "you";	// 先攻
		document.getElementById("attackTurn").textContent = "先攻";
	} else if (i == 1) {
		turnPlayer = "cpu";	// 後攻
		document.getElementById("attackTurn").textContent = "後攻";
	}

	// cpuの初手
	if (turnPlayer == "cpu") {
		cpuThinking_0();
	}
}
//  ------------------------------------------------
// ゲームをリセットする
function gameReset() {
	var checkEnd = window.confirm("ゲームを中断してリセットしてもよろしいですか？");
	
	// 中断
	if (checkEnd == true) {
		orderNum = 0;
		turnPlayer = ""; // どちらが行動できるか(String型), you, cpu
		x = 0;
		y = 0; // マスの中の位置を特定するx座標とy座標, 0~2(3*3マスの場合)
		board1[0][0] = "";
		board1[0][1] = "";
		board1[0][2] = "";
		board1[1][0] = "";
		board1[1][1] = "";
		board1[1][2] = "";
		board1[2][0] = "";
		board1[2][1] = "";
		board1[2][2] = ""; // [y][x],各マスの持つデータ(int型), you, cpu
		orderListArr = ["", "", "", "", "", "", "", "", ""];
		gameSet = 0; // 勝者, 0=未定,1=自分,2=CPU,3=引き分け

		i = 0;
		eightPutErr = 0;
		threeRootLog = "";
		cpuPutCheck = "OK";
		
		document.getElementById("attackTurn").textContent = "先攻 or 後攻";
		document.getElementById("winOrLose").textContent = "";

		document.getElementById("pos00").textContent = "‐";
		document.getElementById("pos01").textContent = "‐";
		document.getElementById("pos02").textContent = "‐";
		document.getElementById("pos10").textContent = "‐";
		document.getElementById("pos11").textContent = "‐";
		document.getElementById("pos12").textContent = "‐";
		document.getElementById("pos20").textContent = "‐";
		document.getElementById("pos21").textContent = "‐";
		document.getElementById("pos22").textContent = "‐";
		
		document.getElementById("gameStart").textContent = "はじめから[Click to start]";
		document.getElementById("gameReset").textContent = "";

		document.getElementById("turnNum").textContent = "";
		document.getElementById("logPreview").textContent = "";
		document.getElementById("errorLogPreview1").textContent = "";
		document.getElementById("errorLogPreview2").textContent = "";
	}
}
//  ------------------------------------------------
// CPUによるUI変更, 9種類
function cpuPut00() {
	board1[0][0] = "cpu";
	document.getElementById("pos00").textContent = "✕";
	orderListArr[orderNum] = "cpu00";
}

function cpuPut01() {
	board1[0][1] = "cpu";
	document.getElementById("pos01").textContent = "✕";
	orderListArr[orderNum] = "cpu01";
}

function cpuPut02() {
	board1[0][2] = "cpu";
	document.getElementById("pos02").textContent = "✕";
	orderListArr[orderNum] = "cpu02";
}

function cpuPut10() {
	board1[1][0] = "cpu";
	document.getElementById("pos10").textContent = "✕";
	orderListArr[orderNum] = "cpu10";
}

function cpuPut11() {			// 真ん中
	board1[1][1] = "cpu";
	document.getElementById("pos11").textContent = "✕";
	orderListArr[orderNum] = "cpu11";
}

function cpuPut12() {
	board1[1][2] = "cpu";
	document.getElementById("pos12").textContent = "✕";
	orderListArr[orderNum] = "cpu12";
}

function cpuPut20() {
	board1[2][0] = "cpu";
	document.getElementById("pos20").textContent = "✕";
	orderListArr[orderNum] = "cpu20";
}

function cpuPut21() {
	board1[2][1] = "cpu";
	document.getElementById("pos21").textContent = "✕";
	orderListArr[orderNum] = "cpu21";
}

function cpuPut22() {
	board1[2][2] = "cpu";
	document.getElementById("pos22").textContent = "✕";
	orderListArr[orderNum] = "cpu22";
}
