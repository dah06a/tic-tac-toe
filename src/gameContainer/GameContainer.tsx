import { ReactNode } from 'react';
import Container from '@mui/material/Container';

const styles = {
    container: {
        display: 'flex',
        mt: '10vh',
        px: { xs: '12px', sm: '24px' },
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

type GameContainerProps = {
	children?: ReactNode;
}

export default function GameContainer(props: GameContainerProps) {
    return (
        <Container sx={styles.container}>
            {props.children}
        </Container>
    );
}