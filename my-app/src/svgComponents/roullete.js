import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { numberRoulleteColors } from "../config";

const RotateFrame = (stat) => keyframes`
    0%{
        transform: rotate(${(360 * stat) / 37}deg);
    }
    100%{
        transform: rotate(${(360 * stat) / 37}deg);
    }
`;

const RoulletContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 17em;
  margin: auto;
`;
const ReactG = styled.g`
  transform-origin: center center;
  animation: 0.01s ease 0s 1 normal forwards running
    ${(props) => RotateFrame(props.stat)};
`;
const ReactPath = styled.path`
  fill: ${(props) => props.color};
  transform: scale(${({ maxNum, percent }) => (percent / maxNum) * 0.8});
  transition: all 0.6s ease-in 0s;
  transform-box: fill-box;
  transform-origin: center bottom;
`;

const StatRoulletConteiner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;
const Roullete = () => {
  const { wheelStatistic } = useSelector((state) => ({
    wheelStatistic: state.statistic.wheelStatistic,
  }));

  return (
    <RoulletContainer>
      <svg viewBox="0 0 637 637">
        <g fill="#0c0c0c">
          <path
            data-name="Path 728"
            d="M372 630.6h-.1a317.8 317.8 0 0 1-53.5 4.5v-57a259.2 259.2 0 0 0 43.9-3.7z"
          />
          <path
            data-name="Path 729"
            d="M472.8 594.9q-11.6 6.5-23.9 12-12.2 5.6-25 10.1l-19-53.6a253 253 0 0 0 40.2-18.2z"
          />
          <path
            data-name="Path 730"
            d="M556 527.6a316.3 316.3 0 0 1-38.7 37.2l-35.7-44.3a261.5 261.5 0 0 0 31.8-30.5z"
          />
          <path
            data-name="Path 731"
            d="M612.3 436.5a315.5 315.5 0 0 1-24.2 48l-48.5-29.9a256.9 256.9 0 0 0 19.9-39.3z"
          />
          <path
            data-name="Path 732"
            d="M634.8 331.8a317.3 317.3 0 0 1-6.8 53.3l-55.6-12a258.3 258.3 0 0 0 5.5-43.7z"
          />
          <path
            data-name="Path 733"
            d="m632.5 278.2-56.4 7.2a258.4 258.4 0 0 0-9.3-43.1l54.5-16.7a315.1 315.1 0 0 1 11.2 52.6z"
          />
          <path
            data-name="Path 734"
            d="m601.2 175.8-50.8 25.6a256 256 0 0 0-23.1-37.5L573 130a315.2 315.2 0 0 1 28.2 45.8z"
          />
          <path
            data-name="Path 735"
            d="m537.5 89.7-39.4 41.1a263.6 263.6 0 0 0-34.2-27.7L495.7 56a321.2 321.2 0 0 1 41.8 33.7z"
          />
          <path
            data-name="Path 736"
            d="m448.9 29.7-23.5 51.9a256 256 0 0 0-41.6-14.7l14.4-55a313.7 313.7 0 0 1 50.6 17.8z"
          />
          <path
            data-name="Path 737"
            d="M296.4 59.5a255.6 255.6 0 0 0-43.5 7.4l-14.3-55a313.2 313.2 0 0 1 52.9-9z"
          />
          <path
            data-name="Path 738"
            d="M211.3 81.6a257 257 0 0 0-38.4 21.5L141 56q5.5-3.8 11.3-7.3a312.5 312.5 0 0 1 35.6-19z"
          />
          <path
            data-name="Path 739"
            d="M138.6 130.8a266.3 266.3 0 0 0-29.1 33L63.7 130a319.7 319.7 0 0 1 35.5-40.3z"
          />
          <path
            data-name="Path 740"
            d="M86.4 201.4a255.8 255.8 0 0 0-16.5 40.9l-54.4-16.7a317.9 317.9 0 0 1 17-43.8l3-6z"
          />
          <path
            data-name="Path 741"
            d="M58.6 318.4c0 3.7 0 7.3.2 11L2 331.8a348 348 0 0 1-.3-13.4A317 317 0 0 1 4.2 278l56.5 7.3a264.7 264.7 0 0 0-2.1 33z"
          />
          <path
            data-name="Path 742"
            d="m77.3 415.3-52.9 21.2A313.5 313.5 0 0 1 8.7 385l55.7-12a254.3 254.3 0 0 0 12.9 42.2z"
          />
          <path
            data-name="Path 743"
            d="M80.7 527.6Q74 520 67.8 512a219.7 219.7 0 0 1-4-5.4q-8-10.8-15.1-22.3L97 454.6a255.2 255.2 0 0 0 26.3 35.4z"
          />
          <path
            data-name="Path 744"
            d="M191.6 545.2 164 594.9a317.1 317.1 0 0 1-44.5-30.1l35.8-44.3a259.2 259.2 0 0 0 36.4 24.7z"
          />
          <path
            data-name="Path 745"
            d="m274.5 574.4-9.7 56.1a293.4 293.4 0 0 1-13.3-2.5l-8.2-1.9a286.8 286.8 0 0 1-11.4-3q-9.7-2.7-19-6l18.9-53.7a252.5 252.5 0 0 0 42.7 11z"
          />
        </g>
        <g fill="#f33">
          <path
            data-name="Path 723"
            d="M398.2 11.8 383.8 67a256.3 256.3 0 0 0-43.4-7.4l4.8-56.7a314 314 0 0 1 53 9z"
          />
          <path
            data-name="Path 724"
            d="M423.9 617a313.7 313.7 0 0 1-52 13.6l-9.6-56.2a252.2 252.2 0 0 0 42.6-11z"
          />
          <path
            data-name="Path 725"
            d="M517.3 564.8a314.9 314.9 0 0 1-44.5 30l-27.7-49.6a258 258 0 0 0 36.5-24.7z"
          />
          <path
            data-name="Path 727"
            d="M253 67a256 256 0 0 0-41.7 14.6L188 29.7a315.2 315.2 0 0 1 50.7-17.9z"
          />
          <path
            data-name="Path 746"
            d="M588 484.4a316.4 316.4 0 0 1-32 43.2L513.5 490a255.2 255.2 0 0 0 26.2-35.4z"
          />
          <path
            data-name="Path 747"
            d="M628 385.1a313.8 313.8 0 0 1-15.7 51.4l-52.8-21.2a256.4 256.4 0 0 0 12.9-42.2z"
          />
          <path
            data-name="Path 748"
            d="M635 318.4c0 4.5 0 9-.2 13.4l-56.9-2.4c.2-3.7.3-7.3.3-11a264 264 0 0 0-2.1-33l56.4-7.3a322.2 322.2 0 0 1 2.6 40.3z"
          />
          <path
            data-name="Path 749"
            d="m621.3 225.6-54.5 16.7a253.4 253.4 0 0 0-16.4-40.9l50.8-25.6a317 317 0 0 1 20 49.8z"
          />
          <path
            data-name="Path 750"
            d="M573 130 527.3 164a266.2 266.2 0 0 0-29.2-33l39.4-41.2A319.6 319.6 0 0 1 573 130z"
          />
          <path
            data-name="Path 751"
            d="M495.7 56 464 103a257.1 257.1 0 0 0-38.5-21.5l23.4-51.9a315.2 315.2 0 0 1 47 26.3z"
          />
          <path
            data-name="Path 752"
            d="M172.9 103.1a263.5 263.5 0 0 0-34.3 27.7l-39.4-41A320.8 320.8 0 0 1 141 56z"
          />
          <path
            data-name="Path 753"
            d="M109.5 163.9a256 256 0 0 0-23.1 37.5l-50.9-25.6A315.5 315.5 0 0 1 63.7 130z"
          />
          <path
            data-name="Path 754"
            d="M70 242.3a258.8 258.8 0 0 0-9.3 43l-56.5-7.2a315.5 315.5 0 0 1 11.3-52.5z"
          />
          <path
            data-name="Path 755"
            d="m64.4 373.1-55.7 12A317.5 317.5 0 0 1 2 331.8l56.8-2.4a256.3 256.3 0 0 0 5.6 43.7z"
          />
          <path
            data-name="Path 756"
            d="m97.1 454.6-48.4 29.8a315.8 315.8 0 0 1-24.3-48l52.9-21.1A257 257 0 0 0 97 454.6z"
          />
          <path
            data-name="Path 757"
            d="m155.2 520.5-35.8 44.3a318.2 318.2 0 0 1-38.8-37.2l42.8-37.6a258.5 258.5 0 0 0 31.8 30.5z"
          />
          <path
            data-name="Path 758"
            d="m231.8 563.4-19 53.7a314.3 314.3 0 0 1-49-22.2l27.8-49.7a256.6 256.6 0 0 0 40.2 18.2z"
          />
          <path
            data-name="Path 759"
            d="M318.4 578.2V635a315.5 315.5 0 0 1-53.6-4.6l9.7-56a259.5 259.5 0 0 0 43.9 3.7z"
          />
        </g>
        <path
          d="m345.2 2.8-4.8 56.7q-10.9-.9-22-1t-22 1l-4.9-56.7c8.9-.7 17.8-1.1 26.9-1.1q13.5 0 26.8 1.1z"
          fill="#00b233"
        />
        <g data-name="Group 341" opacity=".5">
          <path
            data-name="Path 760"
            d="m340.4 59.5-22 258.9-22-258.9q10.8-.9 22-1t22 1z"
            fill="#597f63"
          />
          <path
            data-name="Path 761"
            d="M405 563.4a252.5 252.5 0 0 1-42.7 11l-44-256z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 762"
            d="M481.6 520.5a258 258 0 0 1-36.5 24.7L318.4 318.4z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 763"
            d="M539.6 454.6a255.2 255.2 0 0 1-26.2 35.4l-195-171.6z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 764"
            d="M572.4 373.1a256.4 256.4 0 0 1-13 42.2l-241-97z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 765"
            d="M578.2 318.4c0 3.7-.1 7.3-.3 11l-259.5-11 257.7-33a264 264 0 0 1 2 33z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 766"
            d="m566.8 242.3-248.4 76 232-116.9a256.2 256.2 0 0 1 16.4 40.9z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 767"
            d="m527.3 163.9-209 154.5 179.8-187.6a266.4 266.4 0 0 1 29.2 33z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 768"
            d="M463.9 103.1 318.4 318.4l107-236.8A259.8 259.8 0 0 1 464 103z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 769"
            d="m383.8 67-65.4 251.4 22-258.9a256.5 256.5 0 0 1 43.4 7.4z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 770"
            d="m318.4 318.4-107-236.8a256 256 0 0 1 41.5-14.7z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 771"
            d="M318.4 318.4 138.6 130.8a263.4 263.4 0 0 1 34.3-27.7z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 772"
            d="m318.4 318.4-232-117a256 256 0 0 1 23-37.5z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 773"
            d="m318.4 318.4-257.7-33a258.8 258.8 0 0 1 9.2-43.1z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 774"
            d="M318.4 318.4 64.4 373a256.4 256.4 0 0 1-5.6-43.7z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 775"
            d="M318.4 318.4 97 454.6a257 257 0 0 1-19.8-39.3z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 776"
            d="m318.4 318.4-163.2 202a258.6 258.6 0 0 1-31.8-30.4z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 777"
            d="m318.4 318.4-86.6 245a256.5 256.5 0 0 1-40.2-18.2z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 778"
            d="M318.4 318.4v259.8a259.6 259.6 0 0 1-44-3.8z"
            fill="#7f7f7f"
          />
          <path
            data-name="Path 779"
            d="M362.3 574.4a259.6 259.6 0 0 1-44 3.8V318.4z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 780"
            d="M445 545.2a252.8 252.8 0 0 1-40 18.2l-86.6-245z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 781"
            d="M559.5 415.3a257 257 0 0 1-19.9 39.3L318.4 318.4z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 782"
            d="M578 329.4a258.3 258.3 0 0 1-5.6 43.7l-254-54.7z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 783"
            d="m576 285.4-257.6 33 248.4-76.1a258.3 258.3 0 0 1 9.3 43z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 784"
            d="m550.4 201.4-232 117 208.9-154.5a256.4 256.4 0 0 1 23 37.5z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 785"
            d="M498.1 130.8 318.4 318.4 463.9 103a262 262 0 0 1 34.2 27.7z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 786"
            d="m425.4 81.6-107 236.8 65.4-251.5a256 256 0 0 1 41.6 14.7z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 787"
            d="M318.4 318.4 252.9 66.9a256.1 256.1 0 0 1 43.5-7.4z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 788"
            d="M318.4 318.4 172.9 103a259.5 259.5 0 0 1 38.4-21.5z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 789"
            d="m318.4 318.4-209-154.5a266.2 266.2 0 0 1 29.2-33z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 790"
            d="M318.4 318.4 69.9 242.3a256 256 0 0 1 16.5-40.9z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 791"
            d="m318.4 318.4-259.6 11a232.2 232.2 0 0 1-.2-11 264.7 264.7 0 0 1 2-33z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 792"
            d="M318.4 318.4 77.3 415.3a254.4 254.4 0 0 1-13-42.2z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 793"
            d="M318.4 318.4 123.4 490A255.2 255.2 0 0 1 97 454.6z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 794"
            d="M318.4 318.4 191.6 545.2a259.4 259.4 0 0 1-36.4-24.7z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 795"
            d="m318.4 318.4-44 256a253.3 253.3 0 0 1-42.6-11z"
            fill="#4c4c4c"
          />
          <path
            data-name="Path 796"
            d="M513.4 490a261.4 261.4 0 0 1-31.8 30.5L318.4 318.4z"
            fill="#4c4c4c"
          />
        </g>
        <path
          data-name="Path 839"
          d="m269.3 45.3-14.5 2.5-.4-2.4 5.7-11a21.9 21.9 0 0 0 1.7-4.2 7.6 7.6 0 0 0 .1-3.1 5.5 5.5 0 0 0-1.5-3.2 3 3 0 0 0-2.7-.9 3.7 3.7 0 0 0-2.9 2 6.3 6.3 0 0 0-.4 4l-3.1.6a8.5 8.5 0 0 1 1-6.2 6.8 6.8 0 0 1 4.9-3 6.5 6.5 0 0 1 5.2 1 7.2 7.2 0 0 1 2.7 4.7q.6 3.9-2.5 9.8l-4.5 8.6 10.8-1.9z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 840"
          d="m280.1 16.7.5 2.8-.5.1a6.5 6.5 0 0 0-4.6 3 10.5 10.5 0 0 0-1 6.5 5.5 5.5 0 0 1 4-2.9 5.4 5.4 0 0 1 5 1.6 10.6 10.6 0 0 1 2.8 5.9 10.3 10.3 0 0 1-.8 6.8 6.1 6.1 0 0 1-4.6 3.2 6 6 0 0 1-5.6-2 13.2 13.2 0 0 1-3.2-7l-.2-1.3a25.7 25.7 0 0 1-.3-8.7 9.5 9.5 0 0 1 2.6-5.3 10.1 10.1 0 0 1 5.4-2.6zM278.5 29a3.5 3.5 0 0 0-2.2 1.4 5.6 5.6 0 0 0-1.1 2.8l.2 1.3a10.6 10.6 0 0 0 2 5 3.3 3.3 0 0 0 3 1.5 3.1 3.1 0 0 0 2.5-2.1 10 10 0 0 0-1.4-8.6 3 3 0 0 0-3-1.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 841"
          d="m217.9 44 2-.7a3.8 3.8 0 0 0 2.4-2.2 4.8 4.8 0 0 0-.1-3.5q-1.5-4.3-5-3.1a3.2 3.2 0 0 0-2 2 5.1 5.1 0 0 0 .1 3.5l-3 1a7.3 7.3 0 0 1 .1-5.5 7 7 0 0 1 9.3-3.4 7.7 7.7 0 0 1 3.5 4.6 6.5 6.5 0 0 1 .3 3.5 5.9 5.9 0 0 1-1.6 3q4 0 5.6 4.6a7.9 7.9 0 0 1 0 6 7.4 7.4 0 0 1-9.6 3.4 7.3 7.3 0 0 1-3.6-4.4l3-1a5 5 0 0 0 2.1 2.8 3.4 3.4 0 0 0 3 .2 3.6 3.6 0 0 0 2.3-2 5.5 5.5 0 0 0-.2-3.9q-1.6-4.5-5.9-3l-1.8.6z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 842"
          d="m164.7 69.5 1.8-1a3.9 3.9 0 0 0 2-2.5 4.8 4.8 0 0 0-.7-3.4q-2.2-4-5.4-2.3a3.2 3.2 0 0 0-1.7 2.4 5.2 5.2 0 0 0 .7 3.3l-2.7 1.6a7.3 7.3 0 0 1-.9-5.5 7 7 0 0 1 8.6-5 7.8 7.8 0 0 1 4.2 4 6.6 6.6 0 0 1 .9 3.4 5.9 5.9 0 0 1-1 3.3c2.6-.5 4.7.7 6.2 3.5a7.9 7.9 0 0 1 1 5.9 7.4 7.4 0 0 1-8.8 5 7.3 7.3 0 0 1-4.3-3.7l2.8-1.5a5.1 5.1 0 0 0 2.5 2.4 3.4 3.4 0 0 0 3-.3 3.6 3.6 0 0 0 2-2.4 5.5 5.5 0 0 0-1-3.8q-2.3-4.1-6.2-2l-1.7 1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 843"
          d="m179.6 63-5.4-12 10-5.6 1.5 2.7-7.6 4.3 3 6.5a6 6 0 0 1 2.5-2.7 5.6 5.6 0 0 1 5.3-.2 10.6 10.6 0 0 1 4.7 4.7 9.9 9.9 0 0 1 1.5 6.5 7 7 0 0 1-8.6 5.3A8.4 8.4 0 0 1 182 69l2.6-1.5a6.2 6.2 0 0 0 2.8 2.4 3.4 3.4 0 0 0 2.9-.3 3.3 3.3 0 0 0 1.8-2.9 8 8 0 0 0-1.3-4.3 7.3 7.3 0 0 0-3-3.1 3.5 3.5 0 0 0-3.5 0 3.7 3.7 0 0 0-1.8 2l-.3 1.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 844"
          d="m138.4 107.2-2.5 2-14-17.4-2.8 5.5-2-2.4 4.2-8 .4-.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 845"
          d="m157.2 92-11.4 9.2-1.6-1.9-.4-12.4a22.2 22.2 0 0 0-.5-4.4 7.6 7.6 0 0 0-1.5-2.9 5.6 5.6 0 0 0-2.9-2 3 3 0 0 0-2.8.6 3.7 3.7 0 0 0-1.5 3 6.3 6.3 0 0 0 1.6 3.8l-2.5 2a8.5 8.5 0 0 1-2.1-5.8 6.9 6.9 0 0 1 2.8-5.2 6.5 6.5 0 0 1 5-1.6 7.2 7.2 0 0 1 4.7 2.9q2.5 3 2.6 9.7l.3 9.7 8.5-6.9z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 846"
          d="M108.7 136.7 99 147.8l-1.8-1.6-2.6-12.2a22 22 0 0 0-1.2-4.3 7.5 7.5 0 0 0-2-2.5 5.5 5.5 0 0 0-3.1-1.5 3 3 0 0 0-2.7 1 3.7 3.7 0 0 0-1 3.3 6.3 6.3 0 0 0 2.2 3.4l-2 2.4a8.5 8.5 0 0 1-3.2-5.3 6.9 6.9 0 0 1 2-5.6 6.5 6.5 0 0 1 4.6-2.4 7.2 7.2 0 0 1 5 2q3 2.6 4.3 9.2l2 9.4 7.1-8.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 847"
          d="M105.9 110.5a7 7 0 0 1 2 3 6.4 6.4 0 0 1 .3 3.3 6.6 6.6 0 0 1 3.7-.3 7.4 7.4 0 0 1 3.6 1.8 7.6 7.6 0 0 1 2.8 5 7.4 7.4 0 0 1-6.8 7.7 8.4 8.4 0 0 1-7.6-5.5 6.5 6.5 0 0 1-.1-3.7 6.2 6.2 0 0 1-3.4.2 7.1 7.1 0 0 1-3.2-1.7 7.5 7.5 0 0 1-2.7-4.9 6.8 6.8 0 0 1 6.2-7 7.5 7.5 0 0 1 5.2 2zm-2 2.4a5.4 5.4 0 0 0-3.2-1.5 3 3 0 0 0-3.2 3.7 5.5 5.5 0 0 0 1.9 2.8 5.3 5.3 0 0 0 3 1.5 3 3 0 0 0 2.6-1 2.9 2.9 0 0 0 .7-2.7 5.4 5.4 0 0 0-1.9-2.8zm9.4 7.7a5.7 5.7 0 0 0-3.4-1.6 3.4 3.4 0 0 0-2.9 1.2 3.3 3.3 0 0 0-.8 3 6 6 0 0 0 2 3.2 5.6 5.6 0 0 0 3.4 1.6 3.8 3.8 0 0 0 3.7-4.3 5.6 5.6 0 0 0-2-3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 848"
          d="m65 154 16.1 20.6-1.7 2.8-15.4-20-6.1 10-2.4-1.5 8-12.9z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 849"
          d="m60.2 217-5.5 13.6-2.3-.9-6.4-10.6a22 22 0 0 0-2.6-3.6 7.5 7.5 0 0 0-2.7-1.8 5.5 5.5 0 0 0-3.5-.4 3 3 0 0 0-2.2 2 3.7 3.7 0 0 0 .2 3.3 6.3 6.3 0 0 0 3.3 2.5l-1.2 3a8.5 8.5 0 0 1-4.7-4 6.9 6.9 0 0 1-.1-5.9 6.5 6.5 0 0 1 3.6-3.9 7.2 7.2 0 0 1 5.5.2q3.6 1.5 7 7.3l5 8.3 4-10.1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 850"
          d="M55.2 199a5.6 5.6 0 0 1 .6 5 5.3 5.3 0 0 1-4 3.4 12.7 12.7 0 0 1-11.9-5 6 6 0 0 1-.4-5.6 5.9 5.9 0 0 1 4.6-3.7q3.4-.7 8.1 1.2l1 .4a31 31 0 0 1 6.3 3.2 11.6 11.6 0 0 1 3.3 3.5 8.2 8.2 0 0 1 1.1 4 12.6 12.6 0 0 1-1 4.9l-2.7-1 .2-.6a6.7 6.7 0 0 0 0-5.5q-1.2-2.4-5.2-4.2zm-1.7 3.5a3.4 3.4 0 0 0 0-2.4 6.4 6.4 0 0 0-1.8-2.6l-1.3-.5a11 11 0 0 0-5.4-1q-2.3.4-3 1.9a3.1 3.1 0 0 0 .6 3.2 8.6 8.6 0 0 0 3.8 2.6 8.9 8.9 0 0 0 4.5.7 3 3 0 0 0 2.6-1.9z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 851"
          d="m45.6 267.1-.6 3.2-21.8-4.7 1.2 6-3-.7-1.7-8.8v-.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 852"
          d="M31.5 240.5a7 7 0 0 1 3.2 1.6 6.4 6.4 0 0 1 1.9 2.8 6.7 6.7 0 0 1 3-2.1 7.4 7.4 0 0 1 4-.2 7.6 7.6 0 0 1 5 3 7.4 7.4 0 0 1-2.2 10 8.4 8.4 0 0 1-9.3-1 6.4 6.4 0 0 1-2-3.2 6.2 6.2 0 0 1-2.8 1.8 7 7 0 0 1-3.6.1 7.5 7.5 0 0 1-4.8-2.9 6.8 6.8 0 0 1 2-9.2 7.5 7.5 0 0 1 5.6-.7zm-.7 3.1a5.4 5.4 0 0 0-3.4.3 3 3 0 0 0-1 4.7 5.5 5.5 0 0 0 3 1.6 5.3 5.3 0 0 0 3.4-.2 3 3 0 0 0 1-4.8 5.4 5.4 0 0 0-3-1.6zm12.1 2.1a5.7 5.7 0 0 0-3.8.3 3.4 3.4 0 0 0-1.9 2.5 3.3 3.3 0 0 0 .8 3 6 6 0 0 0 3.3 1.8 5.6 5.6 0 0 0 3.7-.3 3.8 3.8 0 0 0 1.2-5.5 5.6 5.6 0 0 0-3.3-1.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 853"
          d="m41.1 308.8-.6 14.7H38l-9.6-8a21.8 21.8 0 0 0-3.7-2.5 7.6 7.6 0 0 0-3-.8 5.5 5.5 0 0 0-3.5.8 3 3 0 0 0-1.4 2.5 3.7 3.7 0 0 0 1.2 3.2 6.3 6.3 0 0 0 4 1.2l-.2 3.2a8.6 8.6 0 0 1-5.8-2.2 6.9 6.9 0 0 1-2-5.5 6.5 6.5 0 0 1 2.1-4.9 7.2 7.2 0 0 1 5.3-1.6q3.9.2 9 4.5l7.4 6.2.5-11z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 854"
          d="m42 289.8-.7 14.7-2.4-.1-9.6-8a22 22 0 0 0-3.7-2.5 7.5 7.5 0 0 0-3-.7 5.5 5.5 0 0 0-3.5.8 3 3 0 0 0-1.4 2.5 3.7 3.7 0 0 0 1.2 3.2 6.3 6.3 0 0 0 4 1.2l-.2 3.2A8.6 8.6 0 0 1 17 302a6.9 6.9 0 0 1-2-5.5 6.5 6.5 0 0 1 2.2-4.9 7.2 7.2 0 0 1 5.2-1.6q3.9.2 9 4.5l7.4 6.2.5-11z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 855"
          d="M32.6 351.9a5.6 5.6 0 0 1 3 4.1 5.3 5.3 0 0 1-1.8 4.8 12.8 12.8 0 0 1-12.9 1.5 6 6 0 0 1-3.1-4.7 5.9 5.9 0 0 1 2.2-5.5q2.6-2.2 7.7-2.9h1a31 31 0 0 1 7.1-.3 11.6 11.6 0 0 1 4.6 1.3 8.2 8.2 0 0 1 3 3 12.7 12.7 0 0 1 1.4 4.8l-2.8.4-.1-.6a6.7 6.7 0 0 0-2.7-4.9q-2.2-1.5-6.6-1zm.2 4a3.4 3.4 0 0 0-1.2-2.2 6.5 6.5 0 0 0-2.8-1.4l-1.4.2a11 11 0 0 0-5.1 1.8q-2 1.4-1.7 3a3 3 0 0 0 2 2.5 8.5 8.5 0 0 0 4.5.5 8.8 8.8 0 0 0 4.3-1.6 3 3 0 0 0 1.4-2.9z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 856"
          d="m43.7 416.1-.6-2a3.8 3.8 0 0 0-2-2.5 4.8 4.8 0 0 0-3.5 0q-4.4 1.3-3.4 4.7a3.2 3.2 0 0 0 2 2.3 5.2 5.2 0 0 0 3.4 0l1 3a7.3 7.3 0 0 1-5.6-.3 7.1 7.1 0 0 1-3-9.4 7.8 7.8 0 0 1 4.7-3.4 6.5 6.5 0 0 1 3.6 0 5.9 5.9 0 0 1 3 1.6c0-2.7 1.7-4.4 4.7-5.4a7.9 7.9 0 0 1 6 .3 7.4 7.4 0 0 1 3 9.7 7.3 7.3 0 0 1-4.5 3.4l-1-3.1a5.2 5.2 0 0 0 3-2 3.4 3.4 0 0 0 .4-3 3.6 3.6 0 0 0-2-2.3 5.5 5.5 0 0 0-3.9 0q-4.6 1.4-3.2 5.8l.5 1.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 857"
          d="m50.7 388.4 1 3-21.4 6.6 4 4.6-3 .9-5.8-6.9-.1-.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 858"
          d="m75 449.8 1.4 2.9-19.9 10 4.7 3.8-2.7 1.4-7-5.8-.2-.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 859"
          d="m57.3 434.5-1.3-2.7 2.5-1.2 1.3 2.6 5.4-2.7 1.5 2.8-5.5 2.8 4.5 8.9-1.8.9-20.7-.6-1.5-3zm4.4 8.5-3-5.7-11.1 5.6z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 860"
          d="m97.6 485 8.8 11.9-2 1.4-12.4-.1a22.1 22.1 0 0 0-4.5.3 7.5 7.5 0 0 0-2.9 1.3 5.6 5.6 0 0 0-2.1 2.8 3 3 0 0 0 .5 2.9 3.7 3.7 0 0 0 3 1.7 6.3 6.3 0 0 0 3.8-1.5l1.9 2.5a8.5 8.5 0 0 1-6 2 6.8 6.8 0 0 1-5-3 6.5 6.5 0 0 1-1.3-5.2 7.2 7.2 0 0 1 3-4.5q3.2-2.3 9.9-2.2l9.6.1-6.5-8.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 861"
          d="M77.7 477q4.6-3.6 8-3.9a6.4 6.4 0 0 1 6.4 8.5q-1.2 3-5.6 6.4l-3.7 2.6q-4.6 3.5-8 3.8a6.5 6.5 0 0 1-6.3-8.4q1.1-3 5.5-6.3zm-1.8 5.2a15.4 15.4 0 0 0-4.4 4.4 3.2 3.2 0 0 0 3.4 4.7 14.7 14.7 0 0 0 5.3-2.7l4.4-3.2a15.5 15.5 0 0 0 4.4-4.5 3.1 3.1 0 0 0 0-3.6 3 3 0 0 0-3.3-1.1 15.3 15.3 0 0 0-5.4 2.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 862"
          d="m125.9 517.1 2.3 2.2-15.4 16.1 5.7 2-2.1 2.3-8.5-3.1-.3-.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 863"
          d="m166.4 567.6-1.7-1.2a3.8 3.8 0 0 0-3.2-.7 4.8 4.8 0 0 0-2.8 2.2q-2.6 3.8.4 5.8a3.2 3.2 0 0 0 3 .5 5.2 5.2 0 0 0 2.6-2.2l2.6 1.8a7.3 7.3 0 0 1-4.5 3.3 7 7 0 0 1-8.2-5.5 7.7 7.7 0 0 1 1.5-5.6 6.5 6.5 0 0 1 2.7-2.3 5.8 5.8 0 0 1 3.4-.5c-1.6-2.2-1.4-4.5.3-7.2a7.9 7.9 0 0 1 4.8-3.5 7.4 7.4 0 0 1 8.5 5.6 7.3 7.3 0 0 1-1.4 5.5l-2.6-1.8a5.1 5.1 0 0 0 1-3.4 3.4 3.4 0 0 0-1.6-2.5 3.6 3.6 0 0 0-3-.6 5.5 5.5 0 0 0-3 2.4q-2.7 4 1.1 6.5l1.6 1.1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 864"
          d="m150.6 557-1.7-1.2a3.8 3.8 0 0 0-3.2-.7 4.8 4.8 0 0 0-2.7 2.1q-2.6 3.9.3 5.9a3.2 3.2 0 0 0 3 .4 5.2 5.2 0 0 0 2.6-2.1l2.6 1.8a7.3 7.3 0 0 1-4.5 3.2 7 7 0 0 1-8.2-5.4 7.8 7.8 0 0 1 1.6-5.6 6.5 6.5 0 0 1 2.7-2.3 5.9 5.9 0 0 1 3.3-.6q-2.3-3.2.4-7.2a7.9 7.9 0 0 1 4.7-3.5 7.4 7.4 0 0 1 8.5 5.6 7.3 7.3 0 0 1-1.3 5.5L156 551a5.1 5.1 0 0 0 1-3.3 3.4 3.4 0 0 0-1.6-2.6 3.6 3.6 0 0 0-3-.6 5.5 5.5 0 0 0-3 2.5q-2.6 4 1.1 6.5l1.6 1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 865"
          d="m211.8 574.1 3 1.3-9.2 20.4h6l-1.2 2.8-9-.2-.5-.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 866"
          d="m182.1 589.6 1.2-2.6.5.3a6.5 6.5 0 0 0 5.5 0q2.5-1.1 4.4-4.8a5.5 5.5 0 0 1-5 .2 5.4 5.4 0 0 1-3.2-4.1 10.6 10.6 0 0 1 1-6.5 10.3 10.3 0 0 1 4.5-5.2 6.1 6.1 0 0 1 5.6 0 6 6 0 0 1 3.5 4.7 13 13 0 0 1-1.3 7.6l-.5 1.2a25.7 25.7 0 0 1-4.7 7.4 9.5 9.5 0 0 1-5.1 3 10.2 10.2 0 0 1-5.9-1zm8.3-9.3a3.5 3.5 0 0 0 2.6.1 5.6 5.6 0 0 0 2.5-1.6l.5-1.2a10.6 10.6 0 0 0 1.1-5.3 3.2 3.2 0 0 0-1.7-3 3.1 3.1 0 0 0-3.2.4 10 10 0 0 0-3.6 8 3 3 0 0 0 1.8 2.6z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 867"
          d="m251.6 587.3 14.2 3.7-.6 2.3-9.7 7.8a21.8 21.8 0 0 0-3.3 3 7.6 7.6 0 0 0-1.4 2.9 5.5 5.5 0 0 0 0 3.5 3 3 0 0 0 2.2 2 3.7 3.7 0 0 0 3.4-.6 6.3 6.3 0 0 0 2-3.6l3.2.8a8.5 8.5 0 0 1-3.5 5.2 6.8 6.8 0 0 1-5.8.8 6.5 6.5 0 0 1-4.3-3.1 7.2 7.2 0 0 1-.4-5.4q1-3.8 6.2-8l7.6-6L251 590z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 868"
          d="m233.4 591.7-2.8-.7.7-2.7 2.8.8 1.6-6 3 .9-1.5 5.9 9.7 2.5-.5 1.9-14.1 15.2-3.3-.8zm9.3 2.4-6.2-1.6-3.1 12.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 869"
          d="m300.8 608.4-2.3 13-11.4-1 .3-3 8.7.7 1.2-7.1a6 6 0 0 1-3.6.8 5.7 5.7 0 0 1-4.6-2.8 10.6 10.6 0 0 1-1.2-6.5 9.8 9.8 0 0 1 2.5-6.3 7 7 0 0 1 10 .5 8.4 8.4 0 0 1 1.7 5.5l-3-.3a6.2 6.2 0 0 0-1-3.5 3.4 3.4 0 0 0-2.5-1.3 3.3 3.3 0 0 0-3 1.3 8 8 0 0 0-1.5 4.3 7.2 7.2 0 0 0 .8 4.3 3.5 3.5 0 0 0 2.9 1.9 3.7 3.7 0 0 0 2.6-.6l.9-.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 870"
          d="m350.2 594 3.2-.2 2 22.2 5.2-3 .3 3.1-8 4.3h-.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 871"
          d="M327.7 607.3q-.5-5.8 1-8.9a6.4 6.4 0 0 1 10.5-1q2 2.6 2.5 8.2l.4 4.5q.5 5.7-1 8.7a6.5 6.5 0 0 1-10.5 1q-2-2.5-2.5-8zm3.6 4.3a15.3 15.3 0 0 0 1.4 6 3.2 3.2 0 0 0 5.8-.4 14.7 14.7 0 0 0 .5-6l-.5-5.4a15.7 15.7 0 0 0-1.4-6.1 3.1 3.1 0 0 0-3.1-1.9 3 3 0 0 0-2.7 2.2 15.4 15.4 0 0 0-.5 6.1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 872"
          d="m391.4 586.6 14.3-3.8.6 2.4-4.8 11.5a22.1 22.1 0 0 0-1.3 4.2 7.5 7.5 0 0 0 .1 3.2 5.5 5.5 0 0 0 1.8 3 3 3 0 0 0 2.8.7 3.7 3.7 0 0 0 2.7-2.1 6.3 6.3 0 0 0 0-4.2l3.1-.8a8.5 8.5 0 0 1-.4 6.2 6.9 6.9 0 0 1-4.7 3.6 6.5 6.5 0 0 1-5.3-.7 7.2 7.2 0 0 1-3-4.5q-1-3.8 1.6-10l3.8-8.8-10.6 2.7z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 873"
          d="m387 603-2 .5a3.8 3.8 0 0 0-2.6 2 4.8 4.8 0 0 0-.2 3.4q1.2 4.5 4.6 3.6a3.2 3.2 0 0 0 2.3-1.9 5.1 5.1 0 0 0 .1-3.4l3.1-.8a7.3 7.3 0 0 1-.5 5.5 7.1 7.1 0 0 1-9.5 2.6 7.7 7.7 0 0 1-3.2-4.8 6.5 6.5 0 0 1 0-3.6 5.9 5.9 0 0 1 1.9-2.8q-4-.4-5.2-5a7.9 7.9 0 0 1 .5-6 7.4 7.4 0 0 1 9.8-2.7 7.3 7.3 0 0 1 3.2 4.7l-3 .8a5.1 5.1 0 0 0-1.9-3 3.4 3.4 0 0 0-3-.5 3.6 3.6 0 0 0-2.5 2 5.5 5.5 0 0 0 0 3.7q1.2 4.7 5.5 3.5l2-.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 874"
          d="M436 591.7a7 7 0 0 1-.6-3.5 6.4 6.4 0 0 1 1.2-3.2 6.6 6.6 0 0 1-3.6-1.3 7.4 7.4 0 0 1-2.5-3 7.6 7.6 0 0 1-.5-5.8 7.4 7.4 0 0 1 9.3-4.2 8.4 8.4 0 0 1 4.7 8.1 6.4 6.4 0 0 1-1.3 3.5 6.3 6.3 0 0 1 3 1.2 7.1 7.1 0 0 1 2.3 2.8 7.5 7.5 0 0 1 .5 5.6 6.8 6.8 0 0 1-8.6 3.9 7.5 7.5 0 0 1-3.8-4zm-2.5-12.3a5.7 5.7 0 0 0 2.4 2.9 3.4 3.4 0 0 0 3.1 0 3.3 3.3 0 0 0 2-2.3 6 6 0 0 0-.5-3.8 5.6 5.6 0 0 0-2.4-2.8 3.4 3.4 0 0 0-3.1 0 3.4 3.4 0 0 0-2 2.4 5.6 5.6 0 0 0 .5 3.6zm5.4 11a5.3 5.3 0 0 0 2.3 2.6 3 3 0 0 0 4.4-2 5.4 5.4 0 0 0-.6-3.4 5.3 5.3 0 0 0-2.1-2.6 2.9 2.9 0 0 0-2.8-.1 2.9 2.9 0 0 0-1.7 2.1 5.4 5.4 0 0 0 .5 3.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 875"
          d="m493.6 553.6-1.7 1.1a3.8 3.8 0 0 0-1.8 2.7 4.8 4.8 0 0 0 1 3.4q2.6 3.8 5.5 1.8a3.2 3.2 0 0 0 1.6-2.6 5 5 0 0 0-1-3.2l2.6-1.8a7.3 7.3 0 0 1 1.3 5.4 7.1 7.1 0 0 1-8.1 5.6 7.7 7.7 0 0 1-4.6-3.5 6.5 6.5 0 0 1-1.1-3.4 5.9 5.9 0 0 1 .7-3.3q-3.8 1-6.5-3a7.8 7.8 0 0 1-1.5-5.8 7.4 7.4 0 0 1 8.3-5.8 7.3 7.3 0 0 1 4.6 3.4l-2.6 1.8a5.1 5.1 0 0 0-2.7-2.2 3.4 3.4 0 0 0-3 .5 3.6 3.6 0 0 0-1.7 2.6 5.5 5.5 0 0 0 1.2 3.6q2.7 4 6.4 1.5l1.6-1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 876"
          d="M467.6 566.9q-3.3-4.9-3.5-8.2a6.4 6.4 0 0 1 8.8-6q3 1.3 6.1 5.8l2.5 3.8q3.3 4.8 3.4 8a6.5 6.5 0 0 1-8.7 6.1q-2.9-1.2-6-5.7zm5.2 2a15.5 15.5 0 0 0 4.2 4.6 3 3 0 0 0 3.6 0 3 3 0 0 0 1.3-3.3 14.6 14.6 0 0 0-2.5-5.4l-3-4.5a15.7 15.7 0 0 0-4.3-4.6 3.1 3.1 0 0 0-3.6-.1 3 3 0 0 0-1.3 3.2 15.4 15.4 0 0 0 2.6 5.6z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 877"
          d="m516.7 513.8 2.3-2.2 15.4 16.1 2.3-5.6 2.1 2.2-3.5 8.3-.3.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 878"
          d="m503 527 2.2-2.2 15.5 16 2.3-5.5 2 2.1-3.4 8.4-.4.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 879"
          d="m562 482.1-1.3 1.6a3.8 3.8 0 0 0-.8 3.2 4.9 4.9 0 0 0 2 2.8q3.8 2.8 5.9 0a3.2 3.2 0 0 0 .6-3 5.1 5.1 0 0 0-2-2.7l1.8-2.6a7.3 7.3 0 0 1 3 4.7 7.1 7.1 0 0 1-5.7 8 7.8 7.8 0 0 1-5.5-1.8 6.5 6.5 0 0 1-2.2-2.8 5.9 5.9 0 0 1-.4-3.4q-3.3 2.2-7.2-.7a7.9 7.9 0 0 1-3.3-4.9 7.4 7.4 0 0 1 6-8.3 7.3 7.3 0 0 1 5.4 1.7l-2 2.5a5.1 5.1 0 0 0-3.2-1.1 3.4 3.4 0 0 0-2.7 1.5 3.6 3.6 0 0 0-.7 3 5.5 5.5 0 0 0 2.4 3q3.8 2.9 6.5-.8l1.2-1.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 880"
          d="m555.7 510-2.3-1.7.4-.5a6.5 6.5 0 0 0 1.2-5.3q-.6-2.7-3.8-5.4a5.5 5.5 0 0 1-1 5 5.4 5.4 0 0 1-4.6 2.2 10.6 10.6 0 0 1-6-2.3 10.3 10.3 0 0 1-4.2-5.5 6.1 6.1 0 0 1 1-5.5 6 6 0 0 1 5.4-2.4 13 13 0 0 1 7.3 2.9l1 .8a25.7 25.7 0 0 1 6.2 6 9.5 9.5 0 0 1 1.8 5.7 10.1 10.1 0 0 1-2 5.5zm-7.3-10a3.5 3.5 0 0 0 .6-2.6 5.6 5.6 0 0 0-1-2.8l-1.2-.8a10.6 10.6 0 0 0-4.8-2.2 3.3 3.3 0 0 0-3.3 1 3.1 3.1 0 0 0-.3 3.3 10 10 0 0 0 7 5.2 3 3 0 0 0 3-1.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 881"
          d="m570.4 437 1.5-3 19.9 10.1.3-6 2.7 1.3-.5 9-.3.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 882"
          d="m577.5 455.8-1 1.8a3.8 3.8 0 0 0-.2 3.2 4.8 4.8 0 0 0 2.5 2.5q4.1 2 5.7-1.1a3.2 3.2 0 0 0 .1-3 5.2 5.2 0 0 0-2.5-2.3l1.5-2.9a7.3 7.3 0 0 1 3.8 4 7.1 7.1 0 0 1-4.4 9 7.8 7.8 0 0 1-5.7-.9 6.6 6.6 0 0 1-2.6-2.4 6 6 0 0 1-1-3.2q-3 2.7-7.2.5a7.9 7.9 0 0 1-4.1-4.3 7.4 7.4 0 0 1 4.5-9.1 7.3 7.3 0 0 1 5.6.7l-1.4 2.8a5.2 5.2 0 0 0-3.5-.6 3.4 3.4 0 0 0-2.3 2 3.6 3.6 0 0 0-.2 3 5.5 5.5 0 0 0 2.8 2.6q4.3 2.2 6.3-1.9l.9-1.7z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 883"
          d="m585.3 397.8 4.3-14 2.3.6 7.3 10.1a22.2 22.2 0 0 0 3 3.4 7.5 7.5 0 0 0 2.7 1.5 5.5 5.5 0 0 0 3.5 0 3 3 0 0 0 2-2 3.7 3.7 0 0 0-.4-3.4 6.3 6.3 0 0 0-3.5-2.2l1-3a8.5 8.5 0 0 1 5 3.6 6.8 6.8 0 0 1 .6 5.8 6.5 6.5 0 0 1-3.3 4.2 7.2 7.2 0 0 1-5.5.2q-3.7-1.1-7.6-6.6l-5.6-7.8-3.2 10.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 884"
          d="M603.1 423 582.4 407l1-3.2 19.9 15.6 3.4-11.2 2.7.8-4.5 14.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 885"
          d="m620.2 361-2.8-.4v-.5a6.5 6.5 0 0 0-1.4-5.3q-1.9-2-6-2.8a5.5 5.5 0 0 1 1.6 4.7 5.4 5.4 0 0 1-3 4.3 10.6 10.6 0 0 1-6.4.9 10.3 10.3 0 0 1-6.3-2.7 6.1 6.1 0 0 1-1.7-5.4 6 6 0 0 1 3.5-4.7 13.1 13.1 0 0 1 7.7-1l1.3.2a26 26 0 0 1 8.4 2.2 9.5 9.5 0 0 1 4.3 4 10.2 10.2 0 0 1 .9 6zm-11.3-5.2a3.5 3.5 0 0 0-.7-2.5 5.6 5.6 0 0 0-2.3-1.9l-1.3-.2a10.7 10.7 0 0 0-5.3.5 3.2 3.2 0 0 0-2.4 2.5 3.1 3.1 0 0 0 1.3 3 10 10 0 0 0 8.7 1 3 3 0 0 0 2-2.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 886"
          d="M610.8 293.4v2a3.8 3.8 0 0 0 1.4 3 4.8 4.8 0 0 0 3.4 1q4.6-.2 4.4-3.8a3.2 3.2 0 0 0-1.3-2.6 5.1 5.1 0 0 0-3.3-.9l-.2-3.1a7.3 7.3 0 0 1 5.3 1.7 7.1 7.1 0 0 1 .6 9.8 7.8 7.8 0 0 1-5.5 2 6.6 6.6 0 0 1-3.4-.7 5.8 5.8 0 0 1-2.4-2.4q-1.3 3.8-6 4a7.9 7.9 0 0 1-5.8-1.7 7.4 7.4 0 0 1-.5-10.2 7.3 7.3 0 0 1 5.3-2.1v3.2a5.1 5.1 0 0 0-3.2 1.1 3.4 3.4 0 0 0-1.1 2.8 3.6 3.6 0 0 0 1.3 2.8 5.4 5.4 0 0 0 3.7 1q4.8-.3 4.6-4.8v-2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 887"
          d="m606 320.7.1 3h-2.7l-.1-2.8-6.2.2V318l6-.2-.4-10h2l18.6 9 .2 3.3zm-.4-9.6.3 6.4 12.5-.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 888"
          d="m590 253-.7-3.2 21.8-4.7-3.6-5 3-.6 5.3 7.3v.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 889"
          d="m619 271.3-25.9-3.7-.7-3.3 25 3.9-2.5-11.5 2.7-.6 3.2 14.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 890"
          d="m577 213.1-5.5-13.6 2.2-1 12 3.3a21.8 21.8 0 0 0 4.4.8 7.5 7.5 0 0 0 3.2-.6 5.5 5.5 0 0 0 2.8-2.1 3 3 0 0 0 .2-2.9 3.7 3.7 0 0 0-2.4-2.4 6.3 6.3 0 0 0-4.2.5l-1.1-3a8.6 8.6 0 0 1 6.2-.3 6.9 6.9 0 0 1 4 4.2 6.5 6.5 0 0 1 .1 5.3 7.2 7.2 0 0 1-4 3.6q-3.7 1.5-10.2-.3l-9.3-2.6 4.1 10.1z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 891"
          d="m591.3 213.4 12.6-3.8 4.3 10.6-2.9 1.1-3.2-8-7 2a6 6 0 0 1 2.4 2.9 5.6 5.6 0 0 1-.4 5.3 10.7 10.7 0 0 1-5.3 4 9.9 9.9 0 0 1-6.7.7 7 7 0 0 1-4-9.2 8.4 8.4 0 0 1 4-4l1.2 2.8a6.2 6.2 0 0 0-2.7 2.5 3.4 3.4 0 0 0 0 2.9 3.3 3.3 0 0 0 2.5 2 8 8 0 0 0 4.5-.6 7.3 7.3 0 0 0 3.5-2.6 3.5 3.5 0 0 0 .4-3.5 3.8 3.8 0 0 0-1.8-2l-1-.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 892"
          d="m560.4 179.4-7.7-12.6 2-1.2 12.5 1.2a21.5 21.5 0 0 0 4.4 0 7.5 7.5 0 0 0 3-1 5.6 5.6 0 0 0 2.4-2.7 3 3 0 0 0-.2-2.9 3.7 3.7 0 0 0-2.8-1.9 6.3 6.3 0 0 0-4 1.2l-1.7-2.8a8.5 8.5 0 0 1 6-1.3 6.8 6.8 0 0 1 4.8 3.4 6.5 6.5 0 0 1 1 5.2 7.2 7.2 0 0 1-3.4 4.2q-3.4 2.1-10 1.4l-9.7-1 5.8 9.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 893"
          d="m527.2 133.7-9.8-11 1.9-1.7 12.4-1a21.9 21.9 0 0 0 4.4-.6 7.6 7.6 0 0 0 2.8-1.6 5.5 5.5 0 0 0 1.9-3 3 3 0 0 0-.8-2.8 3.7 3.7 0 0 0-3-1.4 6.3 6.3 0 0 0-3.8 1.8l-2-2.4a8.5 8.5 0 0 1 5.6-2.4 6.9 6.9 0 0 1 5.3 2.6 6.5 6.5 0 0 1 1.8 5 7.2 7.2 0 0 1-2.6 4.7q-3 2.6-9.7 3.1l-9.6.7 7.2 8.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 894"
          d="m536.3 144-2.1-2.4 16.7-14.7-5.5-2.5 2.3-2 8.2 3.8.3.4z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 895"
          d="m503.9 98.8 2.3 1.9-1.7 2.1-2.3-1.8-3.9 4.7-2.5-2 3.9-4.8-7.8-6.2 1.3-1.5 19-8 2.7 2zm-7.5-6 5 4 7.9-9.7z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 896"
          d="m449.2 72.8-2.8-1.6 10.9-19.4-6-.6 1.4-2.6 9 .8.4.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 897"
          d="M472.2 72.7a5.6 5.6 0 0 1-5.1 0 5.3 5.3 0 0 1-2.8-4.4 12.7 12.7 0 0 1 6.4-11.2 6 6 0 0 1 5.7.3 5.9 5.9 0 0 1 3.1 5q.2 3.5-2.3 8l-.4.8a31 31 0 0 1-4 5.9 11.6 11.6 0 0 1-4 2.8 8.2 8.2 0 0 1-4 .6A12.6 12.6 0 0 1 460 79l1.4-2.5.5.3a6.7 6.7 0 0 0 5.5.7q2.5-1 4.8-4.7zm-3.3-2.2a3.4 3.4 0 0 0 2.5.3 6.4 6.4 0 0 0 2.7-1.4l.7-1.2a11 11 0 0 0 1.6-5.2c0-1.6-.4-2.7-1.4-3.2a3.1 3.1 0 0 0-3.2.2 8.6 8.6 0 0 0-3 3.3 9 9 0 0 0-1.4 4.4 3 3 0 0 0 1.5 2.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 898"
          d="m405.8 54.6-3-1.1 7.4-21-6 .5 1-3 9-.6.5.2z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 899"
          d="m420.4 45.7 5.5-12 10.8 3.8-1 3-8.3-3-3 6.6a6 6 0 0 1 3.7 0 5.7 5.7 0 0 1 3.8 4 10.6 10.6 0 0 1-.5 6.6 9.8 9.8 0 0 1-4 5.4 7 7 0 0 1-9.6-3 8.4 8.4 0 0 1-.2-5.7l2.8 1a6.2 6.2 0 0 0 .1 3.6 3.4 3.4 0 0 0 2.1 2 3.3 3.3 0 0 0 3.3-.6 8 8 0 0 0 2.5-3.7 7.2 7.2 0 0 0 .3-4.4 3.5 3.5 0 0 0-2.3-2.5 3.7 3.7 0 0 0-2.7-.1l-1.1.5z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 900"
          d="m357.1 28.4 2 .4a3.8 3.8 0 0 0 3.2-.7A4.8 4.8 0 0 0 364 25q.7-4.6-2.8-5.2a3.2 3.2 0 0 0-2.9.8 5.1 5.1 0 0 0-1.5 3l-3.1-.5a7.3 7.3 0 0 1 2.8-4.8 7.1 7.1 0 0 1 9.7 1.6 7.8 7.8 0 0 1 .9 5.7 6.5 6.5 0 0 1-1.5 3.2 6 6 0 0 1-2.9 1.9q3.5 2 2.7 6.7a7.9 7.9 0 0 1-3 5.2 7.4 7.4 0 0 1-10-1.6 7.3 7.3 0 0 1-1-5.6l3.2.5a5.1 5.1 0 0 0 .4 3.5 3.4 3.4 0 0 0 2.5 1.7 3.6 3.6 0 0 0 3-.7 5.5 5.5 0 0 0 1.7-3.5q.8-4.7-3.6-5.5l-2-.3z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 901"
          d="m383.9 48-14.5-2.5.4-2.4 9-8.5a21.8 21.8 0 0 0 3-3.3 7.5 7.5 0 0 0 1.2-3 5.5 5.5 0 0 0-.4-3.5 3 3 0 0 0-2.3-1.7 3.7 3.7 0 0 0-3.3.8 6.3 6.3 0 0 0-1.8 3.8l-3.1-.6a8.5 8.5 0 0 1 3-5.4 6.9 6.9 0 0 1 5.6-1.3 6.5 6.5 0 0 1 4.6 2.7 7.2 7.2 0 0 1 1 5.4q-.7 3.8-5.6 8.4l-7.1 6.6 10.7 1.8z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 902"
          d="M327 30q0 5.8-1.6 8.6a6.4 6.4 0 0 1-10.6.2q-1.8-2.8-1.9-8.4V26q0-5.8 1.8-8.6a6.5 6.5 0 0 1 10.6-.1q1.7 2.7 1.8 8.1zm-3.1-4.6a15.4 15.4 0 0 0-1-6.2 3 3 0 0 0-3-2 3 3 0 0 0-2.8 2 14.7 14.7 0 0 0-1 5.8v5.5a15.6 15.6 0 0 0 1 6.2 3.1 3.1 0 0 0 3 2.1 3 3 0 0 0 2.8-2 15.3 15.3 0 0 0 1-6z"
          fill="#e5e5e5"
        />
        <path
          data-name="Path 903"
          d="M318.4 636.7C142.8 636.7 0 494 0 318.4S142.8 0 318.4 0s318.4 142.8 318.4 318.4-142.9 318.3-318.4 318.3zm0-633.3c-173.7 0-315 141.3-315 315s141.3 315 315 315 315-141.3 315-315-141.3-315-315-315z"
        />
        <path
          data-name="Path 904"
          d="M318.4 579.8c-144.2 0-261.5-117.3-261.5-261.4S174.2 56.9 318.4 56.9s261.4 117.3 261.4 261.5-117.2 261.4-261.4 261.4zm0-519.5C176 60.3 60.3 176 60.3 318.3s115.8 258.2 258 258.2 258.2-115.8 258.2-258.1S460.7 60.3 318.4 60.3z"
        />
      </svg>
      <StatRoulletConteiner>
        <svg
          viewBox="0 0 239 239"
          transform="rotate(0)"
          transform-box="fill-box"
        >
          {Object.keys(numberRoulleteColors).map((item) => {
            const col = Object.values(wheelStatistic);
            let valueNum = Object.values(wheelStatistic).sort((a, b) => {
              return b - a;
            });
            let maxNum = Math.max(...valueNum);

            return (
              <ReactG
                stat={item}
                type={Object.values(numberRoulleteColors[item])[1]}
                key={Object.values(numberRoulleteColors[item])[1]}
              >
                <ReactPath
                  maxNum={maxNum}
                  percent={col[Object.values(numberRoulleteColors[item])[1]]}
                  color={Object.values(numberRoulleteColors[item])[0]}
                  d="M127.765 22.345 119.5 119.5l-8.275-97.155q4.1-.349 8.275-.353t8.265.353z"
                />
              </ReactG>
            );
          })}
        </svg>
      </StatRoulletConteiner>
    </RoulletContainer>
  );
};

export default Roullete;
