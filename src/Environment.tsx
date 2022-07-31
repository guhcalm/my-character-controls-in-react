import { PlaneBufferGeometry } from "three"

const geometry = new PlaneBufferGeometry(300, 300, 50, 50)
geometry.rotateX(-Math.PI / 2)
const { position } = geometry.attributes
position.needsUpdate = true
geometry.computeVertexNormals()
new Array(position.count).fill("").forEach((value, index) => {
  const x = position.getX(index)
  const z = position.getZ(index)
  position.setY(index, 4 * (Math.sin(x / 20) + Math.sin(z / 15)))
})
position.needsUpdate = true
geometry.computeVertexNormals()

export const Environment = () => (
  <mesh geometry={geometry} receiveShadow castShadow>
    <meshStandardMaterial color="#f0f0f0" roughness={0.9} envMapIntensity={1} />
  </mesh>
)
