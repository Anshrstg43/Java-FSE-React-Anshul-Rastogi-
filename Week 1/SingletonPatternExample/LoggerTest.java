public class LoggerTest {
    public static void main(String[] args) {
        
        System.out.println("--- Starting Singleton Test ---");

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        System.out.println("Hashcode for logger1: " + logger1.hashCode());
        System.out.println("Hashcode for logger2: " + logger2.hashCode());

        System.out.println("\n--- Verification ---");
        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both variables reference the same Logger instance. The Singleton pattern is working.");
        } else {
            System.out.println("FAILURE: Different instances were created.");
        }

        System.out.println("\n--- Testing Functionality ---");
        
        logger1.log("User logged into the application.");
        logger2.log("Data processing started.");
    }
}