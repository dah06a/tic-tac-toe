import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { resetGame } from './gameSlice';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { mainTheme } from '../../themes/mainTheme';

type GameResetModalProps = {
	show: boolean,
	handleClose: () => void
}

export default function GameResetModal(props: GameResetModalProps) {
	const { show, handleClose } = props;
	const dispatch = useAppDispatch();

	function handleResetAll(): void {
		dispatch(resetGame());
		handleClose();
	}

	const styles = {
		title: {
			m: 0,
			p: 2,
		},
		closeIcon: {
			position: 'absolute',
			right: 8,
			top: 8,
			color: mainTheme.palette.grey[500],
		}
	}

  return (
		<Dialog onClose={handleClose} open={show}>
			<DialogTitle sx={styles.title}>
				Reset all game data?
			</DialogTitle>

			<IconButton onClick={handleClose} sx={styles.closeIcon}>
				<CloseIcon />
			</IconButton>

			<DialogContent dividers>
				<Typography gutterBottom>
					Are you sure you want to erase all game data and start over?
				</Typography>
			</DialogContent>

			<DialogActions>
				<Button autoFocus onClick={handleResetAll}>
					Reset All
				</Button>
				<Button autoFocus onClick={handleClose}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
  );
}
