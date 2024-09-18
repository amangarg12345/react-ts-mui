import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Typography } from "@mui/material";

const Header = () =>{
    return(
        <Box>
            <AppBar color="secondary">
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         React-TS-MUI
                    </Typography>
                    <Tabs sx={{ flexGrow: 15 }}>
                        <Tab value="one" label="Home" />
                        <Tab value="two" label="Form" />
                        <Tab value="three" label="Contact Us" />
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