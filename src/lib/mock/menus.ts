export interface MenuItem {
  _id: string;
  label: string;
  url: string;
  order: number;
  target?: string;
}

const headerMenu: MenuItem[] = [
  { _id: "1", label: "Нүүр", url: "/", order: 1 },
  { _id: "2", label: "Бидний тухай", url: "/about", order: 2 },
  { _id: "3", label: "Төслүүд", url: "/projects", order: 3 },
  { _id: "4", label: "Мэдээ", url: "/news", order: 4 },
  { _id: "5", label: "Холбоо барих", url: "/contact", order: 5 },
];

const footerMenu: MenuItem[] = [
  { _id: "1", label: "Нүүр", url: "/", order: 1 },
  { _id: "2", label: "Бидний тухай", url: "/about", order: 2 },
  { _id: "3", label: "Холбоо барих", url: "/contact", order: 3 },
];

export async function getHeaderMenu(language?: string): Promise<MenuItem[]> {
  return headerMenu;
}

export async function getFooterMenu(language?: string): Promise<MenuItem[]> {
  return footerMenu;
}
