public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(int years, double currentValue, double growthRate) {
        // Base case: return the current value if no years left
        if (years == 0) {
            return currentValue;
        }

        // Recursive call: apply growth and call for (years - 1)
        return (1 + growthRate) * futureValue(years - 1, currentValue, growthRate);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0; // Starting investment
        double growthRate = 0.05;     // 5% growth rate per year
        int years = 10;               // Number of years to forecast

        double result = futureValue(years, currentValue, growthRate);
        System.out.printf("Future Value after %d years = ₹%.2f%n", years, result);
    }
}
