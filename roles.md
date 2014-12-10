---
layout: default
title: Roles
weight: 3
---

# BRIGADE LEADERS

{{ site.data.roles.leaders.captains.description }}

**Current Brigade Captains:**
{% for captain in site.data.roles.leaders.captains.personnel %}
{% if captain.current == true %}* {{ captain.name }}{% endif %}{% endfor %}

**Past Brigade Captains:**
{% for captain in site.data.roles.leaders.captains.personnel %}
{% if captain.current != true %}* {{ captain.name }}{% endif %}{% endfor %}

# MUNICIPAL PARTNERS

{{ site.data.roles.partners.municipal_partners.description }}

**Current Municipal Partners:**
{% for municipal in site.data.roles.partners.municipal_partners.personnel %}
{% if municipal.current == true %}* {{ municipal.name }}: {{ municipal.title }} {% endif %}{% endfor %}

# COMMUNITY PARTNERS

{{ site.data.roles.partners.community_partners.description }}

**Current Community Partners:**
{% for community in site.data.roles.partners.community_partners.personnel %}
{% if community.current == true %}* {{ community.name }}: {{ community.title }} {% endif %}{% endfor %}

# CORE BRIGADE TEAM MEMBERS

{{ site.data.roles.core_members.description }}

## Delivery Lead {% if site.data.roles.core_members.delivery_leads.seeking_personnel == true %}(open position){% endif %} 

{{ site.data.roles.core_members.delivery_leads.description }}

{% for focuses in site.data.roles.core_members.delivery_leads.focus_areas %}* {{ focuses }}
{% endfor %}


## Community Organizer {% if site.data.roles.core_members.community_organizers.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.community_organizers.description }}

The community organizer's areas of focus include:

{% for focuses in site.data.roles.core_members.community_organizers.focus_areas %}* {{ focuses }}
{% endfor %}

**Current community organizers:**
{% for member in site.data.roles.core_members.community_organizers.personnel %}
{% if member.current == true %}* {{ member.name }}{% endif %}{% endfor %}

## Storyteller {% if site.data.roles.core_members.storytellers.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.storytellers.description }}

The Storyteller’s areas of focus include:

{% for focuses in site.data.roles.core_members.storytellers.focus_areas %}* {{ focuses }}
{% endfor %}

**Current storytellers:**
{% for member in site.data.roles.core_members.storytellers.personnel %}
{% if member.current == true %}* {{ member.name }}{% endif %}{% endfor %}

## Community Data Wrangler / Data Evangelists {% if site.data.roles.core_members.data_evangelists.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.data_evangelists.description }}

**Current data wranglers/evangelists**
{% for member in site.data.roles.core_members.data_evangelists.personnel %}
{% if member.current == true %}* {{ member.name }}{% endif %}{% endfor %}

## Scribe / Documentor {% if site.data.roles.core_members.scribes.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.scribes.description }}

## Developer Evangelists {% if site.data.roles.core_members.developer_evangelists.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.developer_evangelists.description }}

**Current developer evangelists:**
{% for member in site.data.roles.core_members.developer_evangelists.personnel %}
{% if member.current == true %}* {{ member.name }}{% endif %}{% endfor %}

## Policy Evangelists {% if site.data.roles.core_members.policy_evangelists.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.policy_evangelists.description }}

## Event Organizer {% if site.data.roles.core_members.event_organizers.seeking_personnel == true %}(open position){% endif %}

{{ site.data.roles.core_members.event_organizers.description }}
