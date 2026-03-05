import React from 'react';

export default function Projects() {
    const jobs = [
        {
            id: 1,
            company: <a href='https://github.com/Pinak1392/ViterbAi'>https://github.com/Pinak1392/ViterbAi</a>,
            position: 'Hidden Markov Based Text To Speech Model',
            description: 'For this project I created a text to speech model using the Viterbi algorithm and a hidden markov model. I developed a novel method of text to speech using markov chains in a probabilistic model. I coded up the model in python and it heavily uses regular expressions and complex logic based thinking. In order to facilitate the model, I created a parser. The parser checked the different ways that a word could be made up. The way that a word was made up impacted how it would be spoken. For each candidate word structure, the Hidden Markov Model would predict the pronounciation and then come up with a confidence. The pronounciation with the highest confidence would be the final pronounciation. For the model, I used a dataset of word and their phonemes.',
        },
        {
            id: 2,
            company: '',
            position: 'ASD Online Shopping System',
            description: 'This was a group project in which we had to create an online shopping system using Python, Flask and SQLAlchemy. We were a group of 5 and I worked on all the user related stuff. This included all the user management and user reviews along with all the SQL table creation and querying to go along with it. I designed the database for the whole system. I also created the login system, the verification system, account recovery, user editing, homepage, and the product review pages. We also set up Azure deployment for it, and deployed it to an Azure server along with test cases and an automated test system using pytest.',
        },
        {
            id: 3,
            company: <a href='https://github.com/Pinak1392/IoTBay'>https://github.com/Pinak1392/IoTBay</a>,
            position: 'IoT Bay',
            description: 'In this project I had to create an online shopping system for purchasing electronic goods using Java. I worked with a group, and we split up the project into components that each of us had to complete. I primarily worked on user management, admin control and logging. For the project we used a view, model, controller design. I created all three for my designated parts. I also designed the database. The model was created using object oriented design that connected up to the database, and loaded in the entries as objects. We used JSP servlets in order to update web views, and database queries were done using get and post requests. All the validation was done with regular expression.',
        },
        {
            id: 4,
            company: <a href='https://github.com/Pinak1392/gse-crawler'>https://github.com/Pinak1392/gse-crawler</a>,
            position: 'Pagerank TFIDF website retrieval',
            description: 'This was a group project in which we had to create a project using graph theory. We decided upon creating a page rank website retrieval feature. For this project I developed the pagerank algorithm, for which I used matrices and eigenvectors. I also developed the TF-IDF ranking of the pages. I used the two scores in order to determine page importance and reliability, along with relevance to the given search prompt. The novel aspect was the use of the Trie data structure in the TF-IDF calculation. The trie would allow the TF-IDF score to be calculated based on not only the relevant words in the search, but also give a relevance score to similar words. Also the trie data structure cut down the storage needed for page information to a fraction of the original space.',
        },
    ];

    return (
        <div className="employment">
            <h2>Projects</h2>
            <div className="jobs-container">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h3>{job.position}</h3>
                        <div className="company-duration">
                            <p className="company">{job.company}</p>
                        </div>
                        <p className="description">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}