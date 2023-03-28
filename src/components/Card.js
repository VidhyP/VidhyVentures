export default function Card({field}) {
    return (
        <div className="Card">
            <h2>{field.name}</h2>
            <img src={field.img}></img> 
        </div>
    );
}