export class UidGenerator {

listNameUids = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

generate(listId: number, listItemNumber?: number): string{
    let index = (listId%26) | 0
    let listUid = this.listNameUids[index]

    if(listId > 25){
        let times = Math.floor(listId/26)
        listUid = this.cycle(listUid, times) 
        }
    if(typeof listItemNumber == 'number'){
        console.log('did pass in number to generator')
        listUid = listUid + '_' + listItemNumber    
    }
    
   return listUid
}
cycle(letter: string, iteratorCount: number){
    if(iteratorCount < 1){
        return letter
    }
    let theLetter = letter
    for(var x=0;x<iteratorCount;x++){
        theLetter = theLetter + letter   
    }
    return theLetter
}

}
