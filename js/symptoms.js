// symptoms.js

import { database, ref, get } from "./firebase.js";


// ==========================================
// LOAD SYMPTOMS FROM FIREBASE
// ==========================================

async function loadSymptoms() {

    try {

        // Get selected body part
        const part = document.getElementById("bodyPart").value;

        // Reference to "symptoms" in Firebase
        const dbRef = ref(database, "symptoms");

        // Get data
        const snapshot = await get(dbRef);

        let html = "";

        // Check if data exists
        if (snapshot.exists()) {

            const data = snapshot.val();

            // Loop through all symptoms
            for (let key in data) {

                // Check category/body part
                if (data[key].category === part) {

                    html += `
                        <label>
                            <input 
                                type="checkbox" 
                                value="${data[key].remedy}"
                            >
                            ${data[key].symptom}
                        </label>
                        <br>
                    `;
                }
            }

            // Display symptoms
            if (html !== "") {

                document.getElementById("symptomList").innerHTML = html;

            } else {

                document.getElementById("symptomList").innerHTML =
                    "No symptoms found for this body part.";
            }

        } else {

            document.getElementById("symptomList").innerHTML =
                "No symptoms found in Firebase.";
        }

    } catch (error) {

        console.error("Firebase Error:", error);

        document.getElementById("symptomList").innerHTML =
            "Firebase Error: " + error.message;
    }
}



// ==========================================
// FIND BEST REMEDY
// ==========================================

async function findRemedy() {

    try {

        // Get selected symptoms
        const checked = document.querySelectorAll(
            "#symptomList input:checked"
        );

        // Check if no symptom selected
        if (checked.length === 0) {

            document.getElementById("result").innerHTML =
                "Please select at least one symptom.";

            return;
        }

        // Store remedy counts
        let count = {};

        checked.forEach((item) => {

            const remedy = item.value;

            if (count[remedy]) {

                count[remedy]++;

            } else {

                count[remedy] = 1;
            }
        });


        // Find remedy with highest count
        let best = "";
        let max = 0;

        for (let remedy in count) {

            if (count[remedy] > max) {

                max = count[remedy];
                best = remedy;
            }
        }


        // Display result
        document.getElementById("result").innerHTML =
            "Suggested Remedy : " + best;

    } catch (error) {

        console.error("Remedy Error:", error);

        document.getElementById("result").innerHTML =
            "Error finding remedy: " + error.message;
    }
}



// ==========================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ==========================================

window.loadSymptoms = loadSymptoms;
window.findRemedy = findRemedy;
