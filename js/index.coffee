---
---

height = 0

# Set new browser height
setHeight = ->
  height = document.body.clientHeight-129

window.onresize = setHeight

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
  scrollToC(e, e.scrollTop, element, duration)

scrollToC = (element, from, to, duration) ->
  if duration <= 0
    return
  if typeof from == "object"
    from = from.offsetTop
  if to? and typeof to == "object"
    to = to.offsetTop
  else
    to = 0

  scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic)

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

# Set height when page has finished loading
document.addEventListener("DOMContentLoaded", setHeight)
