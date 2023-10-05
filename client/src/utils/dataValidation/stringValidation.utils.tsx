export const removeAccent = (str: any) => {
    if(!str) {
        return;
    } else {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
}
