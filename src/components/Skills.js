import React from 'react';

const skills = ["HTML", "CSS", "JavaScript", "React", "React-Native", "Node.js", "Ruby on Rails", "Flexbox", "Grid", "Git Management"];

class Skills extends React.Component {

    render () {
        return (
            <div className='Skills'>
                <h1>Skills and Proficiencies</h1>

                {skills.map((skill) => (
                    <div className='skill-container'>
                        <h4>{skill}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default Skills;