import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled(Typography)`
 color : red;
`
const Header = () =>{
    return(
        <Box>
            <AppBar color="inherit" position="static">
                <Toolbar >
                    <Heading variant="h5" sx={{ flexGrow: 1 }}>
                         React-TS-MUI
                    </Heading> 
                    <Tabs sx={{ flexGrow: 15 }}>
                        <Link to="/"><Tab value="one" label="Home"/></Link>
                        <Link to="/form"><Tab value="two" label="Form" /></Link>
                        <Link to="/contact"><Tab value="three" label="Contact Us" /></Link>
                    </Tabs>
                    <IconButton
                        size="large"
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;