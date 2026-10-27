# Family Games

The home page at https://kinapak-ux.github.io/, linking to the family games published from the `Claude` repository.

`.well-known/assetlinks.json` is the file Google Play uses to check that an Android app is allowed to open these pages full screen. It's empty (`[]`) for now. If a game is ever published to Google Play, replace it with the statement the app-building tool (for example PWABuilder or Bubblewrap) gives you, which includes the app's package name and signing fingerprint.

`.nojekyll` makes GitHub Pages publish the `.well-known` folder, which it would otherwise skip.
