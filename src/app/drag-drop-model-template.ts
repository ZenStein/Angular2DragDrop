
import {UidGenerator} from './uid-generator'

export class DragDropModelTemplate {

model
conformed
conformedModel
idGenerator

    constructor(model: [Object] | string[][]){
        this.model = model    
        this.conformed = false
        this.idGenerator = new UidGenerator()
    }
    getModel(conformed?: boolean){
        if(conformed){
            if(!this.conformed){
                throw 'this model has not been conformed. call conformedModel' 
            }
            return this.conformedModel
        }
        return this.model()

    }
    conformModel(){
        this.conformFromArrayStrings()
        return this.conformedModel
    }

     getListTemplate(){
        return  {header:'',listUid:'', listItems:[]}
    }
     getListItemTemplate(){
        return  {viewText:'',uid:''}
    }
    tester(){}
    private conformFromArrayStrings(){
        let build = []
        let i = 0
        for(let list of this.model){
            let listTmpl = this.getListTemplate()
            console.log(list)
            listTmpl.header = list[0]
            listTmpl.listUid=this.idGenerator.generate(i)
            for(let x=1;x<list.length;x++){
                let newListItem = this.getListItemTemplate()
                newListItem.viewText=list[x]
                newListItem.uid = this.idGenerator.generate(i,x)
                listTmpl.listItems.push(newListItem)   
                console.log(x)
            }
            build.push(listTmpl)
            i++
        }
        this.conformed = true
        this.conformedModel = build 
    }
}
