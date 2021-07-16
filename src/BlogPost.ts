import User from './User';

export default interface BlogPost {
    id: number,
    title: string,
    body: string,
    selected: boolean,
    userId: number,
    user: User,
}