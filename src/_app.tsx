import { Suspense } from "react"
import { Layout } from "./components"
import { MyScene } from "./_scene"

export const MyApp = () => (
  <Layout>
    <Suspense fallback={null}>
      <MyScene />
    </Suspense>
  </Layout>
)
