const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 8000;

// API endpoint to execute PowerShell script
app.get('/execute-script', (req, res) => {
  const scriptName = req.query.scriptName;
  console.log(scriptName, "*****SCRIPT NAME****");

  const scriptPath = path.join('../src/Scripts', scriptName);

  exec(`pwsh -ExecutionPolicy Bypass -File "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing PowerShell script: ${error.message}`);
      console.error(`Standard Error: ${stderr}`);
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


// REDUNDANT CODE - ARCHIVED
// const express = require('express');
// const { exec } = require('child_process');

// const app = express();
// const port = 8000;

// // API endpoint to execute PowerShell script
// app.get('/execute-script/', (req, res, {scriptName}) => {
//   console.log(scriptName, "*****SCRIPT NAME****");
//   const scriptPath = '../src/Scripts/' + {scriptName};

//   exec(`pwsh -ExecutionPolicy Bypass -File ${scriptPath}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing PowerShell script: ${error}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       console.log('PowerShell script executed successfully');
//       res.json({ result: stdout });
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

