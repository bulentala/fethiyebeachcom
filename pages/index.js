import React from "react";
import slug from "slug";
import Link from "next/link";

const Index = ({ data }) => {
  return (
    <>
      <div>fethiyebeach.com</div>
      <div>
        {data.map((beaches) => (
          <amp-story-player
            layout='fixed'
            width={270}
            height={480}
            key={beaches.id}
          >
            <a
              className='test'
              href={`http://localhost:3000/${slug(beaches.title)}-${
                beaches.id
              }`}
            >
              Stories in AMP - Hello World
            </a>
          </amp-story-player>
        ))}
      </div>
      <style jsx>{`
        test: "--story-player-poster: url('https://amp.dev/static/samples/img/story_dog2_portrait.jpg')";
      `}</style>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/en");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export const config = { amp: true };
export default Index;
