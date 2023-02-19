<div class="l-fragment">

## Services

{% if consulting.status == "AVAILABLE" %}
I am currently available for consulting work and if you need hand with an issue you currently have in your organization, let's talk. My
current time zone is {{ consulting.timezone }} and I'm available to work {{ consulting.hours_per_week }} hours per week.
{% else %}
I am currently unavailable for consulting work (expected until {{ consulting.clear_status_after | date: "%b %Y" }}).

{% endif %}

{% for service in services %}

  <div>
    <h3>
      <a class="u-no-underline u-underline--hover" href="{{ service.url }}">
        {{ service.data.title }}
      </a>
    </h3>

{{ service.content | split: '\n' | first }}

  </div>
{% endfor %}

</div>
