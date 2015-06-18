// Dependencies
import Svg from './svg'

// Public
class PixelToSvg{
  constructor(){
    // TODO export.className= Any
    this.PixelToSvg= PixelToSvg
    this.Svg= Svg
  }
  convert(image){
    return new Svg(image).html()
  }
}

export default new PixelToSvg
