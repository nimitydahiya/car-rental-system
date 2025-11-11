# 🚗 Car Rental System

A comprehensive web-based Car Rental Management System built with Node.js, Express, MongoDB, and React. This system automates booking processes, tracks vehicle availability in real-time, and maintains accurate customer records.

## 📋 Table of Contents
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Contributing](#contributing)

## 🎯 Problem Statement

Car rental agencies face difficulties in:
- Manually managing bookings
- Tracking vehicle availability
- Maintaining customer records
- Traditional methods leading to double bookings
- Inefficiencies in allocation
- Poor customer service

This system solves these problems by automating operations, providing real-time updates, and reducing administrative errors.

## ✨ Key Features

### 1. User Authentication & Roles
- ✅ Secure login for customers and administrators
- ✅ JWT-based authentication
- ✅ Role-based access control (customers can book cars, admins manage fleet)
- ✅ Password encryption with bcrypt

### 2. Car Inventory Management
- ✅ Add, update, and remove car details
- ✅ Track cars currently rented and available
- ✅ Car details: model, registration number, type, availability status
- ✅ Multiple car types: Sedan, SUV, Hatchback, Convertible, Truck, Van, Luxury

### 3. Online Booking System
- ✅ Real-time booking of available cars
- ✅ Select car type, rental duration, pickup/drop-off dates
- ✅ Prevent double-booking through real-time updates
- ✅ Booking confirmation with details

### 4. Customer Records Management
- ✅ Store and manage customer details securely
- ✅ Maintain rental history for each customer
- ✅ Customer profile management

### 5. Booking & Payment Module
- ✅ Generate booking confirmation
- ✅ Stripe payment gateway integration
- ✅ Payment tracking and history
- ✅ Invoice generation

### 6. Availability & Scheduling
- ✅ Real-time availability tracking
- ✅ Automated notifications for booking confirmation
- ✅ Reminders for upcoming rentals
- ✅ Prevent scheduling conflicts

### 7. Reports & Analytics
- ✅ Active bookings report
- ✅ Most rented cars analysis
- ✅ Revenue analysis
- ✅ Export data in XML/Excel format

### 8. Notifications & Alerts
- ✅ Email reminders for rental return dates
- ✅ Alerts for overdue returns
- ✅ Booking confirmations via email

### 9. Security & Scalability
- ✅ Encrypted data handling
- ✅ Scalable architecture
- ✅ Handle large fleets
- ✅ Support concurrent bookings

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Authentication & Security
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing

### Payment
- **Stripe** - Payment processing

### Email
- **Nodemailer** - Email notifications

### Data Export
- **xlsx** - Excel file generation

### Development Tools
- **nodemon** - Auto-restart server
- **dotenv** - Environment variables
- **express-validator** - Input validation

## 📁 Project Structure

```
car-rental-system/
├── models/
│   ├── User.js              # User model with authentication
│   ├── Car.js               # Car inventory model
│   ├── Booking.js           # Booking model
│   ├── Payment.js           # Payment model
│   └── Customer.js          # Customer records
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── cars.js              # Car management routes
│   ├── bookings.js          # Booking routes
│   ├── customers.js         # Customer routes
│   ├── payments.js          # Payment routes
│   └── reports.js           # Analytics & reports
├── controllers/
│   ├── authController.js
│   ├── carController.js
│   ├── bookingController.js
│   ├── customerController.js
│   ├── paymentController.js
│   └── reportController.js
├── middleware/
│   ├── auth.js              # JWT verification
│   ├── adminAuth.js         # Admin role check
│   └── errorHandler.js      # Error handling
├── utils/
│   ├── emailService.js      # Email sending utility
│   ├── pdfGenerator.js      # Invoice generation
│   └── excelExport.js       # Excel export utility
├── config/
│   └── database.js          # DB configuration
├── frontend/                # React frontend (to be added)
├── .env.example             # Environment variables template
├── .gitignore
├── package.json
├── server.js                # Main server file
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/nimitydahiya/car-rental-system.git
cd car-rental-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start MongoDB**
```bash
# Make sure MongoDB is running
mongod
```

5. **Run the application**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/car-rental-system

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Frontend
FRONTEND_URL=http://localhost:3000
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register        # Register new user
POST   /api/auth/login           # Login user
GET    /api/auth/me              # Get current user
```

### Cars
```
GET    /api/cars                 # Get all cars
GET    /api/cars/:id             # Get car by ID
POST   /api/cars                 # Add new car (Admin)
PUT    /api/cars/:id             # Update car (Admin)
DELETE /api/cars/:id             # Delete car (Admin)
GET    /api/cars/available       # Get available cars
```

### Bookings
```
GET    /api/bookings             # Get all bookings
GET    /api/bookings/:id         # Get booking by ID
POST   /api/bookings             # Create new booking
PUT    /api/bookings/:id         # Update booking
DELETE /api/bookings/:id         # Cancel booking
```

### Customers
```
GET    /api/customers            # Get all customers (Admin)
GET    /api/customers/:id        # Get customer by ID
PUT    /api/customers/:id        # Update customer
GET    /api/customers/:id/history # Get rental history
```

### Payments
```
POST   /api/payments             # Process payment
GET    /api/payments/:id         # Get payment details
GET    /api/payments/booking/:id # Get payments for booking
```

### Reports
```
GET    /api/reports/active-bookings    # Active bookings report
GET    /api/reports/popular-cars       # Most rented cars
GET    /api/reports/revenue            # Revenue analysis
GET    /api/reports/export             # Export data (Excel/XML)
```

## 🗄️ Database Models

### User Model
- name, email, password (hashed)
- role (customer/admin)
- phone, address
- createdAt

### Car Model
- make, model, year
- registrationNumber (unique)
- type, fuelType, transmission
- seatingCapacity, color, mileage
- pricePerDay
- availabilityStatus
- features, images
- currentLocation
- serviceD ates

### Booking Model
- customer (ref to User)
- car (ref to Car)
- startDate, endDate
- pickupLocation, dropoffLocation
- totalAmount
- status (pending/confirmed/completed/cancelled)
- paymentStatus

### Payment Model
- booking (ref to Booking)
- amount, paymentMethod
- transactionId
- status, paymentDate

### Customer Model
- user (ref to User)
- licenseNumber
- rentalHistory
- totalBookings
- preferences

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Nimity Dahiya**
- GitHub: [@nimitydahiya](https://github.com/nimitydahiya)

## 🙏 Acknowledgments

- Express.js documentation
- MongoDB documentation
- Stripe API documentation

---

**Note**: This is a work in progress. Additional files (models, routes, controllers, middleware, utils) need to be created based on the structure outlined above. The frontend React application is planned for future development.
