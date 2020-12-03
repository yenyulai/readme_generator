// function to generate markdown for README
function generateMarkdown(data) {
  let badge = licenseBadge[data.License]
  return `--${badge}--
  # ${data.Project_Title}
  \n## Description:\n${data.Description}
  \n## Installation_Instruction:\n${data.Installation_Instruction}
  \n## Usage_Information:\n${data.Usage_Information}
  \n## Contribution_Guideline:\n${data.Contribution_Guideline}
  \n## Test_Instructio: \n${data.Test_Instructio}
  \n## License: \n${data.License}
  \n## Questions: \nhttps://github.com/${data.Questions}
  \nIf you have any further concern or questions, please e-mail: ${data.Email}


`;
}



var licenseBadge = {
    MIT : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    "Academic Free License v3.0" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Apache license 2.0" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost Software License 1.0" : "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    'Do What The F*ck You Want To Public License' : "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    'Mozilla Public License 2.0' : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
};

module.exports = generateMarkdown;
