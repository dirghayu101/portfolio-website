export const ArticleSectionHeader = ({ heading }: { heading: string }) => {
  return (
    <h2 className="font-serif text-6xl md:text-4xl sm:text-3xl pt-10 pb-10 text-center">
      {heading}
    </h2>
  );
};
