import React from "react"
export default function WorkExpList ({jobs}) {  

  return (
    <div>
    <article class="work-exp">
                <h3><span class="letter" id="workEx">W</span>Work experience</h3>
                <ul>
                {jobs.map(jobs=>(
                    <li class="we" key = {jobs.title}>  <strong> Name of employer:</strong><a href={jobs.link}> {jobs.name}</a> <br></br>
                
                    <strong>Job title: </strong> {jobs.title} <br></br>
                    <strong>Project/Role description:</strong> {jobs.description}
                </li>
                ))}
                    </ul>
                
</article>
    
    </div>
 )
}
