package singleton;
public class Logger {
    // Step 1: Create a private static instance of Logger (the single instance)
    private static Logger instance;

    // Step 2: Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Step 3: Public method to get the only instance of Logger
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Utility method to simulate logging
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
