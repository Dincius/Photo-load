async function galleryLoad() {
  const response = await fetch('https://picsum.photos/v2/list');
  const images = await response.json();

  for (var i = 0; i < images.length; i++) {
    
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img class="gallery-image" src="${images[i].download_url}" alt="gallery image" onclick="expandImage(this);"/>`;
    document.getElementById("left").appendChild(galleryItem);
    }
}

function expandImage(imgs) {
  
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
