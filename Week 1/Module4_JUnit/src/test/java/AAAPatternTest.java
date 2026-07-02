import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class AAAPatternTest {

    private List<String> testList;

    @Before
    public void setUp() {
        testList = new ArrayList<>();
        System.out.println("Setup: Created a fresh, empty list.");
    }

    @After
    public void tearDown() {
        testList = null;
        System.out.println("Teardown: Destroyed the list to free up memory.\n");
    }

    @Test
    public void testAddItemToList() {
        System.out.println("Running: testAddItemToList");

        String fruit = "Apple";

        testList.add(fruit);

        assertEquals(1, testList.size());
        assertEquals("Apple", testList.get(0));
    }

    @Test
    public void testAddMultipleItems() {
        System.out.println("Running: testAddMultipleItems");
        
        String fruit1 = "Apple";
        String fruit2 = "Banana";

        testList.add(fruit1);
        testList.add(fruit2);

        assertEquals(2, testList.size());
    }
}