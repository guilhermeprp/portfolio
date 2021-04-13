import styled from "styled-components";

export const Skills = styled.section`
  .wrapper {
    text-align: center;
  }

  .skills-box {
    display: inline-block;
    max-width: 150px;
    overflow: hidden;
    > p {
      display: flex;
      justify-content: center;
      color: white;
      font-size: 25px;
      font-weight: 900;
      opacity: 0;
      transition: 0.3s;
    }
  }

  .skills-box:hover {
    .skills-shadow {
      transition: 0;
      filter: blur(10px) opacity(0.3);
    }
    .skills {
      transition: 0;
      filter: opacity(1) saturate(1.2);
    }
    > p {
      transition: 0;
      opacity: 1;
    }
  }

  .skills {
    transition: 0.1s;
    display: flex;
    height: 150px;
    width: 150px;
  }

  .skills-shadow {
    transition: 0.5s;
    position: absolute;
    filter: opacity(0.3) saturate(0);
    height: 150px;
    width: 150px;
    transform: translateX(-75px);
  }
`;
