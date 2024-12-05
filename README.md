# Is This Azure?

This project is designed to identify Azure IP addresses and determine if they are part of Azure's public cloud. It provides several routes to interact with Azure IP data.

## Routes

### Get Services Index
- **Endpoint:** `/services`
- **Method:** `GET`
- **Description:** Retrieves a list of available Azure services.

### Get IPs by Service
- **Endpoint:** `/services/:service`
- **Method:** `GET`
- **Description:** Retrieves IP addresses associated with a specific Azure service.
- **Parameters:**
    - `service` (string): The name of the Azure service.

### Get All IPs
- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Retrieves all Azure IP addresses.

### Identify IP
- **Endpoint:** `/:ip`
- **Method:** `GET`
- **Description:** Identifies if the given IP address is part of Azure's public cloud.
- **Parameters:**
    - `ip` (string): The IP address to be identified.

## Installation

1. Clone the repository:
     ```bash
     git clone https://github.com/sord-dev/is-this-azure.git
     ```
2. Navigate to the project directory:
     ```bash
     cd is-this-azure
     ```
3. Install dependencies:
     ```bash
     npm install
     ```

## Usage

Start the server:
```bash
npm start
```

The server will be running on `http://localhost:3000`.

## License

This project is licensed under the MIT License.