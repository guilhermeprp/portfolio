import styled from "styled-components";

export const Projects = styled.section`
  .cards-grid {
    display: flex;
    flex-direction: column;
  }
  .card {
    width: 100%;
    height: 300px;
    background-color: black;
    margin: 2rem 0;
    padding: 1rem;
    border: 10px solid #ed0c41;
    overflow: hidden;
    img {
      object-fit: contain;
    }
  }

  @media (min-width: 600px) {
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 45%);
      grid-template-rows: repeat(2, 45%);
      width: 100%;
      height: 90vh;
      max-height: 100vh;
      grid-gap: 2rem;
    }
    .card {
      margin: 0;
      background-color: black;
      width: 100%;
      height: 100%;
    }
  }
`;
