package singleton;
public class Main {
    public static void main(String[] args) {
        // Fetch the logger instance
        Logger logger1 = Logger.getInstance();
        logger1.log("Starting the application...");

        // Fetch again to check if it's the same instance
        Logger logger2 = Logger.getInstance();
        logger2.log("Performing some operation...");

        // Check if both logger references point to the same object
        System.out.println("Are both loggers the same? " + (logger1 == logger2));
    }
}
