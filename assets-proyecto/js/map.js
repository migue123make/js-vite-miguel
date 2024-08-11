document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheigth="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.8747585158053!2d-102.33337982518165!3d21.86236605862725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edd5cae82ead%3A0xd2942a929e1a8857!2sCapital%20City!5e0!3m2!1ses-419!2smx!4v1700843471433!5m2!1ses-419!2smx" ></iframe>
    `;
    }, 2000);
 });
