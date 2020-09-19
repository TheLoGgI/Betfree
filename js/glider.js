
const glide = new Glide('.glide', {
    type: 'dragThreshold',
    perView: 5,
    breakpoints: {
    }
  })

  glide.mount() 


function getRandomDate() {
  const newDate = new Date()
  newDate.setDate(randomInt(32))
  newDate.setMonth(randomInt(12))
  const date = newDate.toDateString().split(' ')
  return `${date[0]}, ${date[2]}th of ${date[1]}`
}

//   mon, 6 juli

function randomInt(max, min = 1) {
  return Math.floor(Math.random() * max + min)
}