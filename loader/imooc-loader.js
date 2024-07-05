const REG = /<script>([\s\S]+?)<\/script>/;
module.exports = function(source){
    // console.log('source',source.match(REG))
    const _source = source.match(REG)
    // source.replace(REG,function($1,$2){
    //     console.log($2)
    //     _source = $2
    // })
    console.log('_source',_source)
    return _source && _source[1] ? _source[1] :source
}

if(require.main === module){
    console.log('判断当前模块是否为主模块，用于直接执行js')
}