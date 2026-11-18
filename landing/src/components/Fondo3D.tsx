"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

export type Variante3D = "hero" | "cierre";

/**
 * Fondos 3D (Three.js vía React Three Fiber) en los colores de la marca. No cargan nada externo.
 * - "hero": anillo, esferas y cubo alrededor de la tarjeta de Luca, siguen al cursor.
 * - "cierre": icosaedro de alambre y anillo fino, más sobrios, para el llamado final.
 *
 * Coordenadas: cámara en z=7 con fov 45, así que a z=0 se ve aprox. x∈[-5.5, 5.5] en escritorio.
 */

function Pieza({ children, posicion, velocidad = 1 }: { children: React.ReactNode; posicion: [number, number, number]; velocidad?: number }) {
  return (
    <Float speed={velocidad} rotationIntensity={0.5} floatIntensity={1.1} position={posicion}>
      {children}
    </Float>
  );
}

function Material({ color, brillo = 0.18 }: { color: string; brillo?: number }) {
  return <meshStandardMaterial color={color} roughness={0.28} metalness={0.35} emissive={color} emissiveIntensity={brillo} />;
}

function useSeguirCursor(fuerza = 1) {
  const grupo = useRef<Group>(null);
  useFrame((estado, dt) => {
    const g = grupo.current;
    if (!g) return;
    const ox = estado.pointer.x * 0.22 * fuerza;
    const oy = estado.pointer.y * 0.16 * fuerza;
    g.rotation.y += (ox - g.rotation.y) * Math.min(1, dt * 3);
    g.rotation.x += (-oy - g.rotation.x) * Math.min(1, dt * 3);
  });
  return grupo;
}

function useParticulas(n: number, semillaInicial = 7) {
  return useMemo(() => {
    const puntos: [number, number, number][] = [];
    let semilla = semillaInicial;
    const rnd = () => {
      semilla = (semilla * 9301 + 49297) % 233280;
      return semilla / 233280;
    };
    for (let i = 0; i < n; i++) puntos.push([(rnd() - 0.5) * 16, (rnd() - 0.5) * 10, -3 - rnd() * 7]);
    return puntos;
  }, [n, semillaInicial]);
}

function Particulas({ puntos }: { puntos: [number, number, number][] }) {
  return (
    <>
      {puntos.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.03 + (i % 3) * 0.015, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? "#ff9a4d" : "#bcd0ff"} transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

function GrupoHero() {
  const grupo = useSeguirCursor();
  const anillo = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (anillo.current) anillo.current.rotation.z += dt * 0.2;
  });
  const particulas = useParticulas(80);

  return (
    <group ref={grupo}>
      <Pieza posicion={[3.0, 0.1, -3.2]} velocidad={0.7}>
        <mesh ref={anillo} rotation={[1.15, 0.35, 0]}>
          <torusGeometry args={[2.6, 0.26, 32, 140]} />
          <Material color="#3b6cff" />
        </mesh>
      </Pieza>
      <Pieza posicion={[5.1, 2.3, -1.6]} velocidad={1.2}>
        <mesh>
          <sphereGeometry args={[0.6, 48, 48]} />
          <Material color="#ff8a3d" brillo={0.3} />
        </mesh>
      </Pieza>
      <Pieza posicion={[4.6, -2.3, -1.2]} velocidad={1}>
        <RoundedBox args={[0.95, 0.95, 0.95]} radius={0.2} smoothness={4} rotation={[0.5, 0.7, 0]}>
          <Material color="#9cc1ff" />
        </RoundedBox>
      </Pieza>
      <Pieza posicion={[0.4, 2.6, -2.4]} velocidad={1.5}>
        <mesh rotation={[0.3, 0, 1.1]}>
          <capsuleGeometry args={[0.2, 0.7, 8, 24]} />
          <Material color="#dfe8ff" brillo={0.25} />
        </mesh>
      </Pieza>
      <Pieza posicion={[-5.8, 3.1, -3]} velocidad={0.9}>
        <mesh>
          <sphereGeometry args={[0.38, 32, 32]} />
          <Material color="#5b8bff" />
        </mesh>
      </Pieza>
      <Particulas puntos={particulas} />
    </group>
  );
}

function GrupoCierre() {
  const grupo = useSeguirCursor(0.6);
  const ico = useRef<Mesh>(null);
  const anillo = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ico.current) {
      ico.current.rotation.y += dt * 0.25;
      ico.current.rotation.x += dt * 0.1;
    }
    if (anillo.current) anillo.current.rotation.z -= dt * 0.15;
  });
  const particulas = useParticulas(50, 13);

  return (
    <group ref={grupo}>
      {/* Icosaedro de alambre: la red de contactos */}
      <Pieza posicion={[4.4, 0.6, -2.2]} velocidad={0.8}>
        <mesh ref={ico}>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshBasicMaterial color="#7cd0ff" wireframe transparent opacity={0.55} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.0, 0]} />
          <Material color="#2a62f0" brillo={0.35} />
        </mesh>
      </Pieza>
      <Pieza posicion={[-4.8, -1.4, -3]} velocidad={0.6}>
        <mesh ref={anillo} rotation={[1.3, 0.2, 0]}>
          <torusGeometry args={[1.6, 0.08, 24, 100]} />
          <Material color="#ff8a3d" brillo={0.3} />
        </mesh>
      </Pieza>
      <Pieza posicion={[-5.6, 2.4, -2.6]} velocidad={1.1}>
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <Material color="#9cc1ff" />
        </mesh>
      </Pieza>
      <Particulas puntos={particulas} />
    </group>
  );
}

export default function Fondo3D({ variante = "hero" }: { variante?: Variante3D }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <hemisphereLight color="#ffffff" groundColor="#1f4fd8" intensity={0.9} />
        <directionalLight position={[4, 6, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-6, -3, 2]} intensity={14} color="#ff7a29" distance={14} />
        <pointLight position={[6, 4, 3]} intensity={10} color="#7cd0ff" distance={14} />
        {variante === "hero" ? <GrupoHero /> : <GrupoCierre />}
      </Canvas>
    </div>
  );
}
