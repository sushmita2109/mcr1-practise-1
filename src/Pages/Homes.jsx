import { useBook } from "../context/BookContext";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Homes = () => {
  const { bookStates } = useBook();
  console.log("🚀 ~ file: Homes.jsx:5 ~ Homes ~ bookStates:", bookStates);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        padding: "5px",
      }}
    >
      {bookStates?.allBooks
        ?.filter((item) => item.category === "currently")
        .map((book) => (
          <Card
            key={book.id}
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <CardMedia
              image={book.image}
              sx={{ height: "200px", width: "200px" }}
              title="book image"
            />
          </Card>
        ))}
    </div>
  );
};
