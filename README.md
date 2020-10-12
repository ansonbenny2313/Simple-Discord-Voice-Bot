# Simple-Discord-Voice-Bot
* This is a dirt easy bot to configure.
* On invoke, it plays a sound to the voice channel the invoker is in
* I've tried my best to comment out the code that you should change
* BUGS! Lot of them, so be prepared.

## SETUP
**INSTALL [NPM and NODE](https://nodejs.org/)**

**GET [FFMPEG BINARIES](http://ffmpeg.org/download.html)**

**I recommend getting VS Code or Notepad++ while editing code. It'll be lot easier than a notepad**

### Step 1: Creating the folder ( if you know how to, just skip this part)
* Once you've got both things down, navigate to a folder using file explorer or CMD.
```FOR EXAMPLE for absolute noobies, using CMD (assuming Windows, if you don't know how to do this, I don't think you are on Linux):
  C:\Users\Memer\> E:
  E:\> cd cringecompilation
  E:\CringeCompilation\> mkdir myNewBot
  E:\CringeCompilation\> cd myNewBot 
  ```
* Now you've created a folder called myNewBot under CringeCompilation on E: disk.
* If you are still on Terminal, good. If not, open a Terminal there (just shift + right click anywhere and press open Powershell or open Command prompt here)
* You could also open a command prompt or powershell by going to File > Open Windows Powershell > Open Windows Powershell

### Step 2: Using Node and installing Discord libraries
* In command prompt, enter the following:
``` E:\CringeCompilation\myNewBot> npm init ```
* It should ask you to give the thing a name and stuff. 
* Just do it. But, when  it asks name for main file, enter index.js
* Congratulations, you've done it.
* Now we need to install Discord and required Libraries
* Enter 
``` E:\CringeCompilation\myNewBot> npm install discord.js ffmpeg fluent-ffmpeg @discordjs/opus ytdl-core --save ```
* It should take a few seconds. Once it's done, there should be bunch of files. Good
**OPTIONAL: For FFMPEG BUG**
* Now I had a bug with FFMPEG. I solved it by taking the binaries and putting it here.
* To do so, remember we downloaded a FFMPEG Binaries in before Step 1.
* It's a zip file, get inside it and got to binaries folder. There should be three executables.
* Extract the executables to your myNewBot folder.
* Nice you are good to go

### Step 3: Clone this repo to your myNewBot folder
* If you have git installed, open a terminal in your myNewBot folder (step 1) and just use git clone <repo url> to do it.
* If not, just download it using a browser and extract it to myNewBot folder
* Take the index.js file and paste it into myNewBot if it's not already like that.
  
### Step 4: Make a new application on Discord Developers and Add your bot to your Server
* Head over to [Discord Developers Portal](https://discord.com/developers/applications)
* Create a new application, call it whatever you want.
* On the right, click on Bot tab and press create-bot. Then confirm.
* On the right, click on OAuth tab. 
* Now check bot
* Scroll down and find Permissions.
* Check all the voice channel permissions and Read Message history permission
* Scroll up, you'll see a long OAuth2 URL. Copy it and paste it in your browser to add your bot to a server
* Go back to General Information tab, and then press Copy next to **Client Secret**
* **Never ever share this client secret in a million years.** 
* Say what? You shared it with your dog?, Dude!
* Don't worry, just go back to the Developers portal and then press regenerate.

### Step 5: Editing the bot to your needs
* Anyhow, you've got your client secret copied. Head back to the myNewBot folder on yor computer.
* Create a new file called auth.json. Open it in Visual Studio Code (or whatever you want, Notepad works)
* You can use code . on Powershell if you have VS Code installed. It'll open all the files on there.
* Enter this code there, paste your client secret in that field:
```
{
    "token": "<paste your client secret here>"
}
```
* Good, you are halfway there.
* Now open index.js in VS Code
* I've added comments, read them.
* It's pretty much self explanatory there. Replace the file names and invoke codes with whatever you want.
* Place your audio file to play in the same myNewBot folder. Call it audio.mp3 (you can edit out the filename in code if you want)

### Step 6: Hosting and Starting the bot
* If you are on VS Code, show the terminal using Alt + F12
* If not, open a Powershell in your myNewBot  folder
* Type ```node index.js```
* It will show ```Ready``` when it starts.
* Go to your server and join a voice chat. Then type in the invoke word.
* It should start playing
* When you want to stop your bot, press Ctrl + C.

## Yeah, that's it folks.
*Edit it out however you want it to. I don't care. A small mention would do.*

*Even if you don't I won't still care*

Happy Coding ❤
