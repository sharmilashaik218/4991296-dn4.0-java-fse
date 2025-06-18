import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static Product searchById(Product[] products, int targetId) {
        // Ensure the array is sorted by productId
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}
