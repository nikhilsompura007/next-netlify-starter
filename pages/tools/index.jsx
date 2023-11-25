'use client'
import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {xss} from './xss'


export default function index(){
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test your URL against XSS and SQLi" />
      <a href='/tools/xss'> Cross Site Script validation</a>
      </main>

      <Footer />
    </div>
  )
}
