import React from 'react';
import '../App.css';
import executeScript from '../Services/executeScript';

const ScriptOptions = () => {
  const scriptOptions = [
    {
      name: 'Connect to Azure',
      script: 'connect.ps1',
    },
    {
      name: 'List Users Not Logged On in Last 90 Days',
      script: '90days.ps1',
    },
    {
      name: 'List All Domain Administrators',
      script: 'allDomainAdmins.ps1',
    },
    {
      name: 'List Permissions on Email Account',
      script: 'emailPermissions.ps1',
    },
    // Add more script options
  ];

  return (
    <div>
      <h2 className="App-subHeader">Choose an Option</h2>
      <div>
        {scriptOptions.map((option, index) => (
          <div className="App-list" key={index}>
            <button className="buttonMenu" onClick={() => executeScript(option.script)}>
              {option.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptOptions;

// REDUNDANT CODE - ARCHIVED
// import React from 'react';
// import '../App.css'
// import executeScript from '../Services/executeScript';

// const ScriptOptions = () => {
//   const scriptOptions = [
//     {
//         name: 'Connect to Azure',
//         script: 'connect.ps1',
//     },
//     {
//       name: 'List Users Not Logged On in Last 90 Days',
//       script: '90days.ps1',
//     },
//     {
//       name: 'List All Domain Administrators',
//       script: 'allDomainAdmins.ps1',
//     },
//     {
//       name: 'List Permissions on Email Account',
//       script: 'emailPermissions.ps1',
//     },
//     // Add more script options 
//   ];

//   return (
//     <div>
//       <h2 className="App-subHeader" >Choose an Option</h2>
//       <div>
//         {scriptOptions.map((option, index) => (
//           <div className="App-list" key={index}>
//             <button className='buttonMenu' onClick={() => executeScript(option.script)}>{option.name}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default ScriptOptions;

