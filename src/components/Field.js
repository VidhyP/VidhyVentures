export default function Field({field}) {
    return (
        <div className="Field">
            <h2>{field.name}</h2>
            {field.activities.map(activity => 
                <div key={activity.position}>
                    <h3>{activity.position}</h3>
                    <ul>
                        <li>Start: {activity.startDate}</li>
                        <li>End: {activity.endDate}</li>
                        <li>Location: {activity.location}</li>
                        <li>Description: {activity.desc}</li>
                    </ul>
                </div>
            )} 
        </div>
    );
}
