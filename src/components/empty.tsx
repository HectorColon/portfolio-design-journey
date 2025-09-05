interface EmptySectionProp {
    icon: any;
    description: string;
}

const EmptySection = ({ icon, description }: EmptySectionProp) => {
    return (<div className="pt-24 pb-24 flex flex-col items-center justify-center max-w-4xl mx-auto text-portfolio-primary">
        {icon}
        <h2 className="pt-2">{description}</h2>
    </div>)
}

export default EmptySection