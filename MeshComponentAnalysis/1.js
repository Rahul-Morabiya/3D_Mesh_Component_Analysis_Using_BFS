document.getElementById("analyze-btn").addEventListener("click", () => {
    const dimX = parseInt(document.getElementById("x").value);
    const dimY = parseInt(document.getElementById("y").value);
    const dimZ = parseInt(document.getElementById("z").value);
    const gridInput = document.getElementById("grid").value;
    const gridValues = gridInput.split(",").map(Number);
  
    if (gridValues.length !== dimX * dimY * dimZ) {
      alert("Grid values do not match specified dimensions.");
      return;
    }
  
    // Initialize 3D grid array
    const grid = [];
    for (let i = 0; i < dimX; i++) {
      grid[i] = [];
      for (let j = 0; j < dimY; j++) {
        grid[i][j] = gridValues.slice(i * dimY * dimZ + j * dimZ, i * dimY * dimZ + (j + 1) * dimZ);
      }
    }
  
    const directions = [
      [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]
    ];
  
    function bfs(startX, startY, startZ, componentId) {
      const queue = [[startX, startY, startZ]];
      grid[startX][startY][startZ] = componentId;
  
      while (queue.length > 0) {
        const [cx, cy, cz] = queue.shift();
  
        for (const [dx, dy, dz] of directions) {
          const nx = cx + dx, ny = cy + dy, nz = cz + dz;
  
          // Boundary and connectivity checks
          if (nx >= 0 && nx < dimX && ny >= 0 && ny < dimY && nz >= 0 && nz < dimZ && grid[nx][ny][nz] === 1) {
            grid[nx][ny][nz] = componentId;
            queue.push([nx, ny, nz]);
          }
        }
      }
    }
  
    let componentId = 2; // Start from 2 since 1 is used for initial active cells
    for (let i = 0; i < dimX; i++) {
      for (let j = 0; j < dimY; j++) {
        for (let k = 0; k < dimZ; k++) {
          if (grid[i][j][k] === 1) {
            bfs(i, j, k, componentId);
            componentId++;
          }
        }
      }
    }
  
    const numComponents = componentId - 2;
    document.getElementById("component-count").querySelector("span").textContent = numComponents;
  
    visualizeComponents(grid, numComponents, dimX, dimY, dimZ);
  });
  
  function visualizeComponents(grid, numComponents, x, y, z) {
    const colors = Array.from({ length: numComponents }, () => Math.floor(Math.random() * 0xffffff));
  
    const container = document.getElementById("visualization-container");
    container.innerHTML = "";
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = Math.max(x, y, z) * 2;
  
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
  
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
          const componentId = grid[i][j][k];
          if (componentId > 1) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: colors[componentId - 2] });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(i - x / 2, j - y / 2, k - z / 2);
            scene.add(cube);
          }
        }
      }
    }
  
    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.01;
      scene.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    animate();
  }
