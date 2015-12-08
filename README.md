[![Dependency Status](https://david-dm.org/dnode/dwordpress.svg)](https://david-dm.org/dnode/dwordpress)
[![devDependency Status](https://david-dm.org/dnode/dwordpress/dev-status.svg)](https://david-dm.org/dnode/dwordpress#info=devDependencies)

# dwordpress
Get posts and users from a wordpress instance with WP REST API plugin

## Install
```
npm i dwordpress --save
```

## Example
```javascript
const dwordpress = require('dwordpress')('url');
dwordpress('query', (posts, users) => {
  for (let post of posts) {
    let user = users[post.author];
  }
});
```
