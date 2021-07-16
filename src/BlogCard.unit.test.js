import React from 'react';
import renderer from 'react-test-renderer';
import BlogCard from './BlogCard';

test('BlogCard', () => {
    const post = renderer.create(<BlogCard blogPost={{title: "abc", body: "def", selected: false, user: {name: "ghi"}}}/>);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
});

test('BlogCard selected', () => {
    const post = renderer.create(<BlogCard blogPost={{title: "abc", body: "def", selected: true, user: {name: "ghi"}}}/>);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
});