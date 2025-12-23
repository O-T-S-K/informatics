document.addEventListener("DOMContentLoaded", () => {
    // ============================
    // القائمة الجانبية للهواتف
    // ============================
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if(menuToggle && sidebar && overlay){
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
        });
    }

    // ============================
    // قائمة المستخدم
    // ============================
    const userMenuBtn = document.getElementById("user-menu-btn");
    const userMenu = document.getElementById("user-menu");

    if(userMenuBtn && userMenu) {
        userMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            userMenu.classList.toggle("open");
        });

        document.addEventListener("click", () => {
            userMenu.classList.remove("open");
        });
    }

    // ============================
    // تعديل الاسم في الملف الشخصي
    // ============================
    const nameSpan = document.getElementById("user-name");
    const nameInput = document.getElementById("nameInput");
    const editBtn = document.getElementById("editBtn");
    const editActions = document.getElementById("editActions");

    function startEdit() {
        if(!nameSpan || !nameInput || !editBtn || !editActions) return;
        nameInput.value = nameSpan.textContent;
        nameSpan.style.display = "none";
        nameInput.style.display = "inline-block";
        editBtn.style.display = "none";
        editActions.style.display = "inline-block";
    }

    function exitEdit() {
        if(!nameSpan || !nameInput || !editBtn || !editActions) return;
        nameInput.style.display = "none";
        nameSpan.style.display = "inline";
        editActions.style.display = "none";
        editBtn.style.display = "inline-block";
    }

    function saveEdit() {
        if(!nameSpan || !nameInput) return;
        nameSpan.textContent = nameInput.value || nameSpan.textContent;
        exitEdit();
    }

    function cancelEdit() {
        exitEdit();
    }

    window.startEdit = startEdit;
    window.saveEdit = saveEdit;
    window.cancelEdit = cancelEdit;

    // ============================
    // حذف الحساب مع تأكيد
    // ============================
    const deleteBtn = document.getElementById("delete-account-btn");
    const modal = document.getElementById("delete-modal");
    const confirmBtn = document.getElementById("confirm-delete");
    const cancelBtn = document.getElementById("cancel-delete");

    if(deleteBtn && modal && confirmBtn && cancelBtn){
        deleteBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        cancelBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        confirmBtn.addEventListener("click", () => {
            modal.style.display = "none";
            alert("تم إرسال طلب حذف الحساب (واجهة فقط)");
        });
    }
});
document.addEventListener("click", (e) => {
    // إذا النقر كان داخل الهيدر أو داخل القائمة أو على زر القائمة لا تفعل شيئ
    if (
        sidebar.contains(e.target) || // داخل القائمة
        (menuToggle && menuToggle.contains(e.target)) || // زر ☰
        document.querySelector(".header").contains(e.target) // أي عنصر بالهيدر
    ) {
        return;
    }

    // خلاف ذلك، أغلق القائمة والتعتيم
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
});