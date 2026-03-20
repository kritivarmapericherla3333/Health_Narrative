function goToSymptoms() {
    window.location.href = "symptoms.html";
}

function updateSymptoms() {
    let bodyPart = document.getElementById("bodyPart").value;
    let symptomSelect = document.getElementById("detailedSymptom");
    
    let symptoms = {
        head: ["headache", "dizziness"],
        stomach: ["pain", "nausea"],
        chest: ["cough", "breathing issues"],
        skin: ["rash", "itching"],
        mental: ["anxiety", "depression"],
        kidney: ["burning urination", "stones"],
        joints: ["stiffness", "pain"],
        body: ["fatigue", "weakness"],
        menstrual: ["menstrual cramps", "late periods", "heavy bleeding"]
    };

    symptomSelect.innerHTML = "<option value=''>--Select--</option>";
    symptoms[bodyPart]?.forEach(symptom => {
        let option = document.createElement("option");
        option.value = symptom;
        option.textContent = symptom;
        symptomSelect.appendChild(option);
    });
}

function findRemedy() {
    let bodyPart = document.getElementById("bodyPart").value;
    let symptom = document.getElementById("detailedSymptom").value;

    const remedies = {
        head: { "headache": "Belladonna - Best for severe headaches", "dizziness": "Gelsemium - Helps with vertigo" },
        stomach: { "pain": "Nux Vomica - Useful for stomach cramps", "nausea": "Ipecac - Helps relieve nausea" },
        chest: { "cough": "Drosera - Helps in dry cough", "breathing issues": "Antimonium Tartaricum - For difficulty breathing" },
        skin: { "rash": "Sulphur - Best for itchy rashes", "itching": "Graphites - Helps with dry skin" },
        mental: { "anxiety": "Argentum Nitricum - Helps with nervousness", "depression": "Ignatia - Useful for sadness" },
        kidney: { "burning urination": "Cantharis - Best for burning urine", "stones": "Berberis Vulgaris - Helps with kidney stones" },
        joints: { "stiffness": "Rhus Tox - Useful for stiffness", "pain": "Bryonia - Helps with joint pain" },
        body: { "fatigue": "Gelsemium - Relieves exhaustion", "weakness": "China - Best for weakness" },
        menstrual: { "menstrual cramps": "Chamomilla - Relieves cramps", "late periods": "Pulsatilla - For delayed cycles", "heavy bleeding": "Calcarea Carb - Best for excessive flow" }
    };

    let remedy = remedies[bodyPart]?.[symptom] 
                 ? `Recommended Remedies: ${remedies[bodyPart][symptom]}`
                 : "No remedy found. Please consult a homeopath.";

    document.getElementById("remedyResult").innerText = remedy;
}
