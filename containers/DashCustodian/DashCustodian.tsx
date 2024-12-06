import React from 'react'

const DashCustodian = () => {
    const custData = [
        { token: 'Copper', depositAddress: '0x32b24247cbcE7c17b0017A2159a9FA481f401b16' },
        { token: 'Copper', depositAddress: '0x8f0eE0393Eae7fc1638BD7860a3FEc6a663786AE' },
        { token: 'CEFU', depositAddress: '0x00669Bf9BA4EAab1BBd301C1ccDf69932F521049' },
        { token: 'Coinbase', depositAddress: '0x2d4d2A025b10C09BDbd794B4FCe4F7ea8C7d7bB4' },
    ]
    return (
        <>


            <div className='cust-attd'>
                <div className='cust-block'>
                    <div>
                        <div className='ena-head'>Custodian </div>
                        <div className='ena-desc'>Last Updated: 6 Dec 24 10:30</div>
                    </div>
                    <div>Deposit Address</div>
                </div>


                {/* <div className='cust-block'>
                <div>
                    <div className='ena-head'>Attestations </div>
                    <div className='ena-desc'>Last Updated: 6 Dec 24 10:30</div>
                </div>
                <div >Backing Assets USDe Supply   </div>
            </div> */}

            
            </div>

            <div className="table-container-cust">
                <table className="table">
                    <tbody>
                        {custData?.map((row, index) => (
                            <tr key={index}>
                                <td>{row.token}</td>
                                <td>{row.depositAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='cust-block-2'>
                    <div style={{display:'flex', flexDirection:'row',alignItems:'flex-end', justifyContent:'space-between'}}>
                    <div>
                        <div className='ena-head'>Reserve Fund </div>
                        <div className='ena-desc'>Held in BUIDL and other RWAs</div>
                    </div>
                    <div className='detail-text'>Details  </div></div>
                    <div className='cust-stats'>$46.95M</div>
                    <div className='ena-desc' style={{textAlign:'center'}}>Last Updated: 6 Dec 24 10:30</div>
                </div>
        </>
    )
}
export default DashCustodian