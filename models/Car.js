const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please provide car make'],
    trim: true
  },
  model: {
    type: String,
    required: [true, 'Please provide car model'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Please provide manufacturing year'],
    min: 1900,
    max: new Date().getFullYear() + 1
  },
  registrationNumber: {
    type: String,
    required: [true, 'Please provide registration number'],
    unique: true,
    uppercase: true
  },
  type: {
    type: String,
    enum: ['Sedan', 'SUV', 'Hatchback', 'Convertible', 'Truck', 'Van', 'Luxury'],
    required: true
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
    required: true
  },
  transmission: {
    type: String,
    enum: ['Manual', 'Automatic'],
    required: true
  },
  seatingCapacity: {
    type: Number,
    required: true,
    min: 2,
    max: 15
  },
  color: {
    type: String,
    required: true
  },
  mileage: {
    type: Number,
    default: 0
  },
  pricePerDay: {
    type: Number,
    required: [true, 'Please provide daily rental price']
  },
  availabilityStatus: {
    type: String,
    enum: ['Available', 'Rented', 'Maintenance', 'Reserved'],
    default: 'Available'
  },
  features: [String],
  images: [String],
  currentLocation: {
    address: String,
    city: String,
    state: String
  },
  lastServiceDate: Date,
  nextServiceDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Car', carSchema);
