---
---

height = 0

# Save browser height
setHeight = ->
  height = document.body.clientHeight-120

# Set height when windows is resized
window.onresize = setHeight

# Set height when page has finished loading
document.addEventListener("DOMContentLoaded", setHeight)

# Hide/show secondary nav on scroll
document.addEventListener("scroll", (event) ->
  if event.pageY >= height
    document.getElementById("navbar-child").style.display = "block"
  else
    document.getElementById("navbar-child").style.display = "none"
  )

# Scroll to link
# Based on https://stackoverflow.com/a/23844067
@shiftTo = (element) ->
  scrollTo(document.getElementById(element), 1000)
  return false

scrollTo = (element, duration) ->
  e = document.documentElement
  if e.scrollTop == 0
    t = e.scrollTop
    ++e.scrollTop
    if t+1 == e.scrollTop-- then e = e else e = document.body
  if duration <= 0
    return
  if typeof e.scrollTop == "object"
    e.scrollTop = e.scrollTop.offsetTop
  if element? and typeof element == "object"
    element = element.offsetTop
  else
    element = 0

  scrollToX(e, e.scrollTop, element, 0, 1/duration, 20, easeOutCuaic)

scrollToX = (element, xFrom, xTo, t01, speed, step, motion) ->
  if t01 < 0 or t01 > 1 or speed <= 0
    element.scrollTop = xTo
    return
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01)
  t01 += speed * step

  setTimeout( ->
    scrollToX(element, xFrom, xTo, t01, speed, step, motion)
  , step)

# correct
easeOutCuaic = (t) ->
  t--
  t*t*t+1
