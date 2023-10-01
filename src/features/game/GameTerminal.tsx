// import { useAppSelector } from '../../app/hooks';
// import { selectGameStatus, selectGameData, selectPlayerTurn, SquareState } from './gameSlice';
import GameTyper from './GameTyper';

import Box from '@mui/material/Box'
import { mainTheme } from '../../themes/mainTheme';

export default function GameTerminal() {
	

	const styles = {
		terminalBox: {
			display: 'flex',
			width: '100%',
			height: { xs: '25vmin', sm: '30vmin' },
			mx: 'auto',
			backgroundColor: mainTheme.palette.grey[700],
			color: mainTheme.palette.grey[50],
			fontSize: { xs: '1em', sm: '1.5em', md: '2em' },
			fontFamily: 'monospace',
			borderRadius: '10px',
		},
		terminalWrapper: {
			p: 1,
		}
	}

  return (
		<Box sx={styles.terminalBox}>
			<Box sx={styles.terminalWrapper}>
				<GameTyper />
			</Box>
		</Box>
	);
}