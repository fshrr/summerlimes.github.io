---
title: 'Using Convolutional Neural Networks for Building Facades Segmentation and Creating New Imaginative Architectural Styles using Neural Style Transfer'
description: Worked with University of Toronto and LAMAS on building 2D to 3D transformations pipeline, creating new architectural facades using neural style transfer, and developing a Django web app with AWS GPU-enabled servers.
publishDate: 'Jul 16 2024'
isFeatured: true
# seo:
#   image:
#     src: '/project-1.jpg'
#     alt: Project preview
---

![Project preview](/project-1.jpg)

**Project Overview:**
Collaborated with the University of Toronto Daniels Faculty of Architecture and LAMAS to develop automated processes for building facade transformations, generate new architectural styles using neural style transfer, and create a web application for a student workshop.

## Objectives

1. Segment building facades based on their features to facilitate 2D to 3D transformations.
2. Generate novel architectural facades using neural style transfer techniques for creating delirious facades.
3. Integrate neural style transfer capabilities into a Django web app for educational workshops, enabling students to run style transfers on their prompts.

## Features

### Part 1: Building Facade Segmentation

1. **2D to 3D Transformation:**
   - **Edge Detection:** Utilized the Prewitt edge detection algorithm to process user input images, producing images with varying thresholds for detailed façade analysis.
   - **Window Segmentation:** Applied Kittiseg, a CNN trained on a combination of datasets (CMP_base, CMP_extended, Graz50, Etrims, LabelMeFacade), to perform semantic segmentation of windows and doors.
   - **Blob Detection:** Used a blob detection algorithm from Scikit-image to locate windows in the Kittiseg output images, storing the center points and radii of detected windows.
   - **Floodfill Algorithm:** Mapped blob detection results onto edge-detected images, using a flood fill algorithm to detect potential windows while considering user-defined hyperparameters.
   - **Polygon Approximation and Vectorization:** Simplified detected window regions into regular polygons using Scikit-image's approximation and subdivision algorithms, generating vectorized outputs (.svg) with svgwrite.

### Part 2: Neural Style Transfer for Delirious Facade Creation

2. **Neural Style Transfer:**
   - Created and labeled datasets for training models.
   - Used PyTorch, OpenCV, and Convolutional Neural Networks to blend architectural styles and artistic influences.
   - Generated new architectural styles by combining different styles or applying artistic influences to architecture.

### Part 3: Web Application for Workshops

3. **Web Application Development:**
   - Developed a Django web app for student workshops.
   - Integrated neural style transfer capabilities to allow students to run style transfers on their prompts.
   - Managed load balancing and GPU instances on AWS for optimal performance.

## Tech Stack

- **Frontend:** JavaScript
- **Backend:** Django, AWS EC2, AWS S3
- **Machine Learning:** Scikit-learn, Scikit-image, PyTorch, OpenCV, Kittiseg, Convolutional Neural Networks

## Outcome

The project successfully automated the transformation of building facade features, generated unique architectural styles through neural style transfer, and provided a scalable web application for educational workshops. The project was mentioned in architecture journals such as [DesignTO](https://designto.org/event/delirious-facade/) and [Becoming Digital](https://www.becomingdigital.net/lamas).

## Source Code

- [Facade Model Repository](https://github.com/summerlimes/facade-model)
- [Deep Style Server Repository](https://github.com/Pineapplebun/deepstyleserver)
