import { NavItem } from './Navbar';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { mainTheme } from '../../themes/mainTheme';

const styles = {
	drawer: {
		display: { 
			xs: 'block', 
			sm: 'none',
			textAlign: 'center',
		},
		'& .MuiDrawer-paper': { 
			boxSizing: 'border-box', 
			width: '50%', 
			backgroundColor: mainTheme.palette.primary.main,
			color: mainTheme.palette.primary.contrastText,
		},
	},
	title: {
		my: 3,
	},
	divider: {
		borderTop: '3px solid',
	}
};

type NavDrawerProps = {
	navItems: NavItem[];
	mobileOpen: boolean;
	handleDrawerToggle: () => void;
}

export default function NavDrawer(props: NavDrawerProps) {
	const { navItems, mobileOpen, handleDrawerToggle } = props;

	return (
		<Drawer
			variant="temporary"
			open={mobileOpen}
			onClose={handleDrawerToggle}
			ModalProps={{ keepMounted: true }}
			sx={styles.drawer}
		>
			<Box onClick={handleDrawerToggle}>
				<Typography variant="h6" sx={styles.title}>
					Tic Tac Toe
				</Typography>
				<Divider sx={styles.divider} />
				<List>
					{navItems.map((item) => (
						<ListItem key={item.title} disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }} onClick={item.clickAction}>
								<ListItemText primary={item.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>

	);
}