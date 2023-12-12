import { POSItemCard } from "../../component"

export const POSItems = () => {
    return (
        <div>
            <div className="pos-items-grid">
                <POSItemCard name="test" price={90} image="https://www.collinsdictionary.com/images/full/cup_126346628.jpg" />
            </div>
        </div>
    )
}