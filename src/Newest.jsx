/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 ../public/newest.glb
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Newest(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/news.glb')
  
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Dance.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[1.5, 0, 0]} scale={0.03}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch14" geometry={nodes.Ch14.geometry} material={materials["Ch14_Body.006"]} skeleton={nodes.Ch14.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/news.glb')
