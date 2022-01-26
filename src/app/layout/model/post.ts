import { User } from "./user";

export class Post {
    id!: number;
    user_id!: User;
    comment!: string;
    images!: File;
    is_public!: boolean;
}