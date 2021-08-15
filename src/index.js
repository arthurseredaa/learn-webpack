import '../node_modules/@babel/polyfill';
import React from 'react'
// import * as $ from 'jquery';
import { Post } from '@models/Post';
import '@/babel';
import { createAnalytics } from '@/analytics';
import { registryUser } from './test-ts';
import json from '@/assets/json';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import '@/styles/index.css';
import '@/styles/less.less';
import '@/styles/sass.scss';
import { render } from 'react-dom';

const post = new Post('webpack post title').toString();

// $('pre').addClass('code').html(post);

registryUser({ name: 'Arthur', age: 18 });

// console.log('Post: ', post);
// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('CSV:', csv);
window.analytics = createAnalytics();

const App = () => (
  <main className="container">
    <h1>Webpack course</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre className="post">
      {post}
    </pre>
    <hr />
    <div className="box">
      <h1>Styled div with less</h1>
    </div>
    <hr />
    <div className="sass_box">
      <h1>Styled div with sass</h1>
    </div>
  </main>
);

render(<App />, document.getElementById('root'));
