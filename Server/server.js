const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 8000;

// API endpoint to execute PowerShell script
app.get('/execute-script/', (req, res) => {
  const scriptPath = '../src/Scripts/connect.ps1';

  exec(`pwsh -ExecutionPolicy Bypass -File ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing PowerShell script: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('PowerShell script executed successfully');
      res.json({ result: stdout });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
