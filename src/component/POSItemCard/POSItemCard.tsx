interface POSItemCardProps {
    name: string,
    price: number,
    image?: string
}


export const POSItemCard = ({ name, price, image }: POSItemCardProps) => {
    return (
        <div className="pos-item-card">
            <div className="pos-item-card__img">
                <img src={image} alt="" />
            </div>

            <div className="pos-item__title">{name}</div>
            <div className="pos-item__price">${price}</div>
        </div>
    )
}