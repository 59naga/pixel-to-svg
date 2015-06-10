// Dependencies
import Path from './path'

import cheerio from 'cheerio'

// Public
class Svg{
  constructor(image){
    this.cheerio= cheerio.load('<svg/>',{xmlMode:true})

    let svg
    svg= this.cheerio('svg')
    svg.attr({
      'version': '1.1',
      'xmlns': 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',

      'shape-rendering': 'crispEdges',
    })

    if(image){
      svg.attr({
        'width': image.width,
        'height': image.height,
        'viewBox': `0 0 ${image.width} ${image.height}`,
      })

      svg.append(this.render(image))
    }
  }
  render(image){
    return this.renderG(this.parse(image))
  }
  parse(image){
    let colors= []
    let points= {}

    let i= 0
    let channel= 0
    while(image.data[channel]!=null){
      let x= i % image.width
      let y= Math.floor(i / image.width)
      let r= image.data[channel++]
      let g= image.data[channel++]
      let b= image.data[channel++]
      let a= image.data[channel++]
      let rgba= `rgba(${r},${g},${b},${a})`

      let j= colors.indexOf(rgba)
      if(j===-1){
        j= colors.length
        colors.push(rgba)
      }

      points[`${x},${y}`]= j

      i++
    }

    return {points,colors}
  }
  renderG({points,colors}){
    let g= cheerio('<g/>')

    let paths= {}
    for(let point in points){
      let [x,y]= point.split(',')
      let color= colors[points[point]]

      let path= paths[color]
      if(path==null){
        path= new Path(color)
        paths[color]= path
      }

      path.draw(x,y)
    }

    for(let color in paths){
      let path= cheerio('<path/>')
      path.attr('fill',color)
      path.attr('d',paths[color].toElement())

      g.append(path)
    }

    return g
  }
  html(){
    return this.cheerio.html()
  }
}

export default Svg