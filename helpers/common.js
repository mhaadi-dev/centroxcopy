export default function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export const generateBlurredSVG = (svgContent) => {
	// Apply blur effect to the SVG using SVG filter
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <!-- Your SVG content with blur effect applied -->
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <image x="0" y="0" width="100" height="100" xlink:href="data:image/svg+xml;base64,${svgContent}" filter="url(#blurFilter)"/>
      </svg>`;
};
