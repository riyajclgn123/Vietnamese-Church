export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
}