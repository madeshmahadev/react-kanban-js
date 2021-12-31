import React from "react";
import styled from "styled-components";
import InnerList from "./InnerList";

import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background: #f4f5f7;
    width: 220px;
    height: 500px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 10px;
`;

const TaskList = styled.div`
    padding: 10px;
    flex-grow: 1;
    min-height: 100px;
`;



export function Column(props) {
    return (
        <Container>
            <Title>{props.column.title}</Title>
                <Droppable 
                    droppableId={props.column.id}
                    //type={props.column.id === 'column-4' ? 'done' : 'active'}
                    isDropDisabled={props.isDropDisabled}
                >
                    { (provided,snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <InnerList tasks={props.tasks} />
                            {provided.placeholder}
                        </TaskList>
                        )
                    }
                </Droppable>
        </Container>
    )
}
