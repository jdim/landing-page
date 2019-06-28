function sendData(formData, url) {
  const XHR = new XMLHttpRequest();

  XHR.addEventListener("load", function() {
    console.log("Contact form data loaded successfully");
    alert("Thank you! We will be contacting you soon");
  });

  XHR.addEventListener("error", function() {
    console.log("Error happened while loading contact form data");
  });

  XHR.open("POST", url);
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  XHR.send(formData);
}

export default function() {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", ev => {
    ev.preventDefault();

    sendData(new FormData(form), form.action);
  });
}
