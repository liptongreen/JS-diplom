var search = document.getElementById('search');



search.addEventListener('keyup', function (e){
    localStorage.setItem('search', search.value);
    if(e.keyCode === 13  ){
        var re = `${localStorage.getItem('search')}`;
        document.location.href = "./catalog.html";
        for(let i = 0; i < catalogProduct.length; i++){
            if(re.indexOf(catalogProduct[i].name) == -1){
                document.getElementById(`item ${i}`).style.display = 'none';
            }
        }   
    }
})
    
    
