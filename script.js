


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});



  function createProjectCard(project) {

    const demoButton = document.createElement("a");
    demoButton.textContent = "Demo";
    demoButton.href = project.demoLink;
    demoButton.target = "_blank";

    const codeButton = document.createElement("a");
    codeButton.textContent = "Code";
    codeButton.href = project.codeLink;
    codeButton.target = "_blank";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(demoButton);
    buttonContainer.appendChild(codeButton);

    card.appendChild(buttonContainer);

  }