//READ functions
async function getReimbursementsFetch() {

    let url = 'http://localhost:8080/trms/reimbursements';
    let res = await fetch(url)
    let data = await res.json()

    // the promise method then()
    .then(data => {
        console.log(data);
        populateData(data);
    })
    .catch(err => console.log(err));
}

async function getReimbursementsByEmployeeIdFetch() {
    alert("In the getReimbursementsByEmployeeIdFetch() function.");

        let employee_id = document.getElementById('employeeId').value;

    let url = 'http://localhost:8080/trms/reimbursements/e' + employee_id;

    let res = await fetch(url)
    let data = await res.json()

    .then(data => {
        console.log(data);
        populateData(data);
    })
    .catch(err => console.log(err));

}

//UPDATE functions
function updateReimbursement() {
    alert("In the updateReimbursement() function.");

    let reimbursement_id = document.getElementById('reimbursementId').value;
    let grade = document.getElementById('grade').value;
    let additional_info = document.getElementById('additionalInfo').value;

    let data = {
                reimbursementId: reimbursement_id,
                grade: grade,
                additionalInfo: additional_info
        }

    console.log(data);

    let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                let r = this.responseText;
                console.log(r);
            }
        }
        xhttp.open('PUT', 'http://localhost:8080/trms/reimbursements/', true);
        // because we are sending data in the body, we need to tell our server what to expect
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));

}

function uploadGrade() {
    alert("In the uploadGrade() function.");

    let reimbursement_id = document.getElementById('reimbursementId5').value;
    let grade = document.getElementById('grade').value;

    let data = {
                reimbursementId: reimbursement_id,
                grade: grade
        }

    console.log(data);

    let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                let r = this.responseText;
                console.log(r);
            }
        }
        xhttp.open('PUT', 'http://localhost:8080/trms/reimbursements/g', true);
        // because we are sending data in the body, we need to tell our server what to expect
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));

}

function uploadAdditionalInfo() {
    alert("In the uploadAdditionalInfo() function.");

    let reimbursement_id = document.getElementById('reimbursementId4').value;
    let additional_info = document.getElementById('additionalInfo').value;

    let data = {
                reimbursementId: reimbursement_id,
                additionalInfo: additional_info
        }

    console.log(data);

    let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                let r = this.responseText;
                console.log(r);
            }
        }
        xhttp.open('PUT', 'http://localhost:8080/trms/reimbursements/a', true);
        // because we are sending data in the body, we need to tell our server what to expect
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.send(JSON.stringify(data));

}

function uploadPresentation() {
    alert("In the uploadPresentation() function.");
    let reimbursement_id = document.getElementById('reimbursementId3').value;
    let is_presentation_uploaded = true;

        let data = {
                    reimbursementId: reimbursement_id,
                    isPresentationUploaded: is_presentation_uploaded
            }

        console.log(data);

        let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    let r = this.responseText;
                    console.log(r);
                }
            }
            xhttp.open('PUT', 'http://localhost:8080/trms/reimbursements/p', true);
            // because we are sending data in the body, we need to tell our server what to expect
            xhttp.setRequestHeader('Content-Type', 'application/json');
            xhttp.send(JSON.stringify(data));

}

//DELETE functions
function deleteReimbursement() {

    let reimbursement_id = document.getElementById('reimbursementId2').value;

    let data = {
                reimbursementId: reimbursement_id
        }
    console.log(data);

    // prepare and send our XMLHttpRequest Object
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let r = this.responseText;
            console.log(r);
        }
    }

    xhttp.open('DELETE', 'http://localhost:8080/trms/reimbursements/' + reimbursement_id, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(data));
}

//UTILITY functions
function populateData(res) {

    let lineBreak = document.createElement("br");

    let dataSection = document.getElementById('data');

    let nameTag = document.createElement('h3');

    nameTag.innerHTML += "<br>REIMBURSEMENTS:";

    dataSection.appendChild(nameTag);
    dataSection.appendChild(lineBreak);

    let nameTag2 = document.createElement('p');

    for(let i = 0; i < res.length; i++) {
        let lineBreak = document.createElement("br");

        console.log("res[i].eventName = " + res[i].eventName);

        nameTag2.innerHTML += "Event Name: " + res[i].eventName;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Reimbursement ID: " + res[i].reimbursementId;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Employee ID: " + res[i].employeeId;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Direct Supervisor ID: " + res[i].directSupervisorId;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += 'Claim Date: ' + new Date(res[i].claimDate);
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Cost: " + res[i].cost;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Claim Amount: " + res[i].claimAmount;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Event Start Date: " + new Date(res[i].eventStartDate);
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Event End Date: " + new Date(res[i].eventEndDate);
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Event Location: " + res[i].eventLocation;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Tution Type: " + res[i].tuitionType;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Work Justification: " + res[i].workJustification;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Grade: " + res[i].grade;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Direct Supervisor Message: " + res[i].directSupervisorMessage;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Pending?: " + res[i].isPending;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Direct Supervisor Approved?: " + res[i].isDirectSupervisorApproved;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Department Head Approved?: " + res[i].isDepartmentHeadApproved;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Awarded?: " + res[i].isAwarded;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Approved Amount: " + res[i].approvedAmount;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Declined?: " + res[i].isDeclined;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Archived?: " + res[i].isArchived;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Presentation Uploaded?: " + res[i].isPresentationUploaded;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Additional Info Requested?: " + res[i].isRequestAdditionalInfo;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Additional Info: " + res[i].additionalInfo;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "Urgent? " + res[i].isUrgent;
        nameTag2.innerHTML += "<br>";
        nameTag2.innerHTML += "<br>";

        dataSection.appendChild(nameTag2);
        }
}

