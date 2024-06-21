# News App

## Overview

The News App is a React-based web application that fetches and displays the latest news articles. The app supports pagination to navigate through multiple pages of news and allows filtering news by category and search terms. It uses the [GNews API](https://gnews.io/) to retrieve news articles.

## Features

- Display top headlines
- Filter news by category
- Search news by keywords
- Pagination for navigating through news articles
- Responsive design using React Bootstrap

## Technologies Used

- React
- React Bootstrap
- GNews API

## Screenshot

![News App Screenshot](<./src/images/Screenshot%20(126).png>)

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/news-app.git
   cd news-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

4. **Open the app in your browser:**
   Navigate to `http://localhost:3000` in your web browser to see the app in action.

## Configuration

### API Key

The app uses the GNews API which requires an API key. Replace the placeholder API key with your own in the `fetchNews` function inside `NewsList.js`:

```javascript
const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=YOUR_API_KEY`;
```

## Components

### `NewsList.js`

This component fetches news articles based on the selected category and search term. It manages the loading state, pagination, and rendering of news articles.

### `PaginationComponent.js`

This component handles the pagination logic and UI. It allows navigating through different pages of news articles.

### `Loader.js`

A simple loader component that displays a loading spinner while news articles are being fetched.

## Folder Structure

```
news-app/
├── public/
│   ├── index.html
│   ├── screenshot.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Loader.js
│   │   ├── NewsList.js
│   │   └── PaginationComponent.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Usage

### Viewing News Articles

- The app initially displays the top headlines.
- You can filter news by selecting a category or entering a search term in the search bar.

### Pagination

- Use the pagination controls at the bottom of the page to navigate through the list of news articles.

## Troubleshooting

### Common Issues

- **API Key Error**: Ensure that you have replaced `YOUR_API_KEY` with a valid GNews API key.
- **Network Issues**: Check your network connection and ensure the API endpoint is reachable.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
