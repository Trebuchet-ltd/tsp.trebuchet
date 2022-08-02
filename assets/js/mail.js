const form = document.getElementById("mailForm");

const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@trebuchet.one?subject=${subject.value}&body=${message.value}`;
});
