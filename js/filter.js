let findPriceFrom = document.getElementById('findPriceFrom');
let findPriceTo = document.getElementById('findPriceTo');
let typeOf = document.getElementById('type');
let sbros = document.getElementById('sbros');



document.getElementById('checkProduct').addEventListener('click', ()=>{
    if( findPriceFrom.value !== ""){
        for(let i = 0; i < catalogProduct.length; i++){
            if(catalogProduct[i].price < findPriceFrom.value){
                let idProduct = catalogProduct[i].id;
                document.getElementById(`item ${idProduct}`).style.display = 'none';
            };
        };
    };
    if( findPriceTo.value !== ""){
        for(let i = 0; i < catalogProduct.length; i++){
            if(catalogProduct[i].price > findPriceTo.value){
                let idProduct = catalogProduct[i].id;
                document.getElementById(`item ${idProduct}`).style.display = 'none';
            };
        };
    };
    if( type.value !== ""){
        for(let i = 0; i < catalogProduct.length; i++){
            if(catalogProduct[i].type !== typeOf.value){
                let idProduct = catalogProduct[i].id;
                document.getElementById(`item ${idProduct}`).style.display = 'none';
            };
        };
    };
});

document.getElementById('sbros').addEventListener('click',()=>{
    for(let i = 0; i < catalogProduct.length; i++){
            let idProduct = catalogProduct[i].id;
            document.getElementById(`item ${idProduct}`).style.display = 'block';
        };
    findPriceFrom.value = '';
    findPriceTo.value = ''   
});