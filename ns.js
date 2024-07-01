
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getDatabase as getdatabase, ref as hero, set as sot, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// import { initializeApp } from "firebase/storage";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdzTwdUGTyyVFchDbGr_E7Gv0SnQYBZxI",
    authDomain: "datastore-6f62a.firebaseapp.com",
    projectId: "datastore-6f62a",
    storageBucket: "datastore-6f62a.appspot.com",
    messagingSenderId: "709034801139",
    appId: "1:709034801139:web:72b3934e36c029d86f8486",
    measurementId: "G-NGJ5DKCC1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getdatabase(app);
// const db = getFirestore(app);


// const resume = "";
// const email;
// const phone;
// const address;
// const jobrole;
// const message;
// const name;
// const ResumeURL;
// const app



document.getElementById("submit").addEventListener("click", async function (e) {

    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const jobrole = document.getElementById('job_role').value;
    const message = document.getElementById('message').value;
    const resume = document.getElementById('resume').files[0];
    let ResumeURL = "";
    const applyLink = document.getElementById('apply');


    if (name === "" || email === "" || phone === "" || address === "" || message === "" || resume === "" || jobrole === "") {

        alert("please fill the fields properly");

    } else {

        let resumeName = '';
        if (resume) {
            resumeName = resume.name;
        }

        // console.log("yoyo")

        if (resume) {
            const storageRef = ref(storage, `uploaded_resume/${resumeName}`);
            await uploadBytes(storageRef, resume);

            const URL = await getDownloadURL(storageRef);

            ResumeURL = URL;

            var params = {
                from_name: name,
                email_id: email,
                phone_number: phone,
                address: address,
                job_role: jobrole,
                message: message,
                resume_url: ResumeURL,
            };

            const update = await emailjs.send("service_e4zj7bn", "template_e91nkg7", params);


            // then(function (res) {

            //     document.getElementById('name').value = "";
            //     document.getElementById('email').value = "";
            //     document.getElementById('phone').value = "";
            //     document.getElementById('address').value = "";
            //     document.getElementById('job_role').value = "";
            //     document.getElementById('message').value = "";
            //     document.getElementById('resume').files = "";

            // });

            // console.log(update.status);

            if (update.status === 200) {


                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('address').value = "";
                document.getElementById('job_role').value = "";
                document.getElementById('message').value = "";
                document.getElementById('resume').value = "";

                applyLink.href = "thanks.html"
                

            } else {

                applyLink.href = "error.html"
              

            }

            applyLink.click();




        }
    }



});




// async function db(){


//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const message = document.getElementById('message').value;
//     const resume = document.getElementById('resume').files[0];
//     let ResumeURL = "";
//     // const applyLink = document.getElementById('apply');


//     if (name === "" || email === "" || phone === "" || address === "" || message === "" || resume === "") {

//         alert("please fill the fields properly");

//     } else {

//         let resumeName = '';
//         if (resume) {
//             resumeName = resume.name;
//         }

//         console.log("yoyo")

//         var storageRef = firebase.storage().ref('resumes/' + resumeName);
//         var uploadTask = storageRef.put(resume);

//         console.log("yoyo2").

//         uploadTask.on('state_changed',
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//             },
//             (error) => {
//                 console.error('Upload failed:', error);
//             },
//             () => {
//                 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//                     ResumeURL = downloadURL;
//                     console.log('File available at', downloadURL);
//                     alert('File uploaded successfully!');
//                 });
//             }
//         );
//     }

// const formData = {
//     name: name,
//     email: email,
//     phone: phone,
//     address: address,
//     resume: resumeName,
//     resumeurl: ResumeURL,
//     message: message
// };

//     db.collection("users").add({
//         name: name,
//         email: email,
//         phone: phone,
//         address: address,
//         resume: resumeName,
//         resumeurl: ResumeURL,
//         message: message
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//         applyLink.href = "thanks.html";
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//         applyLink.href = "error.html";
//     });

// }

// applyLink.click();

// if (one === 1) {

//     applyLink.href = "error.html";


// } else {

//     applyLink.href = "thanks.html";

// }
// const applyLink = document.getElementById('apply');
// applyLink.href = "error.html";

// applyLink.click();

