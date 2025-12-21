document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if(themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark") {
            body.classList.add("dark");
            themeToggle.classList.add("active");
        }

        themeToggle.addEventListener("click", () => {
            body.classList.toggle("dark");
            themeToggle.classList.toggle("active");
            localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
        });
    }

    const trigger = document.querySelector('.login-select-trigger');
    const options = document.querySelector('.login-options');
    const optionItems = document.querySelectorAll('.login-option');

    if(trigger && options && optionItems.length > 0) {
        trigger.addEventListener('click', () => {
            options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
        });

        optionItems.forEach(option => {
            option.addEventListener('click', () => {
                trigger.textContent = option.textContent;
                options.style.display = 'none';
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.login-select')) {
                options.style.display = 'none';
            }
        });
    }
});