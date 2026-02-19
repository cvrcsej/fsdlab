import express from 'express';
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'App is running'
    })
});

app.get('/student', (req, res) => {
    res.status(200).json({
        student: 'Thanoj',
        Rollno: '5ND'
    })
});

app.listen(5000, () => {
    console.log(`Server running on the port:http://localhost:5000`)
});