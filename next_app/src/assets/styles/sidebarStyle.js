import styled from "styled-components";

export const SideBar = styled.section`
  .body {
    background: #0f0a1d;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .head {
      display: flex;
      justify-content: center;
      max-height: 250px;
      width: 100%;

      .home-button {
        #home-logo {
          margin: 20px;
          height: 100px;
          transition: 0.3s;
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      a {
        display: flex;
        padding: 1rem 1rem;
        width: 100%;
        text-decoration: none;
        font-size: 1.2rem;
        align-items: center;
        /* background: #171127; */
        svg {
          width: 2rem;
          margin: 0 1rem;
        }
      }

      a:before {
        content: "";
        width: 200px;
        height: 3.3rem;
        background: rgb(255, 255, 255, 0.05);
        backdrop-filter: invert(1) grayscale(1);
        position: absolute;
        transform: translate(-20rem, 0);
        transition: 2s;
        clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 100% 100%, 0% 100%);
        display: inline-flex;
      }

      a:hover::before {
        transform: translate(-1.5rem, 0rem);
        transition: 0.3s;
      }
    }
  }
`;
