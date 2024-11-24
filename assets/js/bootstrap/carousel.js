$(document).ready(function() {
    $('.carousel').carousel({ interval: 3000 });
  
    const descriptions = [
      {
        title: "Stranger Things",
        description: "A série Stranger Things é uma ficção científica sobrenatural que se passa na cidade fictícia de Hawkins, Indiana, nos anos 1980.",
        videoId: "MdPxr3-bSOg"
      },
      {
        title: "The X-Files",
        description: "é uma série de televisão de ficção científica e mistério criada por Chris Carter.",
        videoId: "AnotherVideoID"
      },
      {
        title: "Breaking bad",
        description: "é uma série de televisão americana criada por Vince Gilligan que estreou em 20 de janeiro de 2008 e terminou em 29 de setembro de 2013.",
        videoId: "YetAnotherVideoID"
      }
    ];
  
    function updateDescription(index) {
      const div = document.getElementById("description");
  
      div.innerHTML = ` 
        <h3 class="titulo">${descriptions[index].title}</h3>
        <p class="descricao">${descriptions[index].description}</p>
        <div class="botoes">
          <button role="button" class="botao js-modal-btn" data-video-id="${descriptions[index].videoId}">
            <i class="fas fa-play"></i>ASSISTIR AGORA
          </button>
          <button id="info" role="button" class="botao">
            <i class="fas fa-info-circle"></i>MAIS INFORMAÇÕES
          </button>
        </div>
      `;
    }
    
    updateDescription(0);
  
    $('#carouselExampleSlidesOnly').on('slid.bs.carousel', function () {
      const activeIndex = $(this).find('.carousel-item.active').index();
      updateDescription(activeIndex);
    });
  });
  