function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('agenda')
}

function obtenerDatosHTML(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja=SpreadsheetApp.openById('1oXLzOZ7uTqgeSOBkeQvB7GE_dQhTy1Q-ePV9-jzWzU0').getActiveSheet();
    let datos=hoja.getDataRange().getValues();
    return datos;
}

