
function  parseToList(listUid){
     let x = listUid.replace(/__([\d])*____/g, '') 
     console.log('xxx whichlist')
     console.log(x)
     return x | 'xx'
     //return this.listsData[x].listItems      
  }
   function parseToListItem(listUid){
    console.log('which index below first arg then result')
    let x = listUid.replace(/____([\d])*__/g, '') 
    console.log(listUid)
    console.log(x)
    console.log('which index below first arg then result bottom')

    return x | 'yy'
  }
 function parseLocationFor(uid, returnInt) {
    let x  ={ 
     listDx:( parseInt(parseToList(uid)) | 'zzz'  ),
     itemDx: parseInt(parseToListItem(uid))
    }
    return x

}

let a = '0_0'

let b = '0_1'
console.log(parseLocationFor(a))
console.log(parseLocationFor(b, 10))
console.log(parseLocationFor('0', 10))
console.log()
