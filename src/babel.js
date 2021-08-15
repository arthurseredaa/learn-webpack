const start = async() => {
  return await Promise.resolve('async is working');
}

start().then((data) => console.log(data));

import('lodash').then(lodash => {
  console.log('Lodash: ', lodash.random(0, 42, true));
})
