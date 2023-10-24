import { SquareState, GameMode } from "../features/game/gameSlice";

export function computerPlayerChoice(g: SquareState[], c: ('X' | 'O'), mode: GameMode): number {
	let chance = 0;
	switch(mode) {
		case 'easy':
			chance = 0.33;
			break;
		case 'medium':
			chance = 0.66;
			break;
		case 'hard':
			chance = 1;
			break;
	};

	let smartChoice: boolean = Math.random() <= chance;
		// If a winning move is available, take it
		if (smartChoice) {
		const blockMoves: number[] = [];
		if (g[0] && g[1] && !g[2] && (g[0] === g[1])) {
			if (g[0] === c) {
				return 2;
			} else {
				blockMoves.push(2);
			}
		}
		if (g[0] && g[2] && !g[1] && (g[0] === g[2])) {
			if (g[0] === c) {
				return 1;
			} else {
				blockMoves.push(1);
			}
		}
		if (g[1] && g[2] && !g[0] && (g[1] === g[2])) {
			if (g[1] === c) {
				return 0;
			} else {
				blockMoves.push(0);
			}
		}

		if (g[3] && g[4] && !g[5] && (g[3] === g[4])) {
			if (g[3] === c) {
				return 5;
			} else {
				blockMoves.push(5);
			}
		}
		if (g[3] && g[5] && !g[4] && (g[3] === g[5])) {
			if (g[3] === c) {
				return 4;
			} else {
				blockMoves.push(4);
			}
		}
		if (g[4] && g[5] && !g[3] && (g[4] === g[5])) {
			if (g[4] === c) {
				return 3;
			} else {
				blockMoves.push(3);
			}
		}

		if (g[6] && g[7] && !g[8] && (g[6] === g[7])) {
			if (g[6] === c) {
				return 8;
			} else {
				blockMoves.push(8);
			}
		}
		if (g[6] && g[8] && !g[7] && (g[6] === g[8])) {
			if (g[6] === c) {
				return 7;
			} else {
				blockMoves.push(7);
			}
		}
		if (g[7] && g[8] && !g[6] && (g[7] === g[8])) {
			if (g[7] === c) {
				return 6;
			} else {
				blockMoves.push(6);
			}
		}

		if (g[0] && g[3] && !g[6] && (g[0] === g[3])) {
			if (g[0] === c) {
				return 6;
			} else {
				blockMoves.push(6);
			}
		}
		if (g[0] && g[6] && !g[3] && (g[0] === g[6])) {
			if (g[0] === c) {
				return 3;
			} else {
				blockMoves.push(3);
			}
		}
		if (g[3] && g[6] && !g[0] && (g[3] === g[6])) {
			if (g[3] === c) {
				return 0;
			} else {
				blockMoves.push(0);
			}
		}

		if (g[1] && g[4] && !g[7] && (g[1] === g[4])) {
			if (g[1] === c) {
				return 7;
			} else {
				blockMoves.push(7);
			}
		}
		if (g[1] && g[7] && !g[4] && (g[1] === g[7])) {
			if (g[1] === c) {
				return 4;
			} else {
				blockMoves.push(4);
			}
		}
		if (g[4] && g[7] && !g[1] && (g[4] === g[7])) {
			if (g[4] === c) {
				return 1;
			} else {
				blockMoves.push(1);
			}
		}

		if (g[2] && g[5] && !g[8] && (g[2] === g[5])) {
			if (g[2] === c) {
				return 8;
			} else {
				blockMoves.push(8);
			}
		}
		if (g[2] && g[8] && !g[5] && (g[2] === g[8])) {
			if (g[2] === c) {
				return 5;
			} else {
				blockMoves.push(5);
			}
		}
		if (g[5] && g[8] && !g[2] && (g[5] === g[8])) {
			if (g[5] === c) {
				return 2;
			} else {
				blockMoves.push(2);
			}
		}

		if (g[0] && g[4] && !g[8] && (g[0] === g[4])) {
			if (g[0] === c) {
				return 8;
			} else {
				blockMoves.push(8);
			}
		}
		if (g[0] && g[8] && !g[4] && (g[0] === g[8])) {
			if (g[0] === c) {
				return 4;
			} else {
				blockMoves.push(4);
			}
		}
		if (g[4] && g[8] && !g[0] && (g[4] === g[8])) {
			if (g[4] === c) {
				return 0;
			} else {
				blockMoves.push(0);
			}
		}

		if (g[6] && g[4] && !g[2] && (g[6] === g[4])) {
				if (g[6] === c) {
					return 2;
				} else {
					blockMoves.push(2);
				}
		}
		if (g[6] && g[2] && !g[4] && (g[6] === g[2])) {
			if (g[6] === c) {
				return 4;
			} else {
				blockMoves.push(4);
			}
		}
		if (g[4] && g[2] && !g[6] && (g[4] === g[2])) {
			if (g[4] === c) {
				return 6;
			} else {
				blockMoves.push(6);
			}
		}

		// If blocking move is available, take it
		if (blockMoves.length) {
			return blockMoves[Math.floor(Math.random() * blockMoves.length)]
		}
	}

	smartChoice = Math.random() <= chance;
	// If center square is open, choose it
	if (smartChoice) {
		if (!g[4]) {
			return 4;
		}
	}

	smartChoice = Math.random() <= chance;
	// If corner squares are open, choose one of them
	if (smartChoice) {
		const cornerMoves = [];
		if (!g[0]) {
			cornerMoves.push(0);
		}
		if (!g[2]) {
			cornerMoves.push(2);
		}
		if (!g[6]) {
			cornerMoves.push(6);
		} 
		if (!g[8]) {
			cornerMoves.push(8);
		}

		if (cornerMoves.length) {
			return cornerMoves[Math.floor(Math.random() * cornerMoves.length)]
		}
	}
	
	// Finally, pick a random square if none of the previous options were available
	const options: number[] = [];
	for (let i = 0; i < g.length; i++) {
		if (!g[i]) options.push(i);
	}
	return options[Math.floor(Math.random() * options.length)];
}