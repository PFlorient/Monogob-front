import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';

export interface NavbarProps {
  username?: string;
  onConnectClick: () => void;
  onDisconnectClick: () => void;
}

const Navbar = ({ username, onConnectClick, onDisconnectClick }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const disconnectClick = () => {
    setAnchorEl(null);
    onDisconnectClick?.();
  };
  return (
    <nav className="flex font-fresh-olive text-lg w-full justify-between items-center py-2 absolute top-0 left-0">
      <div>
        <Link to="/">€ Gobcass</Link>
      </div>
      <div className="flex space-x-4">
        <div>
          <Link to="/concept">Concept</Link>
        </div>
      </div>
      <div>
        {username ? (
          <React.Fragment>
            <Button
              onClick={handleClickMenu}
              variant="bordered"
              aria-controls="account-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              sx={{ textTransform: 'none', fontSize: 'inherit' }}
            >
              {username}
            </Button>
            <Menu id="account-menu" anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
              <MenuItem onClick={disconnectClick}>Deconnexion</MenuItem>
            </Menu>
          </React.Fragment>
        ) : (
          <Button
            onClick={onConnectClick}
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
