
# Week 1: Design Patterns – Java FSE Deep Skilling

This folder contains Java implementations of core object-oriented design patterns as part of the Cognizant DN 4.0 Deep Skilling program – Java FSE Track.

---

## ✅ Patterns Covered

### 1. Singleton Pattern

- Ensures that a class has only one instance and provides a global point of access to it.
- **Use case:** Logging utility where a single logger is shared across the application.

📁 Folder: `Exercise1-Singleton pattern`  
📂 Files:
- `Logger.java`: Implements Singleton logic
- `Main.java`: Test class
- `output-screenshot.png`: Output of test

---

### 2. Factory Method Pattern

- Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
- **Use case:** A document management system creating different types of documents like Word, PDF, Excel.

📁 Folder: `Exercise2-Factory Pattern`  
📂 Files:
- `Document.java`: Interface
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java`: Concrete implementations
- `DocumentFactory.java`: Abstract factory
- Concrete factories for each document type
- `Main.java`: Demonstrates pattern usage
- `output-screenshot.png`: Output of test

---

## 📌 Notes
- Each exercise includes source code and console output screenshot.
- This hands-on demonstrates understanding of design principles and object-oriented patterns using Java.

---

Feel free to explore the folders for code, outputs, and usage!
