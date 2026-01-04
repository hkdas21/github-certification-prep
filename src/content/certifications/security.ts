export const securityContent = {
  overview: `
# GitHub Advanced Security Certification

Become an expert in securing your code and software supply chain with GitHub Advanced Security features.

## What You'll Learn

- **Code Scanning**: Automatically detect vulnerabilities in your code
- **Secret Scanning**: Prevent sensitive data from being committed
- **Dependency Review**: Identify vulnerable dependencies before merging
- **Security Policies**: Implement organization-wide security standards
- **Supply Chain Security**: Secure your entire development pipeline

## Prerequisites

- GitHub Foundations certification
- Understanding of application security concepts
- Familiarity with common vulnerability types

## Course Modules

### Module 1: Security Overview
Understand the GitHub security ecosystem and threat landscape.

### Module 2: Code Scanning with CodeQL
Set up and configure automated code analysis.

### Module 3: Secret Scanning
Detect and prevent secret exposure in repositories.

### Module 4: Dependency Management
Use Dependabot to keep dependencies secure and updated.

### Module 5: Supply Chain Security
Implement security best practices across your pipeline.

### Module 6: Security Policies
Create and enforce security standards.

### Module 7: Incident Response
Handle security incidents effectively.

---

## Security Best Practices

| Practice | Implementation |
|----------|---------------|
| Enable 2FA | Required for all organization members |
| Branch Protection | Require reviews and status checks |
| Secret Scanning | Enable for all repositories |
| Dependabot | Auto-update vulnerable dependencies |
| Code Scanning | Run on every pull request |

\`\`\`yaml
# Example: Code Scanning Workflow
name: CodeQL Analysis

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 8 * * 1'

jobs:
  analyze:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: javascript, typescript
    
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
\`\`\`

> **Security First**: Always assume your code will be audited. Write secure code from the start!
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What does CodeQL do?",
      options: [
        "Manages code quality metrics",
        "Performs semantic code analysis to find vulnerabilities",
        "Runs unit tests",
        "Formats code automatically"
      ],
      correctAnswer: 1,
      explanation: "CodeQL is a semantic code analysis engine that treats code as data to find security vulnerabilities."
    },
    {
      id: 2,
      question: "What type of issues does Secret Scanning detect?",
      options: [
        "Syntax errors",
        "Performance issues",
        "Exposed credentials and tokens in code",
        "Code style violations"
      ],
      correctAnswer: 2,
      explanation: "Secret Scanning detects exposed secrets like API keys, tokens, and passwords accidentally committed to repositories."
    },
    {
      id: 3,
      question: "What is Dependabot's primary function?",
      options: [
        "Creating documentation",
        "Automatically updating dependencies and alerting on vulnerabilities",
        "Managing team permissions",
        "Deploying applications"
      ],
      correctAnswer: 1,
      explanation: "Dependabot automatically creates pull requests to update dependencies and alerts you about known vulnerabilities."
    },
    {
      id: 4,
      question: "What is a SARIF file?",
      options: [
        "A configuration file for GitHub",
        "A standardized format for static analysis results",
        "A type of secret key",
        "A workflow template"
      ],
      correctAnswer: 1,
      explanation: "SARIF (Static Analysis Results Interchange Format) is a standard format for outputting static analysis results."
    },
    {
      id: 5,
      question: "What is the purpose of a security policy (SECURITY.md)?",
      options: [
        "To list all contributors",
        "To provide instructions for reporting security vulnerabilities",
        "To define code formatting rules",
        "To document API endpoints"
      ],
      correctAnswer: 1,
      explanation: "SECURITY.md provides guidelines for users to report security vulnerabilities responsibly."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Security

## Lab 1: Enabling Code Scanning

Set up CodeQL analysis for your repository.

### Steps

#### Step 1: Enable Code Scanning

1. Go to your repository on GitHub
2. Click **Settings** > **Security** > **Code security and analysis**
3. Click **Set up** next to Code scanning
4. Choose **Default** or **Advanced** setup

#### Step 2: Configure CodeQL Workflow

For advanced setup, create \`.github/workflows/codeql.yml\`:

\`\`\`yaml
name: "CodeQL"

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '30 1 * * 0'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    strategy:
      fail-fast: false
      matrix:
        language: [ 'javascript' ]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: \${{ matrix.language }}

    - name: Autobuild
      uses: github/codeql-action/autobuild@v3

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
      with:
        category: "/language:\${{matrix.language}}"
\`\`\`

---

## Lab 2: Secret Scanning Setup

Configure secret scanning and push protection.

### Steps

#### Step 1: Enable Secret Scanning

1. Navigate to **Settings** > **Security** > **Code security and analysis**
2. Enable **Secret scanning**
3. Enable **Push protection** to block commits with secrets

#### Step 2: Test Secret Scanning

Create a file with a test secret pattern:

\`\`\`bash
# This will be blocked if push protection is enabled
echo "aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" > test.txt
git add test.txt
git commit -m "Test secret scanning"
git push  # This should be blocked!
\`\`\`

### Handling Detected Secrets

1. Rotate the exposed secret immediately
2. Remove from Git history using \`git filter-branch\` or BFG Repo-Cleaner
3. Update any services using the compromised secret
  `,
  
  flashcards: [
    { term: "CodeQL", definition: "A semantic code analysis engine that treats code as data to query for security vulnerabilities." },
    { term: "Secret Scanning", definition: "A feature that scans repositories for known secret patterns to prevent credential exposure." },
    { term: "Dependabot", definition: "An automated tool that creates pull requests to update vulnerable or outdated dependencies." },
    { term: "SARIF", definition: "Static Analysis Results Interchange Format - a standard for representing static analysis tool output." },
    { term: "Push Protection", definition: "A feature that blocks pushes containing detected secrets before they reach the repository." },
    { term: "Security Advisory", definition: "A draft security disclosure that maintainers create to discuss and fix vulnerabilities privately." },
    { term: "CVE", definition: "Common Vulnerabilities and Exposures - a standardized identifier for security vulnerabilities." },
    { term: "CVSS", definition: "Common Vulnerability Scoring System - a framework for rating the severity of security vulnerabilities." },
    { term: "Supply Chain Attack", definition: "An attack that targets less-secure elements in the software supply chain, like dependencies." },
    { term: "SBOM", definition: "Software Bill of Materials - a list of all components and dependencies in a software project." },
    { term: "Dependency Graph", definition: "A visual representation of all dependencies in a repository and their relationships." },
    { term: "Security Policy", definition: "A SECURITY.md file that provides instructions for reporting security vulnerabilities responsibly." },
  ],

  mindmap: `
# GitHub Advanced Security Mind Map

## 1. Code Scanning
### CodeQL
- Semantic analysis
- Query language
- Custom queries

### Configuration
- Default setup
- Advanced setup
- Third-party tools
- SARIF format

## 2. Secret Scanning
### Detection
- Known patterns
- Custom patterns
- Partner integration

### Protection
- Push protection
- Alert notifications
- Secret rotation

## 3. Dependency Security
### Dependabot
- Version updates
- Security updates
- Configuration

### Dependency Graph
- Visualization
- SBOM generation
- License detection

### Dependency Review
- PR blocking
- Vulnerability check
- License check

## 4. Supply Chain
### Artifacts
- Signing
- Attestations
- Provenance

### Best Practices
- Pin dependencies
- Verify sources
- Regular updates

## 5. Policies & Governance
### Security Policy
- SECURITY.md
- Responsible disclosure
- Contact information

### Advisories
- Private disclosure
- CVE assignment
- Coordinated release

## 6. Monitoring
### Alerts
- Security alerts
- Dependabot alerts
- Code scanning alerts

### Audit
- Audit log
- API access
- SIEM integration
  `,
};
