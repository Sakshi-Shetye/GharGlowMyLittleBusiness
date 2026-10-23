import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Product } from '../types';
import { Sparkles, RotateCw, Flame, Eye, Volume2, VolumeX, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { buildProductWhatsAppMessage, buildWhatsAppLink } from '../config/siteConfig';

interface ProductStudio3DProps {
  products: Product[];
  selectedProductId?: string;
  onSelectProduct?: (productId: string) => void;
  onOpenQuickOrder?: (product: Product) => void;
}

export const ProductStudio3D: React.FC<ProductStudio3DProps> = ({
  products,
  selectedProductId,
  onSelectProduct,
  onOpenQuickOrder
}) => {
  // 7 core 3D interactive products as explicitly specified
  const studioProducts = products.filter(p =>
    ['panti-diya', 'rose-floating', 'ladoo-candles', 'rose-tealight', 'green-rose-vati', 'kewra-vati', 'chandan-vati'].includes(p.id)
  );

  const [activeProductId, setActiveProductId] = useState<string>(
    selectedProductId || (studioProducts[0]?.id ?? 'panti-diya')
  );

  useEffect(() => {
    if (selectedProductId) {
      setActiveProductId(selectedProductId);
    }
  }, [selectedProductId]);

  const activeProduct = products.find(p => p.id === activeProductId) || studioProducts[0];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isLit, setIsLit] = useState<boolean>(false);
  const [isMatchstickActive, setIsMatchstickActive] = useState<boolean>(true);
  const [isDraggingMatch, setIsDraggingMatch] = useState<boolean>(false);
  const [matchPos, setMatchPos] = useState<{ x: number; y: number }>({ x: 80, y: 120 });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [ignitionFeedback, setIgnitionFeedback] = useState<string | null>(null);

  // References to 3D internal objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const productGroupRef = useRef<THREE.Group | null>(null);
  const candleFlameRef = useRef<THREE.Group | null>(null);
  const candleLightRef = useRef<THREE.PointLight | null>(null);
  const wickPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.4, 0));
  const animationFrameRef = useRef<number | null>(null);

  // Play gentle sound with Web Audio API for flame lighting/crackle
  const playIgniteSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      // Gentle match whoosh + gentle sizzle
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {
      // Audio autoplay policy
    }
  }, [soundEnabled]);

  // Build true-to-life 3D geometries for each of the 7 products
  const createProductMesh = useCallback((modelType: string): { group: THREE.Group; wickPos: THREE.Vector3 } => {
    const group = new THREE.Group();
    let wickTipPos = new THREE.Vector3(0, 0.45, 0);

    // Earthen Pedestal Platter
    const brassPlateGeo = new THREE.CylinderGeometry(1.6, 1.45, 0.08, 48);
    const brassPlateMat = new THREE.MeshStandardMaterial({
      color: 0x2e1a14,
      metalness: 0.65,
      roughness: 0.35
    });
    const brassPlate = new THREE.Mesh(brassPlateGeo, brassPlateMat);
    brassPlate.position.y = -0.04;
    brassPlate.receiveShadow = true;
    group.add(brassPlate);

    // Inner reflective rim
    const rimGeo = new THREE.TorusGeometry(1.48, 0.04, 16, 64);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xc8984a,
      metalness: 0.8,
      roughness: 0.25
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.01;
    group.add(rim);

    if (modelType === 'panti-diya') {
      // 1. Traditional Pure-Ghee Panti Diya
      // Brown earthenware bowl shape with pinched beak tip + solid yellow ghee + red cotton wick
      const diyaPoints: THREE.Vector2[] = [
        new THREE.Vector2(0.05, 0.0),
        new THREE.Vector2(0.45, 0.02),
        new THREE.Vector2(0.72, 0.18),
        new THREE.Vector2(0.82, 0.38),
        new THREE.Vector2(0.80, 0.42),
        new THREE.Vector2(0.68, 0.42),
        new THREE.Vector2(0.60, 0.28),
        new THREE.Vector2(0.40, 0.12),
        new THREE.Vector2(0.05, 0.12)
      ];
      const diyaGeo = new THREE.LatheGeometry(diyaPoints, 36);
      const diyaMat = new THREE.MeshStandardMaterial({
        color: 0x82442b, // Terracotta brown clay
        roughness: 0.85,
        metalness: 0.08
      });
      const diyaMesh = new THREE.Mesh(diyaGeo, diyaMat);
      diyaMesh.castShadow = true;
      diyaMesh.receiveShadow = true;
      group.add(diyaMesh);

      // Pinched beak spout
      const spoutGeo = new THREE.ConeGeometry(0.24, 0.55, 16);
      const spout = new THREE.Mesh(spoutGeo, diyaMat);
      spout.rotation.z = -Math.PI / 3.2;
      spout.position.set(0.65, 0.28, 0);
      spout.scale.set(0.7, 1.2, 0.5);
      group.add(spout);

      // Solid yellow pure ghee fill
      const gheeGeo = new THREE.CylinderGeometry(0.64, 0.45, 0.22, 32);
      const gheeMat = new THREE.MeshStandardMaterial({
        color: 0xf5cf38, // Golden-yellow pure clarified cow ghee
        roughness: 0.38,
        metalness: 0.05
      });
      const ghee = new THREE.Mesh(gheeGeo, gheeMat);
      ghee.position.y = 0.25;
      group.add(ghee);

      // Traditional red cotton wick curved towards spout
      const wickCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.05, 0.26, 0),
        new THREE.Vector3(0.35, 0.32, 0),
        new THREE.Vector3(0.62, 0.42, 0),
        new THREE.Vector3(0.68, 0.52, 0)
      ]);
      const wickGeo = new THREE.TubeGeometry(wickCurve, 20, 0.035, 8, false);
      const wickMat = new THREE.MeshStandardMaterial({
        color: 0xb51e2b, // Traditional crimson red wick
        roughness: 0.95
      });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.castShadow = true;
      group.add(wick);

      wickTipPos = new THREE.Vector3(0.68, 0.54, 0);
    } else if (modelType === 'rose-floating') {
      // 2. Sculpted Rose-Design Floating Candle
      // Concentric layered petals in warm golden amber & creamy petals
      const roseGroup = new THREE.Group();
      const roseMat = new THREE.MeshStandardMaterial({
        color: 0xebb438, // Warm marigold-yellow petal wax
        roughness: 0.45,
        metalness: 0.05
      });
      const innerPetalMat = new THREE.MeshStandardMaterial({
        color: 0xf9d877,
        roughness: 0.35,
        metalness: 0.02
      });

      // Central core
      const coreGeo = new THREE.CylinderGeometry(0.25, 0.35, 0.32, 24);
      const core = new THREE.Mesh(coreGeo, innerPetalMat);
      core.position.y = 0.16;
      roseGroup.add(core);

      // Outer petal rings
      const numOuterPetals = 7;
      for (let i = 0; i < numOuterPetals; i++) {
        const angle = (i / numOuterPetals) * Math.PI * 2;
        const petalGeo = new THREE.SphereGeometry(0.34, 16, 12, 0, Math.PI * 1.2, 0, Math.PI * 0.6);
        const petal = new THREE.Mesh(petalGeo, roseMat);
        petal.scale.set(1.1, 0.7, 0.35);
        petal.rotation.x = Math.PI / 2.3;
        petal.rotation.z = angle + 0.3;
        petal.position.set(Math.cos(angle) * 0.52, 0.18, Math.sin(angle) * 0.52);
        petal.castShadow = true;
        roseGroup.add(petal);
      }

      // Inner petal ring
      const numInner = 5;
      for (let j = 0; j < numInner; j++) {
        const angle = (j / numInner) * Math.PI * 2 + 0.4;
        const petalGeo = new THREE.SphereGeometry(0.24, 14, 10, 0, Math.PI * 1.1, 0, Math.PI * 0.65);
        const petal = new THREE.Mesh(petalGeo, innerPetalMat);
        petal.scale.set(0.9, 0.8, 0.3);
        petal.rotation.x = Math.PI / 2.6;
        petal.rotation.z = angle;
        petal.position.set(Math.cos(angle) * 0.28, 0.26, Math.sin(angle) * 0.28);
        roseGroup.add(petal);
      }

      // Central cotton wick
      const wickGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.22, 8);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0xf5f0eb, roughness: 0.9 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.y = 0.38;
      roseGroup.add(wick);

      group.add(roseGroup);
      wickTipPos = new THREE.Vector3(0, 0.48, 0);
    } else if (modelType === 'ladoo') {
      // 3. Pink Motichoor Ladoo Candle
      // Spherical boondi beaded cluster + festive pink-saffron wax
      const ladooGroup = new THREE.Group();
      const ladooMat = new THREE.MeshStandardMaterial({
        color: 0xdf6d58, // Festive pinkish-orange Motichoor wax
        roughness: 0.65,
        metalness: 0.05
      });

      // Base sphere
      const baseGeo = new THREE.SphereGeometry(0.55, 32, 24);
      const baseMesh = new THREE.Mesh(baseGeo, ladooMat);
      baseMesh.scale.set(1.05, 0.95, 1.05);
      baseMesh.position.y = 0.52;
      baseMesh.castShadow = true;
      ladooGroup.add(baseMesh);

      // Procedural boondi beads on surface
      const beadGeo = new THREE.SphereGeometry(0.065, 8, 8);
      const beadMat = new THREE.MeshStandardMaterial({
        color: 0xef886e,
        roughness: 0.4
      });
      for (let k = 0; k < 42; k++) {
        const phi = Math.acos(-1 + (2 * k) / 42);
        const theta = Math.sqrt(42 * Math.PI) * phi;
        const bead = new THREE.Mesh(beadGeo, beadMat);
        bead.position.set(
          0.54 * Math.cos(theta) * Math.sin(phi),
          0.52 + 0.48 * Math.cos(phi),
          0.54 * Math.sin(theta) * Math.sin(phi)
        );
        ladooGroup.add(bead);
      }

      // Central wick at apex
      const wickGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.24, 8);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.y = 1.06;
      ladooGroup.add(wick);

      group.add(ladooGroup);
      wickTipPos = new THREE.Vector3(0, 1.18, 0);
    } else if (modelType === 'rose-tealight') {
      // 4. Rose-Scented Tea-Light Candle
      // Silver aluminum tea cup + blush-pink wax + central wick
      const cupGeo = new THREE.CylinderGeometry(0.72, 0.70, 0.38, 36, 1, true);
      const cupMat = new THREE.MeshStandardMaterial({
        color: 0xd8dce0,
        metalness: 0.92,
        roughness: 0.22,
        side: THREE.DoubleSide
      });
      const cup = new THREE.Mesh(cupGeo, cupMat);
      cup.position.y = 0.19;
      group.add(cup);

      // Cup base
      const cupBaseGeo = new THREE.CircleGeometry(0.70, 36);
      const cupBase = new THREE.Mesh(cupBaseGeo, cupMat);
      cupBase.rotation.x = Math.PI / 2;
      group.add(cupBase);

      // Pink wax fill
      const waxGeo = new THREE.CylinderGeometry(0.71, 0.71, 0.34, 36);
      const waxMat = new THREE.MeshStandardMaterial({
        color: 0xee7f96, // Blush pink rose wax
        roughness: 0.35,
        metalness: 0.02
      });
      const wax = new THREE.Mesh(waxGeo, waxMat);
      wax.position.y = 0.18;
      group.add(wax);

      // Wick with metallic eyelet
      const eyeletGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.02, 16);
      const eyelet = new THREE.Mesh(eyeletGeo, cupMat);
      eyelet.position.y = 0.35;
      group.add(eyelet);

      const wickGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.18, 8);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.y = 0.44;
      group.add(wick);

      wickTipPos = new THREE.Vector3(0, 0.52, 0);
    } else if (modelType === 'star-vati') {
      // 5. Star-Shaped Rose Pure-Ghee Ful Vati (Mint-Green)
      const starShape = new THREE.Shape();
      const points = 5;
      const outerR = 0.65;
      const innerR = 0.34;
      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) starShape.moveTo(x, y);
        else starShape.lineTo(x, y);
      }
      starShape.closePath();

      const extrudeSettings = {
        depth: 0.38,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.04,
        bevelThickness: 0.04
      };
      const starGeo = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
      const starMat = new THREE.MeshStandardMaterial({
        color: 0x76b583, // Mint-green rose pure ghee
        roughness: 0.45,
        metalness: 0.05
      });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.rotation.x = -Math.PI / 2;
      starMesh.position.y = 0.02;
      starMesh.castShadow = true;
      group.add(starMesh);

      // Star-center cotton wick
      const wickCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.42, 0),
        new THREE.Vector3(0.03, 0.55, 0.02),
        new THREE.Vector3(0.01, 0.68, 0.05)
      ]);
      const wickGeo = new THREE.TubeGeometry(wickCurve, 12, 0.03, 8, false);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0xeee9e0, roughness: 0.95 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      group.add(wick);

      wickTipPos = new THREE.Vector3(0.01, 0.70, 0.05);
    } else if (modelType === 'square-kewra') {
      // 6. Pale-Yellow Square Kewra Ful Vati
      const boxGeo = new THREE.BoxGeometry(0.85, 0.42, 0.85, 8, 8, 8);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xf1df88, // Pale-yellow kewra ghee
        roughness: 0.42,
        metalness: 0.03
      });
      const box = new THREE.Mesh(boxGeo, boxMat);
      box.position.y = 0.22;
      box.castShadow = true;
      group.add(box);

      // Center indent pool
      const poolGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.06, 24);
      const poolMat = new THREE.MeshStandardMaterial({
        color: 0xe2ce6e,
        roughness: 0.3
      });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.y = 0.42;
      group.add(pool);

      // Upright curved cotton wick
      const wickGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.26, 8);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0xf4eedb, roughness: 0.9 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.set(0.02, 0.52, 0);
      wick.rotation.z = -0.15;
      group.add(wick);

      wickTipPos = new THREE.Vector3(0.04, 0.65, 0);
    } else {
      // 7. Orange/Peach Square Chandan Ful Vati
      const boxGeo = new THREE.BoxGeometry(0.88, 0.44, 0.88, 8, 8, 8);
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xefa25c, // Warm peach-orange chandan ghee
        roughness: 0.48,
        metalness: 0.04
      });
      const box = new THREE.Mesh(boxGeo, boxMat);
      box.position.y = 0.23;
      box.castShadow = true;
      group.add(box);

      // Upright cotton wick
      const wickGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.28, 8);
      const wickMat = new THREE.MeshStandardMaterial({ color: 0xf6f0e4, roughness: 0.9 });
      const wick = new THREE.Mesh(wickGeo, wickMat);
      wick.position.set(0.01, 0.55, 0.01);
      wick.rotation.x = 0.12;
      group.add(wick);

      wickTipPos = new THREE.Vector3(0.01, 0.69, 0.02);
    }

    return { group, wickPos: wickTipPos };
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x160f1c); // Dark atmospheric evening aubergine
    scene.fog = new THREE.FogExp2(0x160f1c, 0.12);

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(2.4, 2.2, 3.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 1.6;
    controls.maxDistance = 6.0;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // Don't go below floor
    controlsRef.current = controls;

    // Ambient evening lighting
    const ambientLight = new THREE.AmbientLight(0x45283c, 0.85);
    scene.add(ambientLight);

    // Warm overhead rim spotlight
    const topSpot = new THREE.SpotLight(0xffecd0, 1.6);
    topSpot.position.set(3, 5, 2);
    topSpot.angle = Math.PI / 5;
    topSpot.penumbra = 0.8;
    topSpot.castShadow = true;
    scene.add(topSpot);

    // Subtle side cool rim
    const sideRim = new THREE.DirectionalLight(0x7c5a7a, 0.6);
    sideRim.position.set(-3, 2, -2);
    scene.add(sideRim);

    // Candle flame light source (dynamic point light)
    const candlePointLight = new THREE.PointLight(0xff9d3b, 0, 4.5, 1.8);
    candlePointLight.castShadow = true;
    candleLightRef.current = candlePointLight;
    scene.add(candlePointLight);

    // Candle flame mesh group
    const flameGroup = new THREE.Group();
    // Inner core flame
    const coreFlameGeo = new THREE.ConeGeometry(0.06, 0.22, 16);
    const coreFlameMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreFlame = new THREE.Mesh(coreFlameGeo, coreFlameMat);
    coreFlame.position.y = 0.11;
    flameGroup.add(coreFlame);

    // Outer warm amber flame
    const outerFlameGeo = new THREE.ConeGeometry(0.12, 0.38, 18);
    const outerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xff8811,
      transparent: true,
      opacity: 0.88
    });
    const outerFlame = new THREE.Mesh(outerFlameGeo, outerFlameMat);
    outerFlame.position.y = 0.18;
    flameGroup.add(outerFlame);

    // Halo glow
    const haloGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffaa33,
      transparent: true,
      opacity: 0.25
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.position.y = 0.16;
    flameGroup.add(halo);

    flameGroup.visible = false;
    candleFlameRef.current = flameGroup;
    scene.add(flameGroup);

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Render loop with flame flicker
    let clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      controls.update();

      // Flame dance flicker when lit
      if (candleFlameRef.current && candleLightRef.current && flameGroup.visible) {
        const flicker = Math.sin(elapsed * 18) * 0.05 + Math.cos(elapsed * 27) * 0.04;
        candleFlameRef.current.scale.set(1 + flicker * 0.4, 1 + flicker * 0.8, 1 + flicker * 0.4);
        candleFlameRef.current.rotation.z = Math.sin(elapsed * 12) * 0.08;
        candleLightRef.current.intensity = 2.4 + flicker * 0.6;
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  // Update product mesh when activeProductId changes
  useEffect(() => {
    if (!sceneRef.current || !activeProduct) return;
    const scene = sceneRef.current;

    // Remove old product group
    if (productGroupRef.current) {
      scene.remove(productGroupRef.current);
    }

    const { group, wickPos } = createProductMesh(activeProduct.modelType);
    productGroupRef.current = group;
    wickPosRef.current = wickPos;
    scene.add(group);

    // Position flame and light at the wick
    if (candleFlameRef.current) {
      candleFlameRef.current.position.copy(wickPos);
    }
    if (candleLightRef.current) {
      candleLightRef.current.position.copy(wickPos).add(new THREE.Vector3(0, 0.15, 0));
    }

    // Reset flame visibility if unlit
    if (!isLit) {
      if (candleFlameRef.current) candleFlameRef.current.visible = false;
      if (candleLightRef.current) candleLightRef.current.intensity = 0;
    } else {
      if (candleFlameRef.current) candleFlameRef.current.visible = true;
      if (candleLightRef.current) candleLightRef.current.intensity = 2.5;
    }
  }, [activeProductId, activeProduct, createProductMesh, isLit]);

  // Sync isLit state with 3D flame and light
  useEffect(() => {
    if (candleFlameRef.current && candleLightRef.current) {
      if (isLit) {
        candleFlameRef.current.visible = true;
        candleLightRef.current.intensity = 2.5;
      } else {
        candleFlameRef.current.visible = false;
        candleLightRef.current.intensity = 0;
      }
    }
  }, [isLit]);

  // Convert 3D wick position to 2D screen coordinates to check matchstick collision
  const checkMatchstickWickCollision = useCallback((screenX: number, screenY: number) => {
    if (!cameraRef.current || !containerRef.current) return false;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const camera = cameraRef.current;

    // Clone wick position and project to NDC [-1, 1]
    const projected = wickPosRef.current.clone().project(camera);

    // Convert NDC to container pixels
    const wickScreenX = ((projected.x + 1) * 0.5) * rect.width;
    const wickScreenY = ((-projected.y + 1) * 0.5) * rect.height;

    // Check distance between match tip (matchPos) and wick
    const dist = Math.hypot(screenX - wickScreenX, screenY - wickScreenY);

    // Distance threshold in screen pixels (~55px)
    return dist < 55;
  }, []);

  // Matchstick Pointer Drag Events
  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsDraggingMatch(true);
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMatchPos({ x, y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingMatch) return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(10, Math.min(rect.width - 10, e.clientX - rect.left));
    const y = Math.max(10, Math.min(rect.height - 10, e.clientY - rect.top));
    setMatchPos({ x, y });

    // Check collision with wick tip
    if (!isLit && checkMatchstickWickCollision(x, y)) {
      setIsLit(true);
      playIgniteSound();
      setIgnitionFeedback('✨ Sacred Flame Ignited!');
      setTimeout(() => setIgnitionFeedback(null), 3500);
    }
  };

  const handlePointerUp = () => {
    setIsDraggingMatch(false);
  };

  // Preset Camera Angles
  const setCameraView = (view: 'front' | 'top' | 'side' | 'reset') => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (view === 'front') {
      camera.position.set(0, 1.4, 3.4);
    } else if (view === 'top') {
      camera.position.set(0, 3.8, 0.4);
    } else if (view === 'side') {
      camera.position.set(3.4, 1.4, 0);
    } else {
      camera.position.set(2.4, 2.2, 3.2);
    }
    controls.target.set(0, 0.35, 0);
    controls.update();
  };

  // Direct WhatsApp order for this 3D-inspected product
  const handleOrderWhatsApp = () => {
    if (!activeProduct) return;
    const defaultPack = activeProduct.packOptions[0]?.label || 'Standard Pack';
    const priceText = activeProduct.priceDisplay || 'Ask for Price';
    const message = buildProductWhatsAppMessage(
      activeProduct.name,
      activeProduct.categoryLabel,
      defaultPack,
      1,
      priceText,
      'Inspected via 3D Interactive Studio'
    );
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="interactive-3d" className="relative py-20 bg-[#160F1C] text-[#FAF7F2] overflow-hidden">
      {/* Background ambient lighting halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#6B283A]/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-[#D97706]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C182B] border border-[#522946] rounded-full text-xs text-[#E8A598] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Signature Interactive Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-tight mb-3">
            Light a Candle with Matchstick
          </h2>
          <p className="font-serif italic text-xl text-[#F9D2C6] mb-3">
            “Experience the Sacred Glow.”
          </p>
          <p className="text-sm sm:text-base text-[#D4C3D0] max-w-2xl mx-auto leading-relaxed">
            Bring a little warmth to the moment. Drag the burning match towards the wick to watch the glow come alive, or drag across 360° to inspect handcrafted details.
          </p>
        </div>

        {/* Product Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {studioProducts.map(prod => {
            const isSelected = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                onClick={() => {
                  setActiveProductId(prod.id);
                  if (onSelectProduct) onSelectProduct(prod.id);
                }}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E8998D] text-[#2C101B] font-semibold shadow-md shadow-[#E8998D]/20 scale-105'
                    : 'bg-[#25172A] text-[#D8C7D5] hover:bg-[#341F3A] hover:text-[#FAF7F2] border border-[#3E2344]'
                }`}
              >
                {prod.name}
              </button>
            );
          })}
        </div>

        {/* Main 3D Studio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#1F1424] border border-[#3E2344] rounded-3xl p-4 sm:p-6 shadow-2xl relative">
          {/* Left / Center: Interactive 3D Viewport with Matchstick */}
          <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="lg:col-span-8 relative h-[440px] sm:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#130B17] to-[#1C1221] select-none touch-none"
          >
            <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

            {/* Drag Instructions Floating Badge */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-1.5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58BA0] font-medium bg-[#1F1424]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#3E2344]">
                360° Drag to Rotate · Scroll to Zoom
              </span>
              {isMatchstickActive && (
                <span className="text-[11px] text-[#F9D2C6] bg-[#3B192E]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#6B283A]/60 animate-pulse">
                  🕯️ Drag match to wick to light!
                </span>
              )}
            </div>

            {/* Sound Mute & Camera Controls Overlay */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute sound' : 'Enable crackle sound'}
                className="p-2 bg-[#25172A]/80 backdrop-blur-md hover:bg-[#3E2344] text-[#D4C3D0] rounded-lg border border-[#3E2344] transition-colors"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F59E0B]" /> : <VolumeX className="w-4 h-4 text-[#8C7688]" />}
              </button>
              <button
                onClick={() => setCameraView('reset')}
                title="Reset Camera"
                className="p-2 bg-[#25172A]/80 backdrop-blur-md hover:bg-[#3E2344] text-[#D4C3D0] rounded-lg border border-[#3E2344] transition-colors"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            {/* Camera View Angle Buttons */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-[#1F1424]/90 backdrop-blur-md px-2 py-1.5 rounded-xl border border-[#3E2344]">
              <span className="text-[10px] text-[#8C7688] uppercase tracking-wider px-1">Angle:</span>
              <button
                onClick={() => setCameraView('front')}
                className="px-2 py-0.5 text-xs text-[#D8C7D5] hover:text-white rounded hover:bg-[#3E2344] transition-colors"
              >
                Front
              </button>
              <button
                onClick={() => setCameraView('side')}
                className="px-2 py-0.5 text-xs text-[#D8C7D5] hover:text-white rounded hover:bg-[#3E2344] transition-colors"
              >
                Side
              </button>
              <button
                onClick={() => setCameraView('top')}
                className="px-2 py-0.5 text-xs text-[#D8C7D5] hover:text-white rounded hover:bg-[#3E2344] transition-colors"
              >
                Top
              </button>
            </div>

            {/* Lighting State Status Pill */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => {
                  const nextState = !isLit;
                  setIsLit(nextState);
                  if (nextState) playIgniteSound();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium backdrop-blur-md transition-all shadow-lg ${
                  isLit
                    ? 'bg-[#B84A62] text-white hover:bg-[#9E3E53] border border-[#E8998D]/40'
                    : 'bg-[#D97706] text-white hover:bg-[#B45309] border border-[#FBBF24]/40 animate-bounce'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${isLit ? 'text-[#FDE047]' : 'text-white'}`} />
                <span>{isLit ? 'Extinguish Flame' : 'Light Flame (Click)'}</span>
              </button>
            </div>

            {/* Interactive Burning Matchstick (Draggable) */}
            {isMatchstickActive && (
              <div
                onPointerDown={handlePointerDown}
                style={{
                  transform: `translate(${matchPos.x - 12}px, ${matchPos.y - 12}px)`,
                  cursor: isDraggingMatch ? 'grabbing' : 'grab'
                }}
                className="absolute top-0 left-0 z-30 transition-shadow duration-75 select-none"
              >
                <div className="relative group">
                  {/* Glowing match flame */}
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <div className="absolute w-5 h-7 bg-gradient-to-t from-[#EF4444] via-[#F59E0B] to-[#FEF08A] rounded-full blur-[1px] animate-pulse" />
                    <div className="absolute w-2 h-4 bg-white rounded-full blur-[0.5px]" />
                    <div className="w-2.5 h-2.5 bg-[#450A0A] rounded-full relative z-10 -bottom-2" />
                  </div>
                  {/* Wooden match stick */}
                  <div className="w-1.5 h-16 bg-gradient-to-b from-[#C29B72] to-[#8C6239] rounded-b-sm shadow-md ml-2.5 origin-top rotate-[-18deg]" />
                  {/* Floating tooltip */}
                  {!isDraggingMatch && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-[10px] text-[#FDE047] px-2 py-0.5 rounded shadow pointer-events-none">
                      Drag me
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Ignition Success Toast */}
            {ignitionFeedback && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#2A1325]/95 border border-[#E8998D] text-[#FAF7F2] px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" />
                <span className="font-serif text-base">{ignitionFeedback}</span>
              </div>
            )}
          </div>

          {/* Right Column: Real Photo Verification & Product Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              {/* Product Category Tag */}
              <div className="flex items-center justify-between text-xs text-[#A58BA0] mb-2">
                <span>{activeProduct.categoryLabel}</span>
                <span className="text-[#E8998D] font-mono font-medium">3D Studio Model</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-serif text-2xl text-[#FAF7F2] font-semibold leading-tight mb-2">
                {activeProduct.name}
              </h3>
              <p className="text-xs text-[#C8B6C5] leading-relaxed mb-4">
                {activeProduct.shortDesc}
              </p>

              {/* Real Authoritative Photograph Inspection */}
              <div className="bg-[#180E1C] border border-[#3E2344] rounded-xl p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#D8C7D5]">
                    <Eye className="w-3.5 h-3.5 text-[#E8998D]" />
                    <span className="font-medium">Original Authentic Photograph</span>
                  </div>
                  <span className="text-[10px] text-[#A58BA0] bg-[#2C182B] px-1.5 py-0.5 rounded">
                    Real Product
                  </span>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] text-[#9A8195] mt-1.5 italic">
                  Model geometry and wick alignment crafted directly from this authentic product photo.
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                <div className="bg-[#241628] p-2.5 rounded-lg border border-[#351D39]">
                  <span className="text-[10px] text-[#9A8195] block uppercase">Standard Pack</span>
                  <span className="text-[#FAF7F2] font-medium">{activeProduct.defaultPack}</span>
                </div>
                <div className="bg-[#241628] p-2.5 rounded-lg border border-[#351D39]">
                  <span className="text-[10px] text-[#9A8195] block uppercase">Price</span>
                  <span className="text-[#FBBF24] font-semibold text-sm">{activeProduct.priceDisplay || 'Ask for Price'}</span>
                </div>
                {activeProduct.fragranceNotes && (
                  <div className="col-span-2 bg-[#241628] p-2.5 rounded-lg border border-[#351D39]">
                    <span className="text-[10px] text-[#9A8195] block uppercase">Fragrance / Notes</span>
                    <span className="text-[#D8C7D5]">{activeProduct.fragranceNotes}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2 border-t border-[#351D39]">
              <button
                onClick={handleOrderWhatsApp}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0E7266] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {onOpenQuickOrder && (
                <button
                  onClick={() => onOpenQuickOrder(activeProduct)}
                  className="w-full py-2 px-4 bg-[#2C182B] hover:bg-[#3B1F3A] text-[#FAF7F2] rounded-xl text-xs font-medium border border-[#4F2B52] transition-colors"
                >
                  View Full Details & Pack Sizes
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Accuracy and Technology Notice */}
        <div className="mt-4 flex items-center gap-2 text-xs text-[#9A8195] justify-center text-center">
          <Info className="w-3.5 h-3.5 text-[#E8998D] shrink-0" />
          <span>
            WebGL 3D Studio: Real-time procedural geometry representing authentic product silhouettes. Drag around the model to inspect from every angle.
          </span>
        </div>
      </div>
    </section>
  );
};
