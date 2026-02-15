export const HP_BAR_EFFECT = `
uniform vec2 size;
uniform float time;
uniform float hpPercent;

float sdBox(float2 p, float2 b) {
    float2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

half4 main(float2 coord) {
    float2 uv = coord / size;

    const float padding = 0.2;
    const float barWidth = 0.6;
    const float barHeight = 0.1;
    const float2 center = float2(0.5, 0.82);
    const float2 halfSize = float2(0.3, 0.05);

    float hpNorm = clamp(hpPercent / 100.0, 0.0, 1.0);

    float3 hpColor = (hpNorm > 0.5)
        ? mix(float3(0.9, 0.8, 0.1), float3(0.1, 0.8, 0.2), (hpNorm - 0.5) * 2.0)
        : mix(float3(0.8, 0.1, 0.1), float3(0.9, 0.8, 0.1), hpNorm * 2.0);

    float fillWidth = barWidth * hpNorm;
    float2 fillHalfSize = float2(fillWidth * 0.5, halfSize.y);
    float2 fillCenter = float2(center.x - halfSize.x + fillHalfSize.x, center.y);

    float fillDist = sdBox(uv - fillCenter, fillHalfSize);
    float fillMask = step(fillDist, 0.0);

    float3 fillColor = hpColor;
    float rightEdgeX = fillCenter.x + fillHalfSize.x;
    float fadeFactor = clamp((rightEdgeX - uv.x) * 100.0, 0.0, 1.0);
    float verticalGrad = 0.8 + 0.1 * (uv.y - fillCenter.y + halfSize.y) / halfSize.y;
    fillColor *= verticalGrad;
    float fillAlpha = fillMask * fadeFactor;

    const float borderThickness = 0.012;
    float2 innerHalfSize = max(halfSize - float2(borderThickness, borderThickness), float2(0.001, 0.001));
    float outerDist = sdBox(uv - center, halfSize);
    float innerDist = sdBox(uv - center, innerHalfSize);
    float outerMask = 1.0 - smoothstep(0.0, 0.003, outerDist);
    float innerMask = 1.0 - smoothstep(0.0, 0.003, innerDist);
    float borderShape = clamp(outerMask - innerMask, 0.0, 1.0);
    float pulse = 0.8 + 0.2 * sin(time * 2.0);
    float borderGlow = exp(-abs(outerDist) * 180.0) * pulse * 0.35;
    float borderMask = borderShape * pulse + borderGlow;

    float3 particleColor = hpColor;
    float particleAlpha = 0.0;

    if (hpNorm <= 0.8) {
        for (int i = 0; i < 5; i++) {
            float seed = float(i);
            float yOffset = mix(-halfSize.y, halfSize.y, (float(i) + 0.5) * 0.2);
            float driftNorm = fract(time * 0.2 + hash(seed));

            float2 particlePos = float2(
                mix(fillCenter.x + fillHalfSize.x, center.x + halfSize.x, driftNorm),
                center.y + yOffset
            );

            float d = length(uv - particlePos);
            float particleSize = 0.0015 + 0.06 * hash(seed + 1.0);
            particleAlpha += (1.0 - driftNorm) * exp(-d / particleSize);
        }
    }
    particleAlpha *= innerMask;

    float3 emptyColor = hpColor * 0.05;
    float emptyMask = 0.0;
    float emptyWidth = barWidth - fillWidth;

    if (emptyWidth > 0.0) {
        float2 emptyCenter = float2(fillCenter.x + fillHalfSize.x + emptyWidth * 0.5, center.y);
        float2 emptyHalfSize = float2(emptyWidth * 0.5, halfSize.y);
        emptyMask = step(sdBox(uv - emptyCenter, emptyHalfSize), 0.0);
    }

    float3 color = fillColor * fillAlpha +
        emptyColor * emptyMask +
        hpColor * borderMask +
        particleColor * particleAlpha;

    float alpha = fillAlpha +
        emptyMask * 0.05 +
        borderMask +
        particleAlpha;

    return half4(color, clamp(alpha, 0.0, 1.0));
}
`;