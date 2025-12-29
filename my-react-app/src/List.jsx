function List(props) {

    const listitems = props.items;
    const listcategory = props.category;

    const orderitems = listitems.map(item => <li>{item.name}:{item.age}</li>)
    return (
        <>
            <h2 className="titlecategory">{listcategory}</h2>
            <ul className="listitems">{orderitems}</ul>
        </>
    );

}

export default List