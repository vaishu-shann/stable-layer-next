import React, { useState } from 'react'
import Navbar from '../../containers/Navbar/navbar'
import DashTokenTable from '../../containers/DashTokenTable/DashTokenTable'
import DashCustodian from '../../containers/DashCustodian/DashCustodian'
import HedgingTable from '../../containers/HedgingTable/HedgingTable'

const DashboardScreen = () => {
    const [dashTab, setDashTab] = useState("transparency")
    return (
        <div className='main-container-two main-container layout-background-image'>
            <Navbar />
            <div className='portfolio-main-cont'>
                <div className='portfolio-width'>
                    <div className='dash-tabs'>
                        <div className={dashTab === "transparency" ? 'dash-active-tab' : 'dash-tab-list'} onClick={() => setDashTab("transparency")}>Transparency</div>
                        <div className={dashTab === "hedging" ? 'dash-active-tab' : 'dash-tab-list'} onClick={() => setDashTab("hedging")}>Hedging</div>
                        <div className={dashTab === "solvency" ? 'dash-active-tab' : 'dash-tab-list'} onClick={() => setDashTab("solvency")}>Solvency</div>
                        <div className={dashTab === "apy" ? 'dash-active-tab' : 'dash-tab-list'} onClick={() => setDashTab("apy")}>APY</div>
                    </div>
                    {dashTab === "transparency" ? 
                      <> 
                    <div className='backing-dash'>
                        <div>
                            <div className='ena-head'>Backing </div>
                            <div className='ena-desc'>Last Updated: 6 Dec 24 10:30</div>
                        </div>
                        <div className='backing-apy' >
                            <div className='backing-1'>Backing APY<span className='bg-1-span'>0.61%</span></div>
                            <div className='backing-1'>Backing Notional<span className='bg-1-span'>5.2B</span></div>
                        </div>

                    </div>
                    
                  <DashTokenTable />
                    <DashCustodian /></> :"" }
                    {dashTab === "hedging" ?
                    <>
                    
                   
                       <div className='backing-dash'>
                       <div>
                           <div className='ena-head'>BTC Perpetual Swaps </div>
                           <div className='ena-desc'>Last Updated: 6 Dec 24 10:30</div>
                       </div>
                       <div className='backing-apy' >
                           <div className='backing-1'>BTC Open Interest<span className='bg-1-span'>42.23B</span></div>
                           <div className='backing-1'>Ethena % of OI<span className='bg-1-span'>7.09%</span></div>
                           <div className='backing-1'>Average Funding<span className='bg-1-span'>14.49%</span></div>
                       </div>
                   </div>
                   <HedgingTable/>
                   </>
                    :""}
                </div>
            </div>
        </div>
    )
}
export default DashboardScreen