import { CarouselwithStackAnimation } from "@/Components/common/CarouselwithStackAnimation";
import SectionTag from "@/Components/common/SectionTag";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import SolutionsImage1 from "@/assets/solutionpic1.webp"

const data = [
  {
    img: SolutionsImage1,
    description:
      "Meta4 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform pppppp ppppoadpoa jdkajdk mmmmm kkkkk bbbbb  mmmmmmm bhbbbbb vvccccc",
    heading: "Product 1",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage1,
    description:
      "Meta2 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform pppppp pppp mmmmm kkkkk bbbbb  mmmmmmm bhbbbbb vvccccc",
    heading: "Product 2",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage1,
    description:
      "Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform pppppp pppp mmmmm kkkkk bbbbb  mmmmmmm bhbbbbb vvccccc",
    heading: "Product 3",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage1,
    description:
      "Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform pppppp pppp mmmmm kkkkk bbbbb  mmmmmmm bhbbbbb vvccccc",
    heading: "Product 4",
    date: "July 17, 2024",
  },
];
const LandingSolutionsSection = () => {
  return (
    <>
      <SectionTag text="Solutions" />
      <section aria-label="Centrox Blog" className="text-white ">
        <h2 className="font-semibold text-center text-5xl my-4">
          Centrox&apos;s Solutions
        </h2>
        <p className="text-center w-full text-[1rem] sm:w-[60%] mx-auto sm:text-[1.5rem]">
        Explore our suite of production-ready Generative AI products, 
      built to address real-world challenges across diverse industries
        </p>
      </section>
      <CarouselwithStackAnimation data={data} />
    </>
  );
};

export default LandingSolutionsSection;
