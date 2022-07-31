import { MeshStandardMaterial } from "three"

const material = new MeshStandardMaterial({ roughness: 0 })
material.onBeforeCompile = shader => {
  shader.fragmentShader = shader.fragmentShader.replace(
    "vec4 diffuseColor = vec4( diffuse, opacity );",
    "vec4 diffuseColor = vec4( vNormal*.5 +.5, opacity );"
  )
}

export { material as NormalMaterial }
