import Grid from '@mui/material/Grid';

import Square from './Square';
import { useAppSelector } from '../../app/hooks';
import { selectGameData } from './gameSlice';

import { mainTheme } from '../../themes/mainTheme';


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

	const tempSquares: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const gameData = useAppSelector(selectGameData);
	const row1Data = gameData.slice(0, 3);
	const row2Data = gameData.slice(3, 6);
	const row3Data = gameData.slice(6);

	console.log(gameData);
	
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