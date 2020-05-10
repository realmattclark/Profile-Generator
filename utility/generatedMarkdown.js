function generateProject(github, title) {
    const caseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${caseTitle}`;
}

function renderLicenseBadge(license, github, title) {
    if (license !== "None") {
        return `[![Github license] (https://img.shields.io/badge/license-${license}-blue.svg)](${generateProject(github, title)})`
    }
    return ''
}

function renderLicense(license) {
    if (license !== "none") {
        return (
            `## License
            This project is licensed under ${license}.`
        )
    }
    return ''
}

function generateReadme(data) {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license, data.github, data.table)}
    
    ##Description
    
    ${data.description}
    
    ##Tale of contents:
    
    * Installation: (*installation)
    
    *Usage (*usage)
    
    *Contributing (#contributing)
    
    *Tests (#tests)
    
    *Questions (#questions)
    
    ##Installation
    
    To install all that you need, run:
    
    \`\`\`
    ${data.installation}
    \`\`\`

    ##Usage

    ${data.usage}

    ${renderLicense(data.license)}

    ##Contributions

    ${data.contributing}

    ##Tests

    to run tests, run:

    \`\`\`
    ${data.test}
    \`\`\`

    ##Questions

    <img src="${data.avatar_url}" />
    `;
}

module.exports = generateReadme;