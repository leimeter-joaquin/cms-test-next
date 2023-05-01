import { ITheyTrustUsCompaniesFields } from "@/contentful/generated/contentful";
import { GetStaticProps } from "next";
import Image from "next/image";
import * as contentful from "@/contentful";

interface HomeProps {
  theyTrustUsCompanies: ITheyTrustUsCompaniesFields[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Here we choose the client to use depending on the preview mode
  const client = context.preview ? contentful.previewClient : contentful.client;

  const theyTrustUsCompanies = (
    await contentful.getEntriesByType("theyTrustUsCompanies", client)
  ).map((entry) => entry.fields);
  return {
    props: {
      theyTrustUsCompanies,
    },
  };
};

export default function Home({ theyTrustUsCompanies }: HomeProps) {
  console.log();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="flex">
        {theyTrustUsCompanies.map((item, index: number) => {
          return (
            <div key={index}>
              <Image
                src={item.icon?.fields.file?.url as string}
                alt={item.icon?.fields.description as string}
                width="200"
                height="85"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
