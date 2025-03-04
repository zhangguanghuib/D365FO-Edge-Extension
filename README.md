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

## Usage

1. Click the Icon on the Edge Toolbar to open this tool:<br/>
   ![image](https://github.com/user-attachments/assets/f48a47be-9273-4452-9508-159f15ab80d8)<br/>
   You will see it has 3 tab pages:<br/>
   <ul>
     <li>Favorite Menus</li>
     <li>Table Browser</li>
     <li>Class Runner</li>
   </ul>

2. For "Favorite Menus" tab page, you can input the display menu item name and then click "Add" button to add it to the list for future use:<br/>
   ![image](https://github.com/user-attachments/assets/d2863f69-923f-4675-9f96-95c4fef46be5)<br/>
   ![image](https://github.com/user-attachments/assets/f65224e5-f5dd-440c-a1a0-746c3f7c4641)
3. If you want to open a form by Display Menu Item Name (Normally same as the form name), just select the name and then click "Open" button:<br/>
    ![image](https://github.com/user-attachments/assets/77568fb3-3d09-4063-a92d-4a99b2ee6fed)
    Then the Dynamics 365 Finance & Operation will open the corresponding form:<br/>
    ![image](https://github.com/user-attachments/assets/cde733c0-eb25-4921-84f9-b60e71421094)
4.  If you remove one Display Menu Item Name from the list and add a new one, just choose it and click "Remove" button:<br/>
    ![image](https://github.com/user-attachments/assets/0d70a9db-2d76-49ae-9ce9-744f7039a8b9)<br/>
    Currently there is some UI bug need fix, so it only show "Remove"

5. For "Table Browser"  tabpage and "Class Runner", the functionality is similar (Class Runner need improve to support the dropdown list)

## Development

1. The main technology of this plugin is Indexed DB, see the techinical details from: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
2. That means all the data will be stored in the user's local Microsoft Edge Browser, and there is no server running backend, and it will not collect any personal data, so it is absolutely safe.
3. Again, the data stored in this tool is across D365 Finance & Operation environment, hence when you use it, you will find it brings a quite big convenience.

## GitHub Link:
The source code of this tools is stored in https://github.com/zhangguanghuib/D365FO-Edge-Extension

## Reference
https://partner.microsoft.com/en-us/dashboard/microsoftedge/overview
