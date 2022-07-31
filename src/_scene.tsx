import { Canvas } from "@react-three/fiber"
import {
  ACESFilmicToneMapping,
  EquirectangularReflectionMapping,
  FogExp2,
  sRGBEncoding
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { Stats } from "@react-three/drei"
import { EffectComposer, SSAO } from "@react-three/postprocessing"
import { Suspense } from "react"
import { Player } from "./Player"
import { Environment } from "./Environment"

const Effects = () => (
  <Suspense fallback={null}>
    <EffectComposer multisampling={0}>
      <SSAO
        intensity={20}
        radius={0.1}
        luminanceInfluence={0}
        bias={0.035}
        color="rgb(240,190,180"
      />
    </EffectComposer>
  </Suspense>
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
      gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.8)
      camera.near = 0.1
      camera.far = 80
      camera.position.set(0, 15, 20)
      camera.lookAt(0, 0, 0)
      scene.fog = new FogExp2("black", 1 / 80)
      scene.environment = new RGBELoader().load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
        hdr => (hdr.mapping = EquirectangularReflectionMapping)
      )
    }}
  >
    <Environment />
    <Player />
    <axesHelper args={[30]} />
    <Stats />
    <Effects />
  </Canvas>
)
