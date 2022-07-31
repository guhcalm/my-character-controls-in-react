import { Canvas } from "@react-three/fiber"
import {
  ACESFilmicToneMapping,
  EquirectangularReflectionMapping,
  FogExp2,
  sRGBEncoding
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { Stats } from "@react-three/drei"
import { EffectComposer, SSR } from "@react-three/postprocessing"
import { Player } from "./Player"
import { Environment } from "./Environment"

export const MyScene = () => (
  <Canvas
    gl={{
      powerPreference: "high-performance",
      logarithmicDepthBuffer: true,
      antialias: false,
      stencil: false,
      alpha: false
    }}
    onCreated={({ camera, scene, gl }) => {
      gl.toneMapping = ACESFilmicToneMapping
      gl.toneMappingExposure = 1.5
      gl.outputEncoding = sRGBEncoding
      gl.physicallyCorrectLights = true
      gl.shadowMap.enabled = true
      gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.8)
      camera.near = 0.1
      camera.far = 100
      camera.position.set(0, 15, 20)
      camera.lookAt(0, 0, 0)
      scene.fog = new FogExp2("black", 1 / 100)
      scene.environment = new RGBELoader().load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
        hdr => (hdr.mapping = EquirectangularReflectionMapping)
      )
    }}
  >
    <pointLight
      position={[0, 30, 0]}
      color="rgb(240,190,180)"
      intensity={130}
      castShadow
    />
    <Environment />
    <Player />
    <axesHelper args={[30]} />
    <Stats />
  </Canvas>
)
