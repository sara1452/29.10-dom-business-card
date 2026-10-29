// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
let avatar = document.getElementById('avatar')
let name_input = document.getElementById('name-input')
let card_name = document.getElementById('card-name')
let name_content = card_name.textContent
name_input.addEventListener('input', (event) => {
    card_name.textContent = event.target.value.trim()
    if (card_name.textContent == "") {
        card_name.textContent = name_content
        avatar.textContent = '?'
        alert(avatar.textContent)
    }
    else {
        avatar.textContent = card_name.textContent[0].toUpperCase()
    }
})
let job_input = document.getElementById('job-input')
let card_job = document.getElementById('card-job')
let job_content = card_job.textContent
job_input.addEventListener('input', (event) => {
    card_job.textContent = event.target.value.trim()
    if (card_job.textContent == "")
        card_job.textContent = job_content
})
let email_input = document.getElementById('email-input')
let card_email = document.getElementById('card-email')
let email_content = card_email.textContent
email_input.addEventListener('input', (event) => {
    card_email.textContent = event.target.value.trim()
    if (card_email.textContent == "")
        card_email.textContent = email_content
})
let bio_input = document.getElementById('bio-input')
let card_bio = document.getElementById('card-bio')
let bio_content = card_bio.textContent
let counter = document.getElementById('bio-left')
let all_counter = document.getElementsByClassName('counter')[0]
bio_input.addEventListener('input', (event) => {
    counter.textContent = 80 - (event.target.value.length)
    all_counter.classList.toggle('warning', Number(counter.textContent) <= 10)
    card_bio.textContent = event.target.value.trim()
    if (card_bio.textContent == "")
        card_bio.textContent = bio_content
})
let color_select = document.getElementById('color-select')
let card = document.getElementById('card')
color_select.addEventListener('change', (event) => {
    card.style.borderColor = event.target.value
    avatar.style.backgroundColor = event.target.value
})
let theme_btn = document.getElementById('theme-btn')
theme_btn.addEventListener('click', (event) => {
    const isDarkMode = document.body.classList.toggle('dark')
    theme_btn.textContent = isDarkMode ? 'Light mode' : 'Dark mode'
})
let reset_btn = document.getElementById("reset-btn")
let bio_form = document.querySelector('form')
reset_btn.addEventListener("click", (event) => {
    bio_form.reset();
    card_name.textContent = name_content;
    card_job.textContent = job_content;
    card_email.textContent = email_content;
    card_bio.textContent = bio_content;
    avatar.textContent = "?";
    counter.textContent = '80';
    all_counter.classList.remove('warning');
    card.style.borderColor = color_select.value;
    avatar.style.backgroundColor = color_select.value;
})