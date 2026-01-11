import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Footer.scss"





function Footer() {
    
   const [selected, setSelected] = useState('English');
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    const toggleDropdown = () => setOpen(!open);
  
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = ['English', 'French', 'Spanish', 'German', 'Arabic'];
  return (
    <div>
         <footer> 
      <div className="language-selector" ref={ref}>
      <div className="label">
        <span>{selected}</span>
        <span className="arrow">▾</span>
      </div>

      <div className="region-trigger" onClick={toggleDropdown}>
        <Globe size={16} />
        <span>Select Region</span>
      </div>

      {open && (
        <ul className="dropdown">
          {languages.map((lang) => (
            <li key={lang} onClick={() => {
              setSelected(lang);
              setOpen(false);
            }}>
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
    </footer>
    </div>
  )
}

export default Footer
