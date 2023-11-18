const username = document.querySelector("#username");
const phone = document.querySelector("#phone");

window.intlTelInput(phone, {
  separateDialCode: true,
  excludeCountries: ["in", "il"],
  preferredCountries: ["uz", "ru", "kz", "kg"],
});
const token = "6624931638:AAHk8styen2itt27WjYu5NiFExexnc5pLJw";
const chat_id = -4043056461;
const form = document.querySelector("#contact-form");
const modal = $("#submit-modal");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let country = window.intlTelInputGlobals.instances[0].s.name;
  let tel = "+" + window.intlTelInputGlobals.instances[0].s.dialCode;
  tel += phone.value;
  let my_text = `New Message: %0A - Sender Name: ${username.value} %0A - Country: ${country} %0A - Phone number: +${tel}`;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
  handleSubmit(url);
  modal.modal("show");
});
const handleSubmit = async (url) => {
  try {
    const data = await fetch(url, {
      method: "GET",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// SUCCESS MODAL
