import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { NavBar } from 'pages/NavBar'
import React from 'react'

export default function xss() {
  return (
  <div className="container">
  <NavBar/>   
    <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>  
    <main>     
    <Header title="Cross-site Script" />  
    <p className="description">
    Test if a URL/String is vulnerable to Cross-Site Scripting.
        </p>
    <p className='xsstextarea'>
    <textarea  rows="10" cols="30" placeholder='Paste your URL here' />
    </p>
    <p><input type='submit' value='Submit'></input></p>
    </main>
  </div>
  )
}
