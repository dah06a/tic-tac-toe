import { useState } from 'react';
import NavDrawer from './NavDrawer';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { mainTheme } from '../../themes/mainTheme';

const styles = {
	navbar: {
		display: 'flex',
		height: '10vh',
		backgroundColor: mainTheme.palette.primary.main,
		color: mainTheme.palette.primary.contrastText,
	},
	toolbar: {
		height: '100%',
	},
	menuBtn: {
		display: { sm: 'none' },
		mr: 2,
		color: 'inherit',
	},
	title: {
		flexGrow: 1, 
		justifyContent: { xs: 'flex-end', sm: 'flex-start' },
		display: 'flex',
	},
	navItems: {
		display: { xs: 'none', sm: 'block' },
	},
	navBtn: {
		color: mainTheme.palette.primary.contrastText,
	}
}

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
	const navItems: string[] = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
		<AppBar component="nav" sx={styles.navbar}>
			<Toolbar sx={styles.toolbar}>
				<IconButton onClick={handleDrawerToggle} sx={styles.menuBtn}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={styles.title}>
					Tic Tac Toe
				</Typography>
				<Box sx={styles.navItems}>
					{navItems.map((item) => (
						<Button key={item} sx={styles.navBtn}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
			<nav>
				<NavDrawer
					navItems={navItems} 
					mobileOpen={mobileOpen} 
					handleDrawerToggle={handleDrawerToggle}
				/>
			</nav>
		</AppBar>
  );
}