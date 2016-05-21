import { Injectable } from '@angular/core';

interface csDndListTemplate {header:string, listUid:string, listItems: csDndListItemTemplate[] }
interface csDndListItemTemplate {viewText:string, uid:string, selected?: boolean }

@Injectable()
export class ListModelService {

model: csDndListTemplate[] 
    //constructor(model: csDndLisTemplate[Object] | string[][]){
     // this.model = model 
   // }
  resetAllSelectionsToFalse(){
   this.modelIterator(function(item){
        item.selected = false    
     })   
  }
  removeItems(){
    let selectedItemsCollection = []
    let that = this
    this.modelIterator(function(listItem, listIndex, itemIndex){
      if(listItem.selected){
        selectedItemsCollection
        .push(that.model[listIndex].listItems
         .splice(itemIndex, 1)[0]) 
      }
      })
    console.log('selectedbelow')
    console.log(selectedItemsCollection)
    return selectedItemsCollection
  }
  selectedItems(){
    let selectedItemsCollection = []
    let that = this
    this.modelIterator(function(listItem, listIndex, itemIndex){
      if(listItem.selected){
        selectedItemsCollection.push(listItem) 
      }
      })
    console.log('selectedbelow')
    console.log(selectedItemsCollection)
    return selectedItemsCollection
    
    }
  injectDrop(dropSpotUid: string){
    this.swap(dropSpotUid, this.removeItems())
    console.log('this.model after swap')
    console.log(this.model)
    return this.model
  }
  swap(listUid: string, data: any[]){
    let list = this.doGetList(listUid)
    let start = this.parseToListItem(listUid)
    let argsList = [start, 0].concat(data)
    console.log(argsList)
    console.log(this.doGetList(listUid))
    console.log(list)
    console.log(argsList)

    Array.prototype.splice.apply(list.listItems,argsList)  
  }
  parseToList(uid){
     let list = uid.replace(/_[\d]*/g, '')
     return parseInt(list) 
  }
  parseToListItem(uid){
    let item = uid.replace(/[\d]*_/g, '')
    return parseInt(item) 
      
  }
  doSet(uid: string, prop: string, value: string | boolean){
    let list = this.parseToList(uid)
    let item = this.parseToList(uid)
    console.log('dosetlist and item')
    console.log(list+'    '+ item)


    this.model[list].listItems[item][prop] = value
  }
  doGetList(uid: string){
    return this.model[this.parseToList(uid)]  
  }
  private modelIterator(callback){

    for(let i=0;i<this.model.length;i++){
      for(let j=0;j<this.model[i].listItems.length;j++){
        callback(this.model[i].listItems[j],i,j)
      }
    }
  }
    
}
