# พี่สอนน้อง 2018

# Initialize App
1. What is api key
2. Rules
	- https://firebase.google.com/docs/reference/security/database/#rule_types

# Real-time Database
1. What is Real-time Database
2. Firebase Real-time Database Console
3. Reading
	- `.on( ... )`
		- `value`
		- `child_added`
		- `child_removed`
	- `.once( ... ).then( ... )`
		- `value`
		- `child_added`
		- `child_removed`
4. Navigation
	- .ref(...)
	- .child(...)
	- .parent
5. Writing
	- `.set( ... )`
		- array is in object form on firebase console, but become normal array when use `.val()`
	- `.update( ... )`
	- `.push( ... )`
		- whole array turns to object!!
		- key
6. Arrays in Firebase
	- removing item in array, become null
	- concurrent modification of array
	- array vs object
	- BigO of array vs object
7. Security rules vs API key

# Cloud Storage
1. Storage vs Database
2. uploadTask
	- `.on( ... )`
	- `.then( ... )`
3. snapshot
	- `bytesTransferred`
	- `totalBytes`
	- `state`
		- `running`
		- `progress`
		- `pause`
	- `metadata`
	- `task`
	- `ref`
4. `.delete()`
5. List all files
	- `name: url` in database
		- can't use `.`
		- so use `.push()`

# Firebase-tools
1. firebase-tools
2. `firebase init`
3. config files
4. `firebase deploy`
5. `firebase serve`

# Hosting
1. `firebase deploy --only hosting`

# Authentication
1. `.createUserWithEmailAndPassword(email, password)`
2. `.signInWithEmailAndPassword(email, password)`
3. `.signOut()`
4. `.sendEmailVerification()`
5. `.signInWithPopup(provider)`
6. `.onAuthStateChanged(user => {})`

# Cloud Functions
1. Intro to serverless
2. Triggers
	- HTTP Triggers
	- Background Triggers
3. Terminating Rules
	- HTTP Triggers - send a response at the end
	- Background Triggers - return a `Promise`

