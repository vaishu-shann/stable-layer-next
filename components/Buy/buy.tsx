import React, { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { images } from "../../assets/images";
import Navbar from "../../containers/Navbar/navbar";
import { convertWeiToEth, getTokenBalance } from "../../services/web3-services";
import { web3GlobalContext } from "../../context/globalContext";
import USDeAbi from "../../contract-abi/USDeABI.json";
import USDTAbi from "../../contract-abi/USDTAbi.json";
import config from "../../config";
import { useActiveAccount } from "thirdweb/react";
import { buyUSDe, sellUSDe } from "../../services/web3-integrations";

const BuySection = () => {
  const account: any = useActiveAccount();
  const walletAddress: any = account?.address;
  const [usdePrice, setUsdePrice] = useState(null);
  const [usdtPrice, setUsdtPrice] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownToOpen, setIsDropdownToOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "USDT",
    logo: images.USDT.src,
  });
  const [isSwap, setIsSwap] = useState(false);
  const [sendInput, setSendInput] = useState();
  const [receiveInput, setReceiveInput] = useState();
  const [sendInputError, setSendInputError] = useState(false);
  const [receiveInputError, setReceiveInputError] = useState(false);

  const currencies = [
    { name: "USDT", logo: images.USDT.src },
    { name: "USDC", logo: images.USDC.src },
    { name: "DAI", logo: images.DAI.src },
    { name: "GHO", logo: images.GHO.src },
    { name: "crvUSD", logo: images.CRV.src },
  ];

  const { web3Obj }: any = useContext(web3GlobalContext);

  useEffect(() => {
    if (walletAddress) {
      checkUSDeBalance();
      checkFromTokenBalance();
    }
  }, [walletAddress]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleToDropdown = () => {
    setIsDropdownToOpen(!isDropdownToOpen);
  };

  const swappingToggle = () => {
    setIsSwap(!isSwap);
  };

  const selectCurrency = (currency: any) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };

  const checkUSDeBalance = async () => {
    try {
      let balance = await getTokenBalance(
        USDeAbi,
        config.USDEContractAddress,
        walletAddress
      );
      console.log(" USDE balance in WEI", balance);
      if (balance) {
        let balanceInWei = [balance.toString()];
        let balanceInEth: any = await convertWeiToEth(balanceInWei);
        console.log("__USDE balance in ETH___", balanceInEth[0]);
        setUsdePrice(balanceInEth[0]);
      }
    } catch (e) {
      console.log("error in checkUSDeBalance", e);
      return;
    }
  };

  const checkFromTokenBalance = async () => {
    try {
      let balance = await getTokenBalance(
        USDTAbi,
        config.USDTContractAddress,
        walletAddress
      );
      console.log(" USDT balance in WEI", balance);
      if (balance) {
        let balanceInWei = [balance.toString()];
        let balanceInEth: any = await convertWeiToEth(balanceInWei);
        console.log("__USDT balance in ETH___", balanceInEth[0]);
        setUsdtPrice(balanceInEth[0]);
      }
    } catch (e) {
      console.log("error in checkFromTokenBalance", e);
      return;
    }
  };
  useEffect(() => {
    if (Number(sendInput) > Number(usdtPrice)) {
      setSendInputError(true);
    } else {
      setSendInputError(false);
    }
  }, [sendInput]);

  useEffect(() => {
    if (Number(receiveInput) > Number(usdePrice)) {
      setReceiveInputError(true);
    } else {
      setReceiveInputError(false);
    }
  }, [receiveInput]);

  const BuyUsde = async () => {
    try {
      console.log("buy  value", sendInput);
      console.log(" sell value", receiveInput);
      // let buyResponse = await buyUSDe();
      // console.log("buyResponse", buyResponse);
    } catch (e) {
      console.log("error in Buy Usde", e);
      return;
    }
  };
  const SellUsde = async () => {
    try {
      let sellResponse = await sellUSDe();
      console.log("sellResponse", sellResponse);
    } catch (e) {
      console.log("error in Sell Usde", e);
      return;
    }
  };

  return (
    <div className="main-container-two main-container layout-background-image">
      <Navbar />
      <div className="buy-container">
        <div className="cont-head">{isSwap ? "Sell" : "Buy"} USDe</div>
        <div className={isSwap ? "buy-input-field-reverse" : "buy-input-field"}>
          <div>
            <div className="field-xs-text">You Send*</div>
            <div className="single-field field1-border-radius">
              <div style={{ display: "flex" }}>
                <div
                  style={{ display: "flex" }}
                  className="currency-selector"
                  onClick={toggleDropdown}
                >
                  <span className="currency-name">{selectedCurrency.name}</span>
                  <div className="dropdown-icon">
                    <span>{isDropdownOpen ? "▴" : "▾"}</span>
                  </div>
                </div>
                <input
                  className="field-xl-text"
                  placeholder="0"
                  type="number"
                  style={{ color: sendInputError ? "tomato" : "#9c9fa6" }}
                  onChange={(e: any) => setSendInput(e.target.value)}
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "center",
                    width: 120,
                  }}
                >
                  <img
                    src={selectedCurrency.logo}
                    alt={`${selectedCurrency.name} Logo`}
                    className="currency-logo"
                  />
                  {walletAddress && (
                    <div className="balance-text">
                      Balance:{" "}
                      {usdtPrice
                        ? parseFloat(Number(usdtPrice).toFixed(2))
                        : ""}
                    </div>
                  )}
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    {currencies.map((currency) => (
                      <div
                        key={currency.name}
                        className={`dropdown-item ${
                          selectedCurrency.name === currency.name
                            ? "active"
                            : ""
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
            {sendInputError && (
              <div className="error-text-balance">
                Please check the max value
              </div>
            )}
          </div>
          <IconContext.Provider value={{ color: "#fff", size: "1.2em" }}>
            <div className="swap-icon" onClick={swappingToggle}>
              <GoArrowDown />
            </div>
          </IconContext.Provider>
          <div>
            <div className="field-xs-text">You Receive*</div>
            <div className="single-field field1-border-radius">
              <div style={{ display: "flex" }}>
                <div
                  style={{ display: "flex" }}
                  className="currency-selector"
                  onClick={toggleToDropdown}
                >
                  <span className="currency-name">USDe</span>
                </div>
                {/* <div className='field-xl-text'>0</div> */}
                <input
                  className="field-xl-text"
                  placeholder="0"
                  type="number"
                  style={{ color: receiveInputError ? "tomato" : "#9c9fa6" }}
                  onChange={(e: any) => setReceiveInput(e.target.value)}
                />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "center",
                    width: 120,
                  }}
                >
                  <img
                    src={images.USDC.src}
                    alt={`usde Logo`}
                    className="currency-logo"
                  />
                  {walletAddress && (
                    <div className="balance-text">
                      Balance:{" "}
                      {usdePrice
                        ? parseFloat(Number(usdePrice).toFixed(2))
                        : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {receiveInputError && (
              <div className="error-text-balance">
                Please check the max value
              </div>
            )}
          </div>
        </div>
        <div className="slippage-cta">
          <div className="slippage-gas">
            <li className="s-g-text1">Max Slippage: 0.10%</li>
            <li className="s-g-text1">Gas: $2.97</li>
          </div>
          {walletAddress ? (
            <>
              {isSwap ? (
                <button className="buy-cta" onClick={SellUsde}>
                  {" "}
                  Sell USDe{" "}
                </button>
              ) : (
                <button className="buy-cta" onClick={BuyUsde}>
                  {" "}
                  Buy USDe{" "}
                </button>
              )}
            </>
          ) : (
            <button className="buy-cta">
              <IconContext.Provider value={{ color: "#fff", size: "1.2em" }}>
                <div style={{ marginRight: 8 }}>
                  <LuWallet />
                </div>
              </IconContext.Provider>
              <span> CONNECT WALLET</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuySection;
