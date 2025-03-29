import { Box, Typography } from "@mui/material";
import { useState } from "react";
const WelcomeSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Box
      sx={{
        width: "85%",
        margin: "auto",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/src/assets/welcomebackground.svg"
        sx={{
          height: "89vh",
          width: "auto", // ✅ Cho phép width tự tính dựa vào height
          position: "relative",
          zIndex: 0,
        }}
      />

      <Box
        sx={(theme) => ({
          width: "15.2vw",
          height: "15.2vw",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "50%",
          position: "absolute",
          top: "13%",
          left: "40%", // Giảm từ 43% -> 40%
          zIndex: 1,
        })}
      />

      <Box
        sx={(theme) => ({
          width: "24.9vw",
          height: "24.9vw",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          position: "absolute",
          top: "20%",
          left: "50%", // Giảm từ 53% -> 50%
          zIndex: 2,
        })}
      />

      <Box
        component="img"
        src="/src/assets/section_laptop.png"
        alt="Laptop"
        sx={{
          width: "65%",
          height: "auto",
          position: "absolute",
          left: "32%", // Giảm từ 35% -> 32%
          bottom: "20%",
          zIndex: 3,
        }}
      />

      <Box
        component="img"
        src="/src/assets/seed.svg"
        alt="Seed"
        sx={{
          width: "11vw",
          height: "auto",
          position: "absolute",
          top: "20%",
          left: "80%", // Giảm từ 83% -> 80%
          zIndex: 4,
        }}
      />

      <Box
        sx={(theme) => ({
          width: "2.98vw",
          height: "2.98vw",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "50%",
          position: "absolute",
          bottom: "5%",
          right: "2%",
          // top: "13%",
          // left: "43%",
          zIndex: 4,
          cursor: "pointer", // Thay đổi con trỏ khi hover
        })}
        onMouseEnter={() => setShowPopup(true)} // Hover vào
        onMouseLeave={() => setShowPopup(false)} // Rời chuột
      >
        {showPopup && (
          <>
            <Box
              sx={{
                width: "16vw",
                height: "auto",
                position: "absolute",
                bottom: "5%",
                right: "2%",
                zIndex: 4,
              }}
            >
              {/* Ảnh */}
              {showPopup && (
                <>
                  <Box
                    component="img"
                    src="/src/assets/popupwelcome.svg"
                    alt="Popup Welcome"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  {/* Chữ trên ảnh */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      position: "absolute",
                      top: "50%", // Canh giữa ảnh
                      left: "50%",
                      transform: "translate(-50%, -50%)", // Căn giữa chính xác
                      color: "black", // Màu chữ
                      textAlign: "left",
                      width: "75%", // Giới hạn chiều rộng chữ
                    }}
                  >
                    At The Origami Art, we don’t just build websites or
                    mini-apps.We create digital solutions with an artistic
                    touch, empowering businesses to grow sustainably
                  </Typography>
                </>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default WelcomeSection;
