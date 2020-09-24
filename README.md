# express-firebase
Example Project using Nodejs, Express.js, Jest, Firebase and Firestore etc.


##Instructions
Commands to get source code and run the project
```
git clone git@github.com:ahsan-codejit/express-firebase.git
cd express-firebase
npm install
```

Before run the project, add a file in app/configs directory with filename firebase.js with following content:
```
module.exports = {
    apiKey: '',
    appId: '',
    projectId: '',
    ....
    ...
}
```

Then run,

```
npm start
```

If all go well, it will be available on http://localhost:3001


To run tests and test coverage:

```
npm test 
npm run test:coverage  

```
