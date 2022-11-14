import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import {ListItemText} from "@mui/material";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="flex flex-col">
        {["home", "works", "about", "blog","contact"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/${text === 'home' ? '' : text}`} prefetch={false} >
                <a>
                  <ListItemText sx={{fontWeight: 800}} className={router.pathname == `/${text === 'home' ? '' : text}` ? "text-amber-400": "text-[#424242]"} primary={text.toUpperCase()} />
                </a>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="bg-[#EE7526] mt-4 mx-auto w-2/3 rounded-full py-2 px-8">
            <p className="font-bold text-white">BEST OFFER</p>
        </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className="text-amber-600"/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
