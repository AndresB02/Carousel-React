import React from "react";

const Table = () => {
  /* Renderizar cuando se usa el componente funcional Table */
  const data = [
    {
      name: "Miguel Ángel Duran - Midudev",
      country: "Spain",
      biography:
        "I am a Software Engineer, Web Programmer and Programmer. I am recognized as a GitHub Star for my contribution to the web development community. I usually stream learning and developing things with Javascript, React, Node.js, CSS and many more things.",
    },
    {
      name: "Brais Moure - MoureDev",
      country: "Spain",
      biography:
        "My name is Brais Moure, I am an independent IT entrepreneur and technology lover. Since 2010 I have worked in large companies in the sector such as Inditex, Indra or Altia. In 2014 I decided to create my own software development company, MoureDev, given my deep interest in new trends in the sector.",
    },
    {
      name: "Nicolás Schürmann Lindemann - HolaMundo",
      country: "New Zealand",
      biography:
        "I am a senior software developer, instructor of technologies for web and mobile development. Throughout my life I have managed to build a lot of software with tools and forms that have given resounding success and others a terrible failure. So I focus on delivering knowledge that can build world-class software that is easy to scale. ",
    },
  ];

  return (
    <table className="table-auto w-full">
      {/* <caption className="pb-2 text-xl font-bold">My favorite Dev's</caption> */}
      <thead>
        <tr className="bg-violet-400 px-4 py-2">
          <th className="px-2 py-2"> Name </th>
          <th className="px-2 py-2"> Country </th>
          <th className="px-2 py-2"> Biography </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={(row.id, index)}>
            <td className="border">{row.name}</td>
            <td className="border">{row.country}</td>
            <td className="border">{row.biography}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
