<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My Portfolio</title>
<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Segoe UI', sans-serif;
}
body {
line-height: 1.6;
background: #f9f9f9;
color: #333;
}
header {
background: #222;
color: #fff;
padding: 1rem 2rem;
position: sticky;
top: 0;
z-index: 100
}
nav {
display: flex;
justify-content: space-between;
align-items: center;
}
.nav-links {
list-style: none;
display: flex;
gap: 1rem;
}
.nav-links a {
color: white;
text-decoration: none;
}
.hero {
padding: 5rem 2rem;
background: #444;
color: white;
text-align: center;
}
.btn {
display: inline-block;
margin-top: 1rem;
background: #0077cc;
color: white;
padding: 0.6rem 1.2rem;
border-radius: 5px;
text-decoration: none;
}
.about,
.projects,
.contact {
padding: 4rem 2rem;
max-width: 1000px;
margin: auto;
}
.skills {
display: flex;
gap: 1rem;
flex-wrap: wrap;
margin-top: 1rem;
}
.skills li {
background: #eee;
padding: 0.5rem 1rem;
border-radius: 20px;
}
.project-list {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 2rem;
}
.project-card {
background: white;
padding: 1rem;
border: 1px solid #ddd;
border-radius: 10px;
transition: transform 0.2s ease;
}
.project-card:hover {
transform: translateY(-5px);
}
form {
display: flex;
flex-direction: column;
gap: 1rem;
}
input,
textarea {
padding: 0.8rem;
border-radius: 5px;
border: 1px solid #ccc;
}
button {
background: #0077cc;
color: white;
border: none;
padding: 0.8rem;
border-radius: 5px;
cursor: pointer;
}
footer {
background: #222;
color: white;
text-align: center;
padding: 1rem 0;
}
</style>
</head>
<body>
<header>
<nav>
<h1 class="logo">MyPortfolio</h1>
<ul class="nav-links">
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</nav>
</header>
<section id="home" class="hero">
<h2>Hello, I'm K.LIKHITH SAI REDDY</h2>
<p>UI/UX Designer & Frontend Developer</p>
<a href="#projects" class="btn">View My Work</a>
</section>
<section id="about" class="about">
<h2>About Me</h2>
<p>I’m a designer passionate about creating engaging, user-friendly digital
experiences.</p>
<h3>Skills</h3>
<ul class="skills">
<li>Figma</li>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
</section>
<section id="projects" class="projects">
<h2>Projects</h2>
<div class="project-list">
<div class="project-card">
<h3>Portfolio Website</h3>
<p>A personal portfolio website built using HTML/CSS/JS.</p>
</div>
<div class="project-card">
<h3>Mobile App UI</h3>
<p>Designed a clean mobile banking interface in Figma.</p>
</div>
</div>
</section>
<section id="contact" class="contact">
<h2>Contact</h2>
<form id="contactForm">
<input type="text" placeholder="Your Name" required />
<input type="email" placeholder="Your Email" required />
<textarea placeholder="Your Message" required></textarea>
<button type="submit">Send</button>
</form>
</section>
<footer>
<p>© 2025 K.LIKHITH SAI REDDY | Connect on
<a href="#">LinkedIn</a>, <a href="#">GitHub</a>
</p>
</footer>
<script>
document.getElementById("contactForm").addEventListener("submit",
function (e) {
e.preventDefault();
alert("Thank you for your message!");
this.reset();
});
</script>
</body>
</html>
