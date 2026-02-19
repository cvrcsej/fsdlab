import express from 'express';
const app = express();
app.use(express.json());

let a = [];

app.get('/user', (req, res) => {
    res.status(200).json(a);
});

app.post("/userdata", (req, res) => {
    const { Id, Name, RollNo } = req.body;
    a.push({
        Id,
        Name,
        RollNo
    });

    res.status(200).json({
        'id': Id,
        'Name': Name,
        'RollNo': RollNo
    });
});

app.put('/userdata/:id', (req, res) => {
    const { id } = req.params;
    const { Name, RollNo } = req.body;
    const stInd = a.findIndex(st => st.Id === id);
    a[stInd] = { Id: id, Name, RollNo };
    res.status(200).json(a[stInd]);
});

app.delete('/userdata/:id', (req, res) => {
    const { id } = req.params;
    const stInd = a.findIndex(st => st.Id === id);
    a.splice(stInd, 1);
    res.status(200).json({ message: 'Student deleted successfully' });
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'App is running'
    });
});

app.listen(5000, () => {
    console.log(`Server running on the port: http://localhost:5000`);
});