const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check para Kubernetes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Ready check para Kubernetes
app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

// Ruta principal
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Fintech App funcionando!',
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ App corriendo en puerto ${port}`);
});
