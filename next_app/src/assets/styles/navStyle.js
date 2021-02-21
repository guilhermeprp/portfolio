import styled from "styled-components";

export const NavBar = styled.nav`
  z-index: 99999;
  background: transparent;
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 30px;
  padding-left: 15px;
  .header {
    .nav-bar {
      display: flex;
      align-items: center;
      .home-button {
        display: contents;
        #home-logo {
          filter: invert(100%) hue-rotate(190deg) saturate(5) contrast(160%);
          margin-top: 5px;
          margin-left: 20px;
        }

        label {
          display: inline-block;
          margin-top: 7px;
          color: #ffffff;
          span {
            display: block;
          }
          .nav-logo-title {
            font-size: 20px;
            font-weight: 600;
          }
          .nav-logo-subtitle {
            letter-spacing: 5px;
            margin-left: 10px;
          }
        }
      }
      .home-button:hover {
        cursor: pointer;
        #home-logo {
          filter: none;
          transition: all 0.3s ease;
        }
        label {
          color: #202125;
          transition: all 0.3s ease;
          cursor: pointer;
        }
      }
      .box-menu-button {
        // display: flex;
        display: none;
        height: 100%;
        width: 80px;
        background-color: transparent;
        position: absolute;
        align-items: center;
        justify-content: center;
        text-align: -webkit-center;
        right: 50px;
        top: 0;
        .menu-icon-box {
          height: 20px;
          width: 30px;
          background-color: transparent;
          text-align: -webkit-center;

          .menu-icon-bar {
            height: 3px;
            width: 30px;
            background-color: #ffffff;
          }
          .menu-icon-bar-off {
            height: 5px;
            width: 30px;
            background-color: transparent;
          }
        }
      }
      .box-menu-button:hover {
        cursor: pointer;
        .menu-icon-box {
          .menu-icon-bar {
            transition: all 0.3s ease;
            background-color: rgba($color: #000, $alpha: 0.5);
          }
          #mid-bar {
            transition: all 0.2s ease;
            margin-top: 2px;
            margin-bottom: 2px;
            width: 26px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    height: 70px;
    padding-top: 0px;
    padding-left: 0px;
    .header {
      .nav-bar {
        height: 70px;
        .home-button {
          #home-logo {
            height: 50px;
            margin-top: 10px;
            margin-left: 10px;
          }
          label {
            .nav-logo-title {
              font-size: 17px;
            }
            .nav-logo-subtitle {
              font-size: 12px;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
`;
