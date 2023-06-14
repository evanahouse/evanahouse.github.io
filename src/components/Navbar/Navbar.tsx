import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { PALETTE } from "../../constants/palette";
import getPageURL from "../../features/getPageURL";

const pages = ["ABOUT", "PORTFOLIO", "RESUME", "CONTACT"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: PALETTE.bgOne, minHeight: 50 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* COMPUTER VIEW */}
          <Box component="a" href="/">
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                ml: 1,
                mt: 1,
                mb: 1,
                maxWidth: 100,
                maxHeight: 100,
              }}
              src={logo}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                size="large"
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(getPageURL(page));
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  typography: "h6",

                  "&:hover": {
                    color: PALETTE.bgTwo,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* MOBILE VIEW */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}  onClick={() => {
                  handleCloseNavMenu();
                  navigate(getPageURL(page));
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={logo}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              maxWidth: 50,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
