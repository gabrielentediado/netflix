const infoFilesX = document.querySelector("#info");

infoFilesX.addEventListener("click", function () {
  Swal.fire({
    title: "Stranger Things",
    text:
      "Quando um rapaz desaparece, uma pequena vila descobre um mistério relacionado com experiências secretas, assustadoras forças sobrenaturais e uma estranha criança. Série inspirada nos clássicos de terror dos anos 80 nomeada para vários prémios Emmy, incluindo três de Melhor Drama.",
    imageUrl: "./assets/img/Stranger_Things_Season_1.png",
    imageWidth: 200,
    imageHeight: 300,
    imageAlt: "Stanger Things",
    theme: "terror",
  });
});