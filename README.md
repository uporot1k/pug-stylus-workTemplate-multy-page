# Pug & Stylus work Template.
This template created for multy-page layout. In this template every page has his own css file. Also, this package include bable.

```
Folder structure
src/
  pug/
    partials/
      layout.pug
      config.pug
      nav.pug
    index.pug  
    about.pug 
  js/
    entries/
      index.js
      about.js 
  stylus/
    style files
  images/
webpack-config
```

# Instruction
This template include 2 demo-page. If you want create new page you must follow this instruction:

1) In this file webpack.config.js you must add config like that:
```

module.exports = {
entry: {
  index: PATHS.entries + 'index.js', // default page
  about: PATHS.entries + 'about.js', // default page
  new: PATHS.entries + 'new.js' // new page!
},
...
plugins: [
  jadePage('index'), // default
  jadePage('about'), // default
  jadePage('new'), // new page!
  new ExtractTextPlugin('css/[name].css'),
  new CopyWebpackPlugin([
    { from: 'src/images', to: 'images' }
  ])
],
...
}
```
2) You must create your pug's file new.pug in folder pug/
3) Add new.js in folder js/entries
4) The last is adding new page in nav-chain located in nav.pug

```
ul.nav
  +navLink('/', 'index', 'Home') // default
  +navLink('about.html', 'about', 'About') // default
  +navLink('new.html', 'new', 'New') // new page!
```
# Adding own css file foreach page
In folder stylus/page create unique page's style file like new.styl
Include style file in .js file
```
#index.js

import base from '../../stylus/base/index.styl' // default
import nav from '../../stylus/modules/nav.styl' // default
import hero from '../../stylus/modules/hero.styl' // default
import index from '../../stylus/page/index.styl' // NEW
```
# Initialization
```
npm init
npm install
```
# Commands
```
npm start - open hot-reloaded browser's window with your work.
npm build - create files for production
```
