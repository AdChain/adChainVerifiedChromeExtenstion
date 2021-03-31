# adChainVerifiedChromeExtenstion
Chrome Extension that detects if the current site being viewed is in the adChain Registry

### Installation:

https://chrome.google.com/webstore/detail/adchain-verified/opimdppnmbcafmmbgmgeachaofhhhgaf?hl=en
______________________________________
### Development
#### Plugin update Instructions
 - Change the manifest.json version to greater than previous version
 - zip up the contents of the project and upload
    - Make sure you zip up the contents inside and not just the parent directory

Note: you cannot have inline scripts (js) in your HTML. Must reference a file.

Example:  `<script src="chrome_script.js"></script>`
