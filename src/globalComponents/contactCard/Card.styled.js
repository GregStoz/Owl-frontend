import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid #2e2e2e;
    padding: 10px;
    width: 80%;

    .button-area {
        display: flex;
        gap: 40px;
        justify-content: space-around;
        
    }
    cursor: pointer;

    .card-title {
        background-color: #2e2e2e;
        padding: 4px;
        span {
        color: white;
        font-weight: bold;
    }}

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
            list-style: none;
        }
    }


`