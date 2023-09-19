import Grid from '@mui/material/Grid';

import Square from './Square';
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
	
	return (
		<Grid container sx={styles.board}>
			<Grid container item sx={styles.row}>
				{tempSquares.slice(0, 3).map(item => (
					<Square 
					key={item}
					status='X'
					pos={item}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
			{tempSquares.slice(3, 6).map(item => (
					<Square 
					key={item}
					status='O'
					pos={item}
				/>
				))}
			</Grid>
			<Grid container item sx={styles.row}>
				{tempSquares.slice(6).map(item => (
						<Square 
						key={item}
						status={null}
						pos={item}
					/>
				))}			
			</Grid>
		</Grid>
	);
}