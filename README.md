# TurnRight

> ### A lightweight HTML5 redirection tag.

1. ## Download & Import

   1. ### Download

      Download from [official page](https://www.atatc.net/turnright/) or [release page](https://github.com/ATATC/TurnRight/releases/).

   2. ### Import

      1. ##### Online

         Insert the following codes between the `<head>` tags.

         ```html
         <script src="https://www.atatc.net/turnright/turn-right.js"></script>
         ```

      2. ##### Offline

         For example, save the .js file as `assets/js/turn-right.js`, and insert the following codes between the `<head>` tags.

         ```html
         <script src="assets/js/turn-right.js"></script>
         ```

2. ## Properties

   1. ### Url

      Use property `url` to specify the target url you want to redirect to.
      For example, I want to redirect to `https://www.atatc.net`, I can code like this:

      ```html
      <turn-right url="https://www.atatc.net"></turn-right>
      ```

      The protocol names like `http://` or `https://` are dispensable. If not sepcified, it will be regarded as `https://`.

   2. ### Wait

      1. #### Redirect Immediately

         See `demo-immediately.html` or visit [online demo page](https://www.atatc.net/turnright/demo-immediately.html) for the actual effect.

         To redirect immediately, having loaded the page, specify property `wait` as `false`.

         ```html
         <turn-right url="(e.g) https://www.atatc.net" wait=false></turn-right>
         ```

         Property `wait` can be either boolean or boolean-string. It's set as `true` defaultly.

         ***However, in this case, only the first `<turn-right>` in the entire page will be triggered.***

      2. #### Redirect after clicking

         See `demo-afterclicking.html` or visit [online demo page](https://www.atatc.net/turnright/demo-afterclicking.html) for the actual effect.

         To redirect after an action, set an `id` and optionally specify property `wait` as `true`.

         ```html
         <turn-right id="tr_a" url="(e.g) https://www.atatc.net"></turn-right>
         ```

         or

         ```html
         <turn-right id="tr_a" url="(e.g) https://www.atatc.net" wait=true></turn-right>
         ```

         Then trigger the redirection through JavaScript when needed.

         ```javascript
         let tr_a = document.getElementById("tr_a");
         tr_a.turnRight();
         ```

   3. ### Pass

      *Introduced in version 0.0.2.*

      If you don't want a tag to be activated, set property `pass` as `true`.

      ```html
      <turn-right url="(e.g) https://www.atatc.net" pass=true></turn-right>
      ```

      Property `pass` can be either boolean or boolean-string. It's set as `false` defaultly.

