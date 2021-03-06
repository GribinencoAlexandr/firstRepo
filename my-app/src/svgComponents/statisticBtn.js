import React from "react";
import styled from "styled-components";

const StatSVG = styled.svg`
  width: 100%;
  padding: 20%;
`;

const StatisticBtn = () => {
  return (
    <StatSVG viewBox="0 0 24 24">
      <path
        d="M0 12a12 12 0 1 1 12 12A12 12 0 0 1 0 12zm12 10.154a10.154 10.154 0 0 0 9.355-14.1L12 12l8.687 1.2-.563 2.1L12 12l8.324 4.927-1.469 1.9L12 12l3.252 4.3-1.157.669L12 12l2.177 8.5-2.158.274L12 12l1.2-8.687 2.1.563L12 12l4.467-7.546 1.72 1.331L12 12l8.093-6.126A10.152 10.152 0 0 0 2.645 15.947L12 12l-6.01 1.541-.194-1.527L12 12l-8.687-1.2.563-2.1L12 12 8.748 7.7l1.157-.668L12 12l-1.2 8.687-2.1-.563L12 12l-4.468 7.547-1.72-1.332L12 12l-8.093 6.126A10.145 10.145 0 0 0 12 22.153zM12 12zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zM9.823 3.506l2.158-.274L12 12zM3.676 7.073l1.469-1.9L12 12zm14.334 3.388.194 1.526L12 12z"
        fill="#fff"
      />
    </StatSVG>
  );
};

export default StatisticBtn;
