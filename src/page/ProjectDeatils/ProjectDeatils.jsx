import React from 'react';
import { useParams } from 'react-router';

const ProjectDeatils = () => {
    const {id} = useParams()
    
    return (
        <div>
            <h2>This is deatils{id}</h2>
        </div>
    );
};

export default ProjectDeatils;