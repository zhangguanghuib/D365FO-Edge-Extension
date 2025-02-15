# Edge Extension

This is a Microsoft Edge browser extension that allows users to open a specified URL directly from the extension's popup interface. 

## Features

- Open a URL based on user input.
- Simple and user-friendly interface.
- Background script to manage extension lifecycle and events.

## Installation

1. Download or clone the repository.
2. Open Microsoft Edge and navigate to `edge://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `edge-extension` directory.
5. The extension should now be loaded and visible in your extensions list.

## Usage

1. Click on the extension icon in the Edge toolbar.
2. Enter the desired URL in the input field.
3. Click the "Open URL" button to navigate to the specified URL.

## Development

To modify or enhance the extension, you can edit the following files:

- `src/background.js`: Background script for managing events.
- `src/content.js`: Content script for interacting with web pages.
- `src/popup/popup.html`: HTML structure of the popup.
- `src/popup/popup.js`: JavaScript logic for handling user interactions.
- `src/popup/popup.css`: Styles for the popup.

## License

This project is licensed under the MIT License. See the LICENSE file for details.