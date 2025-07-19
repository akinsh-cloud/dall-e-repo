#DALL·E Clone – AI Image Generator Web App
A full-stack AI image generator web application inspired by OpenAI’s DALL·E, built using React, Node.js, Express, MongoDB (Mongoose), Cloudinary, and the OpenAI API. Users can generate AI-powered images from text prompts, view others’ creations, and share their own.

🚀 Features
🔎 Generate AI images using text prompts via OpenAI's DALL·E API

💾 Store and manage generated images using Cloudinary

📝 Save prompts & results to MongoDB

🌐 View all community-shared images on the home feed

🎨 Responsive, modern UI built with React + Tailwind CSS

🛡️ Secure API routes with CORS handling

🛠️ Tech Stack
Frontend	Backend	Others
React.js	Node.js + Express	Cloudinary
Tailwind CSS	MongoDB + Mongoose	OpenAI API
Axios	CORS	dotenv

📁 Project Structure
bash
Copy code
root/
├── client/           # React frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── server/           # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
└── README.md
🧑‍💻 Getting Started

Prerequisites
-Node.js installed
-MongoDB URI
-Cloudinary account (API key/secret)
-OpenAI API Key

1. Clone the repo :-
git clone https://github.com/your-username/dalle-clone.git
cd dalle-clone

3. Setup Server :-
cd server
npm install
#Create .env and add MONGODB_URI, OPENAI_API_KEY, CLOUDINARY credentials
npm start

3. Setup Client :-
cd client
npm install
npm run dev

🧠 How It Works
-User enters a prompt → React frontend sends request to backend.
-Backend uses OpenAI API to generate image based on prompt.
-Image is uploaded to Cloudinary and saved in MongoDB.
-All shared images appear on the home page grid.
