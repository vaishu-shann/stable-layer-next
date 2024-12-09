import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { images } from '../../assets/images';
import Navbar from '../../containers/Navbar/navbar';


const BuySection = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownToOpen, setIsDropdownToOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({
        name: "USDT",
        logo: images.USDT.src,
    });
    const [selectedToCurrency, setSelectedToCurrency] = useState({
        name: "USDe",
        logo: images.USDC.src,
    });
    const [isSwap, setIsSwap] = useState(false)

    const currencies = [
        { name: "USDT", logo: images.USDT.src },
        { name: "USDC", logo: images.USDC.src },
        { name: "DAI", logo: images.DAI.src },
        { name: "GHO", logo: images.GHO.src },
        { name: "crvUSD", logo: images.CRV.src },
    ];
    const currenciesTo = [
        { name: "USDT", logo: images.USDT.src },
        { name: "USDC", logo: images.USDC.src },
        { name: "DAI", logo: images.DAI.src },
        { name: "GHO", logo: images.GHO.src },
        { name: "crvUSD", logo: images.CRV.src },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleToDropdown = () => {
        setIsDropdownToOpen(!isDropdownToOpen);
    };

    const swappingToggle = () => {
        setIsSwap(!isSwap)
    }

    const selectCurrency = (currency: any) => {
        setSelectedCurrency(currency);
        setIsDropdownOpen(false);
    };
    const selectToCurrency = (currency: any) => {
        setSelectedToCurrency(currency);
        setIsDropdownToOpen(false);
    };

    return (
        <div className='main-container-two main-container layout-background-image'>
            <Navbar />
            <div className='buy-container'>
                <div className='cont-head'>
                    Buy USDe
                </div>
                <div className={isSwap ? "buy-input-field-reverse" : 'buy-input-field'}>
                    <div className='field-xs-text'>You Send*</div>
                    <div className='single-field field1-border-radius'>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }} className="currency-selector" onClick={toggleDropdown}>
                                <span className="currency-name">{selectedCurrency.name}</span>
                                <div className="dropdown-icon">
                                    <span>{isDropdownOpen ? "▴" : "▾"}</span>
                                </div>
                            </div>
                            <div className='field-xl-text'>0</div>
                        </div>
                        <div >
                            <img
                                src={selectedCurrency.logo}
                                alt={`${selectedCurrency.name} Logo`}
                                className="currency-logo"
                            />
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {currencies.map((currency) => (
                                        <div
                                            key={currency.name}
                                            className={`dropdown-item ${selectedCurrency.name === currency.name ? "active" : ""
                                                }`}
                                            onClick={() => selectCurrency(currency)}
                                        >
                                            <img
                                                src={currency.logo}
                                                alt={`${currency.name} Logo`}
                                                className="dropdown-logo"
                                            />
                                            <span className="dropdown-name">{currency.name}</span>
                                            <span className="dropdown-balance">0</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                        <div className= "swap-icon" onClick={swappingToggle} >
                            <GoArrowDown />
                        </div>
                    </IconContext.Provider>
                    <div className='field-xs-text'>You Receive*</div>
                    <div className='single-field field1-border-radius'>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }} className="currency-selector" onClick={toggleToDropdown}>
                                <span className="currency-name">{selectedToCurrency.name}</span>
                                <div className="dropdown-icon">
                                    <span>{isDropdownToOpen ? "▴" : "▾"}</span>
                                </div>
                            </div>
                            <div className='field-xl-text'>0</div>
                        </div>
                        <div >
                            <img
                                src={selectedToCurrency.logo}
                                alt={`${selectedToCurrency.name} Logo`}
                                className="currency-logo"
                            />
                            {isDropdownToOpen && (
                                <div className="dropdown2-menu">
                                    {currenciesTo.map((currency) => (
                                        <div
                                            key={currency.name}
                                            className={`dropdown-item ${selectedToCurrency.name === currency.name ? "active" : ""
                                                }`}
                                            onClick={() => selectToCurrency(currency)}
                                        >
                                            <img
                                                src={currency.logo}
                                                alt={`${currency.name} Logo`}
                                                className="dropdown-logo"
                                            />
                                            <span className="dropdown-name">{currency.name}</span>
                                            <span className="dropdown-balance">0</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='slippage-cta'>
                    <div className='slippage-gas'>
                        <li className='s-g-text1'>Max Slippage: 0.10%</li>
                        <li className='s-g-text1'>Gas: $2.97</li>
                    </div>
                    <button className='buy-cta'>
                        <IconContext.Provider value={{ color: "#fff", size: '1.2em' }}>
                            <div style={{ marginRight: 8 }} >
                                <LuWallet />
                            </div>
                        </IconContext.Provider>
                        <span> CONNECT WALLET</span></button>
                </div>

            </div>
        </div>

    )
}

export default BuySection
