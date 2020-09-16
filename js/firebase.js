"use strict";
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
let _firebaseUI;

// ========== READ ==========
// watch the database ref for changes
// userRef.onSnapshot(function (snapshotData) {
//     console.log('onSnapshot updated');
//     let users = [];
//     snapshotData.forEach(function (doc) {
//         let user = doc.data();
//         // user.id = doc.id;
//         console.log(user);
//         // users.push(user);
    
//     });
// });

// add a new user to firestore (database)
function createUser(userID, email, currency = 500) {
    userRef.add({
        uid: userID,
        mail: email,
        currency: currency,
    });

    return {
        uid: userID,
        mail: email,
        currency: currency,
    }
}


async function getDoc(currentUser) {
    console.log(currentUser);
    const docRef = db.collection("user").doc(currentUser.uid);
    console.log(docRef);
    return await docRef.get().then(function(doc) {
        if (doc.exists) {
            return doc.data()

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return createUser(currentUser.uid, currentUser.Sb.email)
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

}

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(async function (user) {
    if (user) { // if user exists and is authenticated
        console.log('user exists');
        const userdoc = await getDoc(user)
        updateBalance(userdoc.currency)
        console.log(userdoc);
        
        
    } else { // if user is not logged in
        console.log('user not logged in');
        userNotAuthenticated();
    }
});

// Update user balance after win or payment **************

// function setDoc(userID, accountInfo) {
//     db.collection("user").doc(userID).set({
//         uid: userID,
//         mail: accountInfo.email,
//         currency: 500,
//     }).then(function() {
//         console.log("Document successfully written!");

//     })
//     .catch(function(error) {
//         console.error("Error writing document: ", error);
//     });
//     return {
//         uid: userID,
//         mail: accountInfo.email,
//         currency: 500,
//     }
// }



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

// sign out user
function logout() {
    console.log('logged out');
    firebase.auth().signOut();
    showPage('index')
}
