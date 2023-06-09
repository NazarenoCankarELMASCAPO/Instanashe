async function generatePosts() {
    for (let i = 0; i < 100; i++) {
      let imageUrl = null;
      let text = null;
  
      try {
        const response = await fetch('https://picsum.photos/800/600');
        imageUrl = response.url;
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
  
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const postAuthorName = data.results[0].name.first;
        const postAuthorImgSrc = data.results[0].picture.thumbnail;
  
        const post = new Post({
          postAuthorName,
          postAuthorImgSrc,
          postImgSrc: imageUrl,
          postText: genText()
        });
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    }
  }

  function genText() {
    let possibleWords = ["un video ma mi gente", "tu madre tiene una polla", "que ya la quisiera yo", "me encanta esta vaina", "wazawaza", "macri es gay", "milei es nazi", "masimino", "la manguera la manguera", "hola", "yo", "emmm", "vacaciones", "perro", "joder sii", "vamonos de fiesta factory", "naza es", "jose es", "gonza es", "Woof woof!", "realmente genial", "no puedo creer que", "miauu", "Grr", "uwu", "esto", "me gusta", "joder muy", "OwO", "Rawr", "este onichan", "se ve como", "lmao", "Wtf"]

    let text = ""
    for(i = 0;i<100;i++) {
        text += `${possibleWords[Math.floor(Math.random() * possibleWords.length)]} `
    }

    return text
  }
  
  generatePosts();
  
