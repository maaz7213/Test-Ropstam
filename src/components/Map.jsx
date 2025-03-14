
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import Box from "@mui/material/Box";

// USA TOPOJSON DATA URL
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function CustomUSAMap() {
  const [hoveredState, setHoveredState] = useState(null);

  const handleMouseEnter = (geo) => {
    setHoveredState(geo.properties.name);
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "100%",
        margin: "auto",
        width: "825.51px",
        height: "503.67px", 
        // border: "1.07px solid black", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <ComposableMap
        projection="geoAlbersUsa"
        width={825.51}
        height={503.67}
      >
        <ZoomableGroup zoom={1} center={[-95, 38]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: "#14B8A6", 
                        outline: "none",
                      },
                      hover: { fill: "#FFD700", outline: "none" }, 
                      pressed: { fill: "#FFD700", outline: "none" }, 
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  );
}
