import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { mainTheme } from '../../themes/mainTheme';

function FormRow() {
  return (
    <>
      <Grid item xs={4}>
        test1
      </Grid>
      <Grid item xs={4}>
        test2
      </Grid>
      <Grid item xs={4}>
        test3
      </Grid>
    </>
  );
}

const styles = {
	box: {
		width: { xs: '100%', sm: '75%', md: '50%' },
		height: { xs: '75%' },
		backgroundColor: mainTheme.palette.primary.light,
		borderRadius: '10px',
	}
}

export default function Board() {
	
	return (
		<Box sx={styles.box}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
	);
}