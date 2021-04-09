import styled from "styled-components";

export const SideBar = styled.nav`
  .body {
    background: #0f0a1d;
    height: 100vh;
    display: flex;
    justify-content: center;
    .head {
      max-height: 100px;
      .home-button {
        #home-logo {
          margin: 20px;
          height: 100px;
          transition: 0.3s;
        }
      }
    }
  }
`;
