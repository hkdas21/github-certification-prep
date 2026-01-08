export const actionsContent = {
  overview: `
# GitHub Actions Certification

Master the art of automation with GitHub Actions! This certification track covers everything from basic workflows to advanced CI/CD pipelines.

## What You'll Learn

- **Workflow Fundamentals**: Understand YAML syntax and workflow structure
- **Triggers and Events**: Configure when and how workflows run
- **Jobs and Steps**: Organize your automation effectively
- **Secrets and Variables**: Manage sensitive data securely
- **Custom Actions**: Build reusable automation components
- **Advanced Patterns**: Matrix builds, caching, and optimization

## Prerequisites

- GitHub Foundations certification (recommended)
- Basic understanding of YAML
- Familiarity with CI/CD concepts

## Course Modules

### Module 1: Introduction to GitHub Actions
Understand the core concepts and benefits of GitHub Actions.

### Module 2: Workflow Syntax Deep Dive
Master YAML syntax and workflow file structure.

### Module 3: Triggers and Events
Learn about push, pull_request, schedule, and custom events.

### Module 4: Jobs, Steps, and Runners
Organize workflows with jobs and understand execution environments.

### Module 5: Using Actions from the Marketplace
Leverage pre-built actions to accelerate your workflows.

### Module 6: Secrets and Environment Variables
Securely manage configuration and sensitive data.

### Module 7: Building Custom Actions
Create reusable actions for your organization.

### Module 8: Advanced CI/CD Patterns
Implement matrix builds, caching, and deployment strategies.

---

## Example Workflow

\`\`\`yaml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
\`\`\`

> **Pro Tip**: Start with simple workflows and gradually add complexity as you learn!
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What file format are GitHub Actions workflows written in?",
      options: [
        "JSON",
        "YAML",
        "XML",
        "TOML"
      ],
      correctAnswer: 1,
      explanation: "GitHub Actions workflows are written in YAML format and stored in the .github/workflows directory."
    },
    {
      id: 2,
      question: "Where should workflow files be stored in a repository?",
      options: [
        "In the root directory",
        "In the .github/workflows directory",
        "In the actions folder",
        "In any directory with a .yml extension"
      ],
      correctAnswer: 1,
      explanation: "Workflow files must be stored in the .github/workflows directory for GitHub to recognize and execute them."
    },
    {
      id: 3,
      question: "What is a 'runner' in GitHub Actions?",
      options: [
        "A person who runs the tests",
        "A server that executes workflow jobs",
        "A type of trigger",
        "A debugging tool"
      ],
      correctAnswer: 1,
      explanation: "A runner is a server (GitHub-hosted or self-hosted) that executes the jobs in your workflow."
    },
    {
      id: 4,
      question: "How do you reference a secret in a workflow file?",
      options: [
        "$SECRET_NAME",
        "secrets.SECRET_NAME",
        "${{ secrets.SECRET_NAME }}",
        "env.SECRET_NAME"
      ],
      correctAnswer: 2,
      explanation: "Secrets are accessed using the expression syntax: ${{ secrets.SECRET_NAME }}"
    },
    {
      id: 5,
      question: "What does the 'matrix' strategy allow you to do?",
      options: [
        "Run workflows in sequence",
        "Run jobs with different variable combinations in parallel",
        "Create encrypted secrets",
        "Deploy to multiple environments"
      ],
      correctAnswer: 1,
      explanation: "Matrix strategy allows you to run the same job with different configurations (like multiple Node versions) in parallel."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Actions

## Lab 1: Creating Your First Workflow

Build a basic CI workflow that runs on every push.

### Steps

#### Step 1: Create the Workflow File

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Run a simple test
      run: echo "Hello, GitHub Actions!"
\`\`\`

#### Step 2: Commit and Push

\`\`\`bash
git add .github/workflows/ci.yml
git commit -m "Add CI workflow"
git push origin main
\`\`\`

#### Step 3: View the Workflow Run

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See your workflow running!

---

## Lab 2: Building a Node.js CI Pipeline

Create a complete CI pipeline for a Node.js project.

### Workflow

\`\`\`yaml
name: Node.js CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    - name: Deploy to production
      run: echo "Deploying to production..."
\`\`\`

### Key Concepts Demonstrated
- Matrix builds for multiple Node.js versions
- Job dependencies with \`needs\`
- Conditional execution with \`if\`
- Caching dependencies for faster builds
  `,
  
  flashcards: [
    { term: "Workflow", definition: "An automated process made up of one or more jobs, defined in a YAML file in the .github/workflows directory." },
    { term: "Job", definition: "A set of steps that execute on the same runner, running in parallel by default unless dependencies are defined." },
    { term: "Step", definition: "An individual task that can run commands or actions within a job." },
    { term: "Action", definition: "A reusable unit of code that can be shared across workflows, available from the GitHub Marketplace or custom-built." },
    { term: "Runner", definition: "A server that has the GitHub Actions runner application installed, executing workflow jobs." },
    { term: "Event", definition: "A specific activity that triggers a workflow run, such as push, pull_request, or schedule." },
    { term: "Matrix Strategy", definition: "A feature that allows running the same job with different configurations in parallel." },
    { term: "Artifact", definition: "Files produced during a workflow run that can be shared between jobs or downloaded after completion." },
    { term: "Secret", definition: "Encrypted environment variables created in a repository for storing sensitive information like API keys." },
    { term: "Environment", definition: "A named target for deployment with protection rules and secrets, like 'production' or 'staging'." },
    { term: "Composite Action", definition: "A custom action that combines multiple steps into a single reusable action." },
    { term: "Reusable Workflow", definition: "A workflow that can be called from other workflows, promoting DRY principles in automation." },
  ],

  mindmap: `
# GitHub Actions Mindmap

\`\`\`mermaid
mindmap
  root((GitHub Actions))
    Workflows
      YAML Syntax
      Triggers/Events
        push
        pull_request
        schedule
        workflow_dispatch
      Jobs
        Steps
        Dependencies
    Runners
      GitHub-hosted
        Ubuntu
        Windows
        macOS
      Self-hosted
        Custom environments
    Actions
      Marketplace
      Custom Actions
        JavaScript
        Docker
        Composite
    Features
      Secrets
      Variables
      Environments
      Matrix Strategy
      Caching
      Artifacts
    CI/CD
      Build
      Test
      Deploy
      Release
\`\`\`

## Workflow Execution Flow

\`\`\`mermaid
flowchart TD
    A[Event Trigger] --> B[Workflow Started]
    B --> C{Multiple Jobs?}
    C -->|Yes| D[Run Jobs in Parallel]
    C -->|No| E[Run Single Job]
    D --> F[Job 1]
    D --> G[Job 2]
    E --> H[Steps Execute Sequentially]
    F --> H
    G --> H
    H --> I[Artifacts Saved]
    I --> J[Workflow Complete]
\`\`\`
  `,
};
