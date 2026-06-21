const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Health check para Kubernetes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Ready check para Kubernetes
app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

// API endpoints (opcional)
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

// Todas las rutas no definidas van a index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✅ App corriendo en puerto ${port}`);
  console.log(`🌐 http://localhost:${port}`);
});