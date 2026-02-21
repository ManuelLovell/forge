export const DEBUFF_EFFECT_TWO = `
uniform float2 size;
uniform float time;

float hash21(float2 p) {
  p = fract(p * float2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise2(float2 p) {
  float2 i = floor(p);
  float2 f = fract(p);

  float a = hash21(i);
  float b = hash21(i + float2(1.0, 0.0));
  float c = hash21(i + float2(0.0, 1.0));
  float d = hash21(i + float2(1.0, 1.0));

  float2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(float3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float2 q = p.xy + float2(p.z * 0.23, -p.z * 0.17);

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise2(q);
    q = q * 2.02 + float2(17.1, 9.2);
    amplitude *= 0.5;
  }

  return value;
}

float voronoise(float3 p, float u, float v) {
  float2 x = p.xy;
  float2 n = floor(x);
  float2 f = fract(x);
  float k = 1.0 + 63.0 * pow(1.0 - v, 6.0);
  float accum = 0.0;
  float weightAccum = 0.0;

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      float2 g = float2(float(i), float(j));
      float2 o = float2(hash21(n + g), hash21(n + g + 37.0));
      o = 0.5 + 0.5 * sin(p.z + 6.28318 * o);

      float2 r = g - f + o;
      float d = dot(r, r);
      float w = pow(max(0.0, 1.0 - smoothstep(0.0, 1.414, sqrt(d))), k);

      accum += w * mix(1.0, o.x, u);
      weightAccum += w;
    }
  }

  return weightAccum > 0.0 ? accum / weightAccum : 0.0;
}

half4 main(float2 coord) {
  float3 inColor = float3(0.2667, 0.0157, 0.0784);
  float3 outColor = float3(0.7490, 0.0902, 0.1922);
  float sphereSize = 10.0;

  float2 uv = (2.0 * coord - size.xy) / max(size.x, 1.0);

  float shape;
  shape = 1.0 - (length(uv * 20.0) - sphereSize);
  shape += voronoise(float3(uv * 20.0, time * 4.0), 1.2, 0.5) * 2.0;

  float shape2 = (shape + 1.0) + fbm(float3(uv * 10.0, time));
  shape2 = pow(abs(shape2), 2.2) * sign(shape2) + shape;

  shape *= 0.5;
  shape = clamp(shape, 0.0, 1.0);
  shape2 = clamp(shape2, -3.0, 1.0);

  shape = (shape + shape2) * 0.5;

  float mappedShape = 0.0;
  if (shape > 0.0) {
    mappedShape = clamp(1.0 - shape, 0.001, 2.0);
  }

  float3 col = float3(0.0);
  if (mappedShape > 0.0) {
    col = mix(inColor, outColor, mappedShape);
  }

  float light = max(col.r, max(col.g, col.b));
  float alpha = clamp(light * 0.58, 0.0, 0.62);

  float minDimension = max(min(size.x, size.y), 1.0);
  float radialNormalized = length((coord - size.xy * 0.5) / (minDimension * 0.5));
  float edgeFade = 1.0 - smoothstep(0.70, 0.92, radialNormalized);
  alpha *= edgeFade;

  float3 softColor = col / (float3(1.0) + col * 0.9);
  return half4(softColor, alpha);
}`;