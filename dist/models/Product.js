"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Product: ${this.name} (SKU: ${this.sku}) - $${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        return this.price; // Base tax behavior; subclasses override
    }
}
exports.Product = Product;
