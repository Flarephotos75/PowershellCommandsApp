import React from 'react';
import '../App.css'

const ScriptOptions = () => {
  const scriptOptions = [
    {
        name: 'Connect to Azure',
        script: '../Scripts/connect.ps1',
    },
    {
      name: 'List Users Not Logged On in Last 90 Days',
      script: '../Scripts/90days.ps1',
    },
    {
      name: 'List All Domain Administrators',
      script: '../Scripts/allDomainAdmins.ps1',
    },
    {
      name: 'List Permissions on Email Account',
      script: '../Scripts/emailPermissions.ps1',
    },
    // Add more script options
  ];

  const executeScript = async (scriptName) => {
    try {
      // Make the API call to execute the script
      const response = await fetch(`http://localhost:8000/execute-script/`);
      const data = await response.text();

      // Open a new window or tab to display the results
      const resultsWindow = window.open('', '_blank');
      resultsWindow.document.write(`<pre>${data.output.join('\n')}</pre>`);
    } catch (error) {
      console.error('Error executing script:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <h2 className="App-subHeader" >Script Options</h2>
      <div>
        {scriptOptions.map((option, index) => (
          <div className="App-list" key={index}>
            <button onClick={() => executeScript(option.script)}>{option.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptOptions;
