import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

const products = [
new PhysicalProduct("P100", "Desk", 200, 15),
new DigitalProduct("D200", "Software License", 99, 500)
];

for (const product of products) {
console.log(product.displayDetails());

const finalPrice = calculateTax(product);
console.log(`Final Price (with Tax): $${finalPrice.toFixed(2)}`);

if (product instanceof PhysicalProduct) {
console.log(`Weight: ${product.formattedWeight}`);
} else if (product instanceof DigitalProduct) {
console.log(`File Size: ${product.formattedFileSize}`);
}

console.log("-------------------------");
}