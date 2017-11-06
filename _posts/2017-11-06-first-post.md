---
layout: post
title:  "First post"
date:   2017-11-06 01:01:00 +0100
---
## A simple test
This is a simple post just to test out Jekyll's markdown rendering.
<!--more-->
Inline code: ```Test code adasdasdad```

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

{% highlight python %}
>>> print ("Hello World")
Hello World

{% endhighlight %}
