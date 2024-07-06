function Spinner() {
    return (
        <div className="loaddingSpinnerContainer" data-testid="spin-container">
            <div className="loadingSpinner" data-testid="inner-container" />
        </div>
    )
}

export default Spinner