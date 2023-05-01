import ContentService from "@/contentful";
import { ITheyTrustUsCompaniesFields } from "@/contentful/generated/contentful";
import Image from "next/image";

interface HomeProps {
  theyTrustUsCompanies: ITheyTrustUsCompaniesFields[];
}

export async function getStaticProps() {
  const theyTrustUsCompanies = (
    await ContentService.instance.getEntriesByType("theyTrustUsCompanies")
  ).map((entry) => entry.fields);
  return {
    props: {
      theyTrustUsCompanies,
    },
  };
}

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
