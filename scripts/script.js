async function galleryLoad() {
  const response = await fetch('https://picsum.photos/v2/list');
  const images = await response.json();

  for (let i = 0; i < images.length; i++) {
    
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img class="gallery-image" src="${images[i].download_url}" alt="${images[i].author}" onclick="expandImage(this);"/>`;
    document.getElementById("left").appendChild(galleryItem);
    }
}

function expandImage(imgs) {
  
  const expandImg = document.getElementById("expandedImg");
  const imgText = document.getElementById("imgtext");
  const imgSize = document.getElementById("imgsize");
  expandImg.src = imgs.src;
  const width = expandImg.naturalWidth;
  const height = expandImg.naturalHeight;
  imgText.innerHTML = imgs.alt;
  imgsize.innerHTML = `Width: ` + width + `<br> Height: ` + height;
}
