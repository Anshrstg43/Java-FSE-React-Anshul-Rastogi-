CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
P
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
    
    COMMIT;
END ProcessMonthlyInterest;
/