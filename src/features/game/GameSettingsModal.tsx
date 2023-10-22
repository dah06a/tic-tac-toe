import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGameMode, updateMode, GameMode } from './gameSlice';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { mainTheme } from '../../themes/mainTheme';

type GameSettingsModal = {
	show: boolean,
	handleClose: () => void
}

export default function GameSettingsModal(props: GameSettingsModal) {
	const { show, handleClose } = props;
    const curMode = useAppSelector(selectGameMode);
    const easy: GameMode = 'easy';
    const medium: GameMode = 'medium';
    const hard: GameMode = 'hard';

	const dispatch = useAppDispatch();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = e.target.value;
        let newMode: GameMode = 'easy'
        if (val === 'medium') {
            newMode = 'medium';
        }
        if (val === 'hard') {
            newMode = 'hard';
        }
        dispatch(updateMode({ mode: newMode }));
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
				Game Settings
			</DialogTitle>

			<IconButton onClick={handleClose} sx={styles.closeIcon}>
				<CloseIcon />
			</IconButton>

			<DialogContent dividers>
				<Typography gutterBottom>
					Select the computer difficulty level.
				</Typography>

                <FormControl>
                    <FormLabel>Computer Difficult Mode</FormLabel>
                    <RadioGroup
                        row
                        name="controlled-radio-buttons-group"
                        value={curMode}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
                    </RadioGroup>
                </FormControl>
			</DialogContent>

		</Dialog>
    );
}
