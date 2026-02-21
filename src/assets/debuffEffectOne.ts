export const DEBUFF_EFFECT_ONE = `

vec3 inColor = vec3(0.2667, 0.0157, 0.0784);
vec3 outColor = vec3(0.7490, 0.0902, 0.1922);

float size = 10.;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    //Range of -1 ~ 1
    vec2 uv = (2. * fragCoord - iResolution.xy) / iResolution.x;

    
    float shape;
    //create a basic wavy sphere
    shape = 1. - (length(uv * 20.) - size);
    shape += voronoise(vec3(uv * 20., iTime * 4.), 1.2, .5) * 2.;
    //add a more violent whispy shape
    float shape2 = (shape + 1.) + fbm(vec3(uv * 10., iTime));
    shape2 = pow(shape2, 2.2) * sign(shape2) + shape;
    //normalize the shapes better
    shape *= .5;
    shape = clamp(shape, 0., 1.);
    shape2 = clamp(shape2, -3., 1.);
    
    //combine them
    shape = (shape + shape2) / 2.;
    
    //make it go from 0 - 1
    if (shape > 0.) {
        shape = clamp((shape * 0.) + (1. - shape), 0.001, 2.);
    }
    
    //use it to sample between an 'inColor' and 'outColor'
    vec3 col;
    if (shape > 0.) {
        col = mix(inColor, outColor, shape);
    }
    // Output to screen
    fragColor = vec4(col,1.0);
}`;