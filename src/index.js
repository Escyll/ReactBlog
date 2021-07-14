import React from 'react';
import ReactDOM from 'react-dom';
import BlogStore from './BlogStore';
import BlogView from './BlogView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = new BlogStore();

ReactDOM.render(<BlogView blogStore={store} />, document.getElementById('root'));