const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});

// Virtual field to set password (unhashed)
userSchema.virtual('password').set(function(value) {
  this._password = value;
});

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this._password, salt);

  this.passwordHash = hash;
  next();
});

// Method to verify password
userSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.passwordHash);
}

const User = mongoose.model('User', userSchema);










const user = new User({ email: 'test@example.com' });
user.password = 'password123';
await user.save();








const user = await User.findOne({ email: 'test@example.com' });
const isMatch = await user.verifyPassword('password123');
if (isMatch) {
  // Password is correct
} else {
  // Password is incorrect
}
