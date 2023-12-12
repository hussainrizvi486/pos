interface POSItemCardProps {
    name: string,
    price: number,
    image: string
}


export const POSItemCard = ({ name, price, image }: POSItemCardProps) => {
    return (
        <div className="pos-item-card">
            {name}
            {price}

            <img src={image} alt="" />
        </div>
    )
}