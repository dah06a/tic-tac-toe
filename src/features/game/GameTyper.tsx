import  { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectResponse, selectResponseStatus, updateResponseStatus } from './gameSlice';
import { Typography } from '@mui/material';


export default function GameTyper() {
	const text = useAppSelector(selectResponse);
  // const [displayText, setDisplayText] = useState('');
	// const speed: number = 100;

	// const dispatch = useAppDispatch();

  // useEffect(() => {
	// 	dispatch(updateResponseStatus({ isDone: false }));
  //   let i: number = 0;
  //   const typingInterval = setInterval(() => {
  //     if (i < text.length) {
  //       setDisplayText(prevText => prevText + text.charAt(i));
  //       i++;
  //     } else {
  //       clearInterval(typingInterval);
	// 			dispatch(updateResponseStatus({ isDone: true }));
  //     }
  //   }, speed);

  //   return () => {
  //     clearInterval(typingInterval);
	// 		dispatch(updateResponseStatus({ isDone: true }));
  //   };
  // }, [text, speed, dispatch]);

  return (
		<Typography>
			{text}
		</Typography>
	);
};