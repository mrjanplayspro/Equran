import { IoClose } from "react-icons/io5"
import "./ChangeLanguageModal.scss"

const ChangeLanguageModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
   <div className="language-modal-backdrop">
      <div className="language-modal">
        <div className="language-modal__header">
          <h2>Change Language</h2>
          <button className="close-btn" onClick={onClose}>
            <IoClose size={20} />
          </button>
        </div>

        <div className="language-modal__body">
          <label htmlFor="language">
            Language:<span className="required">*</span>
          </label>
          <select id="language" defaultValue="English">
            <option>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
            {/* Add more languages if needed */}
          </select>
        </div>

        <div className="language-modal__footer">
          <button className="save-btn">Save</button>
        </div>
      </div>
    </div>
);
export default ChangeLanguageModal;
