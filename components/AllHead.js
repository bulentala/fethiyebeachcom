import React from "react";
import Head from "next/head";
const AllHead = () => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css'
          integrity='sha512-+WF6UMXHki/uCy0vATJzyA9EmAcohIQuwpNz0qEO+5UeE5ibPejMRdFuARSrl1trs3skqie0rY/gNiolfaef5w=='
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.2.x/dist/typography.min.css'
        />
      </Head>
    </>
  );
};

export default AllHead;
