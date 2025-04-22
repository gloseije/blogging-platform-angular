export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export function isPost(obj: any): obj is Post {
    return (
        typeof obj.id === 'number' &&
        typeof obj.title === 'string' &&
        typeof obj.content === 'string' &&
        typeof obj.image === 'string' &&
        typeof obj.userId === 'number' &&
        typeof obj.categoryId === 'number' &&
        typeof obj.createdAt === 'string' &&
        typeof obj.updatedAt === 'string'
    );
}