import React from 'react';
import { observer } from 'mobx-react-lite';
import { Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import classNames from "classnames";
import BlogPostImage from './BlogPostImage.jpg';

const BlogCard = observer(({ blogPost }) =>
    <Card
        className={classNames("BlogCard", {
            "border-2": blogPost.selected,
            "border-primary": blogPost.selected,
        })}>
        <CardImg top width="100%" src={BlogPostImage} alt={blogPost.title} />
        <CardBody>
            <CardTitle tag="h5">{blogPost.title}</CardTitle>
            <CardSubtitle tag="h6">By {blogPost.user.name}</CardSubtitle>
            <CardText style={{ marginTop: `20px` }}>By {blogPost.body}</CardText>
        </CardBody>
    </Card>
);

export default BlogCard;