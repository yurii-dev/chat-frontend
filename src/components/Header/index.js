import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Icon, Menu, Image } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  const { dialogDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };
  return (
    <div style={{ width: "100%" }}>
      <Menu secondary pointing>
        <Image src={logo} />
        {pathname === "/" && (
          <Menu.Item position="right">
            <Button onClick={handleUserLogout} color="red" basic icon>
              <Icon name="log out"></Icon>
              Logout
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
}

export default Header;
