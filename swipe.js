const header = document.getElementById("header");
        const images = [
            "images/P1240639.jpg",
            "images/Hawk-Owl2.png",
            "images/Dipper2.jpg"
        ];
        let current = 0;
        let startX = 0;

        showSlide(current);

        function showSlide(index){
            header.style.backgroundImage = `url(${images[index]})`;
        }

        function nextSlide(){
            current = (current + 1) % images.length;
            showSlide(current);
        }

        function prevSlide(){
            current = (current - 1 + images.length) % images.length;
            showSlide(current);
        }

        document.querySelector(".arrow.right").addEventListener("click", nextSlide);
        document.querySelector(".arrow.left").addEventListener("click", prevSlide);

        header.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        header.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;
            if (diff > 50) nextSlide();
            if (diff < -50) prevSlide();
        });