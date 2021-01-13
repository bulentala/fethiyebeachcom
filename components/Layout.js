import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AmpAnalytics from 'components/AmpAnalystic'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <AmpAnalytics />
    </>
  )
}

export default Layout
