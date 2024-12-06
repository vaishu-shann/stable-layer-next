import React from 'react'

 const HedgingTable = () => {
    const data = [
        {
          exchange: "BITGET",
          ticker: "BTCUSDT",
          margin: "USD",
          price: "$98.57K",
          funding: "0.0187 (-0.0008)",
          apy: "20.48%",
          avgApy: "32.90%",
          nextFrApy: "-",
          volume: "$12.72B (-1.02%)",
          oi: "$772.41M",
          oiChange: "-$5.72%",
        },
        {
          exchange: "BINANCE",
          ticker: "BTCUSDT",
          margin: "USD",
          price: "$98.54K",
          funding: "0.015 (-0.0014)",
          apy: "16.44%",
          avgApy: "27.38%",
          nextFrApy: "-",
          volume: "$9.0B (-8.08%)",
          oi: "$1.03B",
          oiChange: "-10.26%",
        },
        {
          exchange: "HUOBI",
          ticker: "BTC-USDT",
          margin: "USD",
          price: "$98.53K",
          funding: "0.0136 (0.001)",
          apy: "14.89%",
          avgApy: "24.59%",
          nextFrApy: "-",
          volume: "$2.72B (1.13%)",
          oi: "$125.98M",
          oiChange: "-4.43%",
        },
        {
          exchange: "BITGET",
          ticker: "BTCUSD",
          margin: "COIN",
          price: "$98.59K",
          funding: "0.0127 (-0.0006)",
          apy: "13.91%",
          avgApy: "25.11%",
          nextFrApy: "-",
          volume: "$759.21M (-2.91%)",
          oi: "$21.12M",
          oiChange: "-2.71%",
        },
        {
          exchange: "BYBIT",
          ticker: "BTCUSD",
          margin: "COIN",
          price: "$98.62K",
          funding: "0.01",
          apy: "10.95%",
          avgApy: "33.07%",
          nextFrApy: "-",
          volume: "$1.42B (-8.33%)",
          oi: "$82.72M",
          oiChange: "-5.50%",
        },
        {
          exchange: "BITMEX",
          ticker: "XBTUSD",
          margin: "COIN",
          price: "$98.54K",
          funding: "0.01",
          apy: "10.95%",
          avgApy: "35.91%",
          nextFrApy: "10.95%",
          volume: "$367.11M (16.03%)",
          oi: "$66.42M",
          oiChange: "-15.32%",
        },
        {
          exchange: "BYBIT",
          ticker: "BTCPERP",
          margin: "USD",
          price: "$98.6K",
          funding: "0.01",
          apy: "10.95%",
          avgApy: "32.20%",
          nextFrApy: "-",
          volume: "$150.56M (3.60%)",
          oi: "$8.47M",
          oiChange: "-5.32%",
        },
      ];
      
    
      return (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Exchange</th>
                <th>Ticker</th>
                <th>Margin</th>
                <th>Price</th>
                <th>Funding 8h (1h)</th>
                <th>APY</th>
                <th>1W Avg APY</th>
                <th>Next FR APY</th>
                <th>24h Volume (Chg%)</th>
                <th>OI</th>
                <th>OI Change (Chg%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.exchange}</td>
                  <td>{row.ticker}</td>
                  <td>{row.margin}</td>
                  <td>{row.price}</td>
                  <td>{row.funding}</td>
                  <td className="highlight">{row.apy}</td>
                  <td>{row.avgApy}</td>
                  <td>{row.nextFrApy}</td>
                  <td>{row.volume}</td>
                  <td>{row.oi}</td>
                  <td>{row.oiChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
export default HedgingTable;