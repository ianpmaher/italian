const Display = ({content}) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </div>
    );
}

export default Display;