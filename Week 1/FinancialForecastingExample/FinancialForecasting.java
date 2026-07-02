public class FinancialForecasting {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years <= 0) {
            return currentValue;
        }
        
        return calculateFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0;
        double expectedGrowthRate = 0.05;
        int forecastYears = 10;

        System.out.println("--- Financial Forecasting ---");
        System.out.println("Present Value: $" + presentValue);
        System.out.println("Annual Growth Rate: " + (expectedGrowthRate * 100) + "%");
        System.out.println("Forecasting for: " + forecastYears + " years\n");

        double futureValue = calculateFutureValue(presentValue, expectedGrowthRate, forecastYears);

        System.out.printf("Predicted Future Value: $%.2f%n", futureValue);
    }
}