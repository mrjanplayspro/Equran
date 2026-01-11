import React, { useState } from "react";
import "./PermissionModal.scss";
import { X } from "lucide-react";

interface FormModalProps {
  onClose: () => void;
}

const PermissionModal: React.FC<FormModalProps> = ({ onClose }) => {
  const initialState = [
    [
      [false, true, true],  // Block 1: Action, Edit, Delete rows
      [true, true, true],
      [true, true, true],
    ],
    [
      [true, true, true],   // Block 2
      [false, true, true],
      [true, true, true],
    ],
    [
      [true, true, true],   // Block 3
      [true, true, true],
      [true, true, true],
    ],
  ];

  const [blocks, setBlocks] = useState<boolean[][][]>(initialState);

  const toggleCheckbox = (blockIdx: number, rowIdx: number, colIdx: number) => {
    const updated = blocks.map((block, b) =>
      block.map((row, r) =>
        row.map((val, c) =>
          b === blockIdx && r === rowIdx && c === colIdx ? !val : val
        )
      )
    );
    setBlocks(updated);
  };

  return (
    <div className="modal-overlay">
      <div className="permission-modal">
        <button className="close-button" onClick={onClose}>
          <X size={18} />
        </button>
        <h3 className="title">Role Name</h3>

        {blocks.map((block, blockIdx) => (
          <div className="role-block" key={blockIdx}>
            {["Action", "Edit", "Delete"].map((label, rowIdx) => (
              <div className="row" key={rowIdx}>
                <div className="label">{label}</div>
                <div className="boxes">
                  {block[rowIdx].map((checked, colIdx) => (
                    <div
                      key={colIdx}
                      className={`box ${checked ? "checked" : "unchecked"}`}
                      onClick={() => toggleCheckbox(blockIdx, rowIdx, colIdx)}
                    >
                      {checked && <span className="tick">✓</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionModal;
