If you take bugs in your software personal (like I do), then this project should help get you really angry.

Whenever a new github issue is created/updated on a designated repo, a terrifying mannequin head will startle you, read you the title of the issue, and finally leave you with a clever demoralizing (or occasionally uplifiting) phrase.

<img src="https://raw2.github.com/joelongstreet/bug-face/master/img/1.jpg " alt="Mannequin" width="300px"/>
<img src="https://raw2.github.com/joelongstreet/bug-face/master/img/2.jpg " alt="Mannequin" width="300px"/>
<img src="https://raw2.github.com/joelongstreet/bug-face/master/img/3.jpg " alt="Mannequin" width="300px"/>
<img src="https://raw2.github.com/joelongstreet/bug-face/master/img/4.jpg " alt="Mannequin" width="300px"/>
<img src="https://raw2.github.com/joelongstreet/bug-face/master/img/5.jpg " alt="Mannequin" width="300px"/>


## Warning
If you strangely decide you'd like to implement this monstrosity for your own project, there's something you need to know about the web hooks. Since I couldn't figure out how to assign a web accessible static IP address to the raspberry pi, I used localtunnel to generate public urls for the application. Everytime the application starts, it clears out *ALL* current github webhooks. This little convenience could ruin your life if you have a fancy project set up.


### Blinking Lights
By using [EnotionZ's Gpio](https://github.com/EnotionZ/GpiO) library, I was able to easily toggle the ground state of each pin. The head LEDs have a consistent power supply via the pi's 3.3v pin, while the two eyes use the 5v pins. Within the power line for each LED lies an appropriate resistor (I forget what I used at the moment - they're wrapped up in tape since my soldering skills suck).


### Audio
I bought the [cheapest set](https://www.google.com/shopping/product/5045043905674639712?es_sm=91&sclient=psy-ab&q=super+cheap+iphone+speaker+case&oq=super+cheap+iphone+speaker+case&pbx=1&bav=on.2,or.r_cp.r_qf.&bvm=bv.59568121,d.cWc,pv.xjs.s.en_US.1EneOJbgwUk.O&espv=210&biw=1024&bih=1185&tch=1&ech=1&psi=0tPeUveEL-q0sQT9ooCoDQ.1390334931737.5&ei=4tPeUtWDIvLOsAS4-ICgDQ&ved=0COwGEKYrMBI) of powered speakers I could find from Target, pulled everything apart, and drilled a one inch hole in the mannequin to mount the speakers. The connection to the pi was completed via the standard audio out.


### Todo - Cicuit Diagram

### Todo - Pin Mappings