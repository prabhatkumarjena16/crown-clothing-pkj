import React from "react";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";

function DirectoryItem({ category: { imageUrl, title } }) {
  return (
    <DirectoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
