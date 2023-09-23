import { useAppSelector } from '../../app/hooks';
import { selectScore } from './gameSlice';
import { mainTheme } from '../../themes/mainTheme';

import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';

export default function GameScore() {
	const score = useAppSelector(selectScore);

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
			<Box sx={[styles.mainScoreBox, styles.labelBox]}>
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
			<Box sx={[styles.mainScoreBox, styles.labelBox]}>
				Computer
			</Box>
			<Box sx={[styles.mainScoreBox, styles.detailBox]}>
				<DvrIcon sx={styles.iconSize} />
			</Box>
		</Box>
	);
}