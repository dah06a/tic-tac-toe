import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
	selectGameData, 
	selectPlayerTurn, 
	selectPlayerXs,
	selectResponseStatus, 
	takeTurn, 
	updateStatus,
	updateScore, 
	updateResponse,
	SquareState,
	GameResult,
	GameStatus,
} from './gameSlice';
import { checkGameOver } from '../../utils/checkGameOver';
import { computerPlayerChoice } from '../../utils/computerPlayerChoice';
import { computerResponses } from '../../utils/computerResponses';
import { mainTheme } from '../../themes/mainTheme';
import GameSquare from './GameSquare';

import Grid from '@mui/material/Grid';

export default function GameBoard() {
	const gameData: SquareState[] = useAppSelector(selectGameData);
	const isPlayerTurn: boolean = useAppSelector(selectPlayerTurn);
	const isPlayerXs: boolean = useAppSelector(selectPlayerXs);
	const isResponseDone: boolean = useAppSelector(selectResponseStatus);
	const isGameStarted: boolean = gameData.filter(s => s !== null).length !== 0;
	const gameOverStatus: string = checkGameOver(gameData);

	const row1Data: SquareState[] = gameData.slice(0, 3);
	const row2Data: SquareState[] = gameData.slice(3, 6);
	const row3Data: SquareState[] = gameData.slice(6);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (gameOverStatus) {
			let gameResult: GameResult;
			if (gameOverStatus === 'tie') {
				gameResult = 'tie';
			} else if ((isPlayerXs && gameOverStatus === 'X') || (!isPlayerXs && gameOverStatus === 'O')) {
				gameResult = 'player';
			} else {
				gameResult = 'computer';
			}

			const newStatus: GameStatus = { gameOver: true, result: gameResult}
			dispatch(updateStatus(newStatus));

			const newPlayerWin: boolean = gameResult === 'player';
			dispatch(updateScore({ isPlayerWinner: newPlayerWin }));

			const newResponseChoices: string[] = newPlayerWin ? computerResponses.playerWin : computerResponses.computerWin;
			const newResponseIndex = Math.floor(Math.random() * newResponseChoices.length);
			const newResponse: string = newResponseChoices[newResponseIndex];
			dispatch(updateResponse({ response: newResponse }));

		} else {
			if (!isGameStarted) {
				const newResponseChoices: string[] = computerResponses.start;
				const newResponseIndex = Math.floor(Math.random() * newResponseChoices.length);
				const newResponse: string = newResponseChoices[newResponseIndex];
				dispatch(updateResponse({ response: newResponse }));
			}
			if (!isPlayerTurn) {
				const newResponseChoices: string[] = computerResponses.move;
				const newResponseIndex = Math.floor(Math.random() * newResponseChoices.length);
				const newResponse: string = newResponseChoices[newResponseIndex];
				dispatch(updateResponse({ response: newResponse }));

				if (isResponseDone) {
					const computerSymbol: ('X' | 'O') = isPlayerXs ? 'O' : 'X';
					const newPosition = computerPlayerChoice(gameData, computerSymbol);
					dispatch(takeTurn({
						pos: newPosition,
						val: computerSymbol,
					}));
				}
			}
		}
	}, [isPlayerTurn]);

	const styles = {
		board: {
			width: { xs: '90vmin', sm: '60vmin' },
			height: { xs: '90vmin', sm: '60vmin' },
			backgroundColor: mainTheme.palette.grey[300],
			color: mainTheme.palette.primary.contrastText,
			borderRadius: '10px',
			alignItems: 'center',
			mx: 'auto',
		},
		row: {
			height: { xs: '30vmin', sm: '20vmin' },
		}
	}
	
	return (
		<Grid container sx={styles.board}>
			<Grid container item sx={styles.row}>
				{row1Data.map((val, idx) => (
					<GameSquare 
					key={idx}
					status={val}
					pos={idx}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
			{row2Data.map((val, idx) => (
					<GameSquare 
					key={idx}
					status={val}
					pos={idx+3}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
				{row3Data.map((val, idx) => (
					<GameSquare 
					key={idx}
					status={val}
					pos={idx+6}
					/>
				))}			
			</Grid>
		</Grid>
	);
}