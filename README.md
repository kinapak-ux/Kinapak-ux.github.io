# Family Games

The home page at https://kinapak-ux.github.io/, linking to the family games published from the `Claude` repository.

`.well-known/assetlinks.json` is the file Google Play uses to check that an Android app is allowed to open these pages full screen. It's empty (`[]`) for now. If a game is ever published to Google Play, replace it with the statement the app-building tool (for example PWABuilder or Bubblewrap) gives you, which includes the app's package name and signing fingerprint.

`.nojekyll` makes GitHub Pages publish the `.well-known` folder, which it would otherwise skip.

## Pixel Gaffer '96 (store version)

`pixel-gaffer/` is the version of Pixel Gaffer '96 for selling on Google Play, at https://kinapak-ux.github.io/pixel-gaffer/. It's the same game as the family copy in the `Claude` repository, without the family leaderboard and with its fonts bundled in. It isn't linked from the games list. `pixel-gaffer/privacy.html` is its privacy policy, and `pixel-gaffer/store/` holds the store images plus `LISTING.md`, which has the listing text and the step-by-step guide to publishing and updating it.
