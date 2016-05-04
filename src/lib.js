'use strict';

const async = require('async');
const request = require('request');

module.exports = (url) => {
  return (query, callback) => {
    let posts = [];
    const users = {};
    async.parallel(
      [
        (next) => {
          request(url + '/wp-json/wp/v2/posts' + query, (err, res, body) => {
            try {
              posts = JSON.parse(body);
            } catch (e) {}
            next();
          });
        },
        (next) => {
          request(url + '/wp-json/wp/v2/users', (err, res, body) => {
            try {
              for (let user of JSON.parse(body)) {
                users[user.id] = user;
              }
            } catch (e) {}
            next();
          });
        }
      ],
      () => { callback(posts, users); }
    );
  };
};
