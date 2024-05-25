# Crypto Price Tracker

<img width="1510" alt="screenshot-1" src="https://github.com/d-stoianov/crypto-price-tracker/assets/29949314/fb198de4-86d6-4805-bca4-08d22a109686">
<img width="1510" alt="screenshot-2" src="https://github.com/d-stoianov/crypto-price-tracker/assets/29949314/fbba4b3b-56a3-4483-8d53-d376d25919c7">

This project is a React application for tracking cryptocurrency prices. The app fetches data from the CoinGecko API and displays it in an easy-to-use interface. Users can see a list of coins, view details about a specific coin, and pin their favorite coins for quick access. Pinned coins are saved to local storage, ensuring that preferences are retained even after refreshing the page.

The app is deployed [here](https://crypto-price-tracker-snowy.vercel.app)

## Tech Stack

-   **Vite**
-   **React**
-   **TypeScript**
-   **Tailwind CSS**
-   **React Router DOM**
-   **Chart.js**

## Pages

### Home Page

The home page provides a list of cryptocurrencies and their brief information. This list gets updated every 60 seconds to ensure users see the latest prices. Users can pin their favorite coins, which will be saved to local storage and persist even after refreshing the page.

### Coin Overview

The coin overview page shows detailed information about a specific coin, including:

-   Current price
-   Market cap
-   Volume
-   A price graph for the past year
-   Description

The coin overview page is accessible via a URL parameter (`coinId`), allowing users to navigate directly to a coin's details.

## Getting Started

### Prerequisites

-   Node.js
-   npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/d-stoianov/crypto-price-tracker.git
    cd crypto-price-tracker
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Setup .env file:

    Create file in the root of the project called `.env.local`, with the following content:
    `VITE_API_URL=https://api.coingecko.com/api/v3`
    `VITE_API_KEY={your_secret_api_key}`

    _To get your api key go to [Coin Gecko developer dashboard](https://www.coingecko.com/en/developers/dashboard) and create your personal key_

4.  Start the development server:

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:3000`.

## Project Structure

-   `src/`: Contains all the source code
    -   `pages/`: Components for each page (Home, Coin Overview)
    -   `services/`: API service to fetch data from CoinGecko
    -   `features/`: Main features in the app and its corresponding components
    -   `router/`: Configure routes
    -   `utils/`: Utility functions (e.g. string/price formatting)

## API Integration

The app uses the CoinGecko API to fetch cryptocurrency data. The API provides free plan with the following restricitions:

-   10 000 request per month
-   30 requests per minute.

If limit is exceeded - API returns CORS error.

## ESLint

The project uses ESLint and Prettier for code quality and consistency. You can run the linter with:

```bash
npm run lint
```

## Deadline

The initial development of this app was completed within a tight deadline of 3 days.
