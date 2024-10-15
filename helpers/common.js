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

export const p4ClassName = "text-center text-md  lg:text-base  text-white-light lg:text-left w-full lg:w-4/5"



export const section_wrapper_class="w-[88%] sm:w-auto mx-[1.5rem] sm:mx-[2.5rem] 2xl:mx-[15rem] mt-8 lg:mt-12 2xl:mt-24"
export const text_h1_main="text-white !font-heading text-[2rem] sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold"
export const text_h2_class="text-[#E5E7EB] text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem] font-heading font-semibold leading-[2.4rem] 2xl:leading-[3.7rem]"
export const text_h3_class="text-[#E5E7EB] text-[1.25rem] lg:text-[1.7rem] 2xl:text-[2rem] font-heading font-semibold leading-[2rem] 2xl:leading-[2.5rem]"
export const text_h4_class="text-[#E5E7EB] text-[0.8rem] lg:text-[1rem] 2xl:text-[1.5rem] font-heading font-semibold leading-[1.26rem] 2xl:leading-[1.89rem]"

export const text_para_main="text-[#E5E7EB] font-paragraph text-[1rem] lg:text-[1.2rem] max-w-lg 2xl:max-w-3xl 2xl:text-[1.5rem] leading-[1.6rem] 2xl:leading-[2.2rem]"
export const text_para_2="text-[#E5E7EB] font-paragraph text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] leading-[1.6rem] 2xl:leading-[2.25rem]"
export const text_para_3="text-[#E5E7EB] text-[0.75rem] lg:text-[0.85rem] 2xl:text-[1rem] leading-[1.35rem] 2xl:leading-[1.6rem] my-1"
export const font_headings=""
export const font_description=""