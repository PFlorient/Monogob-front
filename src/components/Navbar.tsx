import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';

export interface NavbarProps {
  onConnectClick: () => void;
  isConnected: boolean;
  username?: string;
  onDisconnectClick: () => void;
}

const Navbar = ({ ...props }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    props.onDisconnectClick?.();
  };
  return (
    <nav className="flex font-fresh-olive text-lg w-full justify-between items-center">
      <div>
        <Link to="/">€ Gobcass</Link>
      </div>
      <div className="flex space-x-4">
        <div>
          <Link to="/concept">Concept</Link>
        </div>
      </div>
      <div>
        {props.isConnected ? (
          <React.Fragment>
            <Button
              onClick={handleClickMenu}
              variant="bordered"
              aria-controls="account-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              sx={{ textTransform: 'none', fontSize: 'inherit' }}
            >
              {props.username}
            </Button>
            <Menu id="account-menu" anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
              <MenuItem onClick={handleCloseMenu}>Deconnexion</MenuItem>
            </Menu>
          </React.Fragment>
        ) : (
          <Button
            onClick={props.onConnectClick}
            variant="bordered"
            sx={{ textTransform: 'none', fontSize: 'inherit' }}
          >
            Connexion
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
