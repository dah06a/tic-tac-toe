import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
	selectGameData,
	selectGameMode, 
	selectPlayerTurn, 
	selectPlayerXs,
	selectResponseStatus, 
	selectGameRules,
	takeTurn, 
	updateStatus,
	updateScore, 
	updateResponse,
	SquareState,
	GameResult,
	GameStatus,
	GameMode,
} from './gameSlice';
import { checkGameOver } from '../../utils/checkGameOver';
import { computerNormalChoice } from '../../utils/computerNormalChoice';
import { computerMisereChoice } from '../../utils/computerMisereChoice';
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
	const isNormalRules: boolean = useAppSelector(selectGameRules);
	const gameOverStatus: string = checkGameOver(gameData, isNormalRules);
	const gameMode: GameMode = useAppSelector(selectGameMode);

	const row1Data: SquareState[] = gameData.slice(0, 3);
	const row2Data: SquareState[] = gameData.slice(3, 6);
	const row3Data: SquareState[] = gameData.slice(6);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (gameOverStatus) {
			let gameResult: GameResult;
			if (isNormalRules) {
				if (gameOverStatus === 'tie') {
					gameResult = 'tie';
				} else if ((isPlayerXs && gameOverStatus === 'X') || (!isPlayerXs && gameOverStatus === 'O')) {
					gameResult = 'player';
				} else {
					gameResult = 'computer';
				}
			} else {
				if (gameOverStatus !== 'X') {
					console.error('Non-X GameOver result returned for misere-rules.');
					gameResult = 'tie';
				} else if (isPlayerTurn) {
					gameResult = 'player';
				} else {
					gameResult = 'computer';
				}
			}
			dispatch(updateScore({ isPlayerWinner: gameResult === 'player' }));

			const newResponseSet: string[] = computerResponses[gameResult];
			const randIndex = Math.floor(Math.random() * newResponseSet.length);
			dispatch(updateResponse({ response: newResponseSet[randIndex] }));

			const newStatus: GameStatus = { gameOver: true, result: gameResult}
			dispatch(updateStatus(newStatus));

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
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlayerTurn, gameOverStatus]);

	useEffect(() => {
		if (isResponseDone && !isPlayerTurn && !gameOverStatus) {
			const computerSymbol: SquareState = isPlayerXs ? 'O' : 'X';
			let newPosition: number = 0;
			if (isNormalRules) {
				newPosition = computerNormalChoice(gameData, computerSymbol, gameMode);
			} else {
				newPosition = computerMisereChoice(gameData, computerSymbol, gameMode);
			}
			dispatch(takeTurn({
				pos: newPosition,
				val: computerSymbol,
			}));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isResponseDone]);

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