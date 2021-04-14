import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;
  color: white;
}

body{
  background: ${(props) => props.theme.colors.background};
  overflow:hidden;
  
}

.wrapper {
    padding: 0 5vw;
    margin-bottom: 10rem;
}

.section-title-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;

  .section-title {
    z-index: 2;
    padding: 7px 35px;
    width: auto;
    border: 5px solid rgb(237, 008, 057, 0.8);
    border-radius: 50px;
    background: rgb(015, 010, 029, 1);
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
   .blink-caret {
      font-size: 40px;
      font-weight: 900;
      animation: blinkCaret 1s step-end infinite;
      transform: translateX(5px) translateY(-5px);
    }
  }

  .section-background-line {
    z-index: 1;
    width: 100%;
    height: 20px;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(000, 000, 000, 0.1) 0%,
      rgba(237, 008, 057, 1) 50%,
      rgba(000, 000, 000, 0.1) 100%
    );
  }
}

@media screen and (min-width: 600px) {
    .section-background-line {
      background: linear-gradient(
        90deg,
        rgba(000, 000, 000, 0.1) 10%,
        rgba(237, 008, 057, 1) 50%,
        rgba(000, 000, 000, 0.1) 90%
      ) !important ; 
    }
  }

  @keyframes blinkCaret {
    from,
    to {
      color: transparent;
    }
    50% {
      color: orange;
    }
  }
  



`;
