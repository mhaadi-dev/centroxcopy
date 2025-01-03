import { client } from "./client";

export function slugify(input:any) {
  // If input is a React element
  if (typeof input === "object" && input?.$$typeof === Symbol.for("react.element")) {
    const textContent = input.props?.text || input.props?.children?.[0] || "";
    return textContent ? generateSlug(textContent) : "default-slug"; 
  }

  if (typeof input === "string") {
    return input.trim() ? generateSlug(input) : "default-slug";
  }

  // Fallback for unexpected types
  console.warn("Unsupported input type for slugify:", input);
  return "default-slug"; // Fallback value
}

// Helper function to generate the slug
function generateSlug(text:string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, "-") 
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "")
    .replace("\n","")

}


interface ReadingTime {
  time: string;
  unit: string;
}

// Helper function to extract text content from the PortableText structure
const extractTextFromContent = (content: any[]): string => {
  let textContent = '';

  content.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child:any) => {
        if (child.text) {
          textContent += ' ' + child.text;
        }
      });
    }
  });

  return textContent.trim();
};

// Helper function to calculate reading time
export const calculateReadingTime = (content: any): string => {
  const textContent = extractTextFromContent(content);

  const words = textContent.split(" ").length;

  const wordsPerMinute = 200; 

  // Calculate reading time in minutes
  const timeInMinutes = Math.ceil(words / wordsPerMinute); 

  if (timeInMinutes <= 1) {
    return '1 min';
  } else if (timeInMinutes < 60) {
    return `${timeInMinutes} mins`;
  } else {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}hr ${minutes}min`; 
  }
};

export const reSlugify=(str:string)=>{
  return str?.split("-").join(" ")
}

export function cleanMetaString(str:string) { 
 return str.replace(/[^\x20-\x7E]/g, '').replace(/\s+/g, ' ').trim();
 }

