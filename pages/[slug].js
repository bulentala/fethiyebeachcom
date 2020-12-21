import AmpAnalytics from "components/AmpAnalystic";
import React from "react";
import slug from "slug";
import Head from "next/head";
import image from "next/image";
const Story = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.storyTitle}</title>
        <script
          async
          custom-element='amp-story'
          src='https://cdn.ampproject.org/v0/amp-story-1.0.js'
        ></script>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css'
          integrity='sha512-+WF6UMXHki/uCy0vATJzyA9EmAcohIQuwpNz0qEO+5UeE5ibPejMRdFuARSrl1trs3skqie0rY/gNiolfaef5w=='
          crossorigin='anonymous'
        />
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
        <amp-story-page id={data.pageCoverId}>
          <amp-story-grid-layer template='fill'>
            <amp-img
              alt={data.pageOneImageAlt}
              src={`/${data.pageCoverImageUrl}`}
              width={data.pageCoverImageWidth}
              height={data.pageCoverImageHeight}
              layout={data.pageCoverImageLayout}
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template={data.pageCoverTemplate}>
            <div
              grid-area='lower-third'
              className='border border-gray-200 items-center bg-white bg-opacity-50 rounded'
            >
              <h1 className='text-4xl font-semibold text-center mt-4 '>
                {data.title}
              </h1>
              <hr className='mx-6 my-4' />
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
        {/* <amp-story-page id={data.pageOneId}>
          <amp-story-grid-layer template='fill'>
   
            <amp-img
              alt={data.pageOneImageAlt}
              src={`/${data.pageOneImageUrl}`}
              width={data.pageOneImageWidth}
              height={data.pageOneImageHeight}
              layout={data.pageOneImageLayout}
            ></amp-img>
          </amp-story-grid-layer>
        </amp-story-page> */}
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
  const res = await fetch(`${process.env.API_BASE_URL}en`);
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
  const res = await fetch(`${process.env.API_BASE_URL}en/` + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export const config = { amp: true };
export default Story;
