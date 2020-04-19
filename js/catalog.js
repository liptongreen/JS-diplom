class AllProducts{
    constructor(containerProducts, catalogProduct, catalogCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogProduct = catalogProduct;
        this.catalogCounter = document.querySelector(catalogCounter);        
        this.createProducts();
    }

    /*<slot>
        <div class="item">
            <div class="name">Product1</div>
            <div class="img"></div>
            <div class="price">111</div>
            <button>Купить</button>
        </div>
    </slot>
        */

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();
        this.catalogCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeText;
            if(index === -1){
                activeText = 'Добавить в корзину';
            } else{
                activeText = 'Удалить из корзины';
            }

            let item = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: `item ${this.catalogProduct[i].id}`,
                id: `item ${this.catalogProduct[i].id}`
            });
            let name = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                nameText: this.catalogProduct[i].name
            });
            let img = createOneProduct.getProductItem({
                nameTag: 'img',
                nameClass: 'img',
                bgImage: `${this.catalogProduct[i].img}`
            });
            let price = createOneProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                nameText:  `Цена: ${this.catalogProduct[i].price}  руб.`
            });
            let btn = createOneProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                nameText: activeText,
                id: this.catalogProduct[i].id
            });

            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.catalogCounter.innerHTML = result.products.length;
                
                if(result.statusProduct){
                    this.innerHTML = "Удалить из корзины";
                } else{
                    this.innerHTML = "Добавить в корзину";
                }
            })

            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        };
        this.containerProducts.appendChild(wrapper);
    };

    getProductItem(card){
        let element = document.createElement(card.nameTag);
        if('nameClass' in card){
            element.setAttribute('class', card.nameClass);
        };
        if('bgImage' in card){
            element.setAttribute('src', card.bgImage);
        };
        if('nameText' in card){
            element.innerHTML = card.nameText;
        };
        if('id' in card){
            element.setAttribute('id', card.id);
        };
        return element;
    };
}

let allProducts = new AllProducts('.container_products', catalogProduct, '.catalog_counter');