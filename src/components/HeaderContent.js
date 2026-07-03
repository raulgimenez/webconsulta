export default function HeaderContent({ dict }) {
  return (
    <>
      <h1 className="text-3xl sm:text-7xl font-Lagasignatica text-gray-900 mt-10">
        {dict.header.title}
      </h1>
      <p className="text-gray-500 mt-2 text-2xl">
        {dict.header.subtitle}
      </p>
    </>
  );
}
