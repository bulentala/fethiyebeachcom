import React from 'react'
import AmpAnalytics from 'components/AmpAnalystic'
import Layout from 'components/Layout'
import Main from 'components/Main'

const Index = ({ beaches }) => {
  return (
    <Layout>
      <Main beaches={beaches} />
      <AmpAnalytics />
    </Layout>
  )
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_BASE_URL}en`)
  const beaches = await res.json()
  return {
    props: {
      beaches,
    },
  }
}
export const config = { amp: true }
export default Index
