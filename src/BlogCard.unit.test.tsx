import renderer from 'react-test-renderer';
import BlogCard from './BlogCard';

test('BlogCard', () => {
    const post = renderer.create(<BlogCard blogPost={{id: 1, title: "abc", body: "def", selected: false, userId: 1, user: {id: 1, name: "ghi"}}}/>);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
});

test('BlogCard selected', () => {
    const post = renderer.create(<BlogCard blogPost={{id: 1, title: "abc", body: "def", selected: true, userId: 1, user: {id: 1, name: "ghi"}}}/>);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
});