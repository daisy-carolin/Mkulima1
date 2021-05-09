class Mkulima {
    constructor(farms, products, vendors) {
        this.farms = farms;
        this.products = products;
        this.vendor = vendors;

    }
    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,

        }
        return this.farms.push(farm);
    }


    getFarm(farmId) {
        for (var i = 0; i < this.farms.length; i++) {
            let farm = this.farms[i];
            if (farm.farmId === farmId); {
                return farm;
            }
        }
    }
    removeFarm(farmId) {
        let farm = this.getFarm(farmId);
        let index = this.farms.indexOf(farmId);
        return this.farms.splice(index, 1);
    }
    updateFarm(farmId, name, farmer, phone, address) {
        let newFarm = this.farms.find(newFarm => newFarm.farmer == "Larry");
        newFarm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address,
        }
        return newFarm
    }

    addProduct(productId, name, price) {
        let product = {
            productId: productId,
            name: name,
            price: price,
        }
        return this.products.push(product);
    }
    getProduct(productId) {
        for (var i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            if (product.productId === productId); {
                return product;
            }
        }

    }
    removeProduct(productId) {
        let product = this.getProduct(productId);
        let index = this.products.indexOf(productId);
        return this.products.splice(index, 1);
    }
    updateProduct(productId, name, price) {
        let newProduct = this.products.find(newProduct => newProduct.name == "rice");
        newProduct = {
            ProductId: productId,
            name: name,
            price: price,
        }
        return newProduct

    }

    printProducts() {
        for (let object of this.products) {
            console.log([object.name + "," + object.price])
        }
    }
    calculateOrderCost(productId, quantity) {
        let cost = this.products.find(cost => cost.productId == productId)
        return cost.price * quantity

    }

}




let order1 = new Mkulima([{
    farmId: "778bcg",
    farmName: " Lima farm",
    farmer: " Sam Ongeri",
    phone: " 0757702813",
    address: " Bungoma Kenya"
}], [{
    productId: "134p",
    name: "piece",
    price: 1100
}]);
console.log(order1.addFarm("778ghi", " lambwe", "Daisi", " 0728841011", " Kampala Uganda"));
console.log(order1.getFarm("778ghi"));
console.log(order1.removeFarm("778ghi"));
console.log(order1.updateFarm("645bjk", "Hybrid Farm", "Christine Mumbi", "0712604286", "Kilembwe Uganda"));
console.log(order1.addProduct("134bmn", "groundnuts ", 1200));
console.log(order1.getProduct("134bmn"));
console.log(order1.removeProduct("134bmn"));
console.log(order1.updateProduct("134hjm", "cabbage", 1500));
console.log(order1.printProducts());
console.log(order1.calculateOrderCost("134hng", 5))