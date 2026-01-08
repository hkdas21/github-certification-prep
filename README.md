# 🎓 GitHub Certification Prep Hub

A professional, markdown-driven learning portal designed to help developers master the GitHub ecosystem and prepare for official certifications. Built with React, Tailwind CSS, and hosted on GitHub Pages.

[**Live Demo 🚀**](https://your-username.github.io/your-repo-name)

---

## 🌟 Key Features

* **Certification Tracks:** Dedicated paths for GitHub Foundations, Actions, Security, Administration and CoPilot.
* **Markdown-Powered:** Entirely data-driven content. Update your study material by simply editing `.md` files.
* **Interactive Learning:** * **Quizzes:** Multiple-choice questions with instant feedback.
    * **Labs:** Step-by-step hands-on technical guides.
    * **Flashcards:** Interactive flip-cards for terminology mastery.
* **GitHub Aesthetic:** A clean, professional UI inspired by the GitHub Primer design system.
* **Fully Responsive:** Study on the go with a mobile-friendly layout.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Content Parsing:** Gray-matter (Frontmatter) & React-Markdown
- **Deployment:** GitHub Actions & GitHub Pages

---

## 📂 Project Structure

The application is structured to separate code from content, making it easy for non-developers to contribute.

```text
├── src/content/             # All Markdown content lives here(Typescript rendered Markdown
│   ├── bio.md               # Author profile and social links
│   └── certifications/         # Example: Foundations Track
│       ├── foundations.ts      # Syllabus & Introduction
│       ├── actions.ts        # Question data
│       ├── security.ts          # Hands-on guides
│       └── admin.ts
|       └── copilot.ts       # Study terms
└── .github/workflows/       # Automated deployment logic


# 🚀 How to Add Content

Adding a new certification track is simple and requires no coding:

## 1. Create the Content Folder
Create a new folder inside `public/content/` (e.g., `security`).

## 2. Populate Markdown Files
Add the four standard files: `overview.md`, `quizzes.md`, `labs.md`, and `flashcards.md`. Use YAML Frontmatter at the top of these files to define titles and metadata.

## 3. Update the Track Registry
Open `src/data/tracks.json` and add your new track to the array:
```json
{
  "id": "security",
  "title": "Advanced Security",
  "slug": "advanced-security",
  "icon": "Lock",
  "description": "Master CodeQL, Secret Scanning, and Dependency Management."
}
```

## 4. Push to GitHub
Once you push your changes to the main branch, the GitHub Action will automatically trigger a new build and update your live site.

# 💻 Local Development
If you want to modify the application UI or logic:
- **Clone the repository:**
```bash
git clone [https://github.com/your-username/github-cert-hub.git](https://github.com/your-username/github-cert-hub.git)
```
- **Install dependencies:**
```bash
npm install
```
- **Run the development server:**
```bash
npm run dev
```
- **Build for production:**
```bash
npm run build
```

# 🛠️ Tech Stack 
| Component | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Markdown Parsing | react-markdown & gray-matter |
| Deployment | GitHub Pages |

# 👤 Author 
[Your Name]
gitHub: @your-username 
LinkedIn: your-profile-url 
twitter: @yourhandle 

# 📄 License 
This project is licensed under the MIT License - see the LICENSE file for details.

# Welcome to your GitHub Certification Preparation Hub


If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
