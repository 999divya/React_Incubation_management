import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SideDrawer from "../Drawer/SideDrawer";
const PAGES = ["About Us", "Services", "Contact Us"];
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#15244c" }}>
        <Toolbar>
          <WorkspacePremiumOutlinedIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Kstyles Corp
              </Typography>
              <SideDrawer />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                }}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => {
                  return <Tab key={index} label={page} />;
                })}

                {/* <Tab sx={{marginLeft:'35px'}} label="About Us"/>
<Tab label="Services"/>
<Tab label="Contact Us"/> */}
              </Tabs>

              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
