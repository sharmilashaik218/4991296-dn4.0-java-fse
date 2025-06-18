public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(202, "Shoes", "Footwear"),
                new Product(150, "Book", "Stationery")
        };

        // Linear Search
        Product found1 = LinearSearch.searchById(products, 202);
        System.out.println("Linear Search Found: " + (found1 != null ? found1.productName : "Not Found"));

        // Binary Search
        Product found2 = BinarySearch.searchById(products, 150);
        System.out.println("Binary Search Found: " + (found2 != null ? found2.productName : "Not Found"));
    }
}
