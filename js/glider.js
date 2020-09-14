
// console.log(window.innerWidth);
const glide = new Glide('.glide', {
    type: 'dragThreshold',
    perView: 7,
    breakpoints: {
        // 600: {perView: 14},
    }
  })

  glide.mount()