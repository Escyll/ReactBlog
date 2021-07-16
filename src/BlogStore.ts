import { makeAutoObservable } from 'mobx';
import Logo from './Logo.png';
import BlogPost from './BlogPost';
import User from './User';

export default class BlogStore {
    blogName = "Jesper's Blog";
    posts: BlogPost[] = [];
    users: User[] = [];
    logo = Logo;
    constructor() {
        makeAutoObservable(this);
        this.fetchBlogPosts();
    }
    updatePosts = (posts: BlogPost[]) => {
        this.posts = posts;
    }
    updateUsers = (users: User[]) => {
        this.users = users;
    }
    selectPost = (id: number) => {
        let post = this.posts.find(post => post.id === id);
        if (post) post.selected = !post.selected;
    }
    fetchBlogPostsAsync = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await usersResponse.json();
        return { posts, users };
    }
    fetchBlogPosts = () => {
        this.fetchBlogPostsAsync()
            .then(({ posts, users }) => {
                this.updatePosts(posts.map((post: BlogPost) => ({
                    id: post.id,
                    user: users.find((user: User) => user.id === post.userId),
                    title: post.title,
                    body: post.body,
                    selected: false,
                })))
                this.updateUsers(users)
            })
            .catch(err => console.log(err));
    };
};