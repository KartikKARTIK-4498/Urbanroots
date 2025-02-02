# 🏆 Toques en Duel

Toques en Duel is an interactive culinary platform that brings food enthusiasts together through **weekly cooking challenges** inspired by global cuisines. Users can participate by recreating traditional dishes, submitting photos/videos, and voting on each other's creations. 

## ✨ Key Features

- **🥘 Weekly Culinary Challenges** – Participate in themed cooking competitions.
- **🤖 AI-Generated Recipes** – Unique dish ideas suggested by AI.
- **📸 Community Submissions** – Upload photos and videos of your creations.
- **📊 Voting & Leaderboard** – Vote for submissions and track top participants.
- **💬 Community Forum** – Discuss techniques, recipes, and share experiences.
- **🔔 Notifications & Updates** – Stay informed about new challenges.

## 🚀 Technologies Used

- **Frontend:** Angular PWA (Progressive Web App)
- **Backend:** Firebase (Firestore, Cloud Functions)
- **AI Integration:** OpenAI API for recipe generation
- **Hosting & Storage:** Firebase Hosting & Cloud Storage
- **Authentication:** Google OAuth

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/toques-en-duel.git
   cd toques-en-duel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore, Authentication, and Cloud Functions
   - Add Firebase config to `src/environments/environment.ts`

4. **Run the development server**
   ```bash
   ng serve
   ```

5. **Deploy Cloud Functions (Optional)**
   ```bash
   firebase deploy --only functions
   ```

## 📌 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## 📜 License

This project is licensed under the **MIT License**.

---

👨‍🍳 **Join the challenge and bring global cuisines to your kitchen!** 🎉
