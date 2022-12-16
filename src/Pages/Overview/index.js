import './overview.css'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

import React from 'react'


export default function Overview() {
  return (
    <section className='cts_overview'>
      <h1>Overview</h1>
      <section className='cts'>
        <div className='ct_title'>
          <PriceCheckIcon />
          <span>CONTAS 2021</span>
        </div>
        <div className='ct_title'>
          <PriceCheckIcon />
          <span>CONTAS 2022</span>
        </div>
        <div className='ct_title'>
          <PriceCheckIcon />
          <span>CONTAS 2023</span>
        </div>
      </section>
    </section>
  )
}
