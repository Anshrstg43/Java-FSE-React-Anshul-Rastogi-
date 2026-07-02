import java.util.Arrays;

public class ECommerceSearch {

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.getProductId() == targetId) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }
            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Smartphone", "Electronics"),
            new Product(109, "Headphones", "Accessories"),
            new Product(102, "Desk Chair", "Furniture"),
            new Product(107, "Coffee Maker", "Appliances")
        };

        System.out.println("--- Linear Search ---");
        Product linearResult = linearSearch(products, 102);
        System.out.println("Found: " + linearResult);

        Arrays.sort(products);

        System.out.println("\n--- Binary Search ---");
        Product binaryResult = binarySearch(products, 109);
        System.out.println("Found: " + binaryResult);
    }
}