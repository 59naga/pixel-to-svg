# PixelToSvg [![NPM version][npm-image]][npm] [![Build Status][travis-image]][travis] [![Coverage Status][cover-image]][cover] [![Climate Status][climate-image]][climate]

[![Sauce Test Status][sauce-image]][sauce]

> ImageData to SVG `<path>` elements

## Installation
```bash
$ npm install pixel-to-svg --save
```

# API

## svg.convert(imageData) -> svgHTML

```js
var pixel= require('pixel');
var svg= require('pixel-to-svg');
pixel.parse('https://cdn.rawgit.com/59naga/pixel-to-svg/master/test/10x10.png')
.then(function(images){
  console.log(svg.convert(images[0]));
});
// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" shape-rendering="crispEdges" width="10" height="10" viewBox="0 0 10 10"><g><path fill="rgba(0,0,0,255)" d="M0,0h10v10h-10Z"/></g></svg>
```

# Related projects
* [pixel-util](https://github.com/59naga/pixel-util/)
* [pixel-gif](https://github.com/59naga/pixel-gif-/)
* [pixel-png](https://github.com/59naga/pixel-png/)
* [pixel-jpg](https://github.com/59naga/pixel-jpg/)
* [pixel-bmp](https://github.com/59naga/pixel-bmp/)
* [pixel](https://github.com/59naga/pixel/)
* [pixel-to-ansi](https://github.com/59naga/pixel-to-ansi/)
* __pixel-to-svg__
* [jaggy](https://github.com/59naga/jaggy/)
* [vectorizer](https://github.com/59naga/vectorizer/)

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/

[sauce-image]: http://soysauce.berabou.me/u/59798/pixel-to-svg.svg
[sauce]: https://saucelabs.com/u/59798
[npm-image]:https://img.shields.io/npm/v/pixel-to-svg.svg?style=flat-square
[npm]: https://npmjs.org/package/pixel-to-svg
[travis-image]: http://img.shields.io/travis/59naga/pixel-to-svg.svg?style=flat-square
[travis]: https://travis-ci.org/59naga/pixel-to-svg
[cover-image]: https://img.shields.io/codeclimate/github/59naga/pixel-to-svg.svg?style=flat-square
[cover]: https://codeclimate.com/github/59naga/pixel-to-svg/coverage
[climate-image]: https://img.shields.io/codeclimate/coverage/github/59naga/pixel-to-svg.svg?style=flat-square
[climate]: https://codeclimate.com/github/59naga/pixel-to-svg
