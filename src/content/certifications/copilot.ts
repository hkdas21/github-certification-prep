export const copilotContent = {
  overview: `
# GitHub Copilot Certification

Welcome to the GitHub Copilot certification track! This course will teach you how to leverage AI-powered coding assistance to boost your productivity and write better code.

## What You'll Learn

- **Copilot Fundamentals**: Understand how GitHub Copilot works and its AI foundation
- **Effective Prompting**: Master techniques for getting the best code suggestions
- **IDE Integration**: Configure and optimize Copilot in various development environments
- **Best Practices**: Learn security considerations and responsible AI usage

## Prerequisites

- Basic programming knowledge in at least one language
- Familiarity with an IDE (VS Code recommended)
- GitHub account with Copilot subscription

## Course Modules

### Module 1: Introduction to GitHub Copilot
Understand what GitHub Copilot is, how it works, and the AI models powering it.

### Module 2: Getting Started
Install and configure Copilot in your preferred IDE, authenticate, and verify setup.

### Module 3: Understanding Suggestions
Learn how to trigger, accept, reject, and navigate through Copilot suggestions.

### Module 4: Prompt Engineering
Master the art of writing comments and code context to get optimal suggestions.

### Module 5: Copilot Chat
Leverage conversational AI to explain code, fix bugs, and generate documentation.

### Module 6: Advanced Features
Explore Copilot for CLI, Pull Requests, and enterprise features.

### Module 7: Security & Best Practices
Understand code review, security implications, and responsible AI usage.

---

## Exam Information

| Topic | Weight |
|-------|--------|
| Copilot Fundamentals | 20% |
| IDE Integration | 15% |
| Prompt Engineering | 25% |
| Copilot Chat | 20% |
| Security & Best Practices | 20% |

> **Pro Tip**: Practice using Copilot daily! The exam tests real-world usage patterns and best practices.
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What AI model powers GitHub Copilot?",
      options: [
        "GPT-2",
        "OpenAI Codex / GPT-4",
        "BERT",
        "LLaMA"
      ],
      correctAnswer: 1,
      explanation: "GitHub Copilot is powered by OpenAI's Codex model, and more recently GPT-4 based models, trained on code and natural language."
    },
    {
      id: 2,
      question: "What is the keyboard shortcut to accept a Copilot suggestion in VS Code?",
      options: [
        "Ctrl + Enter",
        "Tab",
        "Enter",
        "Ctrl + Space"
      ],
      correctAnswer: 1,
      explanation: "Press Tab to accept the current Copilot suggestion in VS Code."
    },
    {
      id: 3,
      question: "How can you view alternative Copilot suggestions?",
      options: [
        "Press Ctrl+Enter to open the Copilot panel",
        "Press Alt+] to cycle through suggestions",
        "Right-click and select 'More suggestions'",
        "Both A and B"
      ],
      correctAnswer: 3,
      explanation: "You can press Ctrl+Enter to open the Copilot panel with multiple suggestions, or use Alt+] and Alt+[ to cycle through inline suggestions."
    },
    {
      id: 4,
      question: "What is Copilot Chat primarily used for?",
      options: [
        "Video calls with team members",
        "Conversational AI assistance for coding questions and explanations",
        "Managing GitHub Issues",
        "Code deployment"
      ],
      correctAnswer: 1,
      explanation: "Copilot Chat provides conversational AI assistance for explaining code, answering questions, fixing bugs, and generating documentation."
    },
    {
      id: 5,
      question: "Which practice helps get better suggestions from Copilot?",
      options: [
        "Writing minimal comments",
        "Using vague variable names",
        "Providing clear context through comments and descriptive names",
        "Disabling language-specific settings"
      ],
      correctAnswer: 2,
      explanation: "Providing clear context through descriptive comments, meaningful variable names, and well-structured code helps Copilot generate more relevant suggestions."
    },
    {
      id: 6,
      question: "What should you always do before using Copilot-generated code in production?",
      options: [
        "Accept it immediately",
        "Share it on social media",
        "Review, test, and validate the code",
        "Convert it to a different language"
      ],
      correctAnswer: 2,
      explanation: "Always review, test, and validate Copilot-generated code before using it in production. AI suggestions may contain bugs or security issues."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Copilot

## Lab 1: Setting Up GitHub Copilot

In this lab, you'll install and configure GitHub Copilot in VS Code.

### Prerequisites
- Visual Studio Code installed
- GitHub account with Copilot subscription
- Git installed

### Steps

#### Step 1: Install the Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "GitHub Copilot"
4. Click **Install** on the official extension
5. Also install "GitHub Copilot Chat"

#### Step 2: Authenticate

1. Click the Copilot icon in the status bar
2. Sign in with your GitHub account
3. Authorize the extension
4. Verify the icon shows active status

#### Step 3: Test Your Setup

\`\`\`javascript
// Create a new file: test.js
// Type the following comment and wait for suggestions:

// Function to calculate the factorial of a number
function factorial(n) {
  // Copilot should suggest the implementation
}
\`\`\`

### Verification
- Copilot icon shows green checkmark
- Suggestions appear as you type
- You can accept suggestions with Tab

---

## Lab 2: Mastering Prompt Engineering

Learn techniques to get optimal code suggestions.

### Exercise 1: Descriptive Comments

\`\`\`python
# Write a function that:
# - Takes a list of numbers as input
# - Filters out negative numbers
# - Returns the sum of remaining numbers squared
def process_numbers(numbers):
    # Watch Copilot generate the implementation
    pass
\`\`\`

### Exercise 2: Type Hints for Better Suggestions

\`\`\`typescript
// TypeScript provides better context
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// Function to format user data for display
// Start typing and let Copilot suggest
function formatUserDisplay(user: User): string {
  
}
\`\`\`

### Exercise 3: Using Examples

\`\`\`javascript
// Example: formatCurrency(1234.5) => "$1,234.50"
// Example: formatCurrency(1000) => "$1,000.00"
function formatCurrency(amount) {
  // Copilot uses examples to understand the pattern
}
\`\`\`

---

## Lab 3: Using Copilot Chat

Explore conversational assistance for coding tasks.

### Steps

#### Step 1: Ask Questions

1. Open Copilot Chat panel (Ctrl+Shift+I)
2. Try these prompts:
   - "Explain what this function does" (select code first)
   - "How can I optimize this loop?"
   - "Write unit tests for this class"

#### Step 2: Fix Bugs

\`\`\`javascript
// Select this buggy code and ask Copilot Chat to fix it
function findMax(arr) {
  let max = 0; // Bug: assumes all positive
  for (let i = 0; i <= arr.length; i++) { // Bug: off by one
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
\`\`\`

Ask: "/fix this function to handle edge cases correctly"

#### Step 3: Generate Documentation

Select any function and use:
- "/doc" to generate documentation
- "/explain" to get a detailed explanation

### Challenge
Use Copilot Chat to refactor a complex function into smaller, more maintainable pieces.
  `,
  
  flashcards: [
    { term: "GitHub Copilot", definition: "An AI-powered coding assistant that suggests code completions, functions, and entire code blocks based on context and comments." },
    { term: "OpenAI Codex", definition: "The AI model that powers GitHub Copilot, trained on billions of lines of public code and natural language." },
    { term: "Ghost Text", definition: "The grayed-out suggested code that appears inline as you type, which can be accepted with Tab." },
    { term: "Copilot Chat", definition: "A conversational interface for GitHub Copilot that allows you to ask questions, explain code, and get assistance through natural language." },
    { term: "Prompt Engineering", definition: "The practice of crafting effective comments and context to guide AI models toward generating desired code suggestions." },
    { term: "Context Window", definition: "The amount of surrounding code that Copilot analyzes to generate relevant suggestions, including open files and comments." },
    { term: "Inline Suggestions", definition: "Code completions that appear directly in your editor as you type, shown in gray text." },
    { term: "Copilot Panel", definition: "A side panel showing multiple alternative suggestions that can be opened with Ctrl+Enter." },
    { term: "Code Review with Copilot", definition: "Using Copilot to review pull requests, suggest improvements, and identify potential issues in code changes." },
    { term: "Copilot for CLI", definition: "GitHub Copilot integration for the command line, helping generate and explain terminal commands." },
    { term: "Telemetry", definition: "Data about Copilot usage that may be collected to improve the service, with privacy controls available." },
    { term: "Content Exclusions", definition: "Enterprise feature allowing organizations to prevent Copilot from suggesting code matching specific patterns or repositories." },
  ],

  mindmap: `
# GitHub Copilot Mind Map

## 1. Core Concepts
### AI Foundation
- OpenAI Codex / GPT-4
- Large Language Models
- Code-trained neural networks

### How It Works
- Context analysis
- Pattern matching
- Probability-based suggestions

## 2. Features
### Code Completion
- Inline suggestions (Ghost Text)
- Multi-line completions
- Function generation

### Copilot Chat
- Natural language queries
- Code explanations
- Bug fixing assistance
- Documentation generation

### Specialized Tools
- Copilot for CLI
- Copilot for PRs
- Copilot Voice

## 3. IDE Integration
### Supported Editors
- VS Code
- Visual Studio
- JetBrains IDEs
- Neovim
- GitHub Codespaces

### Configuration
- Keyboard shortcuts
- Language settings
- Suggestion preferences

## 4. Best Practices
### Prompt Engineering
- Descriptive comments
- Clear function names
- Type annotations
- Example inputs/outputs

### Security
- Review all suggestions
- Don't trust blindly
- Check for vulnerabilities
- Validate logic

### Productivity
- Use Tab to accept
- Alt+[ ] to cycle
- Ctrl+Enter for panel
- Natural comments

## 5. Enterprise Features
### Administration
- Organization policies
- Usage analytics
- Content exclusions
- Audit logs

### Privacy
- Data handling
- Telemetry controls
- Code retention policies
  `,
};
