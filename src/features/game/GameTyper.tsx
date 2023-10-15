import  { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectResponse, updateResponseStatus } from './gameSlice';

export default function GameTyper() {
	const text = useAppSelector(selectResponse);
  const [displayText, setDisplayText] = useState('');
	const speed: number = 50;
	const dispatch = useAppDispatch();

  useEffect(() => {
    let index = 0;
    let currText = "testing a string that takes up more space: ";

    if (text) {
      dispatch(updateResponseStatus({ isDone: false }));

      let typerInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((currText += text[index]));
          index++;
        } else {
          index = 0;
          currText = "testing a string that takes up more space: ";
          dispatch(updateResponseStatus({ isDone: true }));
          clearInterval(typerInterval);
        }
      }, speed);
    }

    return () => {
      dispatch(updateResponseStatus({ isDone: true }));
    }

  }, [text]);

  return (
    <>
      {displayText}
    </>
	);
};