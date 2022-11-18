const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    const ref = useRef();
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  
    return (
      <div className="navbar_container">
        <div className="navbar_inner_container">
          <div className="logo_container">
            <img src={Logo} alt="logo" className="navbar_logo" />
          </div>
          <section ref={ref}>
          <div
            className="hamburger_menu"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Dropdown open={open}  />
          </div>
  </section>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  const Dropdown = ({ open }) => {
    return (
      <div >
        {open === true ? (
          <div className="dropdown_container">
            <div
              className="dropdown_item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementsByClassName("functions_container")[0]
                    .offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <button className="navbar_link">Functions</button>
            </div>
            <div
              className="dropdown_item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementsByClassName("partners_container")[0]
                    .offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <button className="navbar_link">Partner</button>
            </div>
            <div
              className="dropdown_item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementsByClassName("statements_container")[0]
                    .offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <button className="navbar_link">Statements</button>
            </div>
            <div
              className="dropdown_item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementsByClassName("contact_container")[0]
                    .offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <button className="navbar_link">Contact</button>
            </div>
            <img
              src={LanguageFlag}
              alt="lanugage_flag"
              className="language_flag"
            />
          </div>
        ) : null}
      </div>
    );
  };
  
  export default Dropdown;