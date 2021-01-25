let open = false
const menuImg = document.querySelector('nav img')
const sideNav = document.querySelector('.mobile-nav-items')
menuImg.onclick = function () {
  if (open == false) {
    open = true
    sideNav.classList.add('open')
    console.log(open)
  } else {
    open = false
    sideNav.classList.remove('open')
  }
}
