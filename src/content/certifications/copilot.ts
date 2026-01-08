export const copilotContent = {
  overview: `
# GitHub Copilot Certification

Welcome to the GitHub Copilot certification track! Master AI-powered development with GitHub Copilot and learn how to leverage AI to write code faster and more efficiently.

## What You'll Learn

- **Copilot Fundamentals**: Understand how GitHub Copilot works and its AI capabilities
- **Prompt Engineering**: Master the art of writing effective prompts for better suggestions
- **IDE Integration**: Configure and use Copilot across different development environments
- **Best Practices**: Learn responsible AI usage and code review techniques

## Prerequisites

- Basic programming knowledge in at least one language
- Familiarity with an IDE (VS Code recommended)
- A GitHub account with Copilot access
- Understanding of software development workflows

## Course Modules

### Module 1: Introduction to GitHub Copilot
Learn what GitHub Copilot is, how it works, and the AI models powering it.

### Module 2: Getting Started
Install and configure Copilot in your preferred IDE and understand the interface.

### Module 3: Prompt Engineering Basics
Learn how to write effective comments and context to get better code suggestions.

### Module 4: Advanced Prompt Techniques
Master advanced prompting strategies for complex code generation.

### Module 5: Copilot Chat
Leverage conversational AI for code explanation, debugging, and refactoring.

### Module 6: Enterprise Features
Understand organization-level controls, policies, and content exclusions.

### Module 7: Responsible AI Usage
Learn best practices for reviewing, testing, and validating AI-generated code.

---

## Exam Information

| Topic | Weight |
|-------|--------|
| Copilot Fundamentals | 20% |
| Prompt Engineering | 25% |
| IDE Integration & Features | 25% |
| Best Practices & Responsible Use | 30% |

> **Pro Tip**: Practice writing clear, contextual comments - they're the key to getting great Copilot suggestions!
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What AI model powers GitHub Copilot?",
      options: [
        "GPT-2",
        "OpenAI Codex / GPT-4",
        "BERT",
        "Claude"
      ],
      correctAnswer: 1,
      explanation: "GitHub Copilot is powered by OpenAI's Codex and GPT-4 models, which are trained on a large corpus of code and natural language."
    },
    {
      id: 2,
      question: "What is the best way to get more accurate Copilot suggestions?",
      options: [
        "Write longer code files",
        "Use more libraries",
        "Provide clear context through comments and meaningful variable names",
        "Disable all other extensions"
      ],
      correctAnswer: 2,
      explanation: "Copilot uses surrounding context including comments, function names, and variable names to generate relevant suggestions."
    },
    {
      id: 3,
      question: "Which IDEs officially support GitHub Copilot?",
      options: [
        "Only Visual Studio Code",
        "VS Code, Visual Studio, JetBrains IDEs, and Neovim",
        "Only JetBrains IDEs",
        "Only command line tools"
      ],
      correctAnswer: 1,
      explanation: "GitHub Copilot officially supports VS Code, Visual Studio, JetBrains IDEs (IntelliJ, PyCharm, etc.), and Neovim."
    },
    {
      id: 4,
      question: "What is GitHub Copilot Chat?",
      options: [
        "A social messaging platform",
        "A conversational AI interface for coding assistance within your IDE",
        "A code review tool",
        "A project management feature"
      ],
      correctAnswer: 1,
      explanation: "GitHub Copilot Chat is an AI-powered conversational interface integrated into your IDE that helps with code explanation, debugging, and generation."
    },
    {
      id: 5,
      question: "What should you always do with Copilot-generated code?",
      options: [
        "Accept it immediately",
        "Copy it to another file first",
        "Review, understand, and test it before using",
        "Share it publicly"
      ],
      correctAnswer: 2,
      explanation: "Always review AI-generated code for correctness, security vulnerabilities, and alignment with your project's requirements before accepting it."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Copilot

## Lab 1: Setting Up GitHub Copilot

In this lab, you'll install and configure GitHub Copilot in Visual Studio Code.

### Prerequisites
- Visual Studio Code installed
- A GitHub account with Copilot access

### Steps

#### Step 1: Install the Extension

1. Open Visual Studio Code
2. Click the Extensions icon (Ctrl+Shift+X)
3. Search for "GitHub Copilot"
4. Click **Install** on the official extension
5. Also install "GitHub Copilot Chat"

#### Step 2: Sign In

1. Click the Copilot icon in the status bar
2. Select **Sign in to GitHub**
3. Complete the authentication flow
4. Verify the Copilot icon shows as active

#### Step 3: Test Copilot

Create a new file \`test.js\` and type:

\`\`\`javascript
// Function to calculate the factorial of a number
function factorial(
\`\`\`

Watch as Copilot suggests the completion. Press **Tab** to accept.

---

## Lab 2: Prompt Engineering

Learn how to write effective prompts for better code suggestions.

### Steps

#### Step 1: Basic Prompting

\`\`\`python
# Create a function that validates an email address
# using regex and returns True if valid, False otherwise
def validate_email(email):
\`\`\`

#### Step 2: Contextual Prompting

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

// Function to filter users by role and return
// only users with admin privileges
function getAdminUsers(users: User[]): User[] {
\`\`\`

#### Step 3: Multi-step Prompting

\`\`\`python
# API client for weather service
# - Base URL: https://api.weather.com/v1
# - Requires API key authentication
# - Methods: get_current_weather(city), get_forecast(city, days)

class WeatherClient:
\`\`\`

### Challenge
Write a detailed comment describing a complex function and let Copilot generate the implementation.

---

## Lab 3: Using Copilot Chat

Master conversational AI for development assistance.

### Steps

#### Step 1: Open Copilot Chat
- Press **Ctrl+Shift+I** (or Cmd+Shift+I on Mac)
- Or click the chat icon in the sidebar

#### Step 2: Ask for Explanations

Select some code and ask:
\`\`\`
/explain what does this code do?
\`\`\`

#### Step 3: Request Refactoring

\`\`\`
/fix improve the performance of this function
\`\`\`

#### Step 4: Generate Tests

\`\`\`
/tests generate unit tests for this function
\`\`\`

### Useful Commands
- \`/explain\` - Explain selected code
- \`/fix\` - Suggest fixes
- \`/tests\` - Generate tests
- \`/doc\` - Generate documentation
  `,
  
  flashcards: [
    { term: "GitHub Copilot", definition: "An AI-powered code completion tool that suggests code based on context, comments, and existing code patterns." },
    { term: "Prompt Engineering", definition: "The practice of crafting effective inputs (comments, context) to guide AI models toward generating desired outputs." },
    { term: "Ghost Text", definition: "The grayed-out inline suggestions that Copilot displays as you type, which you can accept with Tab." },
    { term: "Copilot Chat", definition: "A conversational AI interface within your IDE for asking questions, explaining code, and getting coding assistance." },
    { term: "Context Window", definition: "The amount of surrounding code and text that Copilot considers when generating suggestions." },
    { term: "Suggestion Panel", definition: "A panel showing multiple alternative suggestions from Copilot that you can browse using keyboard shortcuts." },
    { term: "Content Exclusions", definition: "Enterprise feature allowing organizations to prevent Copilot from accessing or suggesting code from specific files or repositories." },
    { term: "Telemetry", definition: "Data collected about Copilot usage to improve the service, which can be configured in settings." },
    { term: "Code Referencing", definition: "Feature that shows when Copilot suggestions match public code, helping with license compliance." },
    { term: "Slash Commands", definition: "Special commands in Copilot Chat (like /explain, /fix, /tests) that trigger specific actions." },
    { term: "Inline Chat", definition: "The ability to open Copilot Chat directly within your code editor at the cursor position." },
    { term: "Responsible AI", definition: "Practices ensuring AI-generated code is reviewed, tested, and validated before use in production." },
  ],

  mindmap: `
# GitHub Copilot Mindmap

\`\`\`mermaid
mindmap
  root((GitHub Copilot))
    Core Features
      Code Completion
        Ghost Text
        Suggestion Panel
        Multi-line Suggestions
      Copilot Chat
        Inline Chat
        Sidebar Chat
        Slash Commands
    Prompt Engineering
      Comments
        Descriptive
        Contextual
      Variable Names
      Function Signatures
      Examples in Comments
    IDE Integration
      VS Code
      Visual Studio
      JetBrains IDEs
      Neovim
      GitHub.com
    Enterprise
      Organization Policies
      Content Exclusions
      Audit Logs
      Usage Metrics
    Best Practices
      Code Review
      Testing AI Code
      Security Validation
      License Compliance
        Code Referencing
\`\`\`

## Copilot Interaction Flow

\`\`\`mermaid
flowchart LR
    A[Write Code/Comment] --> B[Copilot Analyzes Context]
    B --> C[AI Model Generates]
    C --> D{Suggestion Type}
    D -->|Inline| E[Ghost Text Appears]
    D -->|Chat| F[Response in Chat]
    E --> G{Accept?}
    G -->|Tab| H[Code Inserted]
    G -->|Esc| I[Dismissed]
    F --> J[Review & Apply]
    H --> K[Review & Test]
    J --> K
\`\`\`
  `,
};
