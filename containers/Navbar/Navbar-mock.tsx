"use client";
import React, { useState, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import useWindowSize from "../../utils/windowSize";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
import { createWallet } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { images } from "../../assets/images";
let walletType;
let Pathname:any;


const client = createThirdwebClient({
  clientId: "....",
});


const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("com.bitget.web3"),
  createWallet("com.okex.wallet"),
  createWallet("com.binance"),
  createWallet("org.uniswap"),
];


export default function NavbarMock(props:any) {
  let walletAddress;
  let chain=1;
  const chainGlobal = chain;
  const router = useRouter();
  const windowSize = useWindowSize();
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);


  const [adminStatus, setAdminStatus] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showWalletAddress, setShowWalletAddress] = useState(false);

  return (
    <div className="nav-cont">
      <div className="nav-routes">
        <img
          src=""
          alt=" "
          className="logo-img"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <div className="routes">
          {walletAddress && adminStatus ? (
            <ul className={click ? "nav-menu active slide-in" : "nav-list"} id="slider">
              <li
                className={Pathname == "/" ? "nav-list-active" : ""}
                onClick={() => router.push("/")}
              >
                nav1
              </li>


              <li
                className={Pathname == "/user-lookup" ? "nav-list-active" : ""}
                onClick={() => router.push("/user-lookup")}
              >
                  nav1
              </li>


       
              <li
                className={Pathname == "/trade-godl" ? "nav-list-active" : ""}
                onClick={() => router.push("/trade-godl")}
              >
               nav1
              </li>
              <li
                className={Pathname == "/admin" ? "nav-list-active" : ""}
                onClick={() => router.push("/admin")}
              >
                   nav1
              </li>
            </ul>
          ) : (
            <ul className={click ? "nav-menu active slide-in" : "nav-list"}  id="slider">
              <li
                className={Pathname == "/" ? "nav-list-active" : ""}
                onClick={() => router.push("/")}
              >
                   nav1
              </li>


              <li
                className={Pathname == "/user-lookup" ? "nav-list-active" : ""}
                onClick={() => router.push("/user-lookup")}
              >
           nav1
              </li>
              
              <li
                className={Pathname == "/trade-godl" ? "nav-list-active" : ""}
                onClick={() => router.push("/trade-godl")}
              >
                     nav1
              </li>
            </ul>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <ConnectWallet/> */}
          {/* <ConnectWallet theme="dark" modalSize="compact" /> */}

          <ConnectButton
                    client={client}
                    wallets={wallets}
                    appMetadata={{
                        name: "Stable Layer",
                        url: "https://example.com",
                    }}
                />


          {windowSize.width <= 960 && (
            <div onClick={handleClick}>
              {click ? (
                <IconContext.Provider
                  value={{
                    size: "1.2em",
                    color: "#73A0FB",
                    className: "global-class-name",
                  }}
                >
                  <div style={{ marginLeft: 15, cursor: "pointer" }}>
                    <MdOutlineClose />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: "1.2em",
                    color: "#73A0FB",
                    className: "global-class-name",
                  }}
                >
                  <div style={{ marginLeft: 15, cursor: "pointer" }}>
                     <GiHamburgerMenu />
                  </div>
                </IconContext.Provider>
              )}
            </div>
          )}
        </div>
      </div>
   


     
    </div>
  );
}


