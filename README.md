This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----
## Overview

Untuk struktur project react saya suka dengan redux role (saya memanggilnya). dimana memisahkan antara action, reducer, container (potential component) dan component (damn component).

Tapi untuk projct ini karena scope nya tidak besar maka saya hanya menggunakan component (damn komponent) saja yaitu `Gif.js` dan langsung meng import nya ke root komponen sekaligus container nya.

untuk file testing sendiri saya menyimpanya didalam satu folder dengan file componen nya. untuk memudahkan dalam mangatur nya (menurut saya) karena kita tidak ribet mengarahkan ketika kita mau mengimport sebuah komponen.

jadi sekilas struktur folder nya seperti ini : 
_________________________________________________
- root project
  - public
  - src
    - assets
    - components
        - gifs
            - `Gif.js`(as damn component)
            - `Gif.test.js` (file testing)
    - `App.js` (as root component and container)
___________________________________________________

Oya folder assets fungsinya untuk menyimpan assets yang di perlukan sperti gambar dan css

----
## Why This Important?
####1. Folder Structure
menurut saya ini penting karena ketika struktur folder kita rapi itu memudahkan kita dalam memaintenance sebuah aplikasi. Contoh nya seperti redux role.

Dimana seperti data, logic, potensial komponen dan damn komponen itu pisahkan atau di klasifikasikan.

####2. Penamaan
Nama dari sebuah fungsi dan variable harus sesuai dengan fungsinya. karena ini juga memudahkan ketika kita memaintenance sebuah aplikasi.

Dan kita juga membuat kode bukan untuk robot tapi unutuk manusia lainnya, jadi harus mudah dibaca dan di pahami.

----
## Setup Instructions

####1.  Install All Dependecies
  untuk mengistall semua package atau dependencies yang kita butuhkan jalankan perintah `npm install`

#### 2.  Running App in Depelopment Mode
untuk menjalankan aplikasi dalam mode development jalankan perintah `npm start`. 
page akan otomatis reload ketika kita melakukan sebuah perubahan

#### 3.  Launch Test Runner
untuk menjalankan test runner jalankan perintah `npm test`
    kita bisa melihat jumlah test yang kita buat, berapa yang berhasil dan berapa yang gagal.

#### 4.  Build the app for production
untuk mem build Applikasi ke production kita bisa menjalankan perintah `npm run build`
    dan akan membuat folder dengan nama build

#### 5.  Report Test
  Untuk mengetahui berapa persen aplikasi kita sudah tercover, 
  kita bisa menjalankan perintah `npm test --coverage`
  dan kita bisa melihat report nya dalam bentuk html dan kita bisa 
  melihat detail nya

----
## Dependencies

#### 1. Enzyme
 Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

 Enzyme dibuat oleh airbnb.

`npm i --save-dev enzyme enzyme-adapter-react-16`

Perintah tersebut untuk menginstall Enzyme dan juga adapternya

#### 2. React Addon Test Utils
`npm i react-addons-test-utils`


#### 3. Reat Test Renderer
This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

`npm i react-test-renderer`


#### 4. Axios
Promise based HTTP client for the browser and node.js

Bisa kita gunakan untuk berkomunikasi dengan api.

`npm i axios`


## Lain-lain
####1. Light/Dark Theme
####2. Progressive Web App (PWA)
