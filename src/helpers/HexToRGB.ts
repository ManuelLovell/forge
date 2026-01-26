export function HexToRgba(hex: string, alpha: number): string
{
    let sanitized = hex.replace('#', '');

    if (sanitized.length === 3)
    {
        sanitized = sanitized.split('').map((c) => c + c).join('');
    }

    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}