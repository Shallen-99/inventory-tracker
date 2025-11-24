export class Product {
        constructor(
        public sku: string,
        public name: string,
        public price: number
    ) {}

    displayDetails(): string {
        return `Product: ${this.name} (SKU: ${this.sku}) - $${this.price.toFixed(2)}`;
    }

    getPriceWithTax(): number {
        return this.price;
    }
}