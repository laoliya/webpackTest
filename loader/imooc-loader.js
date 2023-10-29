const REG = /<script>([\s\S]*?)<\/script>/
module.exports = function(source){
    // console.log('source',source.match(REG))
    let _source = source
    source.replace(REG,function($1,$2){
        console.log($2)
        _source = $2
    })
    return _source
}