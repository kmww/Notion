import { getItem } from "./storage.js";

export const totalDocumentList = (documents) => {
  if (Array.isArray(documents)) {
    return `
    <ul>
      ${documents
        .map((document) => {
          const listToggleState = `isOpened-${document.id}`;
          const display = getItem(listToggleState) || "none";
          return `
            <li data-id="${document.id}" name="list">
            <span class="list-title"><button class="toggle-button" isClosed="true">></button>${
              document.title
            }</span>
            <span class="list-button"><button name="add-button" data-id="${
              document.id
            }">+</button>
            <button name="remove-button" data-id=${document.id}>-</button></span>
              ${
                document.documents.length
                  ? `<ul style="display: ${display}">${totalDocumentList(
                      document.documents
                    )}</ul>`
                  : `<ul style="display: ${display}"><li>하위 페이지가 없습니다.</li></ul>`
              }
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
  }
};