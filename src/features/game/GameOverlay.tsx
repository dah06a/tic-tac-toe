import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { GameStatus, selectGameStatus } from './gameSlice';
import { mainTheme } from '../../themes/mainTheme';

import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import SportsIcon from '@mui/icons-material/Sports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GppBadIcon from '@mui/icons-material/GppBad';

export default function GameOverlay() {
	const gameStatus: GameStatus = useAppSelector(selectGameStatus);
	const [showOverlay, setShowOverlay] = useState(false);


	useEffect(() => {
		if (gameStatus.gameOver) {
			setShowOverlay(true);

			const overlayTimeout = setTimeout(() => {
				setShowOverlay(false);
			}, 3000);

			return () => {
				clearTimeout(overlayTimeout)
			}
		}
	}, [gameStatus.gameOver]);

	let iconColor = mainTheme.palette.grey[50];
	if (gameStatus.result === 'player') {
		iconColor = mainTheme.palette.primary.main;
	}
	if (gameStatus.result === 'computer') {
		iconColor = mainTheme.palette.secondary.dark;
	}

	const styles = {
		overlay: {
			position: 'relative',
		},
		content: {
			display: 'flex',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100vw',
			height: '90vh',
			justifyContent: 'center',
			alignItems: 'center',
		},
		message: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '90vmin',
			height: '90vmin',
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			zIndex: 100,
			borderRadius: '50%',
			color: mainTheme.palette.grey[50],
		},
		icon: {
			fontSize: '5em',
			color: iconColor,
		},
	}

	let message = (
		<>
			<h2>Tie</h2>
			<SportsIcon sx={styles.icon} />
			<h2>Game</h2>
		</>
	);

	if (gameStatus.result === 'player') {
		message = (
			<>
				<h2>Player</h2>
				<EmojiEventsIcon sx={styles.icon} />
				<h2>Victory</h2>
			</>
		);
	}

	if (gameStatus.result === 'computer') {
		message = (
			<>
				<h2>Computer</h2>
				<GppBadIcon sx={styles.icon} />
				<h2>Victory</h2>
			</>
		);
	}

	return ( 
		gameStatus.gameOver 
			? <Box sx={styles.overlay}>
				<Zoom in={showOverlay} timeout={1000}>
						<Box sx={styles.content}>
							<Box sx={styles.message}>
								{message}
							</Box>
						</Box>
				</Zoom>
			</Box>
			: null
	);
}