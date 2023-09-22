import GameButtons from './GameButtons';
import { mainTheme } from '../../themes/mainTheme';

import Container from '@mui/material/Container';

const styles = {
    container: {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
		width: { xs: '90vmin', sm: '30vmin', md: '60vmin' },
		height: { xs: '50vmin', sm: '60vmin' },
        alignItems: 'center',
        backgroundColor: mainTheme.palette.primary.light,
        borderRadius: '10px',
        mx: 'auto',
    }
}

export default function GamePanel() {
    return (
        <Container sx={styles.container}>
            <GameButtons />
        </Container>
    );
}
