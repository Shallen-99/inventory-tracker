"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const products = [
    new PhysicalProduct_1.PhysicalProduct("P100", "Desk", 200, 15),
    new DigitalProduct_1.DigitalProduct("D200", "Software License", 99, 500)
];
for (const product of products) {
    console.log(product.displayDetails());
    const finalPrice = (0, taxCalculator_1.calculateTax)(product);
    console.log(`Final Price (with Tax): $${finalPrice.toFixed(2)}`);
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
    }
    else if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }
    console.log("-------------------------");
}
