bitstarter
==========
* For Chinese to avoid the GFW to Heroku, change git@heroku.com to git@107.21.95.3 in .git/config,
refer to http://ruby-china.org/topics/10813, while it is unnecessary when using AWS.

* Set up heroku
1. heroku addons:add heroku-postgresql:dev --app NAME
2. heroku pg:promote `heroku config --app NAME  | grep HEROKU_POSTGRESQL | cut -f1 -d':'` --app NAME
3. heroku config:push --app NAME
4. git push HEROKU_BRANCH_NAME master:master