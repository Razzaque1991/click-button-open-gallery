

<!-- JavaScript to handle button clicks and toggle galleries -->
    function hideAllGalleries() {
        document.querySelectorAll('.gallery').forEach(gallery => {
            gallery.style.display = 'none';
        });
    }

    function showGallery(id) {
        hideAllGalleries(); // Hide all galleries
        document.getElementById(id).style.display = 'block'; // Display the selected gallery
    }

    // Event listeners for each button
    document.getElementById('button1').addEventListener('click', () => {
        showGallery('gallery1');
    });

    document.getElementById('button2').addEventListener('click', () => {
        showGallery('gallery2');
    });

    document.getElementById('button3').addEventListener('click', () => {
        showGallery('gallery3');
    });

    // Initially hide all galleries when the page loads
    hideAllGalleries();
