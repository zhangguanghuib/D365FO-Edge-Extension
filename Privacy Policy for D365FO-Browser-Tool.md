# Edge Extension

This is a Microsoft Edge/Google Chrome Browser extension that allows users to operate Dynamics 365 Finance & Operation from the extension's popup interface. 

## Features

- Open and Store Favourite Display Menu Items.
- Open and Store Table from Table Browser.
- Execute Runnable Class from SysClassRunner.

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


#Privacy Policy for D365FO-Browser-Tool
##Introduction
D365FO-Browser-Tool is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard any personal information when you use our Microsoft Edge extension.

##Information We Collect
This D365FO Browser Tool does not collect, store, or share any personally identifiable information. However, it may process certain non-personal data necessary for functionality, such as:

<li> Only D365 FO Menu Item Names, Table Names will be stored into the Browse Storage, and will not store the table data but only the table name.</li>
<li>The Storage will only use IndexedDB that stored in user local computer, and there is no server storage to storage these information.</li>
<li>All the D365 FO Menu Item Names & Table Names will be stored in IndexedDB only depends on user manully input, will not automatically be collected and stored</li>

How We Use Information
Any data processed by the extension is solely used for the following purposes:

Providing and improving the extension’s functionality.
Enhancing user experience.
Data Sharing and Disclosure
We do not sell, trade, or rent any personal information to third parties. We may share anonymized or aggregated data with analytics providers to understand user behavior, but this data cannot identify any individual user.

Third-Party Services
Our extension may interact with third-party services, such as APIs or external websites. Please refer to their privacy policies for details on how they handle user data.

Security
We take reasonable steps to protect any information processed by the extension. However, since no method of data transmission or storage is 100% secure, we cannot guarantee absolute security.

Changes to This Privacy Policy
We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.

Contact Us
If you have any questions about this Privacy Policy, you can contact us at:
Email: [Your Email]
Website: [Your Website]


