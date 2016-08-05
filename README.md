# osx-get-profile-picture

  Get the current user's profile picture on OSX.

## Example

```js
const getProfilePicture = require('osx-get-profile-picture')
const fs = require('fs')

getProfilePicture()
.pipe(fs.createWriteStream(`${__dirname}/pic.jpg`))
```

## License

  MIT
