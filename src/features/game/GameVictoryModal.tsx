import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGameVictory, resetGame, GameVictory, } from './gameSlice';
import GameTerminal from './GameTerminal';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function GameVictoryModal() {
  const gameVictory: GameVictory = useAppSelector(selectGameVictory);
	const dispatch = useAppDispatch();

  function handleResetAll(): void {
		dispatch(resetGame());
	}

	const styles = {
		title: {
			m: 0,
			p: 2,
      display: 'flex',
      justifyContent: 'center',
      fontSize: '32px'
		},
	}

    return (
		<Dialog open={gameVictory.victory} disableEscapeKeyDown fullWidth maxWidth='md'>
			<DialogTitle sx={styles.title}>
				{gameVictory.result === 'player' ? 'Ultimate Victory' : 'Final Defeat'}
			</DialogTitle>

			<DialogContent dividers>
        <GameTerminal />
			</DialogContent>

      <DialogActions>
				<Button autoFocus onClick={handleResetAll}>
					Start Over
				</Button>
			</DialogActions>
		</Dialog>
    );
}
