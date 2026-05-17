export class WebGLRenderer {
  domElement = document.createElement("div");
  setSize() {}
  render() {}
  dispose() {}
  setAnimationLoop() {}
  setClearColor() {}
}

export class Scene {
  add() {}
  remove() {}
}

export class PerspectiveCamera {
  position = { set: () => {}, x: 0, y: 0, z: 0 };
  lookAt() {}
  aspect = 1;
  updateProjectionMatrix() {}
}

export class AmbientLight {}
export class DirectionalLight {
  position = { set: () => {} };
  shadow = {
    mapSize: { width: 0, height: 0 },
    camera: { near: 0, far: 0, left: 0, right: 0, top: 0, bottom: 0 }
  };
}

export class Mesh {
  position = { set: () => {}, x: 0, y: 0, z: 0 };
  rotation = { x: 0, y: 0, z: 0 };
  scale = { set: () => {} };
  userData = {};
}

export class BoxGeometry {}
export class MeshStandardMaterial {}
export class MeshBasicMaterial {}
export class Color {
  set() {}
}
export class Vector3 {
  set() {}
}
export class Group {
  add() {}
  remove() {}
  position = { set: () => {} };
}
export class Object3D {
  add() {}
  remove() {}
}

export class Raycaster {
  setFromCamera() {}
  intersectObjects() { return []; }
}

const threeMock = {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  MeshBasicMaterial,
  Color,
  Vector3,
  Group,
  Object3D,
  Raycaster,
};

export default threeMock;