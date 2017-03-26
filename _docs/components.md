---
title: Components
---

{% assign styles = (site.styles | where: "type" , "components") | sort: "section" | group_by: "section" %}

<div class="container" style="padding: 80px 0;">
	<div class="row">
		<div class="col-md-3">
			<ul class="nav nav-pills nav-stacked">
				{% for type in styles %}<li><a href="#{{ type.name | slugify }}">{{ type.name | capitalize }}</a></li>{% endfor %}
			</ul>
		</div>
		<div class="col-md-9">
			{% for type in styles %}
				<h1 id="{{ type.name | slugify }}" class="margin-bottom">{{ type.name | capitalize }}</h1>
				{% assign entries = type.items | sort: "title" %}
				{% for entry in entries %}
					<div style="padding-left: 7.5%">
						<h4 id="guide-{{ entry.title | slugify }}" class="margin-bottom">{{ entry.title | capitalize }} <small><span class="link" data-target="#code-{{ entry.title | slugify }}" data-toggle="collapse">view code</span></small></h4>
						<div class="margin">{{ entry.content | liquify | markdownify }}</div>
						<div class="margin collapse fade" id="code-{{ entry.title | slugify }}" >{% highlight html %}{{ entry.content | strip }}{% endhighlight %}</div>
						<hr class="gap"/>
					</div>
				{% endfor %}
			{% endfor %}
		</div>
	</div>
<div>