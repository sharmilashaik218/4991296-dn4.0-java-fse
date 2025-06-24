-- Scenario 1
BEGIN
   FOR rec IN (SELECT * FROM customers) LOOP
      IF rec.age > 60 THEN
         UPDATE customers
         SET interest_rate = interest_rate - 1
         WHERE customer_id = rec.customer_id;
      END IF;
   END LOOP;

   COMMIT;
END;

SELECT * FROM customers;

/
--Scenario 2
CREATE TABLE customer_accounts (
    customer_id NUMBER,
    name VARCHAR2(50),
    balance NUMBER,
    is_vip VARCHAR2(5)
);

-- Insert some test data
INSERT INTO customer_accounts VALUES (101, 'Sharmila', 12000, 'FALSE');
INSERT INTO customer_accounts VALUES (102, 'Ravi', 8000, 'FALSE');
INSERT INTO customer_accounts VALUES (103, 'Anu', 15000, 'FALSE');

/
BEGIN
   FOR rec IN (SELECT * FROM customer_accounts) LOOP
      IF rec.balance > 10000 THEN
         UPDATE customer_accounts
         SET is_vip = 'TRUE'
         WHERE customer_id = rec.customer_id;
      END IF;
   END LOOP;

   COMMIT;
END;
/
CREATE TABLE loans (
    loan_id NUMBER,
    customer_name VARCHAR2(50),
    due_date DATE
);
--Scenario 3
-- Insert test dat
INSERT INTO loans VALUES (201, 'Sharmila', SYSDATE + 15);
INSERT INTO loans VALUES (202, 'Ravi', SYSDATE + 45);
INSERT INTO loans VALUES (203, 'Anu', SYSDATE + 5);

/
BEGIN
   FOR rec IN (SELECT * FROM loans WHERE due_date <= SYSDATE + 30) LOOP
      DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.loan_id || 
                           ' for ' || rec.customer_name || 
                           ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
   END LOOP;
END;
/