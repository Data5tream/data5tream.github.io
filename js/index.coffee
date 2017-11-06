---
---

height = 0

# Set new browser height
setHeight = ->
  height = document.body.clientHeight-129
  console.log "New height is: " + height


window.onresize = setHeight

# Hide/show secondary nav on scroll
document.addEventListener("scroll", (event) ->
  if event.pageY >= height
    document.getElementById("navbar-child").style.display = "block"
    console.log event.pageY
  else
    document.getElementById("navbar-child").style.display = "none"

  )

# Set height when page has finished loading
document.addEventListener("DOMContentLoaded", setHeight)
