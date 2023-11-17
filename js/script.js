var cardImages = document.querySelectorAll('.card__img');

    cardImages.forEach(function (image) {
      image.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
      });

      image.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
      });
    });


    var aboutImage = document.querySelector('.about img');

    aboutImage.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.1)';
    });

    aboutImage.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });