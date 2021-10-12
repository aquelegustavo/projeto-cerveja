import React from "react";

import styles from "./header.module.scss";

import Drawer from "@material-ui/core/Drawer";

import { links } from "./links";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function getLinks() {
    return links.map((link) => {
      return (
        <Link
          key={link.id}
          to={link.path}
          className={
            link.className
              ? `${styles.link} ${styles[link.className]}`
              : styles.link
          }
        >
          {link.name}
        </Link>
      );
    });
  }

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDrawer()}>drawer</button>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        {getLinks()}
      </Drawer>

      <nav>{getLinks()}</nav>
    </header>
  );
}

export default HeaderComponent;
