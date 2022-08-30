// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center"> ${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  🐔${answers.description}

  ## Table of contents
  🐔[Description](#description)
  🐔[Implementation](#implementation)
  🐔[Usage](#usage)
  🐔[License](#license)
  🐔[Contributors](#contributors)
  🐔[Tests](#tests)
  🐔[Support](#support)

  ## Implementation
  🐔${answers.implementation}

  ## Usage
  🐔${answers.usage}

  ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license.
  
  ##Contributors
  🐔${answers.contributors}

  ## Tests
  🐔${answers.tests}

  ## Support
  🐔${answers.support}<br/>
  🐔My Github: [${answers.github}](https://github.com/${answers.username})<br/>
  <br/>
  Email me any support questions:${answers.email}<br/>
`;
}

module.exports = generateMarkdown;
