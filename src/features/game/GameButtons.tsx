import { useAppDispatch } from '../../app/hooks';
import { resetGame, newGame } from './gameSlice';
import { mainTheme } from '../../themes/mainTheme';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RestartAlt from '@mui/icons-material/RestartAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
        color: mainTheme.palette.secondary.main,
        borderColor: mainTheme.palette.secondary.main,
        '&:hover': {
            backgroundColor: mainTheme.palette.secondary.dark,
            borderColor: mainTheme.palette.secondary.dark,
            color: mainTheme.palette.grey[50],
        }
    },
    newGameBtn: {
        width: '48%',
        backgroundColor: mainTheme.palette.primary.light,
        '&:hover': {
            backgroundColor: mainTheme.palette.primary.main,
        }
    }
}

export default function GameButtons() {
    const dispatch = useAppDispatch();

    return (
        <Box sx={styles.box}>
            <Button 
                variant='outlined' 
                startIcon={<RestartAlt />} 
                sx={styles.resetBtn}
                onClick={() => dispatch(resetGame())}
            >
                Reset All
            </Button>
            <Button 
                variant='contained' 
                endIcon={<PlayCircleOutlineIcon />} 
                sx={styles.newGameBtn}
                onClick={() => dispatch(newGame())}
            >
                New Game
            </Button>
        </Box>
    );
}