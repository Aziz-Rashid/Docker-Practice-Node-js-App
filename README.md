# 🚀 Docker Class 1 - Node.js App

Welcome to the first session of **Cloud Computing with Docker**. This is a simple Node.js + Express app designed to run locally or in Docker.

---

## 📦 Project Info

- **Project Name**: docker-class-1  
- **Version**: 1.0.0  
- **Author**: M. Yasir Khan  
- **Description**: First session for Cloud Computing with Docker

---

## 🛠️ Prerequisites

Install the following on your **Linux machine** before running the app:

- Node.js
- npm
- Docker

---

### Ensure the following are installed on your **Linux (Ubuntu/Debian)** system:
- [Node.js & npm](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker/)

---

## ✅ Install Node.js & npm on Linux (Ubuntu/Debian)

### Step-by-step:


# Update packages
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm -y

# Verify installation
node -v
npm -v

---

# Install Docker on Linux
# 1. Update existing packages
sudo apt update

# 2. Install required dependencies
sudo apt install ca-certificates curl gnupg lsb-release -y

# 3. Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. Add Docker repository
echo "deb [arch=$(dpkg --print-architecture)  signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y

# 6. Verify Docker is installed
docker --version

# How to Run This Node.js App Locally
## npm install
## npm start
