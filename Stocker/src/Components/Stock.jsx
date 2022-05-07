const Stock = (props) => {
    const { onDeleteStockHandler, keyToManage, stockItem } = props;
    return (
        <>
            <div className="card border border-dark mt-2">
                <div className="card-body pb-1">
                    <h4 className="card-header"> Traded in USD </h4>
                    <h6 className="card-body">Most Recent Trade</h6>
                    <p className="card-text">{stockItem}</p>
                    {/* <button
                        className="btn btn-danger p-1"
                        onClick={() => onDeleteStockHandler(keyToManage)}
                    >
                        Remove
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default Stock;
