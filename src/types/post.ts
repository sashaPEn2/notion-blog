export type Post = {
  id: string;
  slug: string;
  title: string;
  cover: string;
  categories: string[];
  date: string;
  published: boolean;
  lastEditedAt: number;
};
