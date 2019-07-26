import React,{ Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
class Text extends Component{
    render(){
        return(
            <Grid  xs={12}>
            <Grid item xs={12}  className="textstyle">
              <Typography component="div">
                <Box fontWeight="fontWeightLight" textAlign="right" fontSize="h2.fontSize" m={1}>
                  And also
          </Box>
                <Box fontWeight="fontWeightBold" lineHeight={0.5} fontSize="h2.fontSize" m={1}>
                  protect your data
          </Box>
                <Box fontWeight="fontWeightLight" textAlign="right" fontSize="h2.fontSize" m={1}>
                  by carefully
          </Box>
                <Box fontWeight="fontWeightLight" lineHeight={0.5} textAlign="right" fontSize="h2.fontSize" m={1}>
                  managing it.
          </Box>
              </Typography>
            </Grid>
            </Grid>
        )
    }

}
export default Text;