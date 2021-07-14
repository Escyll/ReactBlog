import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row } from 'reactstrap';
import { observer } from 'mobx-react-lite';
import BlogViewHeader from './BlogViewHeader';
import BlogCard from './BlogCard';

const BlogView = observer(({ blogStore }) =>
    <div>
        <Helmet>
            <title>Jesper's Blog</title>
        </Helmet>
        <BlogViewHeader blogName={blogStore.blogName} logo={blogStore.logo} />
        <Container className="mt-4">
            <Row>
                {blogStore.posts.map(post =>
                    <div key={post.id} className="col-md-6" onClick={() => { blogStore.selectPost(post.id) }}>
                        <BlogCard blogPost={post}/>
                    </div>)}
            </Row>
        </Container>
    </div>
);

export default BlogView;