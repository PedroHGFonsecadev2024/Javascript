const stringVazia = str => {
    if(str.length === 0){
        resultado.textContent = "String Vazia!"
    }
    else{
        resultado.textContent = "Conteúdo da String: " + str;
    }
}
