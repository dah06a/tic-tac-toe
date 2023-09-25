import Box from '@mui/material/Box'
import Typewriter from 'typewriter-effect';
import { mainTheme } from '../../themes/mainTheme';

export default function GameTerminal() {

	const styles = {
		terminal: {
			display: 'flex',
			width: '100%',
			height: { xs: '25vmin', sm: '30vmin' },
			mx: 'auto',
			backgroundColor: mainTheme.palette.grey[700],
			color: mainTheme.palette.grey[50],
			fontSize: { xs: '1em', sm: '1.5em', md: '2em' },
			fontFamily: 'monospace',
			borderRadius: '10px',
		}
	}

  return (
		<Box sx={styles.terminal}>
			<Typewriter
				onInit={(typewriter) => {
						typewriter.typeString('Hello World!')
						.callFunction(() => {
								console.log('String typed out!');
						})
						.pauseFor(2500)
						.deleteAll()
						.callFunction(() => {
								console.log('All strings were deleted');
						})
						.start();
				}}
			/>
		</Box>
	);
}