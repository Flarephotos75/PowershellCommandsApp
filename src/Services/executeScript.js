const executeScript = async (scriptName) => {
    try {
      // Make the API call to execute the script
      const response = await fetch(`http://localhost:8000/execute-script?scriptName=${scriptName}`);
      const data = await response.text();
      console.log(data, "*******DATA********");
  
      // Open a new window or tab to display the results
      const resultsWindow = window.open('', '_blank');
      resultsWindow.document.write(`<pre>${data.output.join('\n')}</pre>`);
    } catch (error) {
      console.error('Error executing script:', error);
      // Handle the error as needed
    }
  };

  export default executeScript;