# GameStoper-chrome-extension
Chrome extension which stops the running game after some interval of time to prevent us from addiction.
GameStoper is a Chrome extension designed to help users manage their time by limiting access to distracting websites, particularly gaming sites. This README file provides instructions on how to set up, run, and customize the extension.

##Installation

###Prerequisites

Google Chrome browser
Basic knowledge of how to use Chrome Developer Tools.

###Steps

Open Chrome Extensions Page

Open Google Chrome.
Navigate to chrome://extensions/.
Enable Developer Mode

Toggle the switch in the top right corner to enable Developer Mode.
Load Unpacked Extension

Click on the Load unpacked button.
Select the directory where you extracted or cloned the repository.
Verify Installation

The Game Stoper extension should now appear in your list of extensions.

###screenshot



###Usage

####Activate the Extension

Click on the Game Stoper icon in the Chrome toolbar.
You will see options to add or remove websites to block.
Add Websites to Block

Enter the URLs of the websites you want to block in the provided field.
Click on the Add button.
Remove Websites from Block List

Click on the Remove button next to the website URL you want to unblock.

###Toggle Blocking

Use the toggle switch to enable or disable the blocking functionality.

###Changing the Extension Behavior
To modify how the extension behaves, you can edit the JavaScript files in the src directory. 

###Key files include:

background.js: Contains the background script for managing blocking logic.
popup.js: Handles the UI interactions in the extension popup.
manifest.json: Defines the extension's permissions and configurations.

###Update Icons and UI

To update the extension's icons or UI, replace the relevant image files in the images directory and update the HTML/CSS files in the src directory.

