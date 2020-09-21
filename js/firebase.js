"use strict";
// Your web app's Firebase configuration
// Made by Lasse

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
const userRef = db.collection("user");
let _firebaseUI;

// ========== READ ==========
// watch the database ref for changes
function documentSnapShot(userUID) {
    db.collection("user").doc(userUID)
    .onSnapshot(function(doc) {
        updateBalance(doc.data().AccountBalance )
        console.log("Current data: ", doc.data());
    });
}

// add a new user to firestore (database)
// function createUser(userID, email, currency = 500) {
//     userRef.add({
//         uid: userID,
//         mail: email,
//         currency: currency,
//         betArray: ['ghjksad','ghjaksdl', {help: 2131, uiop: 72828}]
//     }); 
//     console.log('User data Created');

//     return {
//         uid: userID,
//         mail: email,
//         currency: currency,
//         betArray: []
//     }
// }

function addBets(userID, updateProps) {
    const json = JSON.stringify(updateProps)
    db.collection('user').doc(userID).update({
        betArray: firebase.firestore.FieldValue.arrayUnion(json)
    });
}



async function getDoc(currentUser) {
    
    const docRef = db.collection("user").doc(currentUser.uid);

    return await docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log('Update user');
            return doc.data()

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            setDoc(user.uid, user.Sb.email)
            
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

}

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(async function (user) {

    if (user) { // if user exists and is authenticated
        const userdoc = await getDoc(user)
        documentSnapShot(userdoc.uid)
        
    } else { // if user is not logged in
        userNotAuthenticated();
    }
});

// Update user balance after win or payment **************

function setDoc(userID, email) {
    db.collection("user").doc(userID).set({
            uid: userID,
            mail: email,
            AccountBalance: 500,
            betArray: []
        }).then(function () {
            console.log("Document successfully written!")

        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    return {
        uid: userID,
        mail: email,
        AccountBalance: 500,
        betArray: []
    }
}



function userNotAuthenticated() {
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

    updateBalance(0)
}

function updateAccountBalance(userID, newBalance) {
    if (newBalance >= 0) {
        db.collection('user').doc(userID).update({
            AccountBalance: newBalance
        });
    } else {
        const coins = document.getElementById('balancecoins').textContent.split(' ')[0]
        db.collection('user').doc(userID).update({
            AccountBalance: Number(coins) + newBalance
        });
    }
}

// sign out user
function logout() {
    console.log('logged out');
    firebase.auth().signOut();
    showPage('index')
}