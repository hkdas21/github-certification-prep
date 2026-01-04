export const foundationsContent = {
  overview: `
# GitHub Foundations Certification

Welcome to the GitHub Foundations certification track! This comprehensive course will teach you everything you need to know to pass the GitHub Foundations certification exam.

## What You'll Learn

- **Version Control Basics**: Understand Git fundamentals and how GitHub extends Git
- **Repository Management**: Create, configure, and manage repositories effectively
- **Collaboration**: Master pull requests, code reviews, and team workflows
- **GitHub Features**: Explore Issues, Projects, Actions, and more

## Prerequisites

- Basic understanding of software development concepts
- Familiarity with command line interfaces (helpful but not required)
- A GitHub account (free tier is sufficient)

## Course Modules

### Module 1: Introduction to GitHub
Learn about GitHub's role in modern software development and how it facilitates collaboration.

### Module 2: Git Fundamentals
Understand commits, branches, and merging - the core concepts of version control.

### Module 3: Repository Basics
Create and configure repositories, manage files, and understand repository settings.

### Module 4: Collaboration with Pull Requests
Master the pull request workflow, code reviews, and collaborative development.

### Module 5: GitHub Issues and Projects
Track work, manage projects, and organize your development workflow.

### Module 6: GitHub Actions Introduction
Get started with automation using GitHub Actions for CI/CD.

---

## Exam Information

| Topic | Weight |
|-------|--------|
| Collaboration | 25% |
| GitHub Products | 20% |
| Git & GitHub Basics | 30% |
| Working with GitHub | 25% |

> **Pro Tip**: Focus on hands-on practice! The exam tests practical knowledge, not just theory.
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What is a Git repository?",
      options: [
        "A folder containing project files and their complete history",
        "A backup service for code",
        "A social network for developers",
        "A code editor"
      ],
      correctAnswer: 0,
      explanation: "A Git repository is a folder that contains all project files along with the complete history of changes made to those files."
    },
    {
      id: 2,
      question: "What command creates a new branch in Git?",
      options: [
        "git new-branch",
        "git create branch",
        "git branch <name> or git checkout -b <name>",
        "git make branch"
      ],
      correctAnswer: 2,
      explanation: "You can create a new branch using 'git branch <name>' or 'git checkout -b <name>' which also switches to the new branch."
    },
    {
      id: 3,
      question: "What is a Pull Request?",
      options: [
        "A request to download code",
        "A proposal to merge changes from one branch to another",
        "A request for help from other developers",
        "A way to delete branches"
      ],
      correctAnswer: 1,
      explanation: "A Pull Request is a proposal to merge a set of changes from one branch into another, allowing for code review and discussion."
    },
    {
      id: 4,
      question: "What does 'git clone' do?",
      options: [
        "Creates a copy of the current branch",
        "Downloads a remote repository to your local machine",
        "Creates a new empty repository",
        "Copies files between directories"
      ],
      correctAnswer: 1,
      explanation: "The 'git clone' command creates a local copy of a remote repository, including all files, branches, and commit history."
    },
    {
      id: 5,
      question: "What is GitHub Actions primarily used for?",
      options: [
        "Creating repositories",
        "Managing user permissions",
        "Automating workflows like CI/CD",
        "Hosting websites"
      ],
      correctAnswer: 2,
      explanation: "GitHub Actions is primarily used for automating software workflows, including continuous integration and continuous deployment (CI/CD)."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Foundations

## Lab 1: Creating Your First Repository

In this lab, you'll create a repository, add files, and make your first commit.

### Prerequisites
- A GitHub account
- Git installed on your local machine

### Steps

#### Step 1: Create a New Repository

1. Navigate to [github.com](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the details:
   - Repository name: \`my-first-repo\`
   - Description: \`Learning GitHub basics\`
   - Visibility: Public or Private
5. Check **Add a README file**
6. Click **Create repository**

\`\`\`bash
# Or create locally and push
mkdir my-first-repo
cd my-first-repo
git init
echo "# My First Repository" > README.md
git add README.md
git commit -m "Initial commit"
\`\`\`

#### Step 2: Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/my-first-repo.git
cd my-first-repo
\`\`\`

#### Step 3: Make Changes and Commit

\`\`\`bash
# Create a new file
echo "Hello, GitHub!" > hello.txt

# Stage the file
git add hello.txt

# Commit the change
git commit -m "Add hello.txt file"

# Push to GitHub
git push origin main
\`\`\`

### Verification
- Check your repository on GitHub
- Verify the new file appears
- Review the commit history

---

## Lab 2: Working with Branches

Learn how to create branches and work with feature development.

### Steps

#### Step 1: Create a Feature Branch

\`\`\`bash
# Create and switch to a new branch
git checkout -b feature/add-about-page

# Verify you're on the new branch
git branch
\`\`\`

#### Step 2: Make Changes on the Branch

\`\`\`bash
# Create a new file
echo "# About This Project" > ABOUT.md
echo "This is a learning project for GitHub." >> ABOUT.md

# Stage and commit
git add ABOUT.md
git commit -m "Add about page"
\`\`\`

#### Step 3: Push the Branch

\`\`\`bash
git push -u origin feature/add-about-page
\`\`\`

### Challenge
Create a pull request on GitHub to merge your feature branch into main.
  `,
  
  flashcards: [
    { term: "Repository", definition: "A storage location for a project that contains all files and their complete revision history." },
    { term: "Commit", definition: "A snapshot of changes made to files in a repository, with a unique identifier and message describing the changes." },
    { term: "Branch", definition: "A parallel version of a repository that allows you to work on different features without affecting the main codebase." },
    { term: "Pull Request", definition: "A proposal to merge changes from one branch into another, enabling code review and discussion before merging." },
    { term: "Fork", definition: "A personal copy of another user's repository that lives on your account, allowing you to experiment without affecting the original." },
    { term: "Clone", definition: "Creating a local copy of a remote repository on your machine, including all files, branches, and history." },
    { term: "Merge", definition: "Combining changes from different branches into a single branch, integrating separate lines of development." },
    { term: "Push", definition: "Uploading local repository content to a remote repository, sharing your commits with others." },
    { term: "Pull", definition: "Fetching and downloading content from a remote repository and immediately updating the local repository to match." },
    { term: "HEAD", definition: "A pointer to the current branch reference, representing the latest commit in your current working branch." },
    { term: "Staging Area", definition: "An intermediate area where commits are prepared before being committed to the repository." },
    { term: "Remote", definition: "A common repository that all team members use to exchange their changes, typically hosted on GitHub." },
  ],
};
