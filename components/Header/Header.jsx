import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  return (
    <div className="header w-full h-20">
      <div className="nav-wrapper container mx-auto flex justify-center items-center h-full px-5 lg:px-0 text-white lg:justify-start">
        {/* Nav Logo */}
        <div>
          <a href="/">
            <h3 className="text-lg">
              M<span className="text-c-tertiary">Zone</span>
            </h3>
          </a>
        </div>

        {/* ===================================== On Larger Devices ===================================== */}

 
        {/* ===================================== On Mobile Devices ===================================== */}
      </div>
    </div>
  );
};

export default Header;
