document.addEventListener('DOMContentLoaded', () => {
  
  // CV view button: opens CV.pdf in new tab
  const cvView = document.getElementById('cv-view');
  if(cvView){
    cvView.addEventListener('click', () => {
      window.open('CV.pdf', '_blank');
    });
  }

  // Certification view button: opens the specific long filename in new tab
  const certifView = document.getElementById('certification-view');
  if(certifView){
    certifView.addEventListener('click', () => {
      window.open('Certification professionnelle RNCP37827BC01 - HENNEUSE Lucas.pdf', '_blank');
    });
  }

  // Small accessible hover behavior: for keyboard users, toggle hover-info with focus
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.setAttribute('tabindex', '0'); // make focusable
    skill.addEventListener('focus', () => skill.classList.add('focused'));
    skill.addEventListener('blur', () => skill.classList.remove('focused'));
  });

  // For touch devices: a tap toggles the info
  skills.forEach(skill => {
    skill.addEventListener('touchstart', (e) => {
      if(!skill.classList.contains('tapped')){
        document.querySelectorAll('.skill.tapped').forEach(s => s.classList.remove('tapped'));
        skill.classList.add('tapped');
      }
    });
  });

  // GitHub icon quick link
  const ghBtn = document.getElementById('gh-btn');
  if(ghBtn){
    ghBtn.addEventListener('click', (e) => {
      // analytics or additional behavior could go here
    });
  }

  // Projects Link Popup
  const projectsLink = document.getElementById("projects-link");
  if(projectsLink){
    projectsLink.addEventListener("click", function(e) {
      e.preventDefault(); 

      const text = `
Depuis le 24 juin 2025, j’ai débuté ma formation en tant que développeur en Intelligence Artificielle, une expérience qui m’a permis d’acquérir de solides compétences techniques et pratiques. 
Passionné d’informatique depuis longtemps, j’ai également réalisé plusieurs projets personnels, tels que la recréation du jeu PONG en Python ou un gestionnaire de tâches, que vous pouvez consulter sur mon GitHub : https://github.com/lucasHENNEUSE.

Cette formation m’a permis de me familiariser avec VSCode, Ubuntu et l’utilisation de Linux sur Windows, tout en perfectionnant mes compétences en Python. 
J’apprends également chaque jour à travailler avec différentes bases de données (MySQL, SQLite, MongoDB), à créer et gérer des environnements Docker, et à utiliser des technologies web telles que HTML, CSS, JavaScript et Flask.

Je suis motivé à continuer à me perfectionner et à construire une véritable carrière dans ce domaine en participant à des projets concrets et enrichissants. 
Tous mes projets et réalisations sont consultables sur mon GitHub : https://github.com/lucasHENNEUSE.

Je vous remercie pour l’attention portée à la lecture de mon parcours et à l’utilisation de mon projet « CV ».
      `;

      const newWindow = window.open("", "_blank", "width=600,height=700,scrollbars=yes,resizable=yes");
      newWindow.document.write(`
        <html>
          <head>
            <title>Mon parcours / projets</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; background: #f9f9f9; color: #0f172a; }
              h1 { text-align: center; }
              a { color: #325cd1; text-decoration: none; }
            </style>
          </head>
          <body>
            <h1>Mon parcours / projets</h1>
            <p>${text.trim().replace(/\n/g, "<br>")}</p>
          </body>
        </html>
      `);
      newWindow.document.close();
    });
  }
});