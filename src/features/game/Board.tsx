import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectGameData, selectPlayerTurn, selectPlayerXs, takeTurn, resetGame, newGame, SquareState } from './gameSlice';
import { checkGameOver } from '../../utils/checkGameOver';
import { computerPlayerChoice } from '../../utils/computerPlayerChoice';
import { mainTheme } from '../../themes/mainTheme';
import Square from './Square';

import Grid from '@mui/material/Grid';

const styles = {
	board: {
		width: { xs: '90vmin', sm: '60vmin' },
		height: { xs: '90vmin', sm: '60vmin' },
		backgroundColor: mainTheme.palette.grey[300],
		color: mainTheme.palette.primary.contrastText,
		borderRadius: '10px',
		alignItems: 'center',
	},
	row: {
		height: { xs: '30vmin', sm: '20vmin' },
	}
}

export default function Board() {
	const gameData: SquareState[] = useAppSelector(selectGameData);
	const isPlayerTurn: boolean = useAppSelector(selectPlayerTurn);
	const isPlayerXs: boolean = useAppSelector(selectPlayerXs);
	const gameOverStatus: string = checkGameOver(gameData);

	const row1Data = gameData.slice(0, 3);
	const row2Data = gameData.slice(3, 6);
	const row3Data = gameData.slice(6);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (gameOverStatus) {
			console.log('GAME OVER');
			console.log('Game goes to:', gameOverStatus);
			setTimeout(() => {
				dispatch(newGame());
			}, 1000);
		}
		if (!isPlayerTurn && !gameOverStatus) {
			const computerSymbol: ('X' | 'O') = isPlayerXs ? 'O' : 'X';
			const newPosition = computerPlayerChoice(gameData, computerSymbol);
			dispatch(takeTurn({
				pos: newPosition,
				val: computerSymbol,
			}));
		}
	});
	
	return (
		<Grid container sx={styles.board}>
			<Grid container item sx={styles.row}>
				{row1Data.map((val, idx) => (
					<Square 
					key={idx}
					status={val}
					pos={idx}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
			{row2Data.map((val, idx) => (
					<Square 
					key={idx}
					status={val}
					pos={idx+3}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
				{row3Data.map((val, idx) => (
					<Square 
					key={idx}
					status={val}
					pos={idx+6}
					/>
				))}			
			</Grid>
		</Grid>
	);
}