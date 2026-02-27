
export default function Education() {
    const jobs = [
        {
            id: 1,
            company: 'University of Technology Sydney (GPA – 6.29, WAM – 81.57)',
            position: 'Bachelor of Information Technology (Honours)',
            duration: 'July 2023 — December 2024',
            description: '',
        },
        {
            id: 2,
            company: 'University of Technology Sydney (GPA – 6.13, WAM – 81.88)',
            position: 'Bachelor of Information Systems',
            duration: 'February 2020 — July 2023',
            description: '',
        },
        {
            id: 3,
            company: 'Gungahlin College (ATAR - 86.4)',
            position: 'Senior Secondary Education',
            duration: 'February 2018 —February 2019',
            description: '',
        },
    ];

    return (
        <div className="employment">
            <h2 id="EducationTitle">Education History</h2>
            <div className="jobs-container EducationContainer">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h3>{job.position}</h3>
                        <div className="company-duration">
                            <p className="company">{job.company}</p>
                            <p className="duration">{job.duration}</p>
                        </div>
                        <p className="description">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}