export function slugify(input:any) {
  // If input is a React element
  if (typeof input === "object" && input.$$typeof === Symbol.for("react.element")) {
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
      block.children.forEach((child: any) => {
        if (child.text) {
          textContent += ' ' + child.text;
        }
      });
    }
  });

  return textContent.trim();
};

// Helper function to calculate reading time
export const calculateReadingTime = (content: any[]) => {
  const textContent = extractTextFromContent(content);  // Extract all text content

  // Word count based on spaces and newlines
  const words = textContent.split(/\s+/).length;

  // Average reading speed is 200 words per minute
  const wordsPerMinute = 250;

  // Calculate reading time in minutes
  const timeInMinutes = Math.floor(words / wordsPerMinute);

  // Calculate remaining seconds if there's a fraction
  const remainingSeconds = Math.round((words % wordsPerMinute) / (wordsPerMinute / 60));

  let time = '';
  let unit = '';

  if (timeInMinutes < 1) {
    // If less than a minute, use seconds
    time = remainingSeconds.toString();
    unit = 'second';
  } else if (timeInMinutes === 1) {
    // 1 minute
    time = '1';
    unit = 'minute';
  } else if (timeInMinutes < 60) {
    // Minutes calculation
    time = timeInMinutes.toString();
    unit = 'minute';
  } else {
    // Calculate hours if more than 60 minutes
    const timeInHours = Math.floor(timeInMinutes / 60);
    const remainingMinutes = timeInMinutes % 60;

    time = `${timeInHours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}`;
    unit = 'hour';
  }

  return  time+unit ;
};
