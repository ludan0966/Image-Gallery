const Gallery = [
  'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const img = document.querySelector('img')

let i = 0
next.addEventListener('click', function () {
  i++
  if (i >= Gallery.length) {
    i = 0
  }
  img.src = Gallery[i]
})

prev.addEventListener('click', function () {
  i--
  if (i < 0) {
    i = Gallery.length - 1
  }
  img.src = Gallery[i]
})