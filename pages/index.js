import React from "react";
import slug from "slug";
import Link from "next/link";
import AmpAnalytics from "components/AmpAnalystic";

const Index = ({ data }) => {
  return (
    <>
      <div>fethiyebeach.com</div>
      {data.map((beaches) => (
        <div key={beaches.id}>
          <Link href={`/${slug(beaches.title)}-${beaches.id}`}>
            <a>{beaches.title}</a>
          </Link>
        </div>
      ))}
      <AmpAnalytics />
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch(`${process.env.LOCAL_DB}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export const config = { amp: true };
export default Index;
