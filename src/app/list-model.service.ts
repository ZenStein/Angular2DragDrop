import { Injectable } from '@angular/core';

interface csDndListTemplate {
    header:string,
    listUid:string,
    listItems: [ csDndListItemTemplate  | string ]  
}
interface csDndListItemTemplate{

    viewText:string,
    uid:string,
    selected: boolean
}

interface uidLocator{
    listDx: number
    itemDx: number 
}
//function _UID(uid: string){
//    //TODO regex validate uid spec conforming ' '[int]_[int] ' '  0_0 
//    return uid 
//}
//interface Object {
//    [Symbol.iterator](): IterableIterator<Object>;
//}
//interface Array {
//    [Symbol.iterator](): IterableIterator<Array>;
//}
//interface TwoDindexes { listDx: string : number, itemDx: string: number }
//declare type _locator_Map_ = Map<[{}], [{}]> 
@Injectable()
export class ListModelService {

        locatorsMap = []  
        injectionBlock = []



model:[csDndListTemplate] 
//antiDom 
selectedItemsCollection:[Object]
   // constructor(model: csDndLisTemplate[Object] | string[][]){
     // this.model = model 
   // }
  resetAllSelectionsToFalse(){
   this.modelIterator(function(item){
        item.selected = false    
     })   
  }
  //function *mapMaker(key):Iterable<number>{
  //      for(let i = 0; i < 100000; i++){
  //          yield {key: []};
  //      }
 // }
//  toRemoveMap(){
//  //  this. selectedItemsCollection = {0:[]}
//   let that = this
//   this.modelIterator(function(listItem, listIndex, itemIndex){
//     if(listItem.selected){
//         if(typeof that.selectedItemsCollection[listIndex] == 'Array'){
//            that.selectedItemsCollection[listIndex].listItems.push(itemIndex)
//         }
//         else{
//            let num =  parseInt(listIndex)
//             that.selectedItemsCollection[num] ={header:'', listUid:'', listItems:[''] }
//
//              that.selectedItemsCollection[num].push(itemIndex)
//         }
//
//       //selectedItemsCollection[listIndex].push
//       //let mapping = [listIndex, itemIndex]
//      // that.selectedItemsCollection[listIndex].push(itemIndex)
//       //.push(Array.prototype.splice.apply((that.model[listIndex].listItems),[0,1])[0])
//      // .push(clone)
//      // delete listItem
//     }
//     })
//    // return this.model
//   //console.log('selectedbelow')
//   //console.log(this.selectedItemsCollection)
//   return this.selectedItemsCollection
//  }
  selectedItems(){
    let that = this
    this.modelIterator(function(listItem, listIndex, itemIndex){
      if(listItem.selected){
        that.selectedItemsCollection.push(listItem) 
      }
      else{
//      this.antiDom[listIndex].listItems.push(listItem)
      }
      })
    console.log('selectedbelow')
    console.log(this.selectedItemsCollection)
    return this.selectedItemsCollection
    
    }
//  injectDrop(dropSpotUid: string){
//      let forRemoval = this.removeItems()
//    this.swap(dropSpotUid,forRemoval)
//    console.log('this.model after swap')
//    console.log(this.model)
//    return this.model
//  }
//  swap(listUid: string, data: any[]){
//      console.log('coming in: ' + listUid)
//      
//    let list = this.toRemoveMap()
//    let target = this.parseToList(listUid)
//    let targetIndex =  this.parseToListItem(listUid)
//
//    for(let x=0;x<this.model.length;x++){
//
//        if(x == target){
//        //add to array. this is the drop.
//            console.log('found target for drop')
//            Array.prototype.splice.apply(this.model[x].listItems, [targetIndex, 0].concat(data))
//        }
//        else{
//        // remove these selected.
//            
//        }
//    }
//    //let start = this.parseToListItem(listUid)
//     // console.log('start: ' + start)
//   // let list = this.doGetList(listUid)
//   // let start = this.parseToListItem(listUid)
//   //   console.log('start: ' + start)
//   //   console.log('list: '+ list)
//   // let argsList = [start, 0].concat(data)
//   // console.log(argsList)
//   // console.log(this.doGetList(listUid))
//   // console.log(list)
//   // console.log(argsList)
//
//  // Array.prototype.splice.apply(list.listItems,argsList)  
//    list.listItems.concat(data)
//  }
//  parseToList(uid){
//     let list = uid.replace(/_[\d]*/g, '')
//     return parseInt(list) 
//  }
//  parseToListItem(uid){
//    let item = uid.replace(/[\d]*_/g, '')
//    return parseInt(item) 
//      
//  }
  doSet(uid: string, prop: string, value: string | boolean){
      console.log(uid)
    let list = this.parseToList(uid)
    let item = this.parseToListItem(uid)
    console.log('dosetlist and item')
    console.log(list+'    '+ item)
       if(this.model[list] != undefined){
            if(this.model[list].listItems[item] != undefined){ 
             this.model[list].listItems[item][prop]= value
             return value
            }
       
       }
   }


  
//  doGetList(uid: string){
//      console.log('doGetwa passed: '+ uid )
//    return this.model[this.parseToList(uid)]  
//  }
//  getTemplate(value){
//      let tmpl: csDndListItemTemplate = 
//      {
//          header:'',
//          listUid:'',
//          listItems: [ csDndListItemTemplate  | 'undefined']  
//      }
//    return tmpl 
//  }
  private modelIterator(callback){

    for(let i=0;i<this.model.length;i++){
      for(let j=0;j<this.model[i].listItems.length;j++){

        if(callback(this.model[i].listItems[j],i,j) == 'done'){
            i =0
            break
        }
      }
    }
  }
mapSelectedInModel(){

   let locatorsMap = this.locatorsMap
   let that = this
   this.modelIterator(function(listItem, listIndex, itemIndex){
     if(listItem.selected){
         let dexes: uidLocator = { listDx: listIndex, itemDx: itemIndex }
        that.locatorsMap.push(dexes)
        that.injectionBlock.push(listItem)
        console.log('locators map inside model iterater')
        console.log(that.locatorsMap)
     }
   })
   return this.injectionBlock
}


doDropData(whereUid: string){
    let indexs =this.parseLocationFor( whereUid)
   console.log('do drop parse location for') 
   console.log(indexs) 
   console.log(this.locatorsMap) 
    let injectDx =indexs.itemDx  
    let model = this.model
    let that = this
       console.log(this.locatorsMap) 
        for(let aRemovable  in this.injectionBlock){
            let remove = this.injectionBlock[aRemovable]
           this.modelIterator(function(item,listIndex,itemIndex){
                if(item.uid == remove.uid && item.viewText == remove.viewText){
                    that.model[listIndex].listItems.splice(itemIndex, 1)
                    return 'done'
                }
           }) 
        }
//   for(let dxs in this.locatorsMap){
//       let indexOf = this.locatorsMap[dxs]
//       console.log('indexOf'); console.log(indexOf); console.log('injectDx'); console.log(model); console.log('injectionblock'); console.log(this.injectionBlock)
//       let ghost: csDndListItemTemplate = {viewText:'',uid:'ghost', selected: false}
//          model[indexOf.listDx].listItems.splice(indexOf.itemDx, 1, ghost)
//   }
//   for(let dxs in this.locatorsMap){
//       let indexOf = this.locatorsMap[dxs]
//          model[indexOf.listDx].listItems.splice(indexOf.itemDx, 1)
//   }
    let targetLen = model[indexs.listDx].listItems.length
    console.log('targetLen')
    console.log(targetLen)
    if(injectDx >= targetLen ){
        model[indexs.listDx].listItems.concat(this.injectionBlock)
    }
    else{
        let injector = [injectDx, 0].concat(this.injectionBlock)
       Array.prototype.splice.apply(model[indexs.listDx].listItems, injector) 
    }

    this.modelIterator(function(item, listIndex, itemIndex){
        item.uid = `${listIndex}_${itemIndex}`
    })
    this.injectionBlock = []
       return this.model
}
  parseToList(listUid){
     let x = listUid.replace(/_[\d]*/g, '')
     console.log('xxx whichlist')
     console.log(x)
     return x
     //return this.listsData[x].listItems      
  }
   parseToListItem(listUid){
    console.log('which index below first arg then result')
    let x = listUid.replace(/[\d]*_/g, '')
    console.log(listUid)
    console.log(x)
    console.log('which index below first arg then result bottom')

    return x
  }
parseLocationFor(uid): uidLocator {
    let x  ={ 
     listDx: parseInt((this.parseToList(uid)).toString()),
     itemDx: parseInt(this.parseToListItem(uid))
    }
    return x

}


}
