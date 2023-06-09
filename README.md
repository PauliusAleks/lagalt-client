<a name="readme-top"></a>

# Lagalt Frontend

<!-- PROJECT LOGO -->

<br />
<div align="center">
    <img src="https://gitlab.com/legalt-group/lagalt-front-end/uploads/81662aed7406d8bbdb88f1b6450d3ba5/lagalt-logo.png" alt="Logo" width="80" height="80">

<h3 align="center">Lagalt Frontend</h3>
</div>

Case assignment in the Noroff accelerate course.

<!-- TABLE OF CONTENTS -->
## Table of contents
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>Description</li>
    <li>Features</li>
    <li>
        Project status
          <ul> <li>Missing requirements </li> </ul>
    </li>
    <li>Usage</li>
    <li>Technologies</li>
    <li>Contributors</li>
    <li>License</li>
  </ol>
</details>

## Description
A web application that allows people to register accounts, create and apply to projects based on the user's skills and the project's needed/required skills. Users can set their profile status to hidden or public. These settings will affect what information other users can retrieve from your profile. When user's application has been accepted, they will join the project that they applied to, and become a contributor. Contributors will have access to a private live chat between the members / contributors of the group. When creating a project you become administrator over this specific project and can approve/decline applicants + edit the project info. In addition to all these features you can view other profiles based on their hidden status and also edit your own profile. On your profile you also have access to all of the projects you are currently in.

### High Fidelity Prototype
<a href="https://www.figma.com/file/iVq5ac7PciftmmKwUl8nF1/lagalt.no?node-id=0%3A1&t=xxAZpbAN8fbXaC22-1"> <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figmalogo" width="80" height="80"></a>

## Features: 
* Login
  * Keycloak
  * Register
  * Identity providers
    * Google
    * LinkedIn
    * Facebook
    * Gitlab
    * Github
* Mainpage
  * Search function
  * Category filtering
  * Create project
  * Project list
* Profile page
  * Edit profile page
* Project page
  * Delete project
  * Edit project
  * Apply to project
  * Chat function

## Project status
All of the functionality is implemented, scalability on mobile devices could be improved and the files with redundant code can be cleaned up. The styling can also be improved and page navigation can be improved.

#### Missing requirements
Missing: User history on the profile page, git commits on a project page if git is linked

[![Netlify Status](https://api.netlify.com/api/v1/badges/a52c407d-565a-4b4e-bb9e-d268ee4b7063/deploy-status)](https://app.netlify.com/sites/lagalt/deploys)

## Usage
 
  1. Clone the repo following this command: ```git clone git@gitlab.com:legalt-group/lagalt-front-end.git```
  2. ``` npm install ``` inside the cloned repo
  3. ``` npm start ``` to run the site locally

## Technologies
* [![React][React.js]][React-url]
* [![Redux][Redux.com]][Redux-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JavaScript][JavaScript.com]][JavaScript-url]
* [![HTML][HTML.com]][HTML-url]
* [![CSS][CSS.com]][CSS-url]
* [![Azure][Azure.com]][Azure-url]
* [![VSCode][VSCode.com]][VSCode-url]
* [![Netlify][Netlify.com]][Netlify-url]
* [![SQLServer][SQLServer.com]][SQLServer-url]
* <a href="https://www.keycloak.org/"> 🔑Keycloak </a>
* <a href="https://www.cloud-iam.com/"> ☁ Cloud Iam </a>

## Contributors
* <a href="https://www.linkedin.com/in/jarand-larsen-58852a257/">Jarand Larsen</a>
* <a href="https://www.linkedin.com/in/paulius-aleksandravicius-a12a01233/">Paulius Aleksandravicius</a>
* <a href="https://www.linkedin.com/in/fredrik-christensen-a33451159/">Fredrik Christensen</a>
* <a href="https://www.linkedin.com/in/ida-huun-michelsen/">Ida Huun Michelsen</a>
* <a href="https://www.linkedin.com/in/erik-aardal/">Erik Aardal</a>

<!-- LICENSE -->
## License

Distributed under the MIT License.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

[Redux.com]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/

[Netlify.com]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://www.netlify.com/

[VSCode.com]: https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[VSCode-url]: https://code.visualstudio.com/

[SQLServer.com]: https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white
[SQLServer-url]: https://www.microsoft.com/en-us/sql-server/sql-server-downloads

[Azure.com]: https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white
[Azure-url]: https://azure.microsoft.com/en-us

[JavaScript.com]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/

[HTML.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://www.w3schools.com/html/

[CSS.com]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3schools.com/css/

<p align="right">(<a href="#readme-top">back to top</a>)</p>