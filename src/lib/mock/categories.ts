export interface Category {
  _id: string;
  name: string;
  code: string;
  description?: string;
}

const categories: Category[] = [];

export async function getCategories(language?: string): Promise<Category[]> {
  return categories;
}
