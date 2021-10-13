import React, { useState } from "react";

import styles from "./header.module.scss";

import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";

import { links } from "./links";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import LoadingComponent from "../loading";
import { useAuth0 } from "@auth0/auth0-react";

type User = {
  picture: string;
  name: string;
  email: string;
};

type UseAuth0 = {
  user?: User;
  isAuthenticated: boolean;
  isLoading: boolean;
};

function HeaderComponent() {
  const { user, isLoading }: UseAuth0 = useAuth0();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (isLoading) {
    return <LoadingComponent />;
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={styles.header}>
      <div>
        <IconButton
          className={styles.menuButton}
          onClick={() => toggleDrawer()}
          aria-label="menu"
        >
          <Icon fontSize="large">menu</Icon>
        </IconButton>
      </div>

      <div className="wrapper"></div>

      <div className={styles.imageContainer}>
        <img src={user?.picture} alt={user?.name} />
      </div>

      <Drawer
        className={styles.drawer}
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        <nav>
          <header>
            <IconButton
              className={styles.closeButton}
              onClick={() => toggleDrawer()}
              aria-label="fechar"
              size="large"
            >
              <Icon>close</Icon>
            </IconButton>
            <div className={styles.imageContainer}>
              <img src={user?.picture} alt={user?.name} />
            </div>
            <p className={styles.text}>
              Olá, <span className={styles.userName}>{user?.name}</span>
            </p>
          </header>
          <div className={styles.n}>
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => toggleDrawer()}
                  className={
                    link.className
                      ? `${styles.link} ${styles[link.className]}`
                      : `${styles.link}`
                  }
                >
                  <Icon sx={{ fontSize: 30 }}>{link.icon}</Icon>
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </div>
        </nav>
      </Drawer>
    </header>
  );
}

export default HeaderComponent;
