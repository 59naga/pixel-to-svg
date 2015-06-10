// Public
class Path{
  constructor(){
    this.lines= {}
  }
  draw(x=0,y=0){
    // points to line
    let continualLine= this.lines[`${x-1},${y}`]
    if(this.lines[`${x-1},${y}`]){
      continualLine.width++
      this.lines[`${x},${y}`]= continualLine
    }
    else{
      this.lines[`${x},${y}`]= new D(x,y)
    }
  }
  toElement(){
    // TODO: lines to rect
    let d= ''
    let rendered= []

    let rects= {}
    for(let point in this.lines){
      let line= this.lines[point]
      if(rendered.indexOf(line) > -1){
        continue
      }

      let {x,y,width}= line
      let continualRect= rects[`${x},${y-1}`]
      if(continualRect && continualRect.width==width){
        continualRect.height++
      }
      else{
        rects[`${x},${y}`]= line
      }
      rendered.push(line)
    }

    for(let point in rects){
      d+= rects[point].toString()
    }
    return d
  }
}
class D{
  constructor(x,y){
    this.x= x
    this.y= y
    this.width= 1
    this.height= 1
  }
  toString(){
    let {x,y,width,height}= this

    // 1pixel = <path d='M0,0 h1 v1 h-1 z'>
    return 'M'+x+','+y+'h'+width+'v'+height+'h-'+width+'Z'
  }
}

export default Path