import static org.junit.Assert.assertEquals;
import org.junit.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class MyServiceTest {
    
    // --- EXERCISE 1: Mocking and Stubbing ---
    @Test
    public void testExternalApi() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        
        assertEquals("Mock Data", result);
        System.out.println("Exercise 1 Passed: The fake API returned: " + result);
    }

    // --- EXERCISE 2: Verifying Interactions ---
    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();
        
        verify(mockApi).getData();
        
        System.out.println("Exercise 2 Passed: Verified that getData() was successfully called!");
    }
}