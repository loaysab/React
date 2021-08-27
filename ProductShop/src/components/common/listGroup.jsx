import React from "react";


const ListGroup = (props) =>
{
    const {items,textProperty,itemProperty,onItemSelect,selectedItem} = props;
    return (
        <ul className="list-group">
            {items.map(item =>
            <li key={item[itemProperty]}
            className={selectedItem === item ? "list-group-item active" : "list-group-item"}
            onClick={()=> onItemSelect(item)}
            >{item[textProperty]}
            </li>)}
    </ul>
    );
}
ListGroup.defaultProps={
    textProperty: 'name',
    itemProperty: '_id'
};
export default ListGroup;