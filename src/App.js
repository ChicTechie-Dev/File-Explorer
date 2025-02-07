import { useState } from "react";
import "./App.css";
import explorer from "./JsonData/Data";
import Folder from "./Component/FileExplorer";
import useTraverseTree from "./Hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();
  const [searchFile, setSearchFile] = useState("");
  const handleInsertNode = (folderId, itemName, isFolder) => {
    const finalItem = insertNode(explorerData, folderId, itemName, isFolder);
    return finalItem;
  };
  const handleDeleteNode = (folderId) => {
    // Call deleteNode to get the modified tree
    const finalItem = deleteNode(explorerData, folderId);
    // Update the explorerData state with the modified tree
    setExplorerData(finalItem);
  };

  const handleUpdateFolder = (id, updatedValue, isFolder) => {
    const finalItem = updateNode(explorerData, id, updatedValue, isFolder);
    // Update the explorerData state with the modified tree
    setExplorerData(finalItem);
  };

  return (
    <div className="App">
      <div className="searchFile">
        <input
        className="searchInput"
          type="text"
          value={searchFile}
          onChange={(e) => setSearchFile(e.target.value)}
          placeholder="Search File Here"
        />
      </div>
      <div className="folderContainerBody">
        <div className="folder-container">
          <Folder
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleUpdateFolder={handleUpdateFolder}
            explorerData={explorerData}
          />
        </div>
        <div className="empty-state">Your content will be here</div>
      </div>
    </div>
  );
}

export default App;
