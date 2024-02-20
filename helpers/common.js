export default function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export const generateLinearGradientBase64 = () => {
	const gradient = `linear-gradient(to bottom, #121212, #056EE1, #181818)`;
	const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="100%" height="100%" fill="${gradient}"/></svg>`;
	return btoa(svgString); // Remove the 'data:image/svg+xml;base64,' prefix
  };