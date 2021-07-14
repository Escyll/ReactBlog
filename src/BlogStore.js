import { makeAutoObservable } from 'mobx';
import Logo from './Logo.png';

export default class BlogStore {
    blogName = "Jesper's Blog";
    posts = [];
    users = [];
    logo = Logo;
    constructor() {
        makeAutoObservable(this);
        this.fetchBlogPosts();
    }
    updatePosts = posts => {
        this.posts = posts;
    }
    updateUsers = users => {
        this.users = users;
    }
    selectPost = id => {
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
                this.updatePosts(posts.map(post => ({
                    id: post.id,
                    user: users.find(user => user.id === post.userId),
                    title: post.title,
                    body: post.body,
                    selected: false,
                })))
                this.updateUsers(users)
            })
            .catch(err => console.log(err));
    };
};