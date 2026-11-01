# Pixel Gaffer '96: app store kit

Everything needed to put Pixel Gaffer '96 on Google Play. The images in this folder are store-ready:

| File | Use |
|---|---|
| `play-icon-512.png` | App icon (512 × 512) |
| `feature-graphic.png` | Feature graphic (1024 × 500) |
| `screenshot-1.png` to `screenshot-5.png` | Phone screenshots (1080 × 1920) |

## Store listing text

**App name** (30 characters max)
Pixel Gaffer '96

**Short description** (80 characters max)
Retro pixel football management. Pick the team and take the penalties yourself!

**Full description**

Football management, the old-fashioned way.

Take charge of one of 48 clubs across four divisions and see how far you can climb. Pick the team, set the tactics and watch every match unfold on a top-down pixel pitch, with a camera that follows the ball and teletext-style commentary. Or just take a quick result.

TAKE THE BIG MOMENTS YOURSELF
⚽ Penalties: tap to aim, tap for power
🧤 Their penalty? Tap where your keeper dives
🎯 Free kicks: aim, curl and power to bend it round the wall
🥅 Cup ties that end level go to a shoot-out you play
🦶 Keepy-uppy and free-kick drills give your squad a training boost

EASY TO PICK UP
• Press PLAY each week. Your assistant picks the team until you want to
• A scout report before every game tells you which style to use
• Matches last about a minute, or take a quick result

ENOUGH DEPTH TO KEEP YOU HOOKED
• Six formations and six playing styles that beat each other like rock-paper-scissors
• Half-time team talks, substitutions and tactics changes during the game
• Training focus and intensity, and young players who grow into stars
• Haggle with chairmen over transfers, but don't push them too far
• Contracts, wages, ticket prices and a board with a target for you to hit
• Promotion, relegation, the Old Tin Cup, youth intakes and job offers from other clubs

PLUS
• An arcade mode with keepy-uppy, a free-kick challenge and penalty shoot-outs
• Works offline
• No adverts, no in-app purchases, no accounts, no data collected

All clubs, players and competitions are made up.

**Category:** Games › Sports
**Tags (if asked):** Football, Sports management, Retro, Pixel art
**Price:** £0.49
**Contains ads:** No
**In-app purchases:** No
**Privacy policy URL:** https://kinapak-ux.github.io/pixel-gaffer/privacy.html
**Website:** https://kinapak-ux.github.io/pixel-gaffer/

## Questionnaire answers

**Content rating (IARC):** no violence (it's football), no fear, no sex or nudity, no bad language, no drugs, alcohol or tobacco, no gambling, no user interaction or sharing between users, no location sharing, no purchases of digital goods. Expect a PEGI 3 / Everyone rating.

**Data safety:** the app collects no data and shares no data. Answer "No" to "Does your app collect or share any of the required user data types?". Data isn't encrypted in transit because none is sent; the game's own files come over HTTPS.

**Target audience:** pick the age groups you want. If you include under-13s, Google applies its Families policy, which this app already meets (no ads, no data collection).

**Ads:** No.

## Step by step

1. **Google Play developer account.** Go to https://play.google.com/console/signup, choose a personal account and pay the one-off US$25 fee. Google checks your identity, which can take a few days.
2. **Payments profile.** In the Play Console, go to **Settings › Payments profile** and set one up. You need it to sell paid apps.
3. **Trader status.** For selling to the EU, Google asks whether you're a trader. If you say yes, your name and contact details, which can include your address, are shown on the store page.
4. **Make the app package.** Go to https://www.pwabuilder.com, enter `https://kinapak-ux.github.io/pixel-gaffer/` and choose **Package for stores › Android**. Suggested options:
   - Package ID: `io.github.kinapak_ux.pixelgaffer` (you can never change this later)
   - App name: `Pixel Gaffer '96`, short name: `Pixel Gaffer`
   - Display mode: Fullscreen
   - Signing key: **Create new**
   Download the zip. It contains the `.aab` file to upload, a `signing.keystore` file and a text file with its passwords.
5. **Keep the signing key safe.** Save `signing.keystore` and its passwords somewhere safe that isn't public (for example a password manager or a private cloud drive). Don't add them to GitHub: these repositories are public. You need them for every update you ever publish.
6. **Connect the app to the website.** The zip contains an `assetlinks.json` file. Replace the contents of `.well-known/assetlinks.json` in this repository with it. Then, once the app is uploaded, copy the extra fingerprint from **Play Console › your app › Setup › App signing** ("SHA-256 certificate fingerprint" under *App signing key certificate*) into that file as well. Without this, the app shows a browser address bar at the top.
7. **Create the app** in the Play Console: name, default language English (United Kingdom), **Game**, **Paid**. Fill in the store listing from this file and upload the images from this folder. Answer the content rating, data safety, target audience and ads questionnaires using the answers above.
8. **Closed testing first.** New personal developer accounts must run a closed test with at least 12 testers who stay opted in for 14 days before they can publish to everyone. Family and friends with Android phones count. Add their Google account emails under **Testing › Closed testing**, upload the `.aab`, and send them the opt-in link.
9. **Publish.** After the 14 days, apply for production access in the Play Console, then send the release to **Production**. Google reviews it, usually within a few days.

## Updating the game later

The store app loads the game from `https://kinapak-ux.github.io/pixel-gaffer/`, so most changes don't need a new app upload:

1. Make the change in the family copy (`pixel-gaffer/` in the `Claude` repository).
2. Copy `data.js`, `engine.js`, `pixel.js`, `minigames.js` and `ui.js` into `pixel-gaffer/` in this repository. Don't copy `index.html`, `sw.js` or `manifest.webmanifest`: the store versions differ (no family leaderboard, fonts bundled in, different app address).
3. Change `pixelgaffer-app-v1` in `sw.js` to the next number and `APP_VERSION` in `index.html`, then push to `main`.

You only need to upload a new `.aab` (signed with the same key) if you change the app's name, icon or package settings.

## Money and tax

Google keeps 15% of each sale and deducts UK VAT, so you get about 34p from each 49p sale. The first £1,000 a year of income like this is covered by the UK trading allowance. Above that, you'd need to register for Self Assessment.
