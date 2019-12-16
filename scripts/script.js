
 var picsumPhotos = new Array(); 
 
 var randomNo = Math.random() * 100;

 for (var i = 1; i <= 20; i++) {
   picsumPhotos[i] = 'https://picsum.photos/id/' + randomNo + '/200/200'; 
}

function displayAllImages() {
     len = picsumPhotos.length;        
    for (var j=0; j < picsumPhotos.length; j++) {
        
        var img = new Image();
        img.src = picsumPhotos[j];
        
        document.getElementById('images').appendChild(img);
    }
};

 $(function() {
     displayAllImages();   
 });

