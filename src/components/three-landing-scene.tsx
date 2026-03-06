"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    THREE?: any;
    gsap?: any;
    ScrollTrigger?: any;
    Lenis?: any;
  }
}

export function ThreeLandingScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let renderer: any;
    let scene: any;
    let camera: any;
    let frame = 0;
    let lenis: any;
    let rafId = 0;

    const init = () => {
      if (!canvasRef.current || !window.THREE || !window.gsap || !window.ScrollTrigger || !window.Lenis) {
        return false;
      }

      const THREE = window.THREE;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const Lenis = window.Lenis;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x070b14, 6, 16);

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 8);

      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const ambient = new THREE.AmbientLight(0xffffff, 0.45);
      scene.add(ambient);

      const pointOne = new THREE.PointLight(0x5be7ff, 18, 20);
      pointOne.position.set(-2.5, 2.5, 4);
      scene.add(pointOne);

      const pointTwo = new THREE.PointLight(0x6e86ff, 16, 20);
      pointTwo.position.set(2.5, -1.5, 3);
      scene.add(pointTwo);

      const matOne = new THREE.MeshStandardMaterial({ color: 0x5be7ff, metalness: 0.45, roughness: 0.25 });
      const matTwo = new THREE.MeshStandardMaterial({ color: 0x6e86ff, metalness: 0.4, roughness: 0.3 });
      const matThree = new THREE.MeshStandardMaterial({ color: 0xa78bfa, metalness: 0.42, roughness: 0.28 });

      const torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.9, 0.28, 180, 24), matOne);
      torusKnot.position.set(-2.8, 1.3, 0);
      scene.add(torusKnot);

      const icosa = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), matTwo);
      icosa.position.set(2.9, 0.4, 0);
      scene.add(icosa);

      const cube = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), matThree);
      cube.position.set(0.2, -2.3, -0.5);
      scene.add(cube);

      gsap.timeline({
        scrollTrigger: {
          trigger: "#service-scroll-track",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      })
        .to(
          torusKnot.rotation,
          {
            x: Math.PI * 2,
            y: Math.PI * 2.2,
            z: Math.PI * 0.8,
          },
          0,
        )
        .to(
          torusKnot.position,
          {
            x: -0.7,
            y: 0.9,
            z: -1,
          },
          0,
        )
        .to(
          torusKnot.scale,
          {
            x: 1.35,
            y: 1.35,
            z: 1.35,
          },
          0,
        )
        .to(
          icosa.rotation,
          {
            x: Math.PI * 2,
            y: Math.PI * 1.9,
            z: Math.PI * 1.2,
          },
          0,
        )
        .to(
          icosa.position,
          {
            x: 0.9,
            y: -0.4,
            z: -1.4,
          },
          0,
        )
        .to(
          cube.rotation,
          {
            x: Math.PI * 2.6,
            y: Math.PI * 1.7,
            z: Math.PI * 1.1,
          },
          0,
        )
        .to(
          cube.position,
          {
            x: -0.2,
            y: -0.8,
            z: -2,
          },
          0,
        )
        .to(
          cube.scale,
          {
            x: 0.85,
            y: 0.85,
            z: 0.85,
          },
          0,
        );

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", onResize);

      const animate = () => {
        frame += 0.006;

        torusKnot.rotation.x += 0.0024;
        torusKnot.rotation.y += 0.0022;
        torusKnot.position.y += Math.sin(frame) * 0.0012;

        icosa.rotation.x += 0.0018;
        icosa.rotation.y -= 0.0021;
        icosa.position.y += Math.cos(frame * 1.2) * 0.0011;

        cube.rotation.x += 0.0017;
        cube.rotation.y += 0.0019;
        cube.position.y += Math.sin(frame * 0.8) * 0.0012;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        window.removeEventListener("resize", onResize);
      };
    };

    let cleanupResize: (() => void) | undefined;
    const interval = setInterval(() => {
      const done = init();
      if (done) {
        cleanupResize = done;
        clearInterval(interval);
      }
    }, 80);

    return () => {
      clearInterval(interval);
      if (cleanupResize) cleanupResize();
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
      if (lenis) lenis.destroy();
      cancelAnimationFrame(rafId);
      if (renderer) renderer.dispose();
      if (scene) scene.clear();
    };
  }, []);

  return (
    <>
      <Script src="https://unpkg.com/three@0.161.0/build/three.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" onLoad={() => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }
      }} />
      <Script src="https://unpkg.com/@studio-freight/lenis@1.0.42/bundled/lenis.min.js" strategy="afterInteractive" />

      <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-screen w-screen" />

      <section id="service-scroll-track" className="relative z-10 pt-32">
        <div className="container mx-auto space-y-24 px-4 pb-24">
          <div className="rounded-3xl border border-white/10 bg-background/55 p-8 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">3D Spatial Systems</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground md:text-6xl">AI-Driven Geospatial Intelligence in Motion</h1>
            <p className="mt-4 max-w-2xl text-muted">Scroll to navigate through animated 3D service objects representing mapping, analysis, and engineering intelligence workflows.</p>
          </div>

          <article className="rounded-3xl border border-white/10 bg-background/55 p-8 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Service Object 01</p>
            <h2 className="mt-2 text-3xl text-foreground">Drone Mapping / TorusKnot Engine</h2>
            <p className="mt-3 text-muted">High-accuracy capture for orthomosaics, terrain layers, and planning-grade base maps for infrastructure and land development projects.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-background/55 p-8 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Service Object 02</p>
            <h2 className="mt-2 text-3xl text-foreground">LiDAR Intelligence / Icosahedron Core</h2>
            <p className="mt-3 text-muted">Dense point-cloud workflows for terrain penetration, classification, and engineering-ready elevation modeling at scale.</p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-background/55 p-8 backdrop-blur-xl md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Service Object 03</p>
            <h2 className="mt-2 text-3xl text-foreground">Site Analytics / Floating Cube Module</h2>
            <p className="mt-3 text-muted">Volumetrics, progress intelligence, and structural inspection overlays that support cost, schedule, and risk decisions.</p>
          </article>
        </div>
      </section>
    </>
  );
}
