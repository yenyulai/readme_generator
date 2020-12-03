// function to generate markdown for README
function generateMarkdown(data) {
  // const N = "\n"
  return `# ${data.Project_Title}
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

module.exports = generateMarkdown;
