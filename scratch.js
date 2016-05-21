[csDndTemplate[]];
{
    viewText: '', uid;
    '';
}
listTemplateGenerator(numberListToGenerate, number);
{
    var container = [];
    var template = { header: '', listUid: '', listItems: csListItemTemplate[] };
    for (var i = 0; i < numberListToGenerate; i++) {
        (container.push(template));
    }
    return container;
}
mergeDataToTemplate(template, csDndTemplate, listItemTemplate, csListItemTemplate, data, csTemplateFill);
{
    var build = [];
    for (var i = 0; i < data.length; i++) {
        var templSpawn = Object.assign(template);
        templSpawn.header = data[i].header;
        templSpawn.listUid = generateUids(i);
        for (var j = 0; j < data[i].listItems.length; j++) {
            var listItemSpawn = Object.assign(listItemTemplate);
            listItemSpawn.viewText = data[i].listItems[j];
            listItemSpawn.uid = generateUids(i, j);
            templSpawn.listItems.push(listItemSpawn);
        }
        build.push(templSpawn);
    }
    return build;
}
generateUids(listId, number, listItemNumber, number = 0);
{
    var listNameUids = ['A', 'B', 'C', 'D'];
    var listUid = listNameUids[listId];
    if (listItemNumber) {
        listItemUid = listUid + '_' + listItemNumber;
        return listItemUid;
    }
    return listUid;
}
console.log(listTemplateGenerator(3));
