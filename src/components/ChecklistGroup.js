import { flourish } from '../static/img'

function ChecklistGroup({ data, onCheckboxChange, values }) {
    return (
        <>
            <div className="item-container" key={data.id}>
                <div className="item-title-container">
                    <img
                        src={flourish}
                        className="flourish right"
                        alt="flourish right"
                    />
                    <div className="item-title">{data.label}</div>
                    <img
                        src={flourish}
                        className="flourish left"
                        alt="flourish left"
                    />
                </div>
                <div className="item-body">
                    {data.content.map((subitem) => (
                        <div
                            key={'subitem' + subitem.id}
                            className="subitem-content"
                        >
                            <input
                                type="checkbox"
                                checked={values.includes(subitem.id)}
                                onChange={() => onCheckboxChange(subitem)}
                            />
                            <div className="subitem-title">{subitem.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChecklistGroup
