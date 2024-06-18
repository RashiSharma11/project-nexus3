const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/techysoftware', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Schema and Model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    feedbackName: String,
    feedbackMessage: String,
});

const Form = mongoose.model('Form', formSchema);

// Routes
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const newForm = new Form({ name, email, message });
    await newForm.save();
    res.status(201).send('Contact form submitted successfully');
});

app.post('/feedback', async (req, res) => {
    const { feedbackName, feedbackMessage } = req.body;
    const newForm = new Form({ feedbackName, feedbackMessage });
    await newForm.save();
    res.status(201).send('Feedback form submitted successfully');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
