export interface TypePost {
  id: string;
  title: string;
  slug: string;
  body: string;
  updatedAt: string;
  createdBy: {
    name: string;
  };
  image: {
    url: string;
  };
}
