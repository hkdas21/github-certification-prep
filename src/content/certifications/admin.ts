export const adminContent = {
  overview: `
# GitHub Administration Certification

Master enterprise-level GitHub administration! This certification covers organization management, security configurations, and governance at scale.

## What You'll Learn

- **Organization Management**: Structure teams and manage access
- **Enterprise Features**: Leverage enterprise-level capabilities
- **Policies and Compliance**: Implement governance requirements
- **Authentication**: Configure SSO and identity management
- **Audit and Monitoring**: Track activity and ensure compliance
- **Migration**: Move repositories and organizations effectively

## Prerequisites

- GitHub Foundations certification
- GitHub Actions certification (recommended)
- Experience with organizational IT administration

## Course Modules

### Module 1: Organization Structure
Design effective organization and team hierarchies.

### Module 2: Access Management
Implement role-based access control and permissions.

### Module 3: Repository Policies
Configure branch protection, rulesets, and standards.

### Module 4: Enterprise Authentication
Set up SAML SSO and SCIM provisioning.

### Module 5: Audit Logging
Monitor and analyze organizational activity.

### Module 6: Compliance and Governance
Implement policies for regulatory requirements.

### Module 7: GitHub Enterprise Server
Manage self-hosted GitHub instances.

### Module 8: Migration Strategies
Plan and execute large-scale migrations.

### Module 9: Cost Management
Optimize licensing and resource usage.

---

## Role Hierarchy

| Role | Scope | Key Permissions |
|------|-------|-----------------|
| Owner | Organization | Full administrative access |
| Member | Organization | Default org membership |
| Billing Manager | Organization | Manage billing settings |
| Admin | Repository | Full repo control |
| Maintain | Repository | Manage without sensitive actions |
| Write | Repository | Push and manage issues/PRs |
| Triage | Repository | Manage issues and PRs |
| Read | Repository | View and clone |

\`\`\`json
// Example: Team Configuration
{
  "name": "platform-team",
  "description": "Core platform engineering team",
  "privacy": "closed",
  "permission": "push",
  "parent_team_id": 1
}
\`\`\`

> **Best Practice**: Follow the principle of least privilege when assigning permissions!
  `,
  
  quizzes: [
    {
      id: 1,
      question: "What is the highest permission level in a GitHub organization?",
      options: [
        "Admin",
        "Maintainer",
        "Owner",
        "Enterprise Admin"
      ],
      correctAnswer: 2,
      explanation: "Organization owners have the highest level of access and can manage all aspects of the organization."
    },
    {
      id: 2,
      question: "What does SAML SSO enable for organizations?",
      options: [
        "Faster code deployment",
        "Centralized authentication through an identity provider",
        "Automated code reviews",
        "Repository backups"
      ],
      correctAnswer: 1,
      explanation: "SAML SSO allows organizations to manage authentication through their identity provider (like Okta or Azure AD)."
    },
    {
      id: 3,
      question: "What is SCIM used for in GitHub Enterprise?",
      options: [
        "Code scanning",
        "Automated user provisioning and deprovisioning",
        "Secret management",
        "Workflow automation"
      ],
      correctAnswer: 1,
      explanation: "SCIM (System for Cross-domain Identity Management) automatically syncs user accounts between your IdP and GitHub."
    },
    {
      id: 4,
      question: "What is a Repository Ruleset?",
      options: [
        "A list of repository naming conventions",
        "Configurable rules that can be applied across multiple repositories",
        "A backup schedule for repositories",
        "A template for creating repositories"
      ],
      correctAnswer: 1,
      explanation: "Repository rulesets allow you to define and apply rules (like branch protection) across multiple repositories at once."
    },
    {
      id: 5,
      question: "How long does GitHub retain audit log data for enterprises?",
      options: [
        "30 days",
        "90 days",
        "180 days",
        "Indefinitely with streaming to external services"
      ],
      correctAnswer: 2,
      explanation: "GitHub retains audit log data for 180 days, but you can stream logs to external services for longer retention."
    },
  ],
  
  labs: `
# Hands-on Labs: GitHub Administration

## Lab 1: Setting Up an Organization

Create and configure a professional GitHub organization.

### Steps

#### Step 1: Create the Organization

1. Click your profile photo, then **Your organizations**
2. Click **New organization**
3. Choose a plan (Free for learning)
4. Configure:
   - Organization name
   - Contact email
   - Organization ownership

#### Step 2: Configure Organization Settings

\`\`\`yaml
# Key settings to configure:
- Member privileges
  - Base permissions: Read (most restrictive)
  - Repository creation: Disabled for members
  - Forking: Internal only
  
- Security
  - 2FA requirement: Enabled
  - SSO: Configure if available
  
- Member privileges
  - Outside collaborator invites: Owner only
\`\`\`

#### Step 3: Create Team Structure

\`\`\`
Organization
├── engineering
│   ├── frontend-team
│   ├── backend-team
│   └── devops-team
├── product
│   ├── designers
│   └── product-managers
└── security
    └── security-team
\`\`\`

---

## Lab 2: Implementing Branch Protection

Configure comprehensive branch protection rules.

### Steps

#### Step 1: Navigate to Branch Protection

1. Go to repository **Settings**
2. Click **Branches** under Code and automation
3. Click **Add rule** next to Branch protection rules

#### Step 2: Configure Protection Rules

\`\`\`yaml
# Recommended settings for 'main' branch:
Branch name pattern: main

Protection settings:
  - Require a pull request before merging: ✓
    - Required approving reviews: 2
    - Dismiss stale reviews: ✓
    - Require review from code owners: ✓
  
  - Require status checks to pass: ✓
    - Required checks: ci, security-scan
    - Require branches up to date: ✓
  
  - Require conversation resolution: ✓
  
  - Require signed commits: ✓
  
  - Include administrators: ✓
  
  - Restrict who can push: ✓
    - Allowed: release-team
\`\`\`

### Verification

Try pushing directly to the protected branch:

\`\`\`bash
git checkout main
echo "test" > test.txt
git add test.txt
git commit -m "Direct push test"
git push origin main
# This should fail!
\`\`\`
  `,
  
  flashcards: [
    { term: "Organization Owner", definition: "The highest permission level with complete administrative access to the organization." },
    { term: "SAML SSO", definition: "Security Assertion Markup Language Single Sign-On - enables authentication through external identity providers." },
    { term: "SCIM", definition: "System for Cross-domain Identity Management - automates user provisioning and deprovisioning." },
    { term: "Audit Log", definition: "A record of all security-relevant actions taken within an organization or enterprise." },
    { term: "Repository Ruleset", definition: "A set of configurable rules that can be applied across multiple repositories simultaneously." },
    { term: "Base Permission", definition: "The default permission level for all organization members on all repositories." },
    { term: "Outside Collaborator", definition: "A person who has access to repositories but is not a member of the organization." },
    { term: "Enterprise Account", definition: "A container for multiple organizations with unified billing and policy management." },
    { term: "CODEOWNERS", definition: "A file that defines individuals or teams responsible for reviewing specific parts of the codebase." },
    { term: "IP Allow List", definition: "A security feature that restricts access to organization resources from specified IP addresses." },
    { term: "Verified Domain", definition: "A domain verified by an organization to ensure email notifications and profile displays are trusted." },
    { term: "Migration CLI", definition: "GitHub's command-line tool for migrating repositories, organizations, and user data." },
  ],
};
