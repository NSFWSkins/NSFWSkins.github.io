function _(e){navigator.clipboard.writeText(e).then(function(){document.getElementById('copy-link').textContent='Copied!',setTimeout(function(){document.getElementById('copy-link').textContent='Copy Link'},1e3)})}var shareButton=document.getElementById('share-button'),shareMenu=document.getElementById('share-menu');shareButton.addEventListener('click',function(){shareMenu.classList.toggle('active')});