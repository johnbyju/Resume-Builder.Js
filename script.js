
// Function to add educational qualification field
function addQualification() {
    const qualificationsContainer = document.getElementById('educational_qualifications');
    const count = qualificationsContainer.childElementCount;
    const newQualificationField = document.createElement('div');
    newQualificationField.className = 'form-group';
    newQualificationField.innerHTML = `
      <label for="qualification_${count}">Qualification:</label>
      <input type="text" class="form-control" id="qualification_${count}" required>
    `;
    qualificationsContainer.appendChild(newQualificationField); 
  }
  function removeQualification()
    {
    qualificationsContainer.removeChild(newQualificationField);
    }
  // Function to add work experience field
  function addExperience() {
    const experienceContainer = document.getElementById('work_experience');
    const count = experienceContainer.childElementCount;
    const newExperienceField = document.createElement('div');
    newExperienceField.className = 'form-group';
    newExperienceField.innerHTML = `
      <label for="experience_${count}">Experience:</label>
      <input type="text" class="form-control" id="experience_${count}" required>
    `;
    experienceContainer.appendChild(newExperienceField);
  }

  // Function to add skill field
  function addSkill() {
    const skillsContainer = document.getElementById('skills');
    const count = skillsContainer.childElementCount;
    const newSkillField = document.createElement('div');
    newSkillField.className = 'form-group';
    newSkillField.innerHTML = `
      <label for="skill_${count}">Skill:</label>
      <input type="text" class="form-control" id="skill_${count}" required>
    `;
    skillsContainer.appendChild(newSkillField);
  }

  // Function to add hobby field
  function addHobby() {
    const hobbiesContainer = document.getElementById('hobbies');
    const count = hobbiesContainer.childElementCount;
    const newHobbyField = document.createElement('div');
    newHobbyField.className = 'form-group';
    newHobbyField.innerHTML = `
      <label for="hobby_${count}">Hobby:</label>
      <input type="text" class="form-control" id="hobby_${count}" required>
    `;
    hobbiesContainer.appendChild(newHobbyField);
  }

  // Function to add language field
  function addLanguage() {
    const languagesContainer = document.getElementById('languages_known');
    const count = languagesContainer.childElementCount;
    const newLanguageField = document.createElement('div');
    newLanguageField.className = 'form-group';
    newLanguageField.innerHTML = `
      <label for="language_${count}">Language:</label>
      <input type="text" class="form-control" id="language_${count}" required>
    `;
    languagesContainer.appendChild(newLanguageField);
  }

  // Function to add technical skill field
  function addTechSkill() {
    const techSkillsContainer = document.getElementById('technical_skills');
    const count = techSkillsContainer.childElementCount;
    const newTechSkillField = document.createElement('div');
    newTechSkillField.className = 'form-group';
    newTechSkillField.innerHTML = `
      <label for="tech_skill_${count}">Technical Skill:</label>
      <input type="text" class="form-control" id="tech_skill_${count}" required>
    `;
    techSkillsContainer.appendChild(newTechSkillField);
  }

  // Function to add certification field
  function addCertification() {
    const certificationsContainer = document.getElementById('certifications');
    const count = certificationsContainer.childElementCount;
    const newCertificationField = document.createElement('div');
    newCertificationField.className = 'form-group';
    newCertificationField.innerHTML = `
      <label for="certification_${count}">Certification:</label>
      <input type="text" class="form-control" id="certification_${count}" required>
    `;
    certificationsContainer.appendChild(newCertificationField);
  }

  // Function to save resume data to local storage           
  document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Create an object to store resume data
    const resumeData = {
      name: document.getElementById('name_input').value,
      phoneNumber: document.getElementById('phone_input').value,
      address:document.getElementById("address_input").value,
      githubLink: document.getElementById('github_input').value,
      linkedinLink: document.getElementById('linkedin_input').value,
      gmail: document.getElementById('gmail_input').value,
      objective:document.getElementById("objective_Input").value,
      educationalQualifications: getValues('qualification_'),
      workExperience: getValues('experience_'),
      skills: getValues('skill_'),
      hobbies: getValues('hobby_'),
      languagesKnown: getValues('language_'),
      certifications: getValues('certification_')
    };

    // Save resume data to local storage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert("Saved successfully!");
    // Redirect to the next page
    window.location.href = 'print.html';
    
  });

  // Function to get the values of input fields with a given prefix
  function getValues(prefix) {
    const fields = Array.from(document.querySelectorAll(`[id^="${prefix}"]`));
    return fields.map(field => field.value);
  }