# Is this Azure?
Azure Public IP finder.

## Project Setup
This project is structured to deploy a Node.js Express TypeScript application to an Azure Web App using Terraform.

### Directory Structure

- `/infrastructure`: Contains all the Terraform code required to deploy the application infrastructure on Azure.
- `/application`: Contains the Node.js Express TypeScript application code.

### Steps to Deploy

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

### Prerequisites

- Ensure you have [Terraform](https://www.terraform.io/downloads.html) installed.
- Ensure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed.
- Ensure you have an Azure account and the Azure CLI installed and configured.

### Additional Information

For more detailed instructions, refer to the documentation within the `/infrastructure` and `/application` directories.