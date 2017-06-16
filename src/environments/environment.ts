// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appBaseUri: 'http://localhost:4200'
};

//This is the credential configuration of firebase. Please do NOT SHARE THIS INFORMATION!
export const firebaseConfig = {
    apiKey:  'AIzaSyDQegDzbL6wpVPI0nvAlXme8py5Y2lERUs',
    authDomain:  'wukist-b30ed.firebaseapp.com',
    databaseURL:  'https://wukist-b30ed.firebaseio.com',
    projectId:  'wukist-b30ed',
    storageBucket:  'wukist-b30ed.appspot.com',
    messagingSenderId:  '241138746750'
}
