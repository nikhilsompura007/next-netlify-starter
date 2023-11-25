import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react'

export default function xss() {
  return (
    <div className="container"> 
    <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>       
      <Header title="Cross site script" />  
    <p className="description">
    <textarea  placeholder='Paste your URL here' />
    </p>
    <p><input type='submit' value='Submit'></input></p>
    </div>
  )
}
