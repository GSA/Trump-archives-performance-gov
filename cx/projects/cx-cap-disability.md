---
layout: cx_project
title: "Transitioning to Adulthood"
rating: "0"
permalink: /cx/projects/cx-cap/disability/
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
  - Customer Experience
  - Service Design
---

![Disability journey personas]({{ site.baseurl }}/cx/assets/images/Personas-04_Claire.jpg)

Meet Claire. She has an intellectual disability that was identified when she was four. She loves being involved in extracurricular activities at school, so this year with COVID-19 has been particularly challenging. Claire’s mom took off work for six weeks at the beginning of the lockdown to help her establish a new normal.

Claire’s mom applied for a Medicaid waiver when she was five, however it took Claire eight years to get off the waitlist. Claire receives Supplemental Security Income (SSI) and is learning how to drive with the help of waiver services. Over the summer, she works part-time at a local restaurant bussing tables. She’d like to take on more hours, but she’s “frustrated she can’t work more without losing SSI.” Her mother asked her to “stop working altogether to make sure she is able to receive SSI for life.” As the family is getting older, she “wants to make sure she’ll be ok if something happens to her.”

To Claire and her family, these are a series of decisions to make on what services are available to them. To the Federal Government, it triggers possible eligibility for programs spread across dozens of agencies, not to mention state and local government and charities. It might mean a Transition Plan from the U.S. Department of Education, a Support Coordinator from the County Boards of Developmental Disability, Supplemental Security Income from the Social Security Administration, Medicaid Waiver from the State Medicaid Office. Each has their own process, regulations, and paperwork.

People with disabilities and their families receive critical support from the government, interacting with agencies at the Federal, state, and local level. At times, this can be challenging for individuals and their families to understand the full scope of what support is available and to decide what is right for them. Individuals and their families must research, apply, and weave together support from each agency individually over the course of their life.

The federal government currently spends $70 Billion dollars annually across 45+ programs and 50+ delivery systems to assist 7 - 8 million people living with an intellectual disability.

This journey shows a person with an intellectual disability, who has limits in their ability to learn and function in daily life, transitioning from childhood to adulthood. This transition period has been described as a “cliff,” with the policies, protections, and supports provided during school ending. This phase is full of big decisions that influence the rest of the person’s life, making it particularly challenging to navigate.


<section class="usa-section">
  <h2>
    Agency Collaborators
  </h2>
  <div class="usa-grid">
    {% for hisp in site.data.hisps %}
      {% if hisp.service_id == "hud-fha" or hisp.service_id == "dol-osha" or hisp.service_id == "ssa-oo" or hisp.service_id == "ed-fsa" or hisp.service_id == "hhs-medicare" %}
      <div class="usa-width-one-sixth usa-media_block">
        <div style="height:200px; text-align: center;">
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

  <a href="{{ site.baseurl }}/cx/assets/files/FCXI-Journey-Maps-Disability.pdf" target="_blank">
    <img src="{{ site.baseurl }}/cx/assets/images/FCXI-Journey-Maps-Disability.jpg" alt="Transitioning to Adulthood journey map">
  </a>
  <p style="font-size: 12px; font-style: italic; text-align: center;">  
    Click to download
  </p>
</section>

This journey map is a composite of the experiences of the people we spoke with, and shows the steps and support as they articulated them. This map has five sections:

* At the top are the **stages** of transition a person with an intellectual disability goes through their life: early childhood, young adulthood, independence. Each step acts as a column; anything below it roughly corresponds to the mindsets and support offered at that moment.
* Below the stages are what we call **Moments that Matter**. These are the periods and mindsets that are influential for the person navigating this journey. These could be considered themes for the stage. For those working to improve this journey, these areas are often the focal points for service improvement.
* Following below, are a series of **actions** along the journey. The undulating line lighty refers to ups and downs of the journey felt by the person. The actions listed here are not complete nor comprehensive for everyone, but they were recurring in our interviews. The red circle icons draw attention to a couple of key moments which correspond to Moments that Matter and the stages.
* The next section is **governmental and external supports**. This section zooms into two actions (which may be a cluster or small actions). The focal area includes several specific supports across Federal, State, and Local domains that must be considered and coordinated by the user in order to effectively cover a need. The key insight here is that in these moments, the burden is on individuals and their families to braid together services and support.
* Lastly, along the bottom on the map, are six **cross-agency challenges** identified through the research. These include: Fragmented services and information; Fixing issues that could have been prevented; Not designed with stress in mind; Disjointed eligibility, Over-emphasis on fraud prevention; and Unnecessarily losing rights.

<section class="usa-section" style="background-color: #f1f1f1;">
  <div class="usa-grid usa-graphic_list-row">
    <div class="usa-width-one-whole usa-media_block">
      <h2>
        Project Documents
      </h2>
      <ul>
        <li>
          <a href="{{ site.baseurl }}/cx/assets/files/FCXI-Journey-Maps-Disability.pdf" target="_blank">
            Journey Map: Transitioning to Adulthood
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
