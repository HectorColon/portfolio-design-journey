const CardSkeleton = () => {
    return (<div className="p-4"><div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm overflow-hidden border border-border/0 skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
    </div>
    </div>
    )
}

export default CardSkeleton