let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy una entusiasta de la tecnología, desarrollo sitios web y soy analista de datos')
  .pauseFor(200)
  .deleteChars(10)
  .start();
