export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status: string;
  publishedDate?: string;
}

const posts: Post[] = [];

export async function getPosts(language?: string): Promise<Post[]> {
  return posts;
}

export async function getPostBySlug(slug: string, language?: string): Promise<Post | null> {
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedPost(language?: string): Promise<Post | null> {
  return posts[0] ?? null;
}
