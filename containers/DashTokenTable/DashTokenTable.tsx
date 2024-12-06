import React from 'react'

 const DashTokenTable = () => {
    const data = [
        { token: "BTC", percentage: "56%", binance: "$1.39B", bybit: "$876.34M", okx: "$607.05M", deribit: "$49.28M", bitget: "$0", unallocated: "$0.06M" },
        { token: "ETH", percentage: "26%", binance: "$578.65M", bybit: "$429.56M", okx: "$280.38M", deribit: "$63.04M", bitget: "$0", unallocated: "$0.01M" },
        { token: "ETH LSTs", percentage: "8%", binance: "$250.94M", bybit: "$170.28M", okx: "$0", deribit: "$0", bitget: "$5.16M", unallocated: "$0.06M" },
        { token: "SOL", percentage: "0%", binance: "$0.52M", bybit: "$0", okx: "$0", deribit: "$0", bitget: "$0", unallocated: "$0" },
        { token: "Liquid Stables", percentage: "10%", binance: "$635.55M", bybit: "$133.9M", okx: "$19.3M", deribit: "$0", bitget: "$0", unallocated: "$285.51M" },
      ];
    
      return (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Percentage</th>
                <th>Binance</th>
                <th>Bybit</th>
                <th>OKX</th>
                <th>Deribit</th>
                <th>Bitget</th>
                <th>Unallocated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.token}</td>
                  <td>{row.percentage}</td>
                  <td>{row.binance}</td>
                  <td>{row.bybit}</td>
                  <td>{row.okx}</td>
                  <td>{row.deribit}</td>
                  <td>{row.bitget}</td>
                  <td>{row.unallocated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
}
export default DashTokenTable