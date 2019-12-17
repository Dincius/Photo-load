async function galleryLoad() {
  const response = await fetch('https://picsum.photos/v2/list');
  const images = await response.json();

  for (var i = 0; i < images.length; i++) {
    
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img class="gallery-image" src="${images[i].download_url}" alt="gallery image"/>`;
    document.body.appendChild(galleryItem);
    }
}
  
galleryLoad();