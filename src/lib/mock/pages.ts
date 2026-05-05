export interface Page {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  content?: string;
  status?: string;
}

const pages: Page[] = [
  {
    _id: "1",
    name: "Бидний тухай",
    slug: "about",
    description: "MMS Group-ийн танилцуулга",
    content: "<p>MMS Group нь Монголын тэргүүлэгч олон салбар бүхий групп компани юм.</p>",
    status: "published",
  },
  {
    _id: "2",
    name: "Холбоо барих",
    slug: "contact",
    description: "Бидэнтэй холбоо барих мэдээлэл",
    content: "<p>Бидэнтэй холбоо барина уу.</p>",
    status: "published",
  },
];

export async function getPages(language?: string): Promise<Page[]> {
  return pages;
}

export async function getPageBySlug(slug: string, language?: string): Promise<Page | null> {
  return pages.find((p) => p.slug === slug) ?? null;
}
