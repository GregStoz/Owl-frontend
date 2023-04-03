import styled from "styled-components";

export const MenuContainer = styled.div`
    z-index:1;
div {
    width: 148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;

    span {
        cursor: pointer;
    }
}

ul {   
    
    height: 148px;
    background-color: #2e2e2e;
    border-radius: 0 0 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    padding: 8px;
    
    li {
        cursor: pointer;
        list-style: none;
        a {
        text-decoration: none;
        color: white;
    
}
    }
}
`