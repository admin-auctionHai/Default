# Welcome to AUction HAI Platform

Steps to install the Required Package for Repository

1. Frontend :-

Step 1: Download and Install Node.js 20.16.0
1. Open your web browser and go to:
   https://nodejs.org/download/release/v20.16.0/
2. Download the appropriate Windows installer (.msi) for your system:
   - Windows x64 (64-bit): `node-0.16.0-x64.msi`
   - Windows x86 (32-bit): `node-- v20.16.0-x86.msi`
3. Run the downloaded `.msi` installer.
4. Follow the installation step. - 
   - Click **Next**
   - ct the **License Agreement**
   - Choose the installation location (default is recommended)
   - Ensure **Node.js runtime, npm package manager, and other tools** are selected
   - Click **Install** and wait for the process to complete.
5. After installation, open **Command Prompt (CMD)** and verify the installation by running:
   node -v

   It should output:
   v20.16.0
**Step 2: Install npm Packages for a React Project**
1. Open **Command Prompt (CMD)** or **PowerShell**.
2. Navigate to your React project folder. Example:
   cd z_frontend
3. Run the following command to install dependencies:
   npm install
4. Once completed, you should see a `node_modules` folder and a `package-lock.json` file in your project directory.
5. To verify that everything installed correctly, start your React app:
   npm start
   
### **Backend**

### **Step 1: Install Java & Maven for Backend Setup**
1. **Install Java JDK:**
   - Download the latest Java JDK from [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html) or install OpenJDK from [AdoptOpenJDK](https://adoptopenjdk.net/).
   - Install it and set up the **JAVA_HOME** environment variable:
     1. Open **System Properties** → **Advanced System Settings**.
     2. Click on **Environment Variables**.
     3. Under **System Variables**, click **New** and set:
        - **Variable name:** `JAVA_HOME`
        - **Variable value:** Path to your JDK installation (e.g., `C:\Program Files\Java\jdk-17.0.2`).
     4. Add `%JAVA_HOME%\bin` to the **Path** variable.
     5. Open CMD and verify:
        ```sh
        java -version
        ```
        Expected output:
        ```
        java version "17.0.2" ...
        ```

2. **Install Maven:**
   - Download Apache Maven from [Maven Official Website](https://maven.apache.org/download.cgi).
   - Extract the archive and move it to a directory (e.g., `C:\apache-maven-3.8.5`).
   - Set the **MAVEN_HOME** environment variable:
     1. Open **System Properties** → **Advanced System Settings**.
     2. Click **Environment Variables** → **New** under **System Variables**.
     3. Set:
        - **Variable name:** `MAVEN_HOME`
        - **Variable value:** Path to Maven directory (`C:\apache-maven-3.8.5`).
     4. Add `%MAVEN_HOME%\bin` to the **Path** variable.
     5. Verify installation with:
        ```sh
        mvn -version
        ```
        Expected output:
        ```
        Apache Maven 3.8.5 ...
        ```

### **Step 2: Clone & Run the Java Maven Backend**
1. Clone the backend repository:
   ```sh
   git clone https://github.com/Default/z_backend   ```
2. Navigate to the backend directory:
   ```sh
   cd z_backend
   ```
3. Build the project using Maven:
   ```sh
   mvn clean install
   ```
4. Run the backend application:
   ```sh
   mvn spring-boot:run
   ```
5. The backend should now be running at `http://localhost:8080` (default port).


