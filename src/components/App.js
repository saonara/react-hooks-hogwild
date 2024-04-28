import React, { useState } from "react";
import hogData from "../porkers_data";
import Nav from "./Nav";

const App = () => {
  const [hogs, setHogs] = useState(hogData);
  const [filterGreased, setFilterGreased] = useState(false);

  const handleToggleGreased = () => {
    setFilterGreased(!filterGreased);
  };

  const handleSortByName = () => {
    const sortedHogs = [...hogs].sort((a, b) => a.name.localeCompare(b.name));
    setHogs(sortedHogs);
  };

  const handleSortByWeight = () => {
    const sortedHogs = [...hogs].sort((a, b) => a.weight - b.weight);
    setHogs(sortedHogs);
  };

  const filteredHogs = filterGreased
    ? hogs.filter((hog) => hog.greased === filterGreased)
    : hogs;

  return (
    <div className="ui grid container">
      <Nav
        onToggleGreased={handleToggleGreased}
        onSortByName={handleSortByName}
        onSortByWeight={handleSortByWeight}
      />
      {filteredHogs.map((hog) => (
        <div key={hog.name} className="ui seven wide column">
          <div className="ui card" style={{ height: "20rem" }}>
            <div className="ui image">
              <img
                src={hog.image}
                alt={hog.name}
                style={{ height: "16rem", width: "100%" }}
              />
            </div>
            <div className="content">
              <div className="header">{hog.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import hogData from "../porkers_data";
// import Nav from "./Nav";

// const App = () => {
//   const [hogs, setHogs] = useState(hogData);
//   const [filterGreased, setFilterGreased] = useState(false);

//   const handleToggleGreased = () => {
//     setFilterGreased(!filterGreased);
//   };

//   const filteredHogs = filterGreased
//     ? hogs.filter((hog) => hog.greased === filterGreased)
//     : hogs;

//   return (
//     <div className="ui grid container">
//       <Nav onToggleGreased={handleToggleGreased} />
//       {filteredHogs.map((hog) => (
//         <div key={hog.name} className="ui seven wide column">
//           <div className="ui card" style={{ height: "20rem" }}>
//             <div className="ui image">
//               <img
//                 src={hog.image}
//                 alt={hog.name}
//                 style={{ height: "16rem", width: "100%" }}
//               />
//             </div>
//             <div className="content">
//               <div className="header">{hog.name}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
