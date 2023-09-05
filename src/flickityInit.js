export default function (id, selected, grouped) {
  const script = document.createElement("script");
  script.innerText = `
        new Flickity( '#${id}', {  
          contain:true,
          groupCells: ${grouped || false},
          imagesLoaded: true,
          freeScroll: true,
          initialIndex: ${selected || 0},
          prevNextButtons: false,
          autoPlay: 1500
        });
    `;
  document.head.appendChild(script);
}
