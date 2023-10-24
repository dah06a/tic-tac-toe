import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { 
    selectGameMode, 
    selectGameRules, 
    selectGameData,
    selectGameStatus,
    updateMode, 
    toggleRules, 
    GameMode 
} from './gameSlice';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import { mainTheme } from '../../themes/mainTheme';

type GameSettingsModalProps = {
	show: boolean,
	handleClose: () => void
}

export default function GameSettingsModal(props: GameSettingsModalProps) {
	const { show, handleClose } = props;
    const curMode = useAppSelector(selectGameMode);
    const isNormalRules = useAppSelector(selectGameRules);
    const gameData = useAppSelector(selectGameData);
    const isGameOver = useAppSelector(selectGameStatus).gameOver;
    const isGameStarted: boolean = gameData.filter(s => s !== null).length !== 0;
    const disableSettings = isGameStarted && !isGameOver;

    const rulesLabel = isNormalRules ? 'Rules = Regular Tic Tac Toe' : 'Rules = All X\'s Misère!';
    const tooltipText = isNormalRules
        ? 'You and the computer play X\'s and O\'s.  Get three in a row to win.'
        : 'Both you and the computer play X\'s. Force the computer to get three in a row to win.'
    ;

	const dispatch = useAppDispatch();


    function handleModeChange(e: React.ChangeEvent<HTMLInputElement>) {
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

    function handleRuleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(toggleRules({ toggle: !e.target.checked} ));
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
		<Dialog onClose={handleClose} open={show} fullWidth maxWidth='sm'>
			<DialogTitle sx={styles.title}>
				Game Settings
			</DialogTitle>

			<IconButton onClick={handleClose} sx={styles.closeIcon}>
				<CloseIcon />
			</IconButton>

			<DialogContent dividers>
                <FormControl>
                    <FormLabel>Computer Difficult Mode</FormLabel>
                    <RadioGroup row value={curMode} onChange={handleModeChange}>
                        <FormControlLabel disabled={disableSettings} value="easy" control={<Radio />} label="Easy" />
                        <FormControlLabel disabled={disableSettings} value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel disabled={disableSettings} value="hard" control={<Radio />} label="Hard" />
                    </RadioGroup>
                </FormControl>
			</DialogContent>

            <DialogContent dividers>
                <FormControl>
                    <FormLabel>Game Rules</FormLabel>  
                    <Tooltip title={tooltipText} placement='top'>
                        <FormControlLabel 
                            control={
                                <Switch 
                                    checked={!isNormalRules}
                                    value={isNormalRules}
                                    onChange={handleRuleChange}
                                    disabled={disableSettings}
                                />
                            } 
                            label={rulesLabel}
                        />
                    </Tooltip>  
                </FormControl>
			</DialogContent>

		</Dialog>
    );
}
