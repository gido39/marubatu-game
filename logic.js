// cpuのアルゴリズム, 分岐(親) ----------------
function cpuThinking_0() {
	if (orderNum == 0) {
console.log("後攻になった");
		// CPUの初手
		var i = Math.floor(Math.random() * 2);
		if (i == 0) {
			// 50%の確率で真ん中を取る
			cpuPut11();
		} else {
			// 50%の残りはランダムに真ん中以外
			cpuEightRnd();
		}
	} else if (orderNum == 1) {
		cpuThinking_1();
	} else if (orderNum == 2) {
		cpuThinking_2();
	} else if (orderNum == 3) {
		cpuThinking_3();
	} else if (orderNum == 4) {
		cpuThinking_4();
	} else if (orderNum == 5) {
		cpuThinking_5();
	} else if (orderNum == 6) {
		cpuThinking_6();
	} else if (orderNum == 7) {
		cpuThinking_7();
	} else if (orderNum == 8) {
		cpuThinking_8();
	} else {
console.log("ターン上限");
	}
	
	// CPUの勝利かどうか判定
	loserCheck();
}
// CPUのアルゴリズム  --------------------------------
function cpuThinking_1() {
	// 第2手,orderNum=1,CPUの初手
	// 思考,真ん中が取られている(四隅を取る)
	if (board1[1][1] == "you") {
		var i = Math.floor(Math.random() * 2);
		if (i == 0) {
			// 四隅
			var forRnd = Math.floor(Math.random() * 4);
			if (forRnd == 0) {
				cpuPut00();
			} else if (forRnd == 1) {
				cpuPut02();
			} else if (forRnd == 2) {
				cpuPut20();
			} else if (forRnd == 3) {
				cpuPut22();
			}
		} else if (i == 1) {
			// 思考,真ん中が取られている(四隅以外を取る)
			var forRnd = Math.floor(Math.random() * 4);
			if (forRnd == 0) {
				cpuPut01();
			} else if (forRnd == 1) {
				cpuPut10();
			} else if (forRnd == 2) {
				cpuPut12();
			} else if (forRnd == 3) {
				cpuPut21();
			}
		}
	} else {
		// 思考,真ん中が取られていない(真ん中を取る)
		var i = Math.floor(Math.random() * 2);
		if (i == 0) {
			// 真ん中を取る
			cpuPut11();
		} else if (i == 1) {
			// 思考,真ん中が取られていない(真ん中を取らない)
			cpuEightRnd();
		}
	}
}

function cpuThinking_2() {
	// 第3手,orderNum=2,CPUの2手目
	var reachCheck = reachLose();	// 3手以降リーチチェック

	if (reachCheck == 0) {
		cpuAimingToSpaceTwo();
	} else if (reachCheck == 1) {
		cpuPut00();
	} else if (reachCheck == 2) {
		cpuPut01();
	} else if (reachCheck == 3) {
		cpuPut02();
	} else if (reachCheck == 4) {
		cpuPut10();
	} else if (reachCheck == 5) {
		cpuPut11();
	} else if (reachCheck == 6) {
		cpuPut12();
	} else if (reachCheck == 7) {
		cpuPut20();
	} else if (reachCheck == 8) {
		cpuPut21();
	} else if (reachCheck == 9) {
		cpuPut22();
	}
}

function cpuThinking_3() {
	// 第4手,orderNum=3,CPUの2手目
	cpuThinking_2();	// 3~8手目は2と共通(暫定)
}

function cpuThinking_4() {
	// 第5手,orderNum=4,CPUの3手目
	cpuThinking_2();	// 3~8手目は2と共通(暫定)
}

function cpuThinking_5() {
	// 第6手,orderNum=5,CPUの3手目
	cpuThinking_2();	// 3~8手目は2と共通(暫定)
}

function cpuThinking_6() {
	// 第7手,orderNum=6,CPUの4手目
	cpuThinking_2();	// 3~8手目は2と共通(暫定)
}

function cpuThinking_7() {
	// 第8手,orderNum=7,CPUの4手目
	cpuThinking_2();	// 3~8手目は2と共通(暫定)
}

function cpuThinking_8() {
	// 第9手,orderNum=8,CPUの5手目,最後なので空いてるところ総当たりチェック 
	if (board1[0][0] == "") {
		cpuPut00();
	} else if (board1[0][1] == "") {
		cpuPut01();
	} else if (board1[0][2] == "") {
		cpuPut02();
	} else if (board1[1][0] == "") {
		cpuPut10();
	} else if (board1[1][1] == "") {
		cpuPut11();
	} else if (board1[1][2] == "") {
		cpuPut12();
	} else if (board1[2][0] == "") {
		cpuPut20();
	} else if (board1[2][1] == "") {
		cpuPut21();
	} else {
		cpuPut22();
	}
}
// --------------------------------
// リーチを探すアルゴリズム(自分、CPUの順)
// --------------------------------
// 自分のリーチを探る
function reachWin() {
	var reachPosYou = 0;	// 初期値0,1~9(上123,中456,下789)

	// 上で横リーチ
	if (board1[0][0] == "you" && board1[0][1] == "you" && board1[0][2] == "") {
		reachPosYou = 3;
	} else if (board1[0][0] == "you" && board1[0][2] == "you" && board1[0][1] == "") {
		reachPosYou = 2;
	} else if (board1[0][1] == "you" && board1[0][2] == "you" && board1[0][0] == "") {
		reachPosYou = 1;
	} else if (board1[1][0] == "you" && board1[1][1] == "you" && board1[1][2] == "") {		// 中で横リーチ
		reachPosYou = 6;
	} else if (board1[1][0] == "you" && board1[1][2] == "you" && board1[1][1] == "") {
		reachPosYou = 5;
	} else if (board1[1][1] == "you" && board1[1][2] == "you" && board1[1][0] == "") {
		reachPosYou = 4;
	} else if (board1[2][0] == "you" && board1[2][1] == "you" && board1[2][2] == "") {		// 下で横リーチ
		reachPosYou = 9;
	} else if (board1[2][0] == "you" && board1[2][2] == "you" && board1[2][1] == "") {
		reachPosYou = 8;
	} else if (board1[2][1] == "you" && board1[2][2] == "you" && board1[2][0] == "") {
		reachPosYou = 7;
	} else if (board1[0][0] == "you" && board1[1][0] == "you" && board1[2][0] == "") {		// 左で縦リーチ
		reachPosYou = 7;
	} else if (board1[0][0] == "you" && board1[2][0] == "you" && board1[1][0] == "") {
		reachPosYou = 4;
	} else if (board1[1][0] == "you" && board1[2][0] == "you" && board1[0][0] == "") {
		reachPosYou = 1;
	} else if (board1[0][1] == "you" && board1[1][1] == "you" && board1[2][1] == "") {		// 中で縦リーチ
		reachPosYou = 8;
	} else if (board1[0][1] == "you" && board1[2][1] == "you" && board1[1][1] == "") {
		reachPosYou = 5;
	} else if (board1[1][1] == "you" && board1[2][1] == "you" && board1[0][1] == "") {
		reachPosYou = 2;
	} else if (board1[0][2] == "you" && board1[1][2] == "you" && board1[2][2] == "") {		// 右で縦リーチ
		reachPosYou = 9;
	} else if (board1[0][2] == "you" && board1[2][2] == "you" && board1[1][2] == "") {
		reachPosYou = 6;
	} else if (board1[1][2] == "you" && board1[2][2] == "you" && board1[0][2] == "") {
		reachPosYou = 3;
	} else if (board1[0][0] == "you" && board1[1][1] == "you" && board1[2][2] == "") {		// 右下がりで斜めリーチ
		reachPosYou = 9;
	} else if (board1[0][0] == "you" && board1[2][2] == "you" && board1[1][1] == "") {
		reachPosYou = 5;
	} else if (board1[1][1] == "you" && board1[2][2] == "you" && board1[0][0] == "") {
		reachPosYou = 1;
	} else if (board1[2][0] == "you" && board1[1][1] == "you" && board1[0][2] == "") {		// 右上がりで斜めリーチ
		reachPosYou = 3;
	} else if (board1[2][0] == "you" && board1[0][2] == "you" && board1[1][1] == "") {
		reachPosYou = 5;
	} else if (board1[1][1] == "you" && board1[0][2] == "you" && board1[2][0] == "") {
		reachPosYou = 7;
	}

	return reachPosYou;
}

// CPUのリーチを探る
function reachLose() {
	var reachPosCpu = 0;	// 初期値0,1~9(上123,中456,下789)

	// 上で横リーチ
	if (board1[0][0] == "cpu" && board1[0][1] == "cpu" && board1[0][2] == "") {
		reachPosCpu = 3;
	} else if (board1[0][0] == "cpu" && board1[0][2] == "cpu" && board1[0][1] == "") {
		reachPosCpu = 2;
	} else if (board1[0][1] == "cpu" && board1[0][2] == "cpu" && board1[0][0] == "") {
		reachPosCpu = 1;
	} else if (board1[1][0] == "cpu" && board1[1][1] == "cpu" && board1[1][2] == "") {		// 中で横リーチ
		reachPosCpu = 6;
	} else if (board1[1][0] == "cpu" && board1[1][2] == "cpu" && board1[1][1] == "") {
		reachPosCpu = 5;
	} else if (board1[1][1] == "cpu" && board1[1][2] == "cpu" && board1[1][0] == "") {
		reachPosCpu = 4;
	} else if (board1[2][0] == "cpu" && board1[2][1] == "cpu" && board1[2][2] == "") {		// 下で横リーチ
		reachPosCpu = 9;
	} else if (board1[2][0] == "cpu" && board1[2][2] == "cpu" && board1[2][1] == "") {
		reachPosCpu = 8;
	} else if (board1[2][1] == "cpu" && board1[2][2] == "cpu" && board1[2][0] == "") {
		reachPosCpu = 7;
	} else if (board1[0][0] == "cpu" && board1[1][0] == "cpu" && board1[2][0] == "") {		// 左で縦リーチ
		reachPosCpu = 7;
	} else if (board1[0][0] == "cpu" && board1[2][0] == "cpu" && board1[1][0] == "") {
		reachPosCpu = 4;
	} else if (board1[1][0] == "cpu" && board1[2][0] == "cpu" && board1[0][0] == "") {
		reachPosCpu = 1;
	} else if (board1[0][1] == "cpu" && board1[1][1] == "cpu" && board1[2][1] == "") {		// 中で縦リーチ
		reachPosCpu = 8;
	} else if (board1[0][1] == "cpu" && board1[2][1] == "cpu" && board1[1][1] == "") {
		reachPosCpu = 5;
	} else if (board1[1][1] == "cpu" && board1[2][1] == "cpu" && board1[0][1] == "") {
		reachPosCpu = 2;
	} else if (board1[0][2] == "cpu" && board1[1][2] == "cpu" && board1[2][2] == "") {		// 右で縦リーチ
		reachPosCpu = 9;
	} else if (board1[0][2] == "cpu" && board1[2][2] == "cpu" && board1[1][2] == "") {
		reachPosCpu = 6;
	} else if (board1[1][2] == "cpu" && board1[2][2] == "cpu" && board1[0][2] == "") {
		reachPosCpu = 3;
	} else if (board1[0][0] == "cpu" && board1[1][1] == "cpu" && board1[2][2] == "") {		// 右下がりで斜めリーチ
		reachPosCpu = 9;
	} else if (board1[0][0] == "cpu" && board1[2][2] == "cpu" && board1[1][1] == "") {
		reachPosCpu = 5;
	} else if (board1[1][1] == "cpu" && board1[2][2] == "cpu" && board1[0][0] == "") {
		reachPosCpu = 1;
	} else if (board1[2][0] == "cpu" && board1[1][1] == "cpu" && board1[0][2] == "") {		// 右上がりで斜めリーチ
		reachPosCpu = 3;
	} else if (board1[2][0] == "cpu" && board1[0][2] == "cpu" && board1[1][1] == "") {
		reachPosCpu = 5;
	} else if (board1[1][1] == "cpu" && board1[0][2] == "cpu" && board1[2][0] == "") {
		reachPosCpu = 7;
	}

	return reachPosCpu;
}
// --------------------------------
// CPUが真ん中以外の8箇所からランダムに場所を決定する
function cpuEightRnd() {
	var eightRnd = Math.floor(Math.random() * 8);
console.log("eightRnd" + eightRnd);
	if (eightRnd == 0) {
		if (board1[0][0] == "") {
			cpuPut00();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 1) {
		if (board1[0][1] == "") {
			cpuPut01();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 2) {
		if (board1[0][2] == "") {
			cpuPut02();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 3) {
		if (board1[1][0] == "") {
			cpuPut10();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 4) {
		if (board1[1][2] == "") {
			cpuPut12();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 5) {
		if (board1[2][0] == "") {
			cpuPut20();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 6) {
		if (board1[2][1] == "") {
			cpuPut21();
		} else {
			eightPutErr = 1;	// error
		}
	} else if (eightRnd == 7) {
		if (board1[2][2] == "") {
			cpuPut22();
		} else {
			eightPutErr = 1;	// error
		}
	}
	
	// 置けなかった場合
	if (eightPutErr == 1) {
		cpuPutCheck = "NG";
		
		// 3種類の探索方法からいずれかで置く場所を決める
		var threeRnd = Math.floor(Math.random() * 3);
		if (threeRnd == 0) {
			threeRootLog = "4>2>6>8>1>3>9>7";
			// 探索方法1,[4>2>6>8>1>3>9>7]の順番にチェック
			cpuSeek42681397();
		} else if (threeRnd == 1) {
			threeRootLog = "rnd+for";
			// 探索方法2,ランダム変数をfor文の中で分岐に用いて置けるまで繰り返す(※理論上は限りなく有限に近い無限回数を繰り返す処理になるのであまり使いたくはない)
			cpuRndInFor();
		} else if (threeRnd == 2) {
			threeRootLog = "aimingToSpace2";
			// 探索方法3,orderNumとorderListArr[]を用いて最後のCPUの置き場から縦横斜めのいずれかで空白2マスがあるところを狙う　→　ない場合は探索方法1または2に切り替える
			cpuAimingToSpaceTwo();
		}
		
		if (cpuPutCheck == "OK") {
			eightPutErr = 0;
		} else {
			// まだCPUの置き場所が決まらない場合
			document.getElementById("errorLogPreview1").textContent = cpuPutCheck;
			document.getElementById("errorLogPreview2").textContent = threeRootLog;
			alert("予期しないエラー\n└CPUのターン実行中エラー\n└cpuEightRnd()内\n→CPUが選択できないまま探索が終了してしまいました。開発されたコードのいずれかの場所にミスがあります。開発者はコードを修正してください。");
		}
	}
}
// --------------------------------
// CPU順番に総当り4>2>6>8>1>3>9>7
function cpuSeek42681397() {
	if (board1[1][0] == "") {
		cpuPut10();
		cpuPutCheck = "OK";
	} else if (board1[0][1] == "") {
		cpuPut01();
		cpuPutCheck = "OK";
	} else if (board1[1][2] == "") {
		cpuPut12();
		cpuPutCheck = "OK";
	} else if (board1[2][1] == "") {
		cpuPut21();
		cpuPutCheck = "OK";
	} else if (board1[0][0] == "") {
		cpuPut00();
		cpuPutCheck = "OK";
	} else if (board1[0][2] == "") {
		cpuPut02();
		cpuPutCheck = "OK";
	} else if (board1[2][2] == "") {
		cpuPut22();
		cpuPutCheck = "OK";
	} else if (board1[2][0] == "") {
		cpuPut20();
		cpuPutCheck = "OK";
	}
}
// --------------------------------
// CPU置けるまでfor文で繰り返す(1000回置けないと狂う)
function cpuRndInFor() {
	var eightRnd;
	
	for (var loop = 0; loop < 1000; loop ++) {
		eightRnd = Math.floor(Math.random() * 8);
		if (eightRnd == 0) {
			if (board1[0][0] == "") {
				cpuPut00();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 1) {
			if (board1[0][1] == "") {
				cpuPut01();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 2) {
			if (board1[0][2] == "") {
				cpuPut02();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 3) {
			if (board1[1][0] == "") {
				cpuPut10();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 4) {
			if (board1[1][2] == "") {
				cpuPut12();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 5) {
			if (board1[2][0] == "") {
				cpuPut20();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 6) {
			if (board1[2][1] == "") {
				cpuPut21();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		} else if (eightRnd == 7) {
			if (board1[2][2] == "") {
				cpuPut22();
				cpuPutCheck = "OK";
				break;
			}
			
			cpuPutCheck = "NG";
		}
	}		// for文閉じかっこ
}

// --------------------------------
// CPUの前回の置き場を基に縦横斜めいずれかの空白2マス空いているところを狙う
function cpuAimingToSpaceTwo() {
	if (orderNum >= 2) {
		if (orderListArr[orderNum - 2] == "cpu11") {
			// 前回真ん中を取った
			if (board1[0][1] == "" && board1[2][1] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut01();
					cpuPutCheck = "OK";
				} else {
					cpuPut21();
					cpuPutCheck = "OK";
				}
			} else if (board1[1][0] == "" && board1[1][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut10();
					cpuPutCheck = "OK";
				} else {
					cpuPut12();
					cpuPutCheck = "OK";
				}
			} else if (board1[0][0] == "" && board1[2][2] == "") {
				// 斜め右下がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else if (board1[2][0] == "" && board1[0][2] == "") {
				// 斜め右上がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut20();
					cpuPutCheck = "OK";
				} else {
					cpuPut02();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu10") {
			// 前回左を取った
			if (board1[0][0] == "" && board1[2][0] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut20();
					cpuPutCheck = "OK";
				}
			} else if (board1[1][1] == "" && board1[1][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut11();
					cpuPutCheck = "OK";
				} else {
					cpuPut12();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu01") {
			// 前回上を取った
			if (board1[1][1] == "" && board1[2][1] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut11();
					cpuPutCheck = "OK";
				} else {
					cpuPut21();
					cpuPutCheck = "OK";
				}
			} else if (board1[0][0] == "" && board1[0][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut02();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu12") {
			// 前回右を取った
			if (board1[0][2] == "" && board1[2][2] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut02();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else if (board1[1][0] == "" && board1[1][1] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut10();
					cpuPutCheck = "OK";
				} else {
					cpuPut11();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu21") {
			// 前回下を取った
			if (board1[0][1] == "" && board1[1][1] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut01();
					cpuPutCheck = "OK";
				} else {
					cpuPut11();
					cpuPutCheck = "OK";
				}
			} else if (board1[2][0] == "" && board1[2][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut20();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu00") {
			// 前回左上を取った
			if (board1[1][0] == "" && board1[2][0] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut10();
					cpuPutCheck = "OK";
				} else {
					cpuPut20();
					cpuPutCheck = "OK";
				}
			} else if (board1[0][1] == "" && board1[0][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut01();
					cpuPutCheck = "OK";
				} else {
					cpuPut02();
					cpuPutCheck = "OK";
				}
			} else if (board1[1][1] == "" && board1[2][2] == "") {
				// 斜め右下がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut11();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu02") {
			// 前回右上を取った
			if (board1[1][2] == "" && board1[2][2] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut12();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else if (board1[0][0] == "" && board1[0][1] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut01();
					cpuPutCheck = "OK";
				}
			} else if (board1[2][0] == "" && board1[1][1] == "") {
				// 斜め右上がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut20();
					cpuPutCheck = "OK";
				} else {
					cpuPut11();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu22") {
			// 前回右下を取った
			if (board1[0][2] == "" && board1[1][2] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut02();
					cpuPutCheck = "OK";
				} else {
					cpuPut12();
					cpuPutCheck = "OK";
				}
			} else if (board1[2][0] == "" && board1[2][1] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut20();
					cpuPutCheck = "OK";
				} else {
					cpuPut21();
					cpuPutCheck = "OK";
				}
			} else if (board1[0][0] == "" && board1[1][1] == "") {
				// 斜め右下がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut11();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		} else if (orderListArr[orderNum - 2] == "cpu20") {
			// 前回左下を取った
			if (board1[0][0] == "" && board1[1][0] == "") {
				// 縦チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut00();
					cpuPutCheck = "OK";
				} else {
					cpuPut10();
					cpuPutCheck = "OK";
				}
			} else if (board1[2][1] == "" && board1[2][2] == "") {
				// 横チェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut21();
					cpuPutCheck = "OK";
				} else {
					cpuPut22();
					cpuPutCheck = "OK";
				}
			} else if (board1[1][1] == "" && board1[0][2] == "") {
				// 斜め右上がりチェックOK
				var i = Math.floor(Math.random() * 2);
				if (i == 0) {
					cpuPut11();
					cpuPutCheck = "OK";
				} else {
					cpuPut02();
					cpuPutCheck = "OK";
				}
			} else {
				// 2マス空きなし
				cpuPutCheck = "NG";
			}
		}
		
		if (cpuPutCheck == "NG") {
			// CPUが置けなかった
			var i = Math.floor(Math.random() * 2);
			if (i == 0) {
				cpuSeek42681397();
			} else {
				cpuRndInFor();
			}
		}
		
		if (cpuPutCheck == "NG") {
			// まだCPUが置けないとき
			document.getElementById("errorLogPreview1").textContent = cpuPutCheck;
			document.getElementById("errorLogPreview2").textContent = threeRootLog;
			alert("予期しないエラー\n└CPUのターン実行中エラー\n└cpuAimingSpaceTwo()内\n→CPUが選択できないまま探索が終了してしまいました。開発されたコードのいずれかの場所にミスがあります。開発者はコードを修正してください。");
		}
	} else {
		// orderNumが0か1だと初手になる
		if (orderNum == 0) {
			// 初手を真ん中とする
			cpuPut11();
			cpuPutCheck == "OK";
		} else if (orderNum == 1) {
			if (board1[1][1] == "") {
				// 真ん中が空いているので真ん中に置く
				cpuPut11();
				cpuPutCheck == "OK";
			} else {
				// 真ん中が空いていないので左に置く(暫定)
				cpuPut10();
				cpuPutCheck == "OK";
			}
		}
	}
}
// --------------------------------
// 勝敗判定
// --------------------------------
// 自分の勝利かどうか判定
function winnerCheck() {
	// ログ更新
	logPreview();

	// 勝利条件判定
	if (board1[0][0] == "you" && board1[0][1] == "you" && board1[0][2] == "you") {
		// 上の横列が自分
		gameSet = 1;
	} else if (board1[1][0] == "you" && board1[1][1] == "you" && board1[1][2] == "you") {
		// 中の横列が自分
		gameSet = 1;
	} else if (board1[2][0] == "you" && board1[2][1] == "you" && board1[2][2] == "you") {
		// 下の横列が自分
		gameSet = 1;
	} else if (board1[0][0] == "you" && board1[1][0] == "you" && board1[2][0] == "you") {
		// 左の縦列が自分
		gameSet = 1;
	} else if (board1[0][1] == "you" && board1[1][1] == "you" && board1[2][1] == "you") {
		// 中の横列が自分
		gameSet = 1;
	} else if (board1[0][2] == "you" && board1[1][2] == "you" && board1[2][2] == "you") {
		// 右の横列が自分
		gameSet = 1;
	} else if (board1[0][0] == "you" && board1[1][1] == "you" && board1[2][2] == "you") {
		// 右下がり斜めが自分
		gameSet = 1;
	} else if (board1[2][0] == "you" && board1[1][1] == "you" && board1[0][2] == "you") {
		// 右上がり斜めが自分
		gameSet = 1;
	}
	
	// 勝利判定
	if (gameSet == 1) {
		// 自分の勝利
		document.getElementById("winOrLose").textContent = "Win";
		alert("Congratulations!\nあなたの勝利です。");
	} else if (orderNum >= 9) {
		// 9マスで勝負がつかず引き分け
		document.getElementById("winOrLose").textContent = "Draw";
		alert("Drow\n引き分けです。");
		gameSet = 3;

		var num = "‐";
		document.getElementById("turnNum").textContent = num;
	} else {
		// 続行
		orderNum ++;
		turnPlayer = "cpu";
		cpuThinking_0();
	}
}

// CPUの勝利(自分の敗北)かどうか判定
function loserCheck() {
	// ログ更新
	logPreview();

	// 敗北条件判定
	if (board1[0][0] == "cpu" && board1[0][1] == "cpu" && board1[0][2] == "cpu") {
		// 上の横列がCPU
		gameSet = 2;
	} else if (board1[1][0] == "cpu" && board1[1][1] == "cpu" && board1[1][2] == "cpu") {
		// 中の横列がCPU
		gameSet = 2;
	} else if (board1[2][0] == "cpu" && board1[2][1] == "cpu" && board1[2][2] == "cpu") {
		// 下の横列がCPU
		gameSet = 2;
	} else if (board1[0][0] == "cpu" && board1[1][0] == "cpu" && board1[2][0] == "cpu") {
		// 左の縦列がCPU
		gameSet = 2;
	} else if (board1[0][1] == "cpu" && board1[1][1] == "cpu" && board1[2][1] == "cpu") {
		// 中の横列がCPU
		gameSet = 2;
	} else if (board1[0][2] == "cpu" && board1[1][2] == "cpu" && board1[2][2] == "cpu") {
		// 右の横列がCPU
		gameSet = 2;
	} else if (board1[0][0] == "cpu" && board1[1][1] == "cpu" && board1[2][2] == "cpu") {
		// 右下がり斜めがCPU
		gameSet = 2;
	} else if (board1[2][0] == "cpu" && board1[1][1] == "cpu" && board1[0][2] == "cpu") {
		// 右上がり斜めがCPU
		gameSet = 2;
	}

	// 敗北判定
	if (gameSet == 2) {
		// CPUの勝利
		document.getElementById("winOrLose").textContent = "Lose";
		alert("Oh...!\nCPUの勝利です。\nあなたは負けてしまいました…。");
	} else if (orderNum >= 9) {
		// 9マスで勝負がつかず引き分け
		document.getElementById("winOrLose").textContent = "Draw";
		alert("Drow\n引き分けです。");
		gameSet = 3;

		var num = "‐";
		document.getElementById("turnNum").textContent = num;
	} else {
		// 続行
		orderNum ++;
		turnPlayer = "you";
	}
}
