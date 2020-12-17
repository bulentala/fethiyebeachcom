import React from "react";
import slug from "slug";
import Link from "next/link";

const Index = ({ data }) => {
  return (
    <>
      <div>fethiyebeach.com</div>
      {data.map((beaches) => (
        <div>
          <Link href={`/${slug(beaches.title)}-${beaches.id}`}>
            <a>{beaches.title}</a>
          </Link>
        </div>
      ))}
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
