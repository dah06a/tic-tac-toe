import GameScore from './GameScore';
import GameButtons from './GameButtons';
import { mainTheme } from '../../themes/mainTheme';

import Container from '@mui/material/Container';

const styles = {
    container: {
		width: { xs: '90vmin', sm: '40vmin', md: '60vmin' },
		height: { xs: '50vmin', sm: '60vmin' },
        backgroundColor: mainTheme.palette.primary.light,
        borderRadius: '10px',
        mx: 'auto',
    }
}

export default function GamePanel() {
    return (
        <Container sx={styles.container}>
            <GameScore />
            <GameButtons />
        </Container>
    );
}
