   ## Pages

   ```
   https://guhcalm.github.io/minimal-boilerplate/dist
   ```

   ## Folder Structure

   ```
   (~) root
   ├── public
   |  └── # Static files
   └── src
      └── # Main app files
   ```

   ## License

   MIT License.

   SSAO -> screen space ambient oclusion
   f0f0f0
   fog args={['white', 60, 110]}
   <ambientLight intensity={1.5} />
   <ContactShadows position={[0, -30, 0]} opacity={0.6} scale={130} blur={1} far={40} />

   <EffectComposer multisampling={0}>
      <SSAO samples={31} radius={0.1} intensity={30} luminanceInfluence={0.1} color="red" />
   </EffectComposer>


   <meshStandardMaterial roughness={0} color="#f0f0f0" />

   <pointLight position={[100, 10, -50]} intensity={20} castShadow />
   <pointLight position={[-100, -100, -100]} intensity={10} color="red" />

   <Environment preset="city" />


   color: "#c0a090", emissive: "red"

   #8a300f

   onCreate={({gl}) => {gl.tonemappingExposure = 1.5}}

   <EffectComposer multisampling={0}>
      <SSAO samples={11} radius={0.1} intensity={20} luminanceInfluence={0.6} color="red" />
      <SSAO samples={21} radius={0.03} intensity={10} luminanceInfluence={0.6} color="red" />
    </EffectComposer>

        <EffectComposer multisampling={8}>
      <SSAO ref={ref} intensity={20} radius={0.1} luminanceInfluence={0} bias={0.035} />
      <Bloom mipmapBlur radius={0.75} luminanceThreshold={0.8} intensity={5} />
    </EffectComposer>



    Layer

    Cryptography
    Key concepts
    hasing
    expriptions

    Hash -> chop && mix -> fixed lentgh , return a digest value 


Genesis
ethers
    Blockchain

    class Block {
      constructor(index, timestamp, data, previousHash = ") {
         this.index = index
         this.timestamp = timestamp
         this.data = data
         this.previousHash = previousHash
         this.hash = ""
      }

      calculateHash() {

      }
    }