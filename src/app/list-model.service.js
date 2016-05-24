"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListModelService = (function () {
    function ListModelService() {
        this.locatorsMap = new Map();
        this.injectionBlock = [];
    }
    // constructor(model: csDndLisTemplate[Object] | string[][]){
    // this.model = model 
    // }
    ListModelService.prototype.resetAllSelectionsToFalse = function () {
        this.modelIterator(function (item) {
            item.selected = false;
        });
    };
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
    ListModelService.prototype.selectedItems = function () {
        var that = this;
        this.modelIterator(function (listItem, listIndex, itemIndex) {
            if (listItem.selected) {
                that.selectedItemsCollection.push(listItem);
            }
            else {
            }
        });
        console.log('selectedbelow');
        console.log(this.selectedItemsCollection);
        return this.selectedItemsCollection;
    };
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
    ListModelService.prototype.doSet = function (uid, prop, value) {
        console.log(uid);
        var list = this.parseToList(uid);
        var item = this.parseToListItem(uid);
        console.log('dosetlist and item');
        console.log(list + '    ' + item);
        if (this.model[list].listItems[item] != undefined) {
            this.model[list].listItems[item][prop] = value;
        }
    };
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
    ListModelService.prototype.modelIterator = function (callback) {
        for (var i = 0; i < this.model.length; i++) {
            for (var j = 0; j < this.model[i].listItems.length; j++) {
                callback(this.model[i].listItems[j], i, j);
            }
        }
    };
    ListModelService.prototype.mapSelectedInModel = function () {
        this.locatorsMap;
        var that = this;
        this.modelIterator(function (listItem, listIndex, itemIndex) {
            if (listItem.selected) {
                that.locatorsMap.set(/*{ listDx: 7, itemDx: 10},{//*/ { listDx: listIndex, itemDx: itemIndex }, listItem);
            }
        });
        return this.injectionBlock;
    };
    ListModelService.prototype.doDropData = function (whereUid) {
        var indexs = this.parseLocationFor(whereUid);
        var injectDx = indexs.itemDx + 1;
        var model = this.model;
        for (var _i = 0, _a = this.locatorsMap.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], dxs = _b[0], item = _b[1];
            model[dxs['listDx']].listItems.splice(injectDx, 1);
        }
        var targetLen = model[indexs.listDx].listItems.length;
        if (injectDx >= targetLen) {
            model[indexs.listDx].listItems.concat(this.injectionBlock);
        }
        else {
            var injector = [injectDx, this.injectionBlock.length].concat(this.injectionBlock);
            Array.prototype.splice.apply(model[indexs.listDx].listItems, injector);
        }
    };
    ListModelService.prototype.parseToList = function (listUid) {
        var x = listUid.replace(/_[\d]*/g, '');
        console.log('xxx whichlist');
        console.log(x);
        return x;
        //return this.listsData[x].listItems      
    };
    ListModelService.prototype.parseToListItem = function (listUid) {
        console.log('which index below first arg then result');
        var x = listUid.replace(/[\d]*_/g, '');
        console.log(listUid);
        console.log(x);
        console.log('which index below first arg then result bottom');
        return x;
    };
    ListModelService.prototype.parseLocationFor = function (uid) {
        var x = {
            listDx: parseInt(this.parseToList(uid)),
            itemDx: parseInt(this.parseToListItem(uid))
        };
        return x;
    };
    ListModelService = __decorate([
        core_1.Injectable()
    ], ListModelService);
    return ListModelService;
}());
exports.ListModelService = ListModelService;
