import { Post } from '@models/Post';
import { createAnalytics } from '@/analytics';
import json from '@/assets/json';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import '@/styles/index.css';

const post = new Post('webpack post title');

console.log('Post: ', post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
window.analytics = createAnalytics();
