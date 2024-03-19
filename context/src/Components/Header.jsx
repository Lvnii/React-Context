import useProducts from "../Store/productContext";

const Header = () => {
    const data = useProducts();

    console.log(data)
    return (
        <div>This is header</div>
    )
}

export default Header;