export default function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export const generateLinearGradientBase64 = () => {
	const gradient = `linear-gradient(to bottom, #121212, #056EE1, #181818)`;
	const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="100%" height="100%" fill="${gradient}"/></svg>`;
	return btoa(svgString); // Remove the 'data:image/svg+xml;base64,' prefix
};

export const generateBlurDataURL = async (imageUrl) => {
	const img = new Image();
	img.src = imageUrl;
	await img.decode();
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	if (ctx) {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.filter = "blur(10px)";
		ctx.drawImage(img, 0, 0);
		const blurredBase64 = canvas.toDataURL("image/png");
		return blurredBase64;
	}
	return "";
};

export 	const debounce = (func, delay) => {
	let timer;
	return function(...args) {
	  clearTimeout(timer);
	  timer = setTimeout(() => {
		func.apply(this, args);
	  }, delay);
	};
  };


export const sectionHeadings = "text-center lg:text-left text-white text-2xl lg:text-4xl font-bold"
export const sectionDiscriptions = "text-center lg:text-left text-md lg:text-xl text-white"

export const sectionheadings = "w-full lg:w-3/5 mt-4  mx-auto text-2xl lg:text-4xl text-white text-center font-bold 2xl:text-5xl "
export const sectionsubheadings = "text-md  lg:text-2xl  text-white text-center w-full lg:w-3/5 mx-auto "

export const sectionsSectionHeadings = "text-sm lg:text-2xl lg:text-3xl 2xl:text-4xl text-white font-semibold   w-4/5 text-center lg:text-left mx-auto lg:mx-0" 

export const sectionSectionDescription = "text-sm lg:text-lg 2xl:text-xl text-white font-medium w-4/5  text-center lg:text-left mx-auto lg:mx-0"

export const basicLayoutclass = "mt-24 lg:mt-32 flex flex-col  gap-8 w-4/5 mx-auto"

export const subsectionheadings = "text-sm text-white font-bold lg:text-xl 2xl:text-2xl w-full "

export const subsectiondescriptions = "text-xs text-white  lg:text-xl 2xl:text-xl font-medium w-full "




export const h1className = "text-center lg:text-left text-white-light text-2xl font-bold lg:text-6xl"


export const h2ClassName = "text-center  text-white-light text-2xl  font-bold lg:text-5xl"


export const h3ClassName = "text-center  text-white-light text-2xl  font-bold lg:text-3xl"

export const h4ClassName = "text-center  text-white-light text-xl  font-bold lg:text-2xl"



export const p2ClassName = "text-center text-md  lg:text-2xl  text-white-light lg:text-left w-full lg:w-4/5 "

export const p3ClassName = "text-sm  lg:text-xl  text-white-light text-left w-full lg:w-4/5 "

export const p4ClassName = "text-center text-md  lg:text-base  text-white-light lg:text-left w-full lg:w-4/5 "