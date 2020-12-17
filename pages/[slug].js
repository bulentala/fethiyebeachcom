import React from "react";
import slug from "slug";

const Story = ({ data }) => {
  return (
    <>
      <amp-story
        standalone=''
        publisher='The Publisher'
        title='My Story'
        publisher-logo-src='logo.png'
        poster-portrait-src='poster-portrait.png'
        poster-square-src='poster-square.png'
        poster-landscape-src='poster-landscape.png'
      >
        <amp-story-page id='cover'>
          <amp-story-grid-layer template='vertical'>
            <h1> {data.title}</h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-bookend
          src='bookend.json'
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
