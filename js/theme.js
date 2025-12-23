document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark");
            themeToggle.classList.add("active");
        }

        themeToggle.addEventListener("click", () => {
            body.classList.toggle("dark");
            themeToggle.classList.toggle("active");
            localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
        });
    }

    const loginSelectTrigger = document.getElementById("login-select-trigger");
    const loginOptions = document.getElementById("login-options");
    const optionItems = document.querySelectorAll(".login-option");

    if (loginSelectTrigger && loginOptions) {

        loginSelectTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            loginOptions.classList.toggle("open");
        });

        optionItems.forEach(option => {
            option.addEventListener("click", () => {
                loginSelectTrigger.textContent = option.textContent;
                loginOptions.classList.remove("open");
            });
        });

        document.addEventListener("click", () => {
            loginOptions.classList.remove("open");
        });
    }

    const overlay = document.getElementById("page-overlay");
    const links = document.querySelectorAll(".transition-link");

    // عند تحميل الصفحة: إخفاء الغطاء إذا كانت هناك حالة انتقال
    if (overlay && localStorage.getItem("pageTransition") === "cover") {
        overlay.classList.add("cover");
        setTimeout(() => {
            overlay.classList.add("reveal");
            localStorage.removeItem("pageTransition");
        }, 50);
    }

    // الانتقال عند الضغط على الروابط
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const url = link.getAttribute("href");

            if (!overlay) {
                window.location.href = url;
                return;
            }

            // بداية التغطية
            overlay.classList.remove("reveal");
            overlay.classList.add("cover");

            // حفظ حالة الانتقال للصفحة التالية
            localStorage.setItem("pageTransition", "cover");

            // الانتقال بعد انتهاء الحركة
            setTimeout(() => {
                window.location.href = url;
            }, 500); // نفس مدة CSS
        });
    });
});