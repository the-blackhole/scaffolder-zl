#kuangyibang-www
--------------------

##Concepts
- [Flux Data Flow](http://rackt.org/redux/docs/basics/DataFlow.html)
- [Redux](http://rackt.org/redux/docs/basics/index.html)
- [Fetch API](https://github.com/github/fetch)
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock)
- [Immutable JS](https://github.com/facebook/immutable-js)
- [Redux Form](http://erikras.github.io/redux-form)

##Misc
- Please run ```./scripts/install_prepush_hook.sh``` to install pre push check
- Use Taobao npm registry `npm i --registry=https://registry.npm.taobao.org`
- Use 'ctrl-h' or 'ctrl-q' to control the Dev Tool
- After `npm start` code coverage is available at `http://localhost:9966/lcov-report/` after `npm test`

##Production
`rm -rf node_modules && npm i --registry=https://registry.npm.taobao.org && npm run build && npm run server`
