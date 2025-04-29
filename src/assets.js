export const assets = {};

export function loadAssets() {
  const imagesToLoad = {
    player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    enemyNormal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    enemyBoss: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    fireball: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    background: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
  };

  const promises = Object.entries(imagesToLoad).map(([key, src]) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        assets[key] = img;
        resolve();
      };
    });
  });

  return Promise.all(promises);
}
