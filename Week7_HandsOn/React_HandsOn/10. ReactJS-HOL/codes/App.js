import React from "react";
import spaceRentalImage from "./assets/space_rental.jpg"; // ✅ Import local image

function App() {
  // Heading of the page using JSX
  const heading = <h1>🏢 Office Space Rental App</h1>;

  // Single office object
  const office = {
    name: "Skyline Business Bay",
    rent: 58000,
    address: "Hitech City, Hyderabad"
  };

  // List of office objects
  const offices = [
    { name: "T-Hub", rent: 70000, address: "Gachibowli, Hyderabad" },
    { name: "WeWork", rent: 65000, address: "Madhapur, Hyderabad" },
    { name: "Cowork Studio", rent: 45000, address: "Ameerpet, Hyderabad" },
    { name: "SmartDesk", rent: 60000, address: "Jubilee Hills, Hyderabad" }
  ];

  // Function to apply color conditionally
  const rentStyle = (rent) => ({
    color: rent > 60000 ? "green" : "red",
    fontWeight: "bold"
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      {heading}

      {/* Local image */}
      <img
        src={spaceRentalImage}
        alt="Office Space"
        style={{
          width: "500px",
          height: "250px",
          borderRadius: "10px",
          margin: "20px 0"
        }}
      />

      {/* Single office details */}
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={rentStyle(office.rent)}>{office.rent}</span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      {/* Multiple offices using loop */}
      <h2>Available Office Spaces</h2>
      {offices.map((off, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <p><strong>Name:</strong> {off.name}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={rentStyle(off.rent)}>{off.rent}</span>
          </p>
          <p><strong>Address:</strong> {off.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
