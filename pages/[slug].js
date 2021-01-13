import AmpAnalytics from 'components/AmpAnalystic'
import React from 'react'
import slug from 'slug'
import Head from 'next/head'
import image from 'next/image'
import Layout from 'components/layout'
const Story = ({ beach }) => {
  return (
    <Layout>
      <div className='container mx-auto p-6'>
        <pre>{JSON.stringify(beach, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_BASE_URL}en`)
  const beaches = await res.json()

  const paths = beaches.map((beach) => {
    return { params: { slug: `${slug(beach.title)}-${beach.id}` } }
  })

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  const res = await fetch(`${process.env.API_BASE_URL}en/` + id)
  const beach = await res.json()
  return {
    props: {
      beach,
    },
  }
}
export const config = { amp: true }
export default Story
