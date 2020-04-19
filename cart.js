var corsina = document.getElementById('corsina');
console.log(localStorage.getItem('status'));

class Cart{
    constructor(containerCart, catalogCounter, catalogProduct){
        this.containerCart = document.getElementById('conteinerCart');
        this.catalogCounter = document.querySelector(catalogCounter);
        this.catalogProduct = catalogProduct;
        this.createCart();
    }
//catalogCounter!!!!
    createCart(){

        corsina.addEventListener('click',function(){
                    if(localStorage.getItem('status') != 'true'){
            alert('Войдите в аккаунт');
        }
        else{
            document.getElementById('container_products').style.display = 'none';    
            document.getElementById('conteinerCart').style.display = 'flex';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            for(let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: `item ${productsCart[i].id}`
                });
                let name = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    nameText: productsCart[i].name
                });
                let img = createOneProduct.getProductItem({
                    nameTag: 'img',
                    nameClass: 'img',
                    bgImage: `${productsCart[i].img}`
                });
                let price = createOneProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                    nameText:  `Цена: ${productsCart[i].price}  руб.`
                });

                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);
            }

            let close = createOneProduct.getProductItem({
                nameTag: 'i',
                nameClass: 'fas fa-times'
            });

            close.addEventListener('click',function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';
            });

            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(wrapper);
}

        
   })
    }

    getProductCart(){
        let products = store.getProducts();
        let productsCart = [];
        for(let i=0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }

};

var cart = new Cart('conteiner_cart', 'catalog_counter', catalogProduct)
