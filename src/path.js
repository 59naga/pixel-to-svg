// Dependencies
import D from './d'

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
    let d= ''
    let rendered= []

    let rects= {}
    let history= {}
    for(let point in this.lines){
      let line= this.lines[point]
      if(rendered.indexOf(line) > -1){
        continue
      }

      let {x,y,width}= line
      let continualRect= history[`${x},${y-1}`]
      if(continualRect && continualRect.width==width){
        continualRect.height++
        history[`${x},${y}`]= continualRect
      }
      else{
        rects[`${x},${y}`]= line
        history[`${x},${y}`]= line
      }
      rendered.push(line)
    }

    for(let point in rects){
      d+= rects[point].toString()
    }
    return d
  }
}

export default Path
