const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'nicxen' },
    { id: 2, name: 'juwi' },
    { id: 3, name: 'desti' },
];

app.get('/', (req, res) => {
    res.send('halaman utama');
});

app.get('/about', (req, res) => {
    res.send('halaman tentang kami');
});

app.get('/contact', (req, res) => {
    res.send('hubungi kami di routing-app');
});

app.get('/produk/:kode', (req, res) => {
    res.send('produk dengan kode: ' + req.params.kode);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'pengguna tidak ditemukan' });
    } else {
        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    res.send('update data user dengan id: ' + req.params.id);
});

app.delete('/users/:id', (req, res) => {
    res.send('hapus user dengan id: ' + req.params.id);
});

app.listen(3000, () => console.log('server berjalan di http://localhost:3000'));