// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center"> ${answers.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  π${answers.description}

  ## Table of contents
  π[Description](#description)
  π[Implementation](#implementation)
  π[Usage](#usage)
  π[License](#license)
  π[Contributors](#contributors)
  π[Tests](#tests)
  π[Support](#support)

  ## Implementation
  π${answers.implementation}

  ## Usage
  π${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br/>
  πThis application is covered by the ${answers.license} license.
  
  ## Contributors
  π${answers.contributors}

  ## Tests
  π${answers.tests}

  ## Support
  π${answers.support}<br/>
  πMy Github: [${answers.github}](https://github.com/${answers.username})<br/>
  <br/>
  Email me any support questions: ${answers.email}<br/>
`;
}

module.exports = generateMarkdown;
