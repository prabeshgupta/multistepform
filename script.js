const progressBar = document.querySelectorAll(".progressBar li"),
    formGroup = document.querySelectorAll(".form-group"),
    nextForm = document.querySelectorAll(".next"),
    prevForm = document.querySelectorAll(".previous");

let formStepCount = 0;

nextForm.forEach((button) => {
    button.addEventListener("click", () => {
        formStepCount++;
        moveNextForm();
    })
})

prevForm.forEach((button) => {
    button.addEventListener("click", () => {
        formStepCount--;
        moveNextForm();
    })
})

function moveNextForm() {
    formGroup.forEach((form) => {
        form.classList.contains("form-active") && form.classList.remove("form-active")
    })

    formGroup[formStepCount].classList.add("form-active")
    updateProgressBar()
}

function updateProgressBar() {
    progressBar.forEach((li, i) => {
        if (i < formStepCount + 1) {
            li.classList.add("active")
        } else {
            li.classList.remove("active")
        }
    })

    progressBar.forEach((li, i) => {
        if (i < formStepCount) {
            li.classList.add("next");
        } else {
            li.classList.remove("next")
        }
    })
}


