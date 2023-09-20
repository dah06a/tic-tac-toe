import { ReactElement } from 'react';
import { SvgIconProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import TripOrigin from '@mui/icons-material/TripOrigin';

import { useAppDispatch } from '../../app/hooks';
import { takeTurn } from './gameSlice';

import { mainTheme } from '../../themes/mainTheme';

type SquareProps = {
    status: 'X' | 'O' | null;
    pos: number;
}

export default function Square(props: SquareProps) {
    const { status, pos } = props;
    const dispatch = useAppDispatch();

    function handleTurn() {
        console.log(pos);
        dispatch(takeTurn({
            pos: pos,
            val: 'X',
        }));
    }

    const gridColor = mainTheme.palette.grey[500];
    const styles = {
        square: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: pos > 2 ? `5px solid ${gridColor}` : 'none',
            borderBottom: pos < 6 ? `5px solid ${gridColor}` : 'none',
            borderLeft: pos % 3 > 0 ? `5px solid ${gridColor}` : 'none',
            borderRight: pos % 3 < 2 ? `5px solid ${gridColor}` : 'none',
        },
        iconBtn: {
            width: '90%',
            height: '90%',
            '&:hover': {
                backgroundColor: mainTheme.palette.grey[500],
            },
        },
        icon: {
            fontSize: { xs: 60, sm: 100 },
        },
    }

    let icon: ReactElement<SvgIconProps> | null = null;
    if (status === 'X') {
        icon = <Close sx={styles.icon} />;
    } else if (status === 'O') {
        icon = <TripOrigin sx={styles.icon} />;
    }

    return (
        <Grid item xs={4} sx={styles.square}>
            <IconButton size='large' sx={styles.iconBtn} onClick={handleTurn}>
                {icon}
            </IconButton>
        </Grid>
    );
}
