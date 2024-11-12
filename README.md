# 3D Mesh Component Analysis Project Using BFS
This project involves building an interactive 3D application to perform component analysis on a 3D grid or "mesh." The application uses Three.js to render a visual representation of the grid, where each cell in the grid can be either occupied (1) or empty (0). The primary goal is to identify and visually highlight each distinct connected component in the 3D grid.

A connected component is a group of occupied cells (1s) that are adjacent in any direction (up, down, left, right, forward, or backward). This project allows users to input their own 3D grids and view the results of the component analysis in a visually engaging 3D environment.

## Images :-
![image](https://github.com/user-attachments/assets/b38f4e82-b92e-431e-b871-16813ca8d319)
![image](https://github.com/user-attachments/assets/d5c7b36e-bf78-4a2e-b80f-9924686ccdcc)


## Features
3D Visualization of the Grid: Users can see a 3D rendering of the grid they defined. Each cell in the grid appears as a small cube, forming a larger 3D structure.

### Component Analysis with Color Coding: Using a breadth-first search (BFS) algorithm, the program identifies and groups connected cells into components. Each component is assigned a unique color to distinguish it from other components, making it easy to visually differentiate clusters of connected cells.

### Dynamic User Input: Users can specify grid dimensions (rows, columns, and depth) and paste in their own grid data to analyze any custom 3D mesh. The application handles validation and parsing of the input data to ensure compatibility.

## Project Workflow
Grid Setup: The user inputs grid dimensions and data. The application then initializes a 3D array with this data.

Component Detection: A BFS algorithm identifies and labels each unique component within the 3D grid. The adjacency logic considers all six directions (left, right, up, down, forward, backward) for connected cells.

Rendering the 3D Mesh: Using Three.js, the application creates and renders a cube for each occupied cell, applying a unique color to each detected component for clarity. The grid is centered within the scene for optimal viewing.

User Interaction and Results Display: The application shows the total number of connected components identified in the grid. Users can freely rotate and zoom the 3D scene to inspect each component from different angles.

Technology Stack
HTML/CSS/JavaScript: Provides a user-friendly web interface for inputs and displays results.
Three.js: Handles the 3D rendering, allowing for dynamic visualization of the mesh and easy component color-coding.
BFS Algorithm: Core algorithm used for detecting connected components within the 3D grid.
Applications
This project can be adapted or extended for various applications, such as:

3D modeling and spatial analysis
Cluster detection in medical imaging or geospatial data
Structural analysis in computational geometry and materials science
The 3D Mesh Component Analysis Project offers a comprehensive tool for both visualization and analysis, providing a deeper understanding of spatial structures through an intuitive and interactive interface.
