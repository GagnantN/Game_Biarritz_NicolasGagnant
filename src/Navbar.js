import React from "react";
import LogoMascotte from "./img_mascotte/logo_wild.jpeg";
import styles from "./Navbar.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Navi extends React.Component {
  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        {/* Logo + lien Basile */}
        <Navbar className={styles.navbar}>
          <NavbarBrand>
            <img
              src={LogoMascotte}
              href="https://www.wildcodeschool.com/fr-FR/campus/biarritz"
              target="blank"
              className={`${styles.logo} d-inline`}
              alt="logo"
            />
            {/* Titre */}
          </NavbarBrand>
          <Nav>
            <h2
              className={`${
                styles.h2
              } d-inline my-auto text-white font-weight-bold font-italic`}
            >
              © Breakout Wild
            </h2>
          </Nav>
          {/* Logos + liens réseaux sociaux */}
          <Nav className="ml-auto" id="navlink">
            <NavItem
              className="d-none d-sm-block d-md-block d-lg-block"
              id="nav_link"
            >
              <NavLink
                href="https://github.com/GagnantN/Game_Biarritz_NicolasGagnant"
                target="blank"
              >
                <img
                  src="https://github.githubassets.com/favicon.ico"
                  className="phaserImage"
                  alt="github repository"
                />
              </NavLink>
            </NavItem>
            <NavItem
              className="d-none d-sm-block d-md-block d-lg-block"
              id="nav_link"
            >
              <NavLink href="https://phaser.io/" target="blank">
                <img
                  className="phaserImage"
                  src="https://raw.githubusercontent.com/willyg302/DaveLikesPizzaToo/master/app/assets/img/phaser-logo.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem
              className="d-none d-sm-block d-md-block d-lg-block"
              id="nav_link"
            />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
