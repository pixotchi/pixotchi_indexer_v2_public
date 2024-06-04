# Project Overview

This project is designed to handle various events related to the PixotchiNFT smart contract. It uses the `@ponder/core` library to create configurations, schemas, and event handlers for interacting with the blockchain and storing event data.

## File Descriptions

### src/PixotchiNFT.ts

This file contains the event handlers for the PixotchiNFT smart contract. It listens for specific events emitted by the contract and processes them accordingly. Key functionalities include:
- **Event Handlers**: Functions that trigger on specific events like `ItemConsumed`, `Mint`, `Played`, `PlayedV2`, `Attack`, and `Killed`.
- **Helper Functions**: `getPlantName` and `getPlantsName` are used to fetch plant names based on the block number and contract state.
- **Database Operations**: Each event handler interacts with the database to store relevant event data.

### ponder.config.ts

This file sets up the configuration for the `@ponder/core` library. It includes:

- **Network Configuration**: Defines the blockchain network to connect to, including chain ID and transport methods (HTTP/WebSocket).
- **Contract Configuration**: Specifies the PixotchiNFT contract details such as ABI, address, start block, and maximum block range for event fetching.

### ponder.schema.ts

This file defines the database schema using `@ponder/core`. It includes:

- **Table Definitions**: Specifies the structure of tables for storing event data. Each table corresponds to a specific event type, such as `Attack`, `ItemConsumed`, `Killed`, `Mint`, and `Played`.
- **Field Definitions**: Details the fields for each table, including data types and optional fields.

## Usage

1. **Event Handling**: The event handlers in `src/PixotchiNFT.ts` listen for events from the PixotchiNFT contract and process them to store data in the database.
2. **Configuration**: The `ponder.config.ts` file configures the network and contract details for the `@ponder/core` library to interact with the blockchain.
3. **Schema Definition**: The `ponder.schema.ts` file defines the database schema to ensure that event data is stored in a structured manner.

By combining these files, the project efficiently handles blockchain events, fetches necessary data, and stores it in a well-defined database schema.