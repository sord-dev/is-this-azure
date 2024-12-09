# Is this Azure?
Azure Public IP finder.

## Project Setup
This project is structured to deploy a Node.js Express TypeScript application to an Azure Web App using Terraform.

## Directory Structure

- `/infrastructure`: Contains all the Terraform code required to deploy the application infrastructure on Azure.
- `/application`: Contains the Node.js Express TypeScript application code.
- `/scripts`: Contains scripts used for development, testing and deployments.

## Steps to Deploy

**Prerequisites**
- Ensure you have [Terraform](https://www.terraform.io/downloads.html) installed.
- Ensure you have an Azure account and the Azure CLI installed and configured.

**Steps**

1. **Navigate to the Infrastructure Directory**:
    ```sh
    cd /infrastructure
    ```

2. **Initialize Terraform**:
    ```sh
    terraform init
    ```

3. **Plan the Deployment**:
    ```sh
    terraform plan
    ```

4. **Apply the Deployment**:
    ```sh
    terraform apply
    ```

5. **Deploy the Application**:
    - Navigate to the `/application` directory.
    - Follow the instructions in the application README to build and deploy the Node.js application to the Azure Web App.


## Steps to develop

**Prerequisites**
- Ensure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed.

**Steps**

1. **Navigate to the Application Directory**:
    ```sh
    cd /application
    ```

2. **Install packages**:
    ```sh
    npm install
    ```

3. **Launch development mode**:
    ```sh
    npm run dev
    ```

### Additional Information
For information on api, refer to the documentation within the `/application` directory.