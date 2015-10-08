// Dependencies
import Svg from './svg'
import Path from './path'
import D from './d'

// Public
class PixelToSvg{
  constructor(){
    this.Svg= Svg
    this.Path= Path
    this.D= D
  }
  convert(image){
    return new Svg(image).html()
  }
}

export default new PixelToSvg
