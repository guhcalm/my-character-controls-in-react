import { Canvas } from "@react-three/fiber"
import {
  ACESFilmicToneMapping,
  Color,
  EquirectangularReflectionMapping,
  Fog,
  sRGBEncoding
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { MeshReflectorMaterial, Stats } from "@react-three/drei"
import { Player } from "./Player"
import { Environment } from "./Environment"

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
    <planeBufferGeometry args={[1000, 1000]} />
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

const Clay = () => (
  <mesh castShadow receiveShadow position-y={1}>
    <sphereBufferGeometry args={[1]} />
    <meshStandardMaterial color="white" roughness={1} />
  </mesh>
)

export const MyScene = () => (
  <Canvas
    shadows
    gl={{
      powerPreference: "high-performance",
      logarithmicDepthBuffer: true,
      antialias: false,
      stencil: false,
      alpha: false,
      depth: true
    }}
    onCreated={({ camera, scene, gl }) => {
      gl.toneMapping = ACESFilmicToneMapping
      gl.toneMappingExposure = 1.5
      gl.outputEncoding = sRGBEncoding
      gl.physicallyCorrectLights = true
      gl.shadowMap.enabled = true
      gl.setPixelRatio(Math.min(devicePixelRatio, 2))
      gl.setClearColor(new Color("rgb(43,43,53)"))
      camera.near = 0.1
      camera.far = 120
      camera.position.set(2, 2, 5)
      camera.lookAt(0, 0, 0)
      scene.fog = new Fog("black", 0, 120)
      scene.background = new Color("black")
      new RGBELoader().load("blurry.hdr", hdr => {
        hdr.mapping = EquirectangularReflectionMapping
        scene.environment = hdr
        // scene.background = hdr
      })
      new OrbitControls(camera, gl.domElement).update()
    }}
  >
    <Environment />
    <Player />
    <ambientLight color="rgb(167,140,129)" />
    <ambientLight color="rgb(255,211,153)" intensity={0.5} />
    <directionalLight color="white" position={[-5, 5, 0]} castShadow />
    <directionalLight color="rgb(252,190,180)" position={[0, 5, -5]} />

    <axesHelper args={[30]} />
    <Stats />
  </Canvas>
)
