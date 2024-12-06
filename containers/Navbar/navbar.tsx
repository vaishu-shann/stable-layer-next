"use client";

import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { createWallet } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const Navbar = () => {
    
    const router = useRouter();
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



    const onScreenRoute = (route: string) => {
        router.push(route);
    }


    return (
        <div className="navbar  mb-2">
            <div className="navbar-left">
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 24, marginRight: 10 }}>StableLayer</div>
                <div className={window.location.pathname === '/portfolio' ?'navbar-list-active'  :'navbar-list' }
                    onClick={() => onScreenRoute('/portfolio')}>Portfolio</div>
                <div className={window.location.pathname === '/sena' ?'navbar-list-active'  :'navbar-list'} onClick={() => onScreenRoute('/sena')}>sENA</div>
                <div
                    className={window.location.pathname === '/buy' ?'navbar-list-active'  :'navbar-list'}
                    onClick={() => onScreenRoute('/buy')}
                >
                    Buy
                </div>
                <div
                    className={window.location.pathname === '/earn' ?'navbar-list-active'  :'navbar-list'}
                    onClick={() => onScreenRoute('/earn')}
                >
                    Earn
                </div>
                {/* <div className={window.location.pathname === '/reward' ?'navbar-list-active'  :'navbar-list'}>Reward</div> */}
                <div className={window.location.pathname === '/dashboard' ?'navbar-list-active'  :'navbar-list'} onClick={() => onScreenRoute('/dashboard')}>Dashboards</div>
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
            </div>
        </div>

    )
}

export default Navbar
