import  { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectResponse, updateResponseStatus } from './gameSlice';

import Box from '@mui/material/Box'
import { mainTheme } from '../../themes/mainTheme';

export default function GameTerminal() {
	const text = useAppSelector(selectResponse);
	const [displayText, setDisplayText] = useState('');
	const speed: number = 30;
	const dispatch = useAppDispatch();
  
	useEffect(() => {
	  let index = 0;
	  let currText = '';
  
	  if (text) {
		dispatch(updateResponseStatus({ isDone: false }));
  
		let typerInterval = setInterval(() => {
		  if (index < text.length) {
			setDisplayText((currText += text[index]));
			index++;
		  } else {
			index = 0;
			dispatch(updateResponseStatus({ isDone: true }));
			clearInterval(typerInterval);
		  }
		}, speed);
	  }
  
	  return () => {
		//dispatch(updateResponseStatus({ isDone: true }));
	  }
  
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	const styles = {
		terminalBox: {
			display: 'flex',
			width: '100%',
			height: { xs: '25vmin', sm: '30vmin' },
			mx: 'auto',
			backgroundColor: mainTheme.palette.grey[700],
			borderRadius: '10px',
		},
		terminalWrapper: {
			p: 1,
			textAlign: 'left',
			fontFamily: 'vt323',
			fontSize: { xs: '1em', sm: '1.5em', md: '2em' },
			color: mainTheme.palette.grey[50],
		}
	}

  return (
		<Box sx={styles.terminalBox}>
			<Box sx={styles.terminalWrapper} className='test'>
				{displayText}
			</Box>
		</Box>
	);
}