"use strict";

console.log('firebase js');
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDFsOpP84x9nIEEIPUqb6jx1wNKDR4alzQ",
    authDomain: "betfree-15a76.firebaseapp.com",
    databaseURL: "https://betfree-15a76.firebaseio.com",
    projectId: "betfree-15a76",
    storageBucket: "betfree-15a76.appspot.com",
    messagingSenderId: "321186567040",
    appId: "1:321186567040:web:8ff63037fdb16b450fe765"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userRef = db.collection("users");

let selectedUserId = "";

// ========== READ ==========
// watch the database ref for changes
userRef.onSnapshot(function (snapshotData) {
    let users = [];
    snapshotData.forEach(function (doc) {
        let user = doc.data();
        // console.log(user);
        user.id = doc.id;
        // users.push(user);
    });
});

// ========== CREATE ==========
// add a new user to firestore (database)
function createUser() {
    // references to the input fields
    let nameInput = document.querySelector('#login');
    let mailInput = document.querySelector('#password');
    console.log(nameInput.value);
    console.log(mailInput.value);

    let newUser = {
        name: nameInput.value,
        mail: mailInput.value
    };

    userRef.add(newUser);
}

// ========== UPDATE ==========

let loggedin = false;

function checkDB() {

}

function selectUser(id, login, password) {
    // references to the input fields
    let nameInput = document.querySelector('#login');
    let mailInput = document.querySelector('#password');
    nameInput.value = login;
    mailInput.value = password;
    selectedUserId = id;
}

// ========== Firebase sign in functionality ========== //
let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
    if (user) { // if user exists and is authenticated
        userAuthenticated(user);
        // console.log(user)

        
    } else { // if user is not logged in
        userNotAuthenticated();
    }
});

function setDoc(userID, accountInfo) {
    console.log(userID, accountInfo.email);
    db.collection("user").doc(userID).set({
        uid: userID,
        mail: accountInfo.email,
        currency: 500,
    }).then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    return {
        uid: userID,
        mail: accountInfo.email,
        currency: 500,
    }
}

function getDoc(userID) {
    const docRef = db.collection("user").doc(userID);
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return doc.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
}

function userAuthenticated(user) {
    // Create user in firestore database
    setDoc(user.Sb.uid, user)
    
    
    


    // appendUserData(user);
    // hideTabbar(false);
    // showLoader(false);
}

function userNotAuthenticated() {

    /* showPage("login"); */

    // Firebase UI configuration
    const uiConfig = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '#home'
    };
    // Init Firebase UI Authentication
    if (!_firebaseUI) {
        _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
    }
    _firebaseUI.start('#firebaseui-auth-container', uiConfig);
    /* showLoader(false); */
}

// show and hide tabbar
/* function hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
        tabbar.classList.add("hide");
    } else {
        tabbar.classList.remove("hide");
    }
} */



// sign out user
function logout() {
    firebase.auth().signOut();
}

function appendUserData(user) {
    document.querySelector('#profile').innerHTML += `
    <h3>${user.displayName}</h3>
    <p>${user.email}</p>
  `;
}