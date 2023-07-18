export const blackwhite = (imageData) => {
    const pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        pixels[i] = (r + g + b) / 3;
        pixels[i + 1] = (r + g + b) / 3;
        pixels[i + 2] = (r + g + b) / 3;
    }
    return imageData;
};
