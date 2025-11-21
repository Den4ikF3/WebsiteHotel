document.addEventListener("DOMContentLoaded", function() {

    const allSmoothLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.main-header');

    allSmoothLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const href = link.getAttribute('href');
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const modalOverlay = document.querySelector("#generic-modal-overlay");
    const modalContent = document.querySelector("#modal-dynamic-content");
    const modalCloseBtn = document.querySelector("#generic-modal-close");

    function openModal(contentHTML) {
        modalContent.innerHTML = contentHTML;
        modalOverlay.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modalOverlay.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.querySelector("#view-gallery-btn").addEventListener("click", function(event) {
        event.preventDefault();
        const galleryHTML = `
            <h2>Room Gallery</h2>
            <img src="images/ClassicRoom.jfif" alt="Classic Room" class="modal-gallery-image">
            <img src="images/PremiumRoom.jpg" alt="Premium Room" class="modal-gallery-image">
            <img src="images/LuxuryRoom.jpg" alt="Presidential Room" class="modal-gallery-image">
        `;
        openModal(galleryHTML);
    });

    const roomDetails = {
        classic: `
            <h2>Classic Tuscan Suite</h2>
            <p>Elegant rooms with traditional Tuscan décor and garden views. Enjoy the charm of Italy with all modern comforts, including a king-sized bed and a luxurious marble bathroom.</p>
            <ul>
                <li>Garden View</li>
                <li>King Bed</li>
                <li>Marble Bathroom</li>
                <li>Private Balcony</li>
                <li>60sqm</li>
            </ul>`,
        premium: `
            <h2>Premium Valley Suite</h2>
            <p>Spacious suites with panoramic valley views and private terraces. These rooms offer a separate living area, perfect for relaxation, and a stunning vantage point to watch the Tuscan sunset.</p>
            <ul>
                <li>Panoramic Valley View</li>
                <li>King Bed</li>
                <li>Private Terrace</li>
                <li>Separate Living Area</li>
                <li>85sqm</li>
            </ul>`,
        presidential: `
            <h2>Villa Presidential Suite</h2>
            <p>Our most luxurious accommodation with exclusive amenities. This expansive suite features 360° views, a grand marble bedroom, and the option of a private chef and in-suite wine cellar access.</p>
            <ul>
                <li>360° Views</li>
                <li>Grand Marble Bedroom</li>
                <li>Private Chef (On Request)</li>
                <li>Wine Cellar Access</li>
                <li>200sqm</li>
            </ul>`
    };
    
    document.querySelector("#details-classic").addEventListener("click", (e) => { e.preventDefault(); openModal(roomDetails.classic); });
    document.querySelector("#details-premium").addEventListener("click", (e) => { e.preventDefault(); openModal(roomDetails.premium); });
    document.querySelector("#details-presidential").addEventListener("click", (e) => { e.preventDefault(); openModal(roomDetails.presidential); });
    document.querySelector("#request-transfer-btn").addEventListener("click", function(event) {
        event.preventDefault();
        const transferHTML = `
            <h2>Request a Transfer</h2>
            <p>Please contact our team to arrange your transfer.</p>
            <div class="modal-contact-block">
                <strong>Reservations</strong>
                <span>+39 055 123 4567</span>
                <span>reservations@villabellavista.it</span>
            </div>
            <div class="modal-contact-block">
                <strong>Concierge</strong>
                <span>+39 055 123 4568</span>
                <span>concierge@villabellavista.it</span>
            </div>
        `;
        openModal(transferHTML);
    });

    const reservationForm = document.querySelector(".reservation-form");
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const successHTML = `
            <div style="text-align: center;">
                <i class="fas fa-check-circle" style="color: #5cb85c; font-size: 48px; margin-bottom: 15px;"></i>
                <h2>You have successfully booked your room!</h2>
                <p>We look forward to seeing you!</p>
                <button class="btn btn-dark" id="modal-ok-button">OK</button>
            </div>
        `;
        openModal(successHTML);
        reservationForm.reset();
        document.querySelector("#modal-ok-button").addEventListener("click", closeModal);
    });

    console.log("Villa Bellavista JavaScript is loaded and active!");

});