function classContains(cssClass){
    // let reg = new RegExp(cssClass, "g")
    //console.log( this.el.nativeElement.className.match(cssClass) )
    return "is-selected original".match(cssClass) 
    //return this.el.nativeElement.className.match(cssClass) 
}
function includeClass(cssClass){
    let className = "original blah is-selecteded ";     
    className += ` ${cssClass} `
    return className
}
function removeCLass(cssClass){
    let  reg = new RegExp(cssClass,"g");
    let elem = "is-selected original ".replace(reg, '')
    return elem
}
let test = 'is-selected'
//classContains('is-selected')
//classContains('sfsd-df')
//classContains(test)
console.log(classContains('is-selected'))
console.log(classContains('is-sflsdfkj'))
console.log(classContains(test))
console.log(classContains('original'))
console.log(removeCLass('is-selected'))
console.log(removeCLass('original'))
console.log(includeClass('original'))
console.log(includeClass('blah'))
console.log(includeClass('adfgldfg bl'))
