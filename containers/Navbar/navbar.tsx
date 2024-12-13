"use client";

import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { createWallet } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import useWindowSize from "../../utils/windowSize";
import { IconContext } from "react-icons";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import "../../styles/NavbarMock.css"

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const [StoredPathname, setStoredPathname] = React.useState("");
    const handleClick = () => setClick(!click);
    const windowSize = useWindowSize();
    const router = useRouter();
    const account = useActiveAccount();
    let Pathname: any;

    const client = createThirdwebClient({
        clientId: "bfb4a8901e09d80f302031db896aeec8",
    });
    const wallets = [
        createWallet("io.metamask"),
        createWallet("com.coinbase.wallet"),
        createWallet("me.rainbow"),
        createWallet("io.rabby"),
        createWallet("io.zerion.wallet"),
    ];
    useEffect(() => {
        if (typeof window !== "undefined") {
            Pathname = window.location.pathname;
            localStorage.setItem("pathname", Pathname);
            let temp: any = localStorage.getItem("pathname")
            setStoredPathname(temp)
        } else {
            console.log("You are on the server,Cannot execute");
        }
    }, []);


    const onScreenRoute = (route: string) => {
        router.push(route);
    }


    return (
        <div className="navbar  mb-2">
            <div className="navbar-left">
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 24, marginRight: 10 }}>StableLayer</div>

                <div className="routes">
                    <ul className={click ? "nav-menu active slide-in" : "nav-list"} id="slider">
                        <li className={StoredPathname === '/portfolio' ? 'nav-list-active' : ''}
                            onClick={() => onScreenRoute('/portfolio')}>Portfolio</li>
                        <li className={StoredPathname === '/sena' ? 'nav-list-active' : ''} onClick={() => onScreenRoute('/sena')}>sENA</li>
                        <li
                            className={StoredPathname === '/buy' ? 'nav-list-active' : ''}
                            onClick={() => onScreenRoute('/buy')}
                        >
                            Buy
                        </li>
                        <li
                            className={StoredPathname === '/earn' ? 'nav-list-active' : ''}
                            onClick={() => onScreenRoute('/earn')}
                        >
                            Earn
                        </li>
                        {/* <div className={StoredPathname === '/reward' ?'nav-list-active'  :'navbar-list'}>Reward</div> */}
                        <li className={StoredPathname === '/dashboard' ? 'nav-list-active' : ''} onClick={() => onScreenRoute('/dashboard')}>Dashboards</li>
                    </ul>
                </div>

            </div>
            <div className="navbar-right">
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
                                    color: "#fff",
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
                                    color: "#fff",
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

    )
}

export default Navbar
