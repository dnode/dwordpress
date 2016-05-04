[![Dependency Status](https://david-dm.org/dnode/dwordpress.svg)](https://david-dm.org/dnode/dwordpress)
[![devDependency Status](https://david-dm.org/dnode/dwordpress/dev-status.svg)](https://david-dm.org/dnode/dwordpress#info=devDependencies)

# Example
```javascript
const dwordpress = require('dwordpress')('url');
dwordpress('query', (posts, users) => {
  for (const post of posts) {
    const user = users[post.author];
  }
});
```
