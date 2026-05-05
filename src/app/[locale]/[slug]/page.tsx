import type { Metadata } from "next";
import { getApolloClient } from "@/lib/apollo/client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const results = await Promise.all(
      routing.locales.map(async (locale) => {
        const { data } = await getApolloClient().query({
          query: CP_PAGES,
          variables: { language: locale },
          context: { fetchOptions: { next: { revalidate: 60 } } },
        });
        const pages = (data as { cpPages?: Array<{ slug?: string }> })?.cpPages ?? [];
        return pages.map((p) => ({
          locale,
          slug: p.slug ?? "",
        }));
      })
    );
    return results.flat();
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = await Promise.resolve(params);
  const { data } = await getApolloClient().query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const pages = (data as { cpPages?: Array<{ slug?: string; name?: string; description?: string }> })?.cpPages ?? [];
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.name} | MMS Group`,
    description: page.description ?? undefined,
    openGraph: {
      title: `${page.name} | MMS Group`,
      description: page.description ?? undefined,
      type: "website",
    },
  };
}

export default async function CmsPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = await Promise.resolve(params);
  const { data } = await getApolloClient().query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const pages = (data as { cpPages?: Array<{ slug?: string; name?: string; content?: string }> })?.cpPages ?? [];
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111] mb-8">{page.name}</h1>
        {page.content && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}
      </div>
    </div>
  );
}
