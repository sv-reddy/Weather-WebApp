# Weather App 🌦️

A clean and simple web-based Weather App that fetches and displays real-time weather data for any city. This project is built with plain HTML, CSS, and modern JavaScript, utilizing the OpenWeatherMap API.

<img width="1100" height="900" alt="Weather App Preview" src="https://github.com/user-attachments/assets/ce998350-f4b5-4fec-b557-6244ab6e4c39" />

---

## Features

* **City Search:** Enter the name of any city to get its current weather conditions.
* **Real-time Data:** Fetches live weather information using the OpenWeatherMap API.
* **Dynamic UI:** Displays key information such as:
    * Temperature (in Celsius)
    * Humidity percentage
    * Sky conditions (e.g., "clear sky", "scattered clouds")
* **Weather Emojis:** Shows a relevant emoji (☀️, ☁️, 🌧️) to visually represent the current weather.
* **Error Handling:** Provides user-friendly feedback if the city is not found or if the input is empty.
* **Clean Design:** A visually appealing and easy-to-use interface with a gradient card display.

---

## Technologies Used

* **HTML5:** For the basic structure and content of the application.
* **CSS3:** For styling the app, including the layout, form, and weather display card.
* **JavaScript (ES6+):** For fetching data from the API, handling user input, and dynamically updating the DOM.
* **OpenWeatherMap API:** The third-party service used to source the weather data.

---

## Setup and Usage

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/sv-reddy/Weather-WebApp.git
    ```

2.  **Get an API Key:**
    * Go to [OpenWeatherMap](https://openweathermap.org/api) and create a free account.
    * Navigate to the "API keys" tab to find your unique API key.

3.  **Add the API Key to the project:**
    * Open the `script.js` file.
    * Find the line with the `apiKey` variable.
    * Replace `'YOUR_API_KEY_HERE'` with the key you obtained from OpenWeatherMap.

    ```javascript
    // In script.js
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with YOUR valid API key
    ```
    > **⚠️ Important:** It is best practice not to commit your API key directly into a public repository. For personal projects, this is acceptable, but for larger applications, consider using environment variables.

4.  **Open in Browser:**
    * Simply open the `index.html` file in your web browser.
    * You can now enter a city name and get the weather!

---

### Code Overview

* **`index.html`**: Contains the basic structure, including a form for user input and a `div` element (`.card`) that serves as the display for the weather data.
* **`styles.css`**: Provides the styling for the page, including the background, form elements, and the gradient display card. It uses Flexbox for centering and layout.
* **`script.js`**:
    * Handles the form submission event.
    * Uses an `async` function `fetchWeatherData` to make an API call to OpenWeatherMap.
    * Parses the JSON response and updates the DOM to display the weather information.
    * Includes a helper function `getWeatherEmoji` to select the correct emoji based on the weather type.
    * Manages the display of error messages for invalid inputs.
