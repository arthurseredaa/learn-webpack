import * as $ from 'jquery';
import { Post } from '@models/Post';
import '@/babel';
import { createAnalytics } from '@/analytics';
import json from '@/assets/json';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import '@/styles/index.css';
import '@/styles/less.less';
import '@/styles/sass.scss';

const post = new Post('webpack post title').toString();

$('pre').addClass('code').html(post);

console.log('Post: ', post);
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
window.analytics = createAnalytics();
