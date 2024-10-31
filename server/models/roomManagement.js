const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
  roomType: String,
  availablity: String,
  roomStatus: {
    type: String,
    enum: ['cleaning', 'occupied', 'available']
  },
  pricing : Number,
  status: Boolean
});

const RoomManagement = mongoose.model('room', roomSchema, 'room');

module.exports = RoomManagement;