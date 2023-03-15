import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
const Hero = () => {
  return (
    <div
      className={`hero-section h-screen flex items-center justify-around bg-img relative text-white`}
      style={{
        backgroundImage: `url('/static/images/landing-page.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="container mx-auto text-center absolute content">
        <h1 className="flex justify-center flex-wrap items-center">
          Movie<span className="text-c-tertiary mr-5">Zone</span> v2
        </h1>
        <h3 className="mb-6 ">Browse and review your desired movie.</h3>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#DA0037",
            color: "white",
            border: "1px solid #DA0037",
            ":hover": {
              border: "1px solid #DA0037",
            },
          }}
        >
          <a href="/movies">Get Started</a>
          <MovieIcon sx={{ marginLeft: "1rem" }} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
