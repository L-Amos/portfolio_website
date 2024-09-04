---
layout: ../../layouts/project_layout.astro
---
# A Simulation of Mathematical Billiards - And A Novel Encryption System
## Project Purpose
The main focus of this project was to use Python to simulate mathematical billiards[<sup>1</sup>](#f1) in a range of different billiard table geometries: a rectangular table, an elliptical table and a Bunimovich-stadium table. The latter geometry is the most interesting, as it leads to chaotic behaviour of the billiard ball.

The user enters the initial coordinates of the billiard ball, the angle of the initial trajectory, and the number of collisions with the walls to simulate. The program then calculates the trajectories of the ball after each collision and displays them in a simplistic 2D render of the table, accomplished using the Matplotlib package.
## Challenges Faced
The biggest issue I faced with this project was managing computational resources; often it takes a minimum of 1000 collisions before the pattern of the trajectories becomes clear. I had to try a number of methods and formulae for calculating these trajectories before I found one, utilising the SciPy package, which allowed for such a large number of trajectories to be calculated in under a second.

---
<sup id="f1">1</sup> A billiard ball moving on a frictionless, pocketless table.