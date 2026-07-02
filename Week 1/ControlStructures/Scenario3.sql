DECLARE
BEGIN

    FOR rec IN (
        SELECT c.CustomerName, l.LoanID, l.DueDate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || rec.CustomerName || 
                             ', your loan (' || rec.LoanID || 
                             ') is due on ' || TO_CHAR(rec.DueDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/