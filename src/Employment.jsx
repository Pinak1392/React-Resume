import React from 'react';

export default function Employment() {
    const jobs = [
        {
            id: 1,
            company: 'High Fidelity Orthopedics',
            position: 'Software Developer - VR and Server Development',
            duration: '1/2/2025 - Ongoing',
            description: 'I got contracted by High Fidelity Orthopaedics to develop, design, and maintain a virtual reality solution for the orthopaedic company High Fidelity Orthopaedics. By working for HiFi, I learned and gained proficiency in the use of Unity, C#, OpenXR, and MetaXR. I also developed a cloud server using Amazon services such as EC2, S3, and RDS. The project allowed me to hone my skills for cloud development and server management. I implemented a MySQL database via Flask, background tasks via Celery and Redis, and hosted the server through Nginx. The server was primarily a means for storing and accessing data from our database and file server. I also set up the environment the server runs on manually inside the EC2. For the future I would use docker, however, I learned a great deal about environment management. I worked in an Agile type environment where we get feedback from orthopaedics and modify the solution based on the criticism, as a result the project is still ongoing.',
        },
        {
            id: 2,
            company: '11 Monkeys',
            position: 'Software Developer - Data Visualisation and License Management',
            duration: '23/1/2021 - 15/12/2024',
            description: 'At 11 Monkeys I got contracted to create visualisations of fossils and other datasets using a software called Vayu. During this time, I gained proficiency in Flask, HTML, CSS and JavaScript development. I also maintained and developed a licensing system and license management website for Vayu. This work had me design a database for licensing purposes, along with creating a server for user verification. I also created some additional anti-spoofing measures to protect against potential piracy, so that users of our product could still use it without being online. The novel method allowed users to retain access to the software for a certain amount of hours without reconnecting for verification. I also created the website for users to manage their licenses, which included features such as viewing license details, renewing licenses, and managing their account information.',
        },
        {
            id: 3,
            company: 'Telstra Health',
            position: 'Software Engineering Intern',
            duration: '11/1/2020 - 25/02/2020',
            description: 'In my internship at Telstra, I worked on code-cleanup and documentation for the software development team. I found errors by running static code analysis and developed a Python scraper to extract these errors or security concerns. I then used these results to analyse problems and fix common mistakes made by the team. I was also responsible for installation guides and documentation for the software the organization had used. From my internship, I learnt Java to an intermediate level and experienced working in a large team. ',
        },
    ];

    return (
        <div className="employment">
            <h2>Employment History</h2>
            <div className="jobs-container">
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