import { ReactElement } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { takeTurn, SquareState, selectGameStatus, selectPlayerTurn, selectPlayerXs, selectResponseStatus } from './gameSlice';
import { mainTheme } from '../../themes/mainTheme';

import { SvgIconProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import TripOrigin from '@mui/icons-material/TripOrigin';

type SquareProps = {
	status: SquareState;
	pos: number;
}

export default function GameSquare(props: SquareProps) {
	const { status, pos } = props;
	const isGameOver: boolean = useAppSelector(selectGameStatus).gameOver;
	const isPlayerXs: boolean = useAppSelector(selectPlayerXs);
	const isPlayerTurn: boolean = useAppSelector(selectPlayerTurn);
	const isResponseDone: boolean = useAppSelector(selectResponseStatus)
	
	const dispatch = useAppDispatch();

	function handleTurn() {
		const playerSymbol: ('X' | 'O') = isPlayerXs ? 'X' : 'O';
		dispatch(takeTurn({
			pos: pos,
			val: playerSymbol,
		}));
	}

	const gridColor: string = mainTheme.palette.grey[500];
	const iconColor = (isPlayerXs && status === 'X') || (!isPlayerXs && status === 'O')
		? mainTheme.palette.primary.main
		: mainTheme.palette.secondary.dark
	;
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
			color: iconColor,
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
			<IconButton 
				size='large' 
				sx={styles.iconBtn} 
				onClick={handleTurn} 
				disabled={isGameOver || !isPlayerTurn || !isResponseDone || status !== null}
		>
				{icon}
			</IconButton>
		</Grid>
	);
}
