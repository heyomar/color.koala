import mailtoLink from "mailto-link";

export default function emailColors() {
  const swatches = document.querySelectorAll(".swatch");

  function createMailToLink() {
    const hexColors = [];
    swatches.forEach((e, i) => {
      hexColors.push(swatches[i].textContent);
    });

    emailButton.href = mailtoLink({
      to: "",
      subject: "Koala-ty Color Palette from Color Koala",
      body: `
Color Palette
---------------
${hexColors.map((val) => val.toUpperCase()).join("\n")}    
by colorkoala.netlify.com`,
    });
  }
  const emailButton = document.querySelector(".email");
  emailButton.addEventListener("click", createMailToLink);
}
