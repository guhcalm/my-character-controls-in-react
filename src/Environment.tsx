import { MeshReflectorMaterial } from "@react-three/drei"
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
    <MeshReflectorMaterial
      envMapIntensity={0.5}
      dithering
      color="white"
      metalness={0}
      roughness={1}
      blur={[1000, 400]}
      mixBlur={30}
      mixStrength={80}
      mixContrast={1}
      resolution={1024}
      mirror={0}
      depthScale={0.01}
      minDepthThreshold={0.9}
      maxDepthThreshold={1}
      depthToBlurRatioBias={0.25}
      reflectorOffset={0.3}
    />
  </mesh>
)
