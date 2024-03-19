import useProducts from "../Store/productContext"

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const List = () => {
    const { data } = useProducts();
    
    return (
        <div>
            {data.map((item) => {
                return (
                    <li key={item.id}>{item}</li>
                )
            })}

        </div>
    )
}

export default List;