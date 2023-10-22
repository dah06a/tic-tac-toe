import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { newGame } from './gameSlice';
import { selectGameStatus } from './gameSlice';
import GameResetModal from './GameResetModal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RestartAlt from '@mui/icons-material/RestartAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { mainTheme } from '../../themes/mainTheme';

export default function GameButtons() {
	const dispatch = useAppDispatch();

	const [showResetModal, setShowResetModal] = useState(false);
	const isGameOver: boolean = useAppSelector(selectGameStatus).gameOver;

function handleOpenResetModal(): void {
	setShowResetModal(true);
}

function handleCloseResetModal(): void {
		setShowResetModal(false);
}

const styles = {
		box: {
				display: 'flex',
				my: 3,
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
		},
		resetBtn: {
				width: '48%',
				backgroundColor: mainTheme.palette.secondary.dark,
				'&:hover': {
						backgroundColor: mainTheme.palette.secondary.main,
				}
		},
		newGameBtn: {
				width: '48%',
				backgroundColor: mainTheme.palette.primary.main,
				'&:hover': {
						backgroundColor: mainTheme.palette.primary.dark,
				}
		}
}

	return (
		<Box sx={styles.box}>
			<Button 
				variant='contained' 
				disabled={!isGameOver}
				startIcon={<RestartAlt />} 
				sx={styles.resetBtn}
				onClick={handleOpenResetModal}
			>
				Reset All
			</Button>
			<Button 
				variant='contained' 
				disabled={!isGameOver}
				endIcon={<PlayCircleOutlineIcon />} 
				sx={styles.newGameBtn}
				onClick={() => dispatch(newGame())}
			>
				New Game
			</Button>
			<GameResetModal show={showResetModal} handleClose={handleCloseResetModal} />
		</Box>
	);
}