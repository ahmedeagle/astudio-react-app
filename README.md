# **Fullstack React Assessment App**

## **🚀 Project Overview**
This is a **Fullstack React Application** designed as an **assessment project** for evaluating **React, Docker, AWS, and DevOps** skills. The project is **containerized, deployed using Docker Swarm**, and **automated via GitHub Actions with AWS ECR**.

---

## **📜 Features**
✅ **React with Vite for fast development**  
✅ **Dockerized for consistent deployments**  
✅ **Deployed on Docker Swarm for scalability**  
✅ **IAC using terraform scripts to provision infrastructure** 
✅ **Auto CI/CD via GitHub Actions + AWS ECR**  
✅ **Zero-downtime updates using Swarm rolling updates**  
✅ **Nginx for serving production builds**  
✅ **Security best practices applied**  

---

## **🛠️ Tech Stack**
| **Technology**    | **Usage** |
|-------------------|----------|
| **React (Vite)** | Frontend framework |
| **Docker & Swarm** | Containerization & orchestration |
| **Nginx** | Web server for static assets |
| **GitHub Actions** | CI/CD automation |
| **AWS ECR** | Private container registry |
| **AWS IAM & ECR Policies** | Secure access control |
| **Node.js (Build Stage)** | Production build process |
| **SSH (Secure Shell)** | Deployment automation |

---

## **📂 Project Structure**
```
fullstack-react-app/
│── src/               # React components & logic
│── public/            # Static assets (favicon, images, etc.)
│── dist/              # Production build (auto-generated)
│── Dockerfile         # Multi-stage Docker build
│── docker-compose.yml # Swarm deployment
│── .github/workflows/ # GitHub Actions for CI/CD
│── README.md          # Documentation
│── nginx.conf         # Nginx configuration
│── package.json       # Dependencies & scripts
│── vite.config.js     # Vite configuration
```

---

## **🚀 Running the Project Locally**
### **1️⃣ Prerequisites**
Make sure you have:
- **Node.js 18+**
- **Docker & Docker Compose**
- **AWS CLI (For ECR authentication)**

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/YOUR_USERNAME/fullstack-react-app.git
cd fullstack-react-app
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Start the Development Server**
```bash
npm run dev
```
App will be available at:  
**🔗 http://localhost:5173/**

---

## **🐳 Docker Setup**
### **1️⃣ Build and Run Locally**
```bash
docker build -t my-react-app .
docker run -p 8080:80 my-react-app
```
App will be available at:  
**🔗 http://localhost:8080/**

---

## **🌍 Deploying to Docker Swarm**
### **1️⃣ Initialize Swarm**
```bash
docker swarm init
```

### **2️⃣ Deploy to Swarm**
```bash
docker stack deploy -c docker-compose.yml react-stack
```
To check the running service:
```bash
docker service ls
docker service ps react-stack_react-app
```

---

## **🚀 GitHub Actions + AWS ECR Deployment**
### **🔹 What Happens on Every `git push master`?**
1. **GitHub Actions builds the Docker image**.
2. **Pushes it to AWS ECR**.
3. **SSHs into the Swarm Manager and deploys the latest image**.

---

## **🔍 Assessment Criteria (Interview Guide)**
### **1️⃣ React & Frontend Skills**
- ✅ Can you explain how **React components and hooks** are used in this project?
- ✅ How does **Vite optimize the build process**?
- ✅ Can you describe the **file structure** of the project?

### **2️⃣ Docker & DevOps Skills**
- ✅ What is the purpose of the **multi-stage Docker build**?
- ✅ How does **Docker Swarm ensure high availability**?
- ✅ Explain how **Nginx is configured to serve the React app**.

### **3️⃣ CI/CD & Deployment**
- ✅ How does **GitHub Actions handle the deployment**?
- ✅ What role does **AWS ECR play in this architecture**?
- ✅ What happens when we run:
  ```bash
  docker service update --image my-react-app:latest react-stack_react-app
  ```

### **4️⃣ Troubleshooting & Best Practices**
- ✅ What would you do if **a container exits with code 137**?
- ✅ How can we **ensure zero-downtime deployment** in Swarm?
- ✅ What security measures should be taken when using **SSH & AWS ECR**?

---

## **🎯 Future Improvements**
🚀 **Enhance Logging**: Integrate with AWS CloudWatch or ELK Stack.  
🚀 **Add Monitoring**: Use Prometheus + Grafana for container health.  
🚀 **CI/CD Rollbacks**: Implement rollback strategies for failed deployments.  
🚀 **Scalability**: Set up **AWS ALB (Application Load Balancer)** for multi-node Swarm.  

---

## **💡 Conclusion**
This project is a **full-stack React assessment** focusing on **React, Docker, AWS, and CI/CD best practices**. It provides hands-on **real-world deployment experience** and tests the interviewee's ability to work with **cloud-based, containerized applications**.
