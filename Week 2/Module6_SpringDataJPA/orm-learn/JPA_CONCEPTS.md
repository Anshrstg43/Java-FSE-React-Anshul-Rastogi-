# Module 6: Understanding JPA, Hibernate, and Spring Data JPA

As part of Module 6, I reviewed the architectural differences between JPA, Hibernate, and Spring Data JPA. Below is a summary of the core concepts:

### 1. Java Persistence API (JPA)
* It is the JSR 338 Specification for persisting, reading, and managing data from Java objects.
* It is strictly a specification and **does not** contain concrete implementations.
* Hibernate is one of the implementations of JPA.

### 2. Hibernate
* An ORM (Object-Relational Mapping) tool that provides the actual implementation of the JPA specification.
* In raw Hibernate, developers must manually open sessions, begin transactions, handle try/catch blocks with rollbacks, and close sessions manually.

### 3. Spring Data JPA
* This is an additional level of abstraction over the JPA implementation provider (like Hibernate).
* It significantly **reduces boilerplate code**.
* It automatically manages transactions.
* **Code comparison:** Instead of writing complex session management, Spring Data JPA allows us to simply extend `JpaRepository` and use the `@Transactional` annotation in our service layer to perform database operations (e.g., `employeeRepository.save(employee)`).