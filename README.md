# Cartesi Intermediate Backend dApp

This repository contains an intermediate backend for a Cartesi dApp using Cartesi Rollups APIs.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed or use a cloud MongoDB service

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/cartesi-intermediate-dapp.git
    cd cartesi-intermediate-dapp
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```

### Running the Backend

```bash
yarn start
