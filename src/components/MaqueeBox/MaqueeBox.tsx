// import { Box, Typography } from "@mui/material";
// import React from "react";

// interface ContentItem {
//   type: 'text' | 'image';
//   content?: string;
//   src?: string;
//   alt?: string;
// }

// interface MarqueeBoxProps {
//   contentList: ContentItem[];
//   bgColor: string;
//   direction?: 'ltr' | 'rtl';
//   rotate?: number;
//   style?: React.CSSProperties;
// }

// // Style chung cho Typography
// const textStyle = {
//   color: "#fff",
//   textTransform: "uppercase",
//   fontSize: "4rem",
//   fontWeight: 700,
// };

// const MarqueeBox: React.FC<MarqueeBoxProps> = ({
//   contentList,
//   bgColor,
//   direction = "ltr",
//   rotate = 5,
//   style
// }) => {
//   return (
//     <Box
//       sx={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         position: "relative",
//         width: "120vw", // Extend beyond viewport
//         padding: "1rem",
//         marginLeft: "-10vw", // Pull back to create overlap
//         backgroundColor: bgColor,
//         transform: `rotate(${rotate}deg)`,
//         transformOrigin: "center center",
//         ...style
//       }}
//     >
//       <Box
//         sx={{
//           display: "inline-flex",
//           animation: `${
//             direction === "ltr" ? "marqueeLTR" : "marqueeRTL"
//           } 30s linear infinite`,
//           "@keyframes marqueeLTR": {
//             "0%": { transform: "translateX(-50%)" },
//             "100%": { transform: "translateX(0%)" },
//           },
//           "@keyframes marqueeRTL": {
//             "0%": { transform: "translateX(0%)" },
//             "100%": { transform: "translateX(-50%)" },
//           },
//         }}
//       >
//         {[...Array(2)].map((_, i) => (
//           <Box
//             key={i}
//             sx={{ display: "flex", gap: "5rem", alignItems: "center" }}
//           >
//             {contentList.map((item, index) =>
//               item.type === "text" ? (
//                 <Typography key={index} variant="h1" sx={textStyle}>
//                   {item.content}
//                 </Typography>
//               ) : (
//                 <Box
//                   key={index}
//                   component="img"
//                   src={item.src}
//                   alt={item.alt}
//                   sx={{
//                     width: "6rem",
//                     height: "auto",
//                     display: "inline-block",
//                     verticalAlign: "middle",
//                   }}
//                 />
//               )
//             )}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };
// export default MarqueeBox;
import React from "react";
import styles from "./MaqueeBox.module.css";
import { Box, Typography } from "@mui/material";

export interface ContentItem {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  alt?: string;
}

interface MarqueeBoxProps {
  contentList: ContentItem[];
  bgColor: string;
  direction?: 'ltr' | 'rtl';
  rotate?: number;
  style?: React.CSSProperties;
}

const MarqueeBox: React.FC<MarqueeBoxProps> = ({
  contentList,
  bgColor,
  direction = "ltr",
  rotate = 5,
  style
}) => {
  return (
    <Box 
      className={styles.marqueeContainer}
      style={{
        backgroundColor: bgColor,
        transform: `rotate(${rotate}deg)`,
        ...style
      }}
    >
      <Box className={`${styles.marqueeContent} ${styles[direction]}`}>
        {[...Array(2)].map((_, i) => (
          <Box key={i} className={styles.marqueeItem}>
            {contentList.map((item, index) =>
              item.type === "text" ? (
                <Typography 
                  key={index} 
                  variant="h1" 
                  className={styles.marqueeText}
                >
                  {item.content}
                </Typography>
              ) : (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className={styles.marqueeImage}
                />
              )
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MarqueeBox;