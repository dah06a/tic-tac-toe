import { SquareState, GameMode } from "../features/game/gameSlice";

export function computerMisereChoice(g: SquareState[], c: ('X' | 'O'), mode: GameMode): number {
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

	const availableMoves: number[] = [];
	const losingMoves: number[] = [];
	for(let i = 0; i < g.length; i++) {
		if (!g[i]) {
			availableMoves.push(i);
		}
	}

	// create a list of available squares that won't cause a loss
	let smartChoice: boolean = Math.random() <= chance;
	if (smartChoice) {
		if (g[0] && g[1] && !g[2] && !losingMoves.includes(2)) {
			losingMoves.push(2);
		}
		if (g[0] && g[2] && !g[1] && !losingMoves.includes(1)) {
			losingMoves.push(1);
		}
		if (g[1] && g[2] && !g[0] && !losingMoves.includes(0)) {
			losingMoves.push(0);
		}

		if (g[3] && g[4] && !g[5] && !losingMoves.includes(5)) {
			losingMoves.push(5);
		}
		if (g[3] && g[5] && !g[4] && !losingMoves.includes(4)) {
			losingMoves.push(4);
		}
		if (g[4] && g[5] && !g[3] && !losingMoves.includes(3)) {
			losingMoves.push(3);
		}

		if (g[6] && g[7] && !g[8] && !losingMoves.includes(8)) {
			losingMoves.push(8);
		}
		if (g[0] && g[2] && !g[1] && !losingMoves.includes(1)) {
			losingMoves.push(1);
		}
		if (g[7] && g[8] && !g[6] && !losingMoves.includes(6)) {
			losingMoves.push(6);
		}

		if (g[0] && g[3] && !g[6] && !losingMoves.includes(6)) {
			losingMoves.push(6);
		}
		if (g[0] && g[6] && !g[3] && !losingMoves.includes(3)) {
			losingMoves.push(3);
		}
		if (g[3] && g[6] && !g[0] && !losingMoves.includes(0)) {
			losingMoves.push(0);
		}

		if (g[1] && g[4] && !g[7] && !losingMoves.includes(7)) {
			losingMoves.push(7);
		}
		if (g[1] && g[7] && !g[4] && !losingMoves.includes(4)) {
			losingMoves.push(4);
		}
		if (g[4] && g[7] && !g[1] && !losingMoves.includes(1)) {
			losingMoves.push(1);
		}

		if (g[2] && g[5] && !g[8] && !losingMoves.includes(8)) {
			losingMoves.push(8);
		}
		if (g[2] && g[8] && !g[5] && !losingMoves.includes(5)) {
			losingMoves.push(5);
		}
		if (g[5] && g[8] && !g[2] && !losingMoves.includes(2)) {
			losingMoves.push(2);
		}

		if (g[0] && g[4] && !g[8] && !losingMoves.includes(8)) {
			losingMoves.push(8);
		}
		if (g[0] && g[8] && !g[4] && !losingMoves.includes(4)) {
			losingMoves.push(4);
		}
		if (g[4] && g[8] && !g[0] && !losingMoves.includes(0)) {
			losingMoves.push(0);
		}

		if (g[6] && g[4] && !g[2] && !losingMoves.includes(2)) {
			losingMoves.push(2);
		}
		if (g[6] && g[2] && !g[4] && !losingMoves.includes(4)) {
			losingMoves.push(4);
		}
		if (g[4] && g[2] && !g[6] && !losingMoves.includes(6)) {
			losingMoves.push(6);
		}
	}

	// Get list of all non-losing moves - if there are none, just return first available move
	const nonLosingMoves = availableMoves.filter(val => !losingMoves.includes(val));
	if (!nonLosingMoves.length) {
		return availableMoves[0];
	}

	// If the center is non-losing, take it
	smartChoice = Math.random() <= chance;
	if (nonLosingMoves.includes(4)) {
		return 4;
	}

	// If corner squares are non-losing, choose one of them
	smartChoice = Math.random() <= chance;
	if (smartChoice) {
		const cornerMoves = nonLosingMoves.filter(val => val === 0 || val === 2 || val === 6 || val === 8);
		if (cornerMoves.length) {
			return cornerMoves[Math.floor(Math.random() * cornerMoves.length)]
		}
	}
	
	// Finally, pick a random square if none of the previous options were available
	return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}