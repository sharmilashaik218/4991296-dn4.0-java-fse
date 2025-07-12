--Scenario 1:
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01);
END;

EXEC ProcessMonthlyInterest;
SELECT * FROM savings_accounts;

/
--Scenario 2:
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept IN VARCHAR2,
    bonus_percent IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * bonus_percent / 100)
    WHERE department = dept;
END;
EXEC UpdateEmployeeBonus('IT', 10);

SELECT * FROM employees;
/
--Scenario 3:

CREATE OR REPLACE PROCEDURE TransferFunds (
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) AS
    from_balance NUMBER;
BEGIN
    SELECT balance INTO from_balance FROM bank_accounts WHERE account_id = from_account;

    IF from_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient balance!');
    ELSE
        UPDATE bank_accounts
        SET balance = balance - amount
        WHERE account_id = from_account;

        UPDATE bank_accounts
        SET balance = balance + amount
        WHERE account_id = to_account;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');
    END IF;
END;
EXEC TransferFunds(1, 2, 2000);
SELECT * FROM bank_accounts;
/