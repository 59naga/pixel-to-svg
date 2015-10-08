// No dependency

// Public
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

export default D
