let main
if(__filename.slice(-4) === '.es6'){
  main= require('./src')
}
else{
  main= require('./lib')
}

export default main