import AmpAnalytics from "components/AmpAnalystic";
import React from "react";
import slug from "slug";
import Head from "next/head";
const Story = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.storyTitle}</title>
      </Head>
      <amp-story
        standalone=''
        publisher={data.publisher}
        title={data.storyTitle}
        publisher-logo-src={`/${data.publisherLogoSrc}`}
        poster-portrait-src={`/${data.posterPortraitSrc}`}
        poster-square-src={`/${data.posterSquareSrc}`}
        poster-landscape-src={`/${data.posterLandscapeSrc}`}
      >
        <amp-story-page id='cover'>
          <amp-story-grid-layer template='vertical'>
            <h1> {data.title}</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <AmpAnalytics />
        <amp-story-bookend
          src='/bookend.json'
          layout='nodisplay'
        ></amp-story-bookend>
      </amp-story>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/en");
  const datas = await res.json();

  const paths = datas.map((beaches) => {
    return { params: { slug: `${slug(beaches.title)}-${beaches.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const res = await fetch("http://localhost:3000/api/en/" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export const config = { amp: true };
export default Story;
