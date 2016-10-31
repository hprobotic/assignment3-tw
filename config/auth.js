// config/auth.js
module.exports = {
  'development': {
    'facebook': {
      'consumerKey': '1850049045215527',
      'consumerSecret': '34c8cceaf5dfe6c5f93bfe5051eff995',
      'callbackUrl': 'http://socialauthenticator.com:8000/auth/facebook/callback'
    },
    'twitter': {
      'consumerKey': '6ve6MA1x0WMuO1wGMwXp7aHlD',
      'consumerSecret': 'rr97nSpIdWBs5tM9lrTxcspI1QFtLdTCrOFGx66KKt0buoj4dc',
      'callbackUrl': 'http://socialauthenticator.com:8000/auth/twitter/callback'
    },
    'google': {
      'consumerKey': '81354616952-gr9e8cbj9kgnkgcv5kjg8drlncgo8hn9.apps.googleusercontent.com',
      'consumerSecret': 'fPA7gEKeHs-VrbJdr3i57HZt',
      'callbackUrl': 'http://socialauthenticator.com:8000/auth/google/callback'
    }
  }
}