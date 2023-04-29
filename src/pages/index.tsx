import contentfulClient from "@/contentful";
import { AssetLink, ChainModifiers, EntryCollection } from "contentful";

interface HomeProps {
  theyTrustUsCompanies: any;
}

export async function getStaticProps() {
  // This will run when the page is statically generated in Vercel.
  console.log("static props");

  // TODO: learn how to query for the fields I want. I only want the they trust us ones.
  const theyTrustUsCompanies = await contentfulClient.getEntries();
  console.log(theyTrustUsCompanies);

  const props: HomeProps = {
    theyTrustUsCompanies,
  };
  return {
    props,
  };
}

export default function Home(props: HomeProps) {
  console.log(props.theyTrustUsCompanies.items);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      {props.theyTrustUsCompanies.items.map((item: any, index: number) => {
        return (
          <div key={index}>
            <div>{JSON.stringify(item.fields.icon?.fields.file?.url)}</div>
            <div>{JSON.stringify(item.fields.name)}</div>
          </div>
        );
      })}
    </main>
  );
}
