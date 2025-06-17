# Week 1: Design Patterns – Java FSE Deep Skilling

This folder contains Java implementations of core object-oriented design patterns as part of the Cognizant DN 4.0 Deep Skilling program – Java FSE Track.

---

## ✅ Patterns Covered

### 1. Singleton Pattern

- Ensures that a class has only one instance and provides a global point of access to it.
- **Use case:** Logging utility where a single logger is shared across the application.

📁 Folder: `Exercise1-SingletonPattern`  
📂 Files:
- `Logger.java`: Implements Singleton logic
- `Main.java`: Test class
- `output-screenshot.png`: Execution output

#### 🔽 Output:
![Singleton Output](./Exercise1-Singleton pattern/Output-screenshot.png)

---

### 2. Factory Method Pattern

- Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
- **Use case:** A document management system creating different types of documents like Word, PDF, Excel.

📁 Folder: `Exercise2-Factory pattern`  
📂 Files:
- `Document.java`: Interface
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java`: Concrete implementations
- `DocumentFactory.java`: Abstract factory
- Concrete factory classes
- `Main.java`: Demonstrates pattern usage
- `output-screenshot.png`: Execution output

#### 🔽 Output:
![Factory Method Output](./Exercise2-Factory pattern/output.png)

---

## 📌 Notes
- Each pattern includes its Java source code and terminal output.
- Demonstrates clear understanding of object-oriented design principles and clean code practices.

---

Feel free to explore the folders for code, outputs, and usage!
