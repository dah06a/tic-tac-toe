import GameBoard from '../../features/game/GameBoard';
import GamePanel from '../../features/game/GamePanel';
import GameOverlay from '../../features/game/GameOverlay';
import GameVictoryModal from '../../features/game/GameVictoryModal';

import Container from '@mui/material/Container';

export default function GamePage() {

	const styles = {
		pageContainer: {
			display: 'flex',
			flexDirection: {xs: 'column', sm: 'row'},
			height: '90vh',
			mt: '10vh',
			px: { xs: '12px', sm: '24px' },
			alignItems: {xs: 'flex-end', sm: 'center'},
		},
		gameContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: {xs: '100%', sm: '60%', md: '50%'},
			height: '100%',
			py: {xs: 2, sm: 0},
		},
		panelContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: {xs: '100%', sm: '40%', md: '50%'},
			height: '100%',
			py: {xs: 2, sm: 0},
		},
	}

	return (
		<>
		<GameVictoryModal />
		<GameOverlay />
		<Container id="game-page" sx={styles.pageContainer}>
			<Container id='game-container' sx={styles.gameContainer}>
				<GameBoard />
			</Container>
			<Container id='game-panel' sx={styles.panelContainer}>
				<GamePanel />
			</Container>
		</Container>
		</>
	);
}
