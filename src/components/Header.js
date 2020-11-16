import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="app__header">
      <IconButton>
        <PersonIcon className="header__icon" />
      </IconButton>
      <img className="header__logo" src="tinder-logo.png" />
      <IconButton>
        <ForumIcon className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
