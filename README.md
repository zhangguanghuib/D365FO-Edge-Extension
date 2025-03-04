# D365FO Browser Tool
## Introduction
This is a Microsoft Edge Browser Plugin that can help improve the efficiency significantly for Microsoft Dynamics 365 Finance & Operations users in the daily operations when open a form, or open a table via table browser, or execute a runnable class, and this tool will store the Display Menu Items,  Table Names and Runnable Classes for future use.

Compared to other D365 F&O Plugins,  the biggest advantage of this tool is it is across D365 FO Environments, that is to say:<br/>
<mark>When you are running Environment A, Display Menu Items/Table Names/Runnable Classes which are stored into this tool, can also be used to Environment B, C, D etc. </mark>

## Installation Guidance 

- Open this link :https://microsoftedge.microsoft.com/addons/detail/d365fo-browser-tool/ipmddejggdegjldcbjamipnmicolbbgc
  ![image](https://github.com/user-attachments/assets/73adbcd6-342b-4cea-9c00-996cbe1959ef)<br/>
- Click the button "Get" to install this Plugin, please notice this extension is already installed, hence there is a "Remove" button instead of "Get" button.
- Click the Browser "Extensions" button and in the dropdown list, find this tool, and click "Pin" button to pin it to toolbar.
  ![image](https://github.com/user-attachments/assets/52673ae4-6c37-4ea2-8646-b25129a89a86)

## Installation

1. Open Microsoft Edge and navigate to `edge://extensions`.
2. Search "D365FO Browser Tool", and install this Extension.

## Usage

1. Click the Extension icon in the Edge toolbar to open a Dialog
2. Click any of the 3 tab page to operate D365 FO.

## Development

To modify or enhance the extension, you can edit the following files:

- `src/background.js`: Background script for managing events.
- `src/content.js`: Content script for interacting with web pages.
- `src/popup/popup.html`: HTML structure of the popup.
- `src/popup/popup.js`: JavaScript logic for handling user interactions.
- `src/popup/popup.css`: Styles for the popup.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Reference
https://zhuanlan.zhihu.com/p/429086021
https://partner.microsoft.com/en-us/dashboard/microsoftedge/overview
