 const HouseRow=({house})=>{

    console.log(house);
    return(
        <tr>
            <td>{house.id}</td>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{house.price}</td>
        </tr>
    )
}
export default HouseRow