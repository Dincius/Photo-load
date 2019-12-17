var galleryLoad = async function() {
  const response = await fetch('https://picsum.photos/v2/list');
  const images = await response.json();

  for (var i = 0; i < images.length; i++) {
    
    let galleryItem = document.createElement('img');
    galleryItem.classList.add('gallery-item');
    galleryItem.src = "${images[i].download_url}";
    document.body.appendChild(galleryItem);
    }
}
  
// galleryLoad();