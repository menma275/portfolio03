"use client";

import { useEffect, useRef } from "react";

interface HazeBackgroundProps {
  className?: string;
  intensity?: number;
}

export const HazeBackground = ({ className }: HazeBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `
      attribute vec4 aPosition;
      void main() {
        gl_Position = aPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 uResolution;
      uniform float uTime;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float ratio = uResolution.x / uResolution.y;
        vec2 p = uv;
        p.x *= ratio;

        // Colors from hex
        vec3 c1 = vec3(0.749, 0.741, 0.722); // #BFBDB8 (Grayish)
        vec3 c2 = vec3(0.851, 0.604, 0.145); // #D99A25 (Golden)
        vec3 c3 = vec3(0.851, 0.675, 0.349); // #D9AC59 (Muted Gold)
        vec3 c4 = vec3(0.749, 0.655, 0.478); // #BFA77A (Tan)
        vec3 c5 = vec3(0.949, 0.612, 0.420); // #F29C6B (Orange/Salmon)

        float t = uTime * 0.8;
        
        // Animated positions for 5 colors - larger amplitude and faster cycles
        vec2 p1 = vec2(0.5 + 0.6 * sin(t * 0.9), 0.5 + 0.6 * cos(t * 1.1)) * vec2(ratio, 1.0);
        vec2 p2 = vec2(0.5 + 0.7 * cos(t * 1.3), 0.5 + 0.7 * sin(t * 0.7)) * vec2(ratio, 1.0);
        vec2 p3 = vec2(0.5 + 0.5 * sin(t * 1.5), 0.5 + 0.5 * cos(t * 1.2)) * vec2(ratio, 1.0);
        vec2 p4 = vec2(0.5 + 0.8 * cos(t * 0.8), 0.5 + 0.8 * sin(t * 1.4)) * vec2(ratio, 1.0);
        vec2 p5 = vec2(0.5 + 0.4 * sin(t * 1.7), 0.5 + 0.4 * cos(t * 0.9)) * vec2(ratio, 1.0);

        float d1 = length(p - p1);
        float d2 = length(p - p2);
        float d3 = length(p - p3);
        float d4 = length(p - p4);
        float d5 = length(p - p5);

        // Sharper blending weights to keep colors pure
        float w1 = 1.0 / pow(d1 + 0.4, 4.0);
        float w2 = 1.0 / pow(d2 + 0.4, 4.0);
        float w3 = 1.0 / pow(d3 + 0.4, 4.0);
        float w4 = 1.0 / pow(d4 + 0.4, 4.0);
        float w5 = 1.0 / pow(d5 + 0.4, 4.0);

        vec3 color = (c1 * w1 + c2 * w2 + c3 * w3 + c4 * w4 + c5 * w5) / (w1 + w2 + w3 + w4 + w5);

        // Fade in from white over 1.5 seconds
        float fade = smoothstep(0.0, 1.5, uTime);
        color = mix(vec3(1.0, 1.0, 1.0), color, fade);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (
      gl: WebGLRenderingContext,
      type: number,
      source: string,
    ) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;
    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, "uResolution");
    const timeLoc = gl.getUniformLocation(program, "uTime");

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    let currentSpeed = 1.0;
    const targetSpeed = 1.0;
    const boostSpeed = 8.0;
    const decayRate = 3.0;

    const handleNavigate = () => {
      currentSpeed = boostSpeed;
    };

    window.addEventListener("carousel-navigate", handleNavigate);

    let animationId: number;
    let lastTime: number | null = null;
    let t = 0;
    const render = (time: number) => {
      if (lastTime === null) {
        lastTime = time;
      }
      const deltaTime = (time - lastTime) * 0.001;
      lastTime = time;

      // Exponential decay towards target speed
      if (currentSpeed > targetSpeed) {
        currentSpeed =
          currentSpeed +
          (targetSpeed - currentSpeed) *
            (1.0 - Math.exp(-deltaTime * decayRate));
      } else {
        currentSpeed = targetSpeed;
      }

      t += deltaTime * currentSpeed;

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("carousel-navigate", handleNavigate);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block", backgroundColor: "white" }}
    />
  );
};
