import './SectionTitle.css'
const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    )
}

export default SectionTitle
