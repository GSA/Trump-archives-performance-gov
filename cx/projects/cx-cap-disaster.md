---
layout: cx_project
title: "Surviving a Natural Disaster"
rating: "0"
permalink: /cx/projects/cx-cap/disaster/
summary: summary_large_image
agency:
description: Imagine if the U.S. government understood how each of its services were part of a broader customer journey. How might federal agencies change their approach or even work together? How might citizens think differently about those services and their overall experience with government?
excerpt: Imagine if the U.S. government understood how each of its services were part of a broader customer journey. How might federal agencies change their approach or even work together? How might citizens think differently about those services and their overall experience with government?
image: "/img/blog/cx-blog-1.jpg"
image_accessibility: Photo of piece of paper with customer experience journey on it.
authors:
  - Federal Customer Experience Initiative Team
tags:
  - PMA
  - CAP Goal
  - cx
  - Service Design
  - Customer Experience
---

![Disaster journey personas]({{ site.baseurl }}/cx/assets/images/Personas-04_Shanice.jpg)

Meet Shanice. She lives in Louisiana with her husband and three children and runs a restaurant on the first floor of her home. During a hurricane in 2019, her family “ignored the warnings and decided not to evacuate.” She remembers “I was in bed and someone was running down the street saying flood, flood, flood! I jumped up and put my feet on the floor and landed in a puddle of water.”

They were able to make it to the school, which was two blocks away. As they were driving, water was coming into their car and they had to abandon it and walk. When Shanice and her family returned home, they found her restaurant destroyed. She called the FEMA hotline to register and was afterwards instructed to apply for an SBA loan. She thought SBA could help her as a small business but didn’t realize they could also provide loans to individuals as well. After her evaluation, she was thrilled to quickly receive a notice that she qualified for an SBA loan.

Shanice considers herself lucky. It has taken several of her friends years to receive financial assistance after filing multiple appeals and being routed back and forth between agencies.

Those who have lived through a major natural disaster are facing one of the most difficult experiences they’ve ever encountered. Finding somewhere safe to live with their families, along with repairing homes and businesses amidst strained community services and school systems can all feel even more overwhelming as individuals realize the time it can take to truly recover. In these most vulnerable moments, survivors expect the government to step up and provide clear guidance and support. However, response and recovery responsibilities are spread across Federal, state, local, nonprofit, and other organizations, making it difficult for survivors to know who to turn to for what.

## Agency Collaborators

<section class="usa-section usa-graphic_list">
  <div class="usa-grid">
    {% for hisp in site.data.hisps %}
      {% if hisp.service_id == "hud-fha" or hisp.service_id == "sba-fo" or hisp.service_id == "ssa-oo" or hisp.service_id == "dhs-fema" or hisp.service_id == "dhs-fema" or hisp.service_id == "usda-fsa" %}
      <div class="usa-width-one-sixth usa-media_block">
        <div style="height: 200px; text-align: center;">
          <img src="{{ site.baseurl }}/cx/assets/images/agencies/{{ hisp.department_abbreviation }}-seal.png"
            alt="{{ this_hisp.department }} seal" style="width:80px;"><br />
          <p style="font-size:.8em;">{{ hisp.department }}</p>
        </div>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="usa-section">
  <h2>
    Journey Map
  </h2>

  <a href="{{ site.baseurl }}/cx/assets/files/FCXI-Journey-Maps-Disaster-Survivor.pdf" target="_blank">
    <img src="{{ site.baseurl }}/cx/assets/images/FCXI-Journey-Maps-Disaster-Survivor.jpg" alt="Transitioning to Adulthood Journey Map">
  </a>
  <p style="font-size: 12px; font-style: italic; text-align: center;">  
    Click to download
  </p>
</section>

This journey map is a composite of the experiences of the people we spoke with, and shows the steps and support as they articulated them. This map has five sections:

* At the top of the map, listed from left to the right, are buckets of the key **stages** in this journey, ranging from the first days to years after experiencing a disaster. Each bucket, or column, corresponds with the content below.
* Below the stages are what we call **Moments that Matter**. These are the periods and mindsets that are influential for the person navigating this journey; often when individuals are understanding what just happened, actions that they have to take to protect and recover themselves and their families, and the process of trying to apply and receive assistance from various government agencies, insurance companies, charities, and nonprofits. These could be considered themes for the stage. For those working to improve this journey, these areas are often the focal points for service improvement.
* Following below, are a series of **actions** along the journey. The undulating line lighty refers to ups and downs of the journey felt by the person. The actions listed here are not complete nor comprehensive for everyone, but they were recurring in our interviews. The red circle icon draws attention to a single key cluster of actions at the center of this journey.
* The next section is **governmental and external supports**. This section zooms into a cluster or small actions which vary by person and situation. The focal area includes several specific supports across Federal, State, and Local domains to be considered and coordinated by the user in order to effectively cover this area of the journey. The key insight here is that during the application process, disaster survivors are in a state of crisis and struggle to navigate complex government processes.  
* Lastly, along the bottom on the map, are six **cross-agency challenges** identified through the research. These include: Fragmented services and information; Fixing issues that could have been prevented; Not designed with stress in mind; Disjointed eligibility, Over-emphasis on fraud prevention; and Unsure what to ask of Federal resources.


<section class="usa-section" style="background-color:#f1f1f1;">
  <div class="usa-grid">
    <div class="usa-width-one-whole">
      <h2>
        Project Documents
      </h2>
      <ul>
        <li>
          <a href="{{ site.baseurl }}/cx/assets/files/FCXI-Journey-Maps-Disaster-Survivor.pdf" target="_blank">
            Journey Map: Surviving a Natural Disaster
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
