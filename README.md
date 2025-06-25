
# 🤖 AI Mock Interview Platform

An AI-powered web platform that simulates real job interviews using voice input and dynamically generated questions tailored to specific domains such as Web Development, Java, Python, etc. It provides real-time feedback to help users improve their interview skills.

## 📌 Features

- 🔄 **Dynamic Question Generation** using Google Gemini AI
- 🧠 **AI-Powered Feedback** on spoken answers
- 🗣️ **Speech Recognition** for voice-based input
- 📷 **Camera Activation** to simulate real interview environment
- 🧾 **Domain Selection** for personalized mock interview sessions
- 📝 **Real-Time Evaluation** and suggestions for improvement
- 🔐 **Secure Authentication** via Clerk
- ☁️ **Firebase Integration** for real-time database
- 🌐 **Hosted on Vercel** for fast and scalable deployment

## 🛠️ Technologies Used

| Technology         | Purpose                                           |
|--------------------|---------------------------------------------------|
| ReactJS + TypeScript | Frontend development                           |
| Shadcn UI          | UI components and styling                        |
| Clerk              | Authentication and user management               |
| Google Gemini AI   | Dynamic question generation and feedback         |
| Web Speech API     | Speech-to-text conversion                        |
| Firebase Firestore | Real-time database                               |
| Vercel             | Hosting and deployment                           |

## 🧩 System Architecture

The system is modular and includes:

- **Frontend UI**: Built with React + TypeScript
- **AI Backend Integration**: Fetches dynamic questions from Google Gemini AI
- **Speech-to-Text**: Converts user answers to text
- **Answer Evaluation**: NLP comparison with ideal answers
- **User Dashboard**: Tracks past performance and feedback

> Note: Camera remains active during interviews to simulate realism, but **no facial expression or body language tracking** is performed.

## 🚀 How It Works

1. **User selects domain** (e.g., Java, Python)
2. **Interview begins**: Camera and microphone activate
3. **AI generates questions** in real-time
4. **User responds verbally**
5. **System evaluates** the answer using NLP
6. **Feedback is provided** on the spoken content
7. **Results and suggestions** are shown to help improve


## 🔍 Use Cases

- Students and job seekers practicing for interviews
- Educational platforms providing interview coaching
- Remote interview simulations
- Self-assessment for communication and soft skills


## 📈 Future Scope

- 📄 Resume analysis and keyword suggestions
- 🗣️ Real-time voice modulation feedback
- 🕹️ Gamification with badges/leaderboards
- 🤝 Integration with job portals
- 📱 Mobile app version
- 🧑‍💼 Custom AI interviewer personalities

## 🧪 Testing

The system includes thorough testing:
- ✅ Unit testing (Jest, Mocha)
- 🔄 Integration testing
- 👩‍💻 User testing across domains
- 🧪 Performance testing with JMeter

## 💰 Project Cost

| Component              | Estimated Cost |
|------------------------|----------------|
| Frontend & Backend     | ₹0 (open-source) |
| Authentication         | ₹0 (Clerk free tier) |
| AI Service (Gemini AI) | ₹0 (free credits) |
| Hosting & Database     | ₹0 (Vercel + Firebase free tiers) |
| Total                  | ₹0              |

## 📚 References

- [Google Gemini AI](https://deepmind.google)
- [Speech & Language Processing – Jurafsky & Martin (2023)](https://web.stanford.edu/~jurafsky/slp3/)
- [IJACSA Research on AI Interviews](https://doi.org/10.14569/IJACSA.2020.0110516)
- [NLP Techniques in Interviews – JAIR](https://doi.org/10.1613/jair.1.13010)


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

