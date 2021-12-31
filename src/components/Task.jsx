import React from "react";
import styled from "styled-components";

import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    user-select: "none";
    margin: 0 0 8px 0;
`;

const Card = styled.div`
    background: #fff;
    padding: 10px;
    border: 1px solid rgb(208 200 200);
    box-sizing: border-box;
    border-radius: 5px;
    transition: transform 0.35s ease-in-out;
    transform: ${props => ( props.isDragging ? "rotate(2deg)" : "unset" )}
`;

const Text = styled.p`
    font-size: 16px;
`;

export default function Task(props) {

    return (
        <Draggable
            draggableId={props.task.id}
            index={props.index}
        >
            { (provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                        ...provided.draggableProps.style
                    }}
                >
                    <Card
                        isDragging={snapshot.isDragging}
                    >
                        <Text>
                            {props.task.content}
                        </Text>
                    </Card>
                </Container>
            )}
        </Draggable>
    )
}
