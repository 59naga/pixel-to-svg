// Dependencies
import Svg from './svg'

// Public
let convert= (image)=>{
  return new Svg(image).html()
}

export {Svg,convert}