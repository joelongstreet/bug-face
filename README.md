If you take bugs in your software personal (like I do), then this project should help get you really angry.

Whenever a new github issue is created/updated on a designated repo, a terrifying mannequin head will startle you, read you the title of the issue, and finally leave you with a clever demoralizing (or occasionally uplifiting) phrase.

## Warning
If you strangely decide you'd like to implement this monstrosity for your own project, there's something you need to know about the web hooks. Since I couldn't figure out how to assign a web accessible static IP address to the raspberry pi, I used localtunnel to generate public urls for the application. Everytime the application starts, it clears out *ALL* current github webhooks. This little convenience could ruin your life if you have a fancy project set up.