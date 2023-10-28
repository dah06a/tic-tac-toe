import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectScore, selectPlayerTurn, updateVictory, updateResponse } from './gameSlice';
import { mainTheme } from '../../themes/mainTheme';

import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';

export default function GameScore() {
	const score = useAppSelector(selectScore);
	const isPlayerTurn = useAppSelector(selectPlayerTurn);
	const dispatch = useAppDispatch();
	const victoryNum: number = 5;

	useEffect(() => {
		if (score.computer >= score.player + victoryNum) {
			dispatch(updateVictory({ victory: true, result: 'computer' }));
			dispatch(updateResponse({ response: 'I am the ultimate tic tac toe champion!'}))
		}
		if (score.player >= score.computer + victoryNum) {
			dispatch(updateVictory({ victory: true, result: 'player' }));
			dispatch(updateResponse({ response: 'How can this be?  I am ... defeated!'}))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [score]);

	const styles = {
		mainContainer: {
			display: 'flex',
			justifyContent: 'space-evenly',
			my: 2,
			color: mainTheme.palette.grey[700],
			fontSize: { xs: '1em', sm: '0.8em', md: '1em' },
			fontWeight: 'bold',
		},
		mainScoreBox: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		detailBox: {
			width: '10%',
		},
		labelBox: {
			width: '25%',
		},
		playerBox: {
			color: isPlayerTurn ? mainTheme.palette.primary.main : mainTheme.palette.grey[700],
			fontWeight: isPlayerTurn ? 'bolder' : 'bold',
		},
		computerBox: {
			color: !isPlayerTurn ? mainTheme.palette.secondary.dark : mainTheme.palette.grey[700],
			fontWeight: !isPlayerTurn ? 'bolder' : 'bold',
		},
		iconSize: {
			fontSize: { xs: '1em', sm: '0.8em', md: '1.5em' },
		},
		scoreDecoration: {
			fontSize: { xs: '1.1em', sm: '0.9em', md: '1.1em' },
			color: mainTheme.palette.grey[900],
		},
	}

	return (
		<Box sx={styles.mainContainer}>
			<Box sx={[styles.mainScoreBox, styles.detailBox]}>
					<PersonIcon sx={styles.iconSize} />
			</Box>
			<Box sx={[styles.mainScoreBox, styles.labelBox, styles.playerBox]}>
				Player
			</Box>
			<Box sx={[styles.mainScoreBox, styles.detailBox, score.player > score.computer ? styles.scoreDecoration : null]}>
				{' ' + score.player}
			</Box>
			<Box sx={[styles.mainScoreBox, styles.detailBox]}>
				-
			</Box>
			<Box sx={[styles.mainScoreBox, styles.detailBox, score.player < score.computer ? styles.scoreDecoration : null]}>
				{score.computer}
			</Box>
			<Box sx={[styles.mainScoreBox, styles.labelBox, styles.computerBox]}>
				Computer
			</Box>
			<Box sx={[styles.mainScoreBox, styles.detailBox]}>
				<DvrIcon sx={styles.iconSize} />
			</Box>
		</Box>
	);
}