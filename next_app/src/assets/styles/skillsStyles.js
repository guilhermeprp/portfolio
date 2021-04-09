import styled from "styled-components";

export const Skills = styled.div`
  grid-row-start: 7;

  .wrapper {
    padding: 0 5vw;
    text-align-last: center;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    > h1 {
      z-index: 2;
      padding: 7px 0;
      width: 200px;
      border: 5px solid rgb(237, 008, 057, 0.8);
      border-radius: 50px;
      background: rgb(015, 010, 029, 1);
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 40px;
        font-weight: 900;
        animation: underlineFlashing 1s step-end infinite;
        transform: translateX(5px) translateY(-5px);
      }
    }

    > div {
      z-index: 1;
      width: 100%;
      height: 20px;
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(000, 000, 000, 0.1) 10%,
        rgba(237, 008, 057, 1) 50%,
        rgba(000, 000, 000, 0.1) 90%
      );
    }
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
  }

  @keyframes underlineFlashing {
    from,
    to {
      color: transparent;
    }
    50% {
      color: orange;
    }
  }
`;
