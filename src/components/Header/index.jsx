import logo from "../../assets/logo.svg";
import { ThemeButton } from "../../style/buttons";
import { StyledHeader } from "./style";

const Header = ({ allProducts, setFilteredProducts }) => {
  const handleClick = (e) => {
    const searchValue = e.target.form[0].value.toLowerCase().trim();
    const filtered = allProducts.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(searchValue) ||
        category.toLowerCase().includes(searchValue)
    );

    setFilteredProducts(filtered);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    const filtered = allProducts.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(searchValue) ||
        category.toLowerCase().includes(searchValue)
    );

    setFilteredProducts(filtered);
  };

  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="Logo da Burguer Kenzie" />
        <form>
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            placeholder="Pesquisar produto"
            onChange={(e) => handleChange(e)}
          />
          <ThemeButton
            buttonSize="small"
            buttonColor="green"
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
          >
            Pesquisar
          </ThemeButton>
        </form>
      </div>
    </StyledHeader>
  );
};

export default Header;
