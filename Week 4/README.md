# Week 4: Bank Microservices (Account & Loan)

## Overview
This repository contains the hands-on exercise for Week 4, which involves creating two independent Spring Boot RESTful microservices for a bank system:
1. **Account Microservice**
2. **Loan Microservice**

Instead of building a single monolithic application, the functionality is split into two separate applications running on different ports to demonstrate core microservice architecture.

## Technologies Used
* **Java** (Spring Boot)
* **Spring Web** (RESTful APIs)
* **Spring Boot DevTools**
* **Maven**

## Microservices Architecture

### 1. Account Microservice
* **Port:** `8080` (Default)
* **Endpoint:** `GET /accounts/{number}`
* **Description:** Returns dummy account details (account number, type, and balance).
* **Test URL:** `http://localhost:8080/accounts/00987987973432`

### 2. Loan Microservice
* **Port:** `8081` (Configured in `application.properties` to avoid port conflict)
* **Endpoint:** `GET /loans/{number}`
* **Description:** Returns dummy loan details (loan number, type, total loan amount, EMI, and tenure).
* **Test URL:** `http://localhost:8081/loans/H00987987972342`

## How to Run
To run these microservices locally, open two separate terminal windows and navigate to their respective directories (`microservices/account` and `microservices/loan`).

Run the following command in each terminal:
```bash
./mvnw spring-boot:run